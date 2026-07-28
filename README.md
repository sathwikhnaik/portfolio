# SATHWIK.EXE — Interactive Portfolio 🕹️

A visually stunning, **video-game main-menu style** portfolio for **Sathwik H Naik** (Data Scientist / Data Engineer / AI Engineer), built with a synthwave **pink → purple** aesthetic. Pure HTML / CSS / JavaScript — **no build step, no dependencies** — so it drops straight onto GitHub Pages.

## ✨ Features

- **Press-Start title screen** with glitch logo, animated synthwave sun, neon grid floor, starfield & particle field.
- **Game main menu** with 6 "modes": Profile, Skill Tree, Quest Log (experience), Levels (projects), Achievements (education + certs), Multiplayer (contact).
- **Full keyboard / gamepad-style controls**: `↑ ↓` move, `Enter` select, `Esc` back, `1–9` jump to a mode. Mouse & touch work too.
- **Synthesized retro SFX** via the Web Audio API (no audio files) with an on-screen mute toggle.
- **Animated skill bars, quest log, project cards, achievement badges** — all driven from one data file.
- Fully **responsive** and respects `prefers-reduced-motion`.

## 📝 Make it yours

All content lives in **`data.js`** — edit that one file:

- `PROFILE`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, `EDUCATION`, `CERTS`, `TOOLBELT`, `ABOUT`.

The résumé PDF is `Sathwik_Naik_Data_Scientist_Resume.pdf` (linked from the Multiplayer/contact screen via `PROFILE.resume`).

## 🚀 Host it on GitHub Pages

### Option A — quick (web upload)
1. Create a new repo on GitHub, e.g. **`portfolio`** (or `your-username.github.io` for a root site).
2. Upload everything in this `portfolio` folder (`index.html`, `styles.css`, `script.js`, `data.js`, the PDF, `.nojekyll`).
3. Go to **Settings → Pages → Build and deployment**, set **Source = Deploy from a branch**, **Branch = `main` / `/ (root)`**, then **Save**.
4. Your site goes live at `https://<your-username>.github.io/portfolio/` in ~1 minute.

### Option B — git command line
Run these from **inside this `portfolio` folder**:

```bash
git init
git add .
git commit -m "Interactive game-menu portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

Then enable Pages as in step 3 above.

> The included `.nojekyll` file tells GitHub Pages to serve the files as-is (no Jekyll processing).

## 🔧 Run locally

Because the site loads JS files, open it through a tiny local server (not `file://`):

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## 🎮 Controls

| Action | Keys |
|---|---|
| Start / select | `Enter` · `Space` · click |
| Move selection | `↑ ↓ ← →` · `W` / `S` |
| Jump to mode | `1`–`6` |
| Back | `Esc` · `Backspace` |
| Toggle SFX | top-right button |
