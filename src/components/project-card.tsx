import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="glass project-card">
      <div className="project-card__topline">
        <span className="eyebrow">{String(index + 1).padStart(2, "0")} · {project.category}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="project-metrics" aria-label="Project highlights">
        {project.metrics.slice(0, 2).map((metric) => (
          <span key={metric.label}><strong>{metric.value}</strong>{metric.label}</span>
        ))}
      </div>
      <div className="tag-row" aria-label="Technologies">
        {project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}
      </div>
    </Link>
  );
}
