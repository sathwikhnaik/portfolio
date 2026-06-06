/* ============================================================
   SATHWIK.EXE — engine
   Screen state machine, keyboard nav, Web-Audio SFX,
   particle field, starfield, and data-driven panel rendering.
   ============================================================ */

(() => {
  "use strict";

  /* ---------- tiny helpers ---------- */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ============================================================
     SOUND — synthesized via Web Audio (no asset files needed)
     ============================================================ */
  const Sound = {
    ctx: null,
    on: true,
    init() {
      if (this.ctx) return;
      try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (e) { this.on = false; }
    },
    beep(freq = 440, dur = 0.07, type = "square", vol = 0.05) {
      if (!this.on || !this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(g).connect(this.ctx.destination);
      osc.start(t); osc.stop(t + dur + 0.02);
    },
    move()   { this.beep(420, 0.05, "square", 0.04); },
    select() { this.beep(660, 0.08, "square", 0.05); setTimeout(() => this.beep(880, 0.10, "square", 0.05), 60); },
    back()   { this.beep(300, 0.10, "sawtooth", 0.04); },
    start()  { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => this.beep(f, 0.12, "square", 0.05), i * 90)); },
    hover()  { this.beep(520, 0.03, "sine", 0.025); },
  };

  /* ============================================================
     STARFIELD + PARTICLES
     ============================================================ */
  function buildStars() {
    const wrap = $("#stars");
    if (!wrap) return;
    const n = window.innerWidth < 600 ? 60 : 120;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      const s = el("span", "star");
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 70 + "%";
      s.style.setProperty("--tw", (2 + Math.random() * 4).toFixed(2) + "s");
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      const sz = Math.random() < 0.2 ? 3 : Math.random() < 0.5 ? 2 : 1;
      s.style.width = s.style.height = sz + "px";
      frag.appendChild(s);
    }
    wrap.appendChild(frag);
  }

  function particleField() {
    const cv = $("#particles");
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let w, h, parts = [];
    const COLORS = ["#ff37c4", "#25f5ef", "#c026d3", "#ff8be0"];
    function resize() {
      w = cv.width = window.innerWidth;
      h = cv.height = window.innerHeight;
      const count = w < 600 ? 26 : 50;
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1 + Math.random() * 2.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.5,
        a: 0.2 + Math.random() * 0.5,
        c: COLORS[(Math.random() * COLORS.length) | 0],
      }));
    }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.shadowBlur = 10; ctx.shadowColor = p.c;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      requestAnimationFrame(tick);
    }
    resize();
    window.addEventListener("resize", resize);
    tick();
  }

  /* ============================================================
     SCREEN STATE MACHINE
     ============================================================ */
  const screens = {
    title: $("#screen-title"),
    menu:  $("#screen-menu"),
    panel: $("#screen-panel"),
  };
  let current = "title";
  let suppressHash = false;

  function show(name) {
    if (name === current) return;
    const from = screens[current];
    const to = screens[name];
    if (from) {
      from.classList.add("is-leaving");
      from.classList.remove("is-active");
      setTimeout(() => from.classList.remove("is-leaving"), 460);
    }
    to.classList.add("is-active");
    current = name;
  }

  /* ---- hash routing: shareable deep links (#menu, #profile, ...) ---- */
  function setHash(h) { suppressHash = true; location.hash = h; setTimeout(() => (suppressHash = false), 50); }

  function applyHash() {
    if (suppressHash) return;
    const h = (location.hash || "").replace(/^#\/?/, "").toLowerCase();
    if (!h || h === "title") { show("title"); return; }
    if (h === "menu") { show("menu"); selectMenu(0, false); return; }
    const idx = MENU.findIndex((m) => m.key === h);
    if (idx >= 0) { selIndex = idx; renderPanel(MENU[idx].key); show("panel"); }
  }

  /* ============================================================
     MENU
     ============================================================ */
  const menuList = $("#menuList");
  let selIndex = 0;

  function buildMenu() {
    MENU.forEach((m, i) => {
      const b = el("button", "menu-item");
      b.style.setProperty("--i", i);
      b.dataset.key = m.key;
      b.dataset.index = i;
      b.innerHTML = `
        <span class="mi-index">0${i + 1}</span>
        <span class="mi-text">${esc(m.label)}<br><span class="mi-sub">${esc(m.sub)}</span></span>
        <span class="mi-arrow">►</span>`;
      b.addEventListener("mouseenter", () => { selectMenu(i, false); Sound.hover(); });
      b.addEventListener("click", () => { selectMenu(i, false); openMode(m.key); });
      menuList.appendChild(b);
    });
  }

  function selectMenu(i, sound = true) {
    const items = $$(".menu-item", menuList);
    if (!items.length) return;
    selIndex = (i + items.length) % items.length;
    items.forEach((it, idx) => it.classList.toggle("is-selected", idx === selIndex));
    items[selIndex].scrollIntoView({ block: "nearest" });
    if (sound) Sound.move();
  }

  function openMode(key) {
    Sound.select();
    renderPanel(key);
    show("panel");
    setHash(key);
  }

  /* ============================================================
     PANEL RENDERING (one renderer per mode)
     ============================================================ */
  const panelTag = $("#panelTag");
  const panelTitle = $("#panelTitle");
  const panelBody = $("#panelBody");

  const renderers = {
    profile() {
      panelTag.textContent = "MODE // PROFILE";
      panelTitle.textContent = "PLAYER 01";
      const wrap = el("div");
      wrap.appendChild(el("p", "lede", ABOUT.lede));
      const row = el("div", "stat-row");
      ABOUT.stats.forEach((s, i) => {
        const st = el("div", "stat", `<div class="stat-num">${esc(s.num)}</div><div class="stat-lab">${esc(s.lab)}</div>`);
        st.style.animationDelay = i * 80 + "ms";
        row.appendChild(st);
      });
      wrap.appendChild(row);
      wrap.appendChild(el("div", "section-label", "TOOLBELT"));
      const chips = el("div", "chips");
      TOOLBELT.forEach((t) => chips.appendChild(el("span", "chip", esc(t))));
      wrap.appendChild(chips);
      return wrap;
    },

    skills() {
      panelTag.textContent = "MODE // SKILL TREE";
      panelTitle.textContent = "STATS & ABILITIES";
      const grid = el("div", "skill-cats");
      SKILLS.forEach((cat, ci) => {
        const c = el("div", "skill-cat");
        c.style.animationDelay = ci * 80 + "ms";
        c.appendChild(el("h4", null, esc(cat.cat)));
        cat.items.forEach((s, si) => {
          const sk = el("div", "skill");
          sk.innerHTML = `
            <div class="skill-top"><span>${esc(s.name)}</span><span class="skill-lv">LV ${Math.round(s.lv / 10)}</span></div>
            <div class="skill-bar"><span class="skill-fill" style="--w:${s.lv}%;animation-delay:${(ci * 4 + si) * 60}ms"></span></div>`;
          c.appendChild(sk);
        });
        grid.appendChild(c);
      });
      return grid;
    },

    experience() {
      panelTag.textContent = "MODE // QUEST LOG";
      panelTitle.textContent = "WORK EXPERIENCE";
      const wrap = el("div");
      EXPERIENCE.forEach((q) => {
        const node = el("div", "quest");
        const lis = q.bullets.map((b) => `<li>${b}</li>`).join("");
        node.innerHTML = `
          <div class="quest-head">
            <span class="quest-role">${esc(q.role)}</span>
            <span class="quest-org">@ ${esc(q.org)}</span>
            <span class="quest-date">${esc(q.date)}</span>
          </div>
          <ul>${lis}</ul>`;
        wrap.appendChild(node);
      });
      return wrap;
    },

    projects() {
      panelTag.textContent = "MODE // LEVELS";
      panelTitle.textContent = "PROJECTS CLEARED";
      const grid = el("div", "levels");
      PROJECTS.forEach((p, i) => {
        const card = el("div", "level");
        card.style.animationDelay = i * 80 + "ms";
        const tags = p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("");
        card.innerHTML = `
          <div class="level-top"><span class="level-no">LV ${String(i + 1).padStart(2, "0")}</span><span class="level-date">${esc(p.date)}</span></div>
          <h4>${esc(p.title)}</h4>
          <p>${p.desc}</p>
          <div class="chips level-tags">${tags}</div>`;
        grid.appendChild(card);
      });
      return grid;
    },

    achievements() {
      panelTag.textContent = "MODE // ACHIEVEMENTS";
      panelTitle.textContent = "EDUCATION & CERTS";
      const wrap = el("div");
      wrap.appendChild(el("div", "section-label", "EDUCATION"));
      const eduGrid = el("div", "ach-grid");
      EDUCATION.forEach((e, i) => {
        const a = el("div", "ach");
        a.style.animationDelay = i * 80 + "ms";
        a.innerHTML = `
          <div class="ach-badge">${e.badge}</div>
          <div class="ach-body"><h4>${esc(e.school)}</h4><div class="ach-meta">${esc(e.meta)}</div><div class="ach-sub">${esc(e.sub)}</div></div>`;
        eduGrid.appendChild(a);
      });
      wrap.appendChild(eduGrid);
      wrap.appendChild(el("div", "section-label", "CERTIFICATIONS"));
      const certGrid = el("div", "ach-grid");
      CERTS.forEach((c, i) => {
        const a = el("div", "ach");
        a.style.animationDelay = i * 80 + "ms";
        a.innerHTML = `
          <div class="ach-badge">${c.badge}</div>
          <div class="ach-body"><h4>${esc(c.name)}</h4><div class="ach-meta">${esc(c.meta)}</div></div>`;
        certGrid.appendChild(a);
      });
      wrap.appendChild(certGrid);
      return wrap;
    },

    contact() {
      panelTag.textContent = "MODE // MULTIPLAYER";
      panelTitle.textContent = "CONNECT WITH PLAYER 01";
      const wrap = el("div");
      wrap.appendChild(el("p", "lede", `Open to <b>data analyst / data scientist</b> roles. Let's team up — pick a channel below.`));
      const grid = el("div", "contacts");
      grid.style.marginTop = "20px";
      const cards = [
        { ico: "✉️", label: "EMAIL",    val: PROFILE.email,    href: "mailto:" + PROFILE.email },
        { ico: "📞", label: "PHONE",    val: PROFILE.phone,    href: "tel:" + PROFILE.phone.replace(/[^0-9+]/g, "") },
        { ico: "💼", label: "LINKEDIN", val: "in/sathwikhnaik", href: PROFILE.linkedin },
        { ico: "🐙", label: "GITHUB",   val: "@sathwikhnaik",  href: PROFILE.github },
      ];
      cards.forEach((c, i) => {
        const a = el("a", "contact-card");
        a.href = c.href;
        if (c.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
        a.style.animationDelay = i * 80 + "ms";
        a.innerHTML = `<span class="contact-ico">${c.ico}</span><span><span class="cc-label">${c.label}</span><br><span class="cc-val">${esc(c.val)}</span></span>`;
        grid.appendChild(a);
      });
      wrap.appendChild(grid);
      const cta = el("div", "cta-row");
      const dl = el("a", "cta", `⬇ DOWNLOAD RESUME`);
      dl.href = PROFILE.resume; dl.setAttribute("download", "");
      const mail = el("a", "cta cta-pink", `★ HIRE PLAYER 01`);
      mail.href = "mailto:" + PROFILE.email;
      cta.appendChild(dl); cta.appendChild(mail);
      wrap.appendChild(cta);
      return wrap;
    },
  };

  function renderPanel(key) {
    panelBody.innerHTML = "";
    const r = renderers[key] || renderers.profile;
    panelBody.appendChild(r());
    panelBody.scrollTop = 0;
    panelBody.focus({ preventScroll: true });
  }

  /* ============================================================
     KEYBOARD CONTROLS
     ============================================================ */
  function onKey(e) {
    if (current === "title") {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); enterMenu(); }
      return;
    }
    if (current === "menu") {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "s") { e.preventDefault(); selectMenu(selIndex + 1); }
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "w") { e.preventDefault(); selectMenu(selIndex - 1); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openMode(MENU[selIndex].key); }
      else if (e.key === "Escape") { goTitle(); }
      else if (/^[1-9]$/.test(e.key)) { const n = +e.key - 1; if (n < MENU.length) { selectMenu(n); openMode(MENU[n].key); } }
      return;
    }
    if (current === "panel") {
      if (e.key === "Escape" || e.key === "Backspace") { e.preventDefault(); backToMenu(); }
    }
  }

  /* ============================================================
     TRANSITIONS
     ============================================================ */
  function enterMenu() {
    Sound.start();
    show("menu");
    selectMenu(0, false);
    setHash("menu");
  }
  function backToMenu() {
    Sound.back();
    show("menu");
    selectMenu(selIndex, false);
    setHash("menu");
  }
  function goTitle() {
    Sound.back();
    show("title");
    setHash("title");
  }

  /* ============================================================
     BOOT SEQUENCE
     ============================================================ */
  function boot() {
    const fill = $("#bootFill");
    const pct = $("#bootPct");
    const overlay = $("#boot");
    let p = 0;
    const tick = () => {
      p += Math.random() * 18 + 6;
      if (p >= 100) p = 100;
      fill.style.width = p + "%";
      pct.textContent = Math.floor(p) + "%";
      if (p < 100) setTimeout(tick, 130 + Math.random() * 120);
      else setTimeout(() => { overlay.classList.add("is-done"); applyHash(); }, 350);
    };
    setTimeout(tick, 250);
  }

  /* ============================================================
     WIRE-UP
     ============================================================ */
  function init() {
    buildStars();
    particleField();
    buildMenu();
    boot();

    // first user gesture unlocks audio
    const unlock = () => { Sound.init(); window.removeEventListener("pointerdown", unlock); window.removeEventListener("keydown", unlock); };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);

    $("#pressStart").addEventListener("click", enterMenu);
    $("#btnBack").addEventListener("click", backToMenu);

    const st = $("#soundToggle");
    st.addEventListener("click", () => {
      Sound.on = !Sound.on;
      st.classList.toggle("is-off", !Sound.on);
      st.querySelector(".sound-state").textContent = "SFX: " + (Sound.on ? "ON" : "OFF");
      if (Sound.on) Sound.select();
    });

    document.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", applyHash);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
