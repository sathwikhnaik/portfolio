import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { profile, projectBySlug, projects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectBySlug((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: project.title, description: project.summary, url: `/projects/${project.slug}`, images: ["/og.png"] } };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projectBySlug((await params).slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const projectJsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, author: { "@type": "Person", name: profile.name }, dateCreated: project.year, description: project.summary, url: `/projects/${project.slug}`, sameAs: project.github };

  return (
    <>
      <Navigation />
      <main id="main-content" className="project-page section-shell">
        <Reveal className="project-hero">
          <Link className="back-link" href="/#projects"><ArrowLeft size={16} /> All projects</Link>
          <p className="section-index">{String(projectIndex + 1).padStart(2, "0")} / {project.category} / {project.year}</p>
          <h1>{project.title}</h1><p>{project.summary}</p>
          <div className="project-hero__actions">{project.github && <a className="button button--primary" href={project.github} target="_blank" rel="noreferrer"><Code2 size={17} /> View repository <ArrowUpRight size={16} /></a>}</div>
        </Reveal>
        <Reveal className="project-stat-grid">{project.metrics.map((metric) => <div className="glass" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</Reveal>
        <div className="project-story-grid">
          <Reveal className="glass story-card"><p className="eyebrow">System architecture</p><h2>From input to decision.</h2><ol>{project.architecture.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol></Reveal>
          <Reveal delay={0.05} className="glass story-card"><p className="eyebrow">Measured outcomes</p><h2>What the system proved.</h2><ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></Reveal>
        </div>
        <Reveal className="glass lesson-card"><p className="eyebrow">Engineering lesson</p><blockquote>{project.lesson}</blockquote><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></Reveal>
        <Reveal className="next-project"><p className="eyebrow">Next project</p><Link href={`/projects/${nextProject.slug}`}><span>{nextProject.title}</span><ArrowUpRight /></Link></Reveal>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
