import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code2, ContactRound, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { DataFlowCanvas } from "@/components/data-flow-canvas";
import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { certifications, education, evidence, experience, profile, projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <DataFlowCanvas />
          <div className="hero-orb hero-orb--one" aria-hidden="true" />
          <div className="hero-orb hero-orb--two" aria-hidden="true" />
          <div className="hero-content">
            <Reveal>
              <p className="status-pill"><span aria-hidden="true" /> Available for data roles · 2026</p>
              <p className="hero-kicker">Data platforms · Decision systems · Applied ML</p>
              <h1 id="hero-title">Engineering data.<br /><span>Discovering signal.</span></h1>
              <p className="hero-lede">{profile.summary}</p>
              <div className="hero-actions">
                <Link className="button button--primary" href="#projects">Explore my work <ArrowDown size={17} /></Link>
                <a className="button button--ghost" href={profile.resume} download>Download résumé <Download size={17} /></a>
              </div>
            </Reveal>
          </div>
          <div className="hero-foot" aria-hidden="true"><span>Scroll to inspect</span><span className="hero-foot__line" /></div>
        </section>

        <section className="evidence section-shell" aria-label="Career highlights">
          {evidence.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06} className="glass evidence-card">
              <strong>{item.value}</strong><span>{item.label}</span>
            </Reveal>
          ))}
        </section>

        <section className="content-section section-shell profile-grid" id="profile" aria-labelledby="profile-title">
          <Reveal className="profile-photo glass">
            <Image src="/sathwik-graduation.jpg" alt="Sathwik H Naik at the University of Maryland" fill sizes="(max-width: 760px) 92vw, 38vw" priority={false} />
            <div className="profile-photo__caption"><span><MapPin size={14} /> {profile.location}</span><strong>M.S. Data Science · UMD</strong></div>
          </Reveal>
          <Reveal delay={0.08} className="profile-copy">
            <p className="section-index">01 / Profile</p>
            <h2 id="profile-title">A systems thinker with a scientist&apos;s instinct.</h2>
            <p className="section-lede">I work across the full data lifecycle: ingestion, modeling, measurement, and communication. My strongest work combines engineering discipline with honest evaluation, so the output is not merely impressive—it is defensible.</p>
            <div className="principles">
              <div><span>01</span><p><strong>Build for trust</strong>Quality, contracts, and lineage belong inside the system.</p></div>
              <div><span>02</span><p><strong>Measure honestly</strong>Baselines, ablations, and failure analysis guide the story.</p></div>
              <div><span>03</span><p><strong>Design for decisions</strong>Complex systems should become clear at the point of use.</p></div>
            </div>
          </Reveal>
        </section>

        <section className="content-section section-shell" id="experience" aria-labelledby="experience-title">
          <Reveal className="section-heading">
            <div><p className="section-index">02 / Experience</p><h2 id="experience-title">Production context,<br />measurable outcomes.</h2></div>
            <p>Regulated-industry analytics experience backed by current, end-to-end technical work.</p>
          </Reveal>
          {experience.map((job) => (
            <Reveal key={job.organization} className="glass experience-card">
              <div className="experience-meta"><p>{job.period}</p><div><h3>{job.role}</h3><span>{job.organization}</span></div></div>
              <div className="experience-body"><p>{job.description}</p><ul>{job.achievements.map((item) => <li key={item}>{item}</li>)}</ul><div className="tag-row">{job.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
            </Reveal>
          ))}
        </section>

        <section className="content-section section-shell" id="skills" aria-labelledby="skills-title">
          <Reveal className="section-heading">
            <div><p className="section-index">03 / Capabilities</p><h2 id="skills-title">One toolkit.<br />Multiple altitudes.</h2></div>
            <p>From infrastructure and transformations to experimentation, retrieval, and executive-ready analytics.</p>
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={(index % 3) * 0.05} className="glass skill-card">
                <span className="skill-card__number">0{index + 1}</span><h3>{group.title}</h3><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="content-section section-shell" id="projects" aria-labelledby="projects-title">
          <Reveal className="section-heading">
            <div><p className="section-index">04 / Selected systems</p><h2 id="projects-title">Eight projects.<br />Equal proof.</h2></div>
            <p>Every project is a complete technical story with a constraint, an architecture, and a measured result.</p>
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => <Reveal key={project.slug} delay={(index % 2) * 0.05}><ProjectCard project={project} index={index} /></Reveal>)}
          </div>
        </section>

        <section className="content-section section-shell" id="education" aria-labelledby="education-title">
          <Reveal className="section-heading"><div><p className="section-index">05 / Foundations</p><h2 id="education-title">Education & credentials.</h2></div></Reveal>
          <div className="education-grid">
            <div className="glass education-list">
              {education.map((item) => <Reveal key={item.school} className="education-row"><span>{item.period}</span><div><h3>{item.school}</h3><strong>{item.degree}</strong><p>{item.detail}</p></div></Reveal>)}
            </div>
            <Reveal className="glass certifications-card"><Sparkles size={20} /><p className="eyebrow">Certifications</p>{certifications.map((item) => <div key={item.name}><strong>{item.name}</strong><span>{item.issuer}</span></div>)}</Reveal>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <Reveal className="glass contact-card">
            <p className="section-index">06 / Contact</p>
            <h2 id="contact-title">Let&apos;s build something<br /><span>worth measuring.</span></h2>
            <p>I&apos;m exploring early-career Data Engineering and Data Science opportunities where reliable systems and rigorous analysis matter.</p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={18} /> Email <ArrowUpRight size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><ContactRound size={18} /> LinkedIn <ArrowUpRight size={16} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="site-footer section-shell"><span>© 2026 {profile.name}</span><span>Designed for clarity · Built with Next.js</span></footer>
    </>
  );
}
