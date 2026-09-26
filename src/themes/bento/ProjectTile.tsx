import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import StatTile from "./StatTile";

export default function ProjectTile({ project }: { project: Project }) {
  return (
    <StatTile>
      <h3 className="text-base font-semibold" style={{ color: "var(--bt-text)" }}>
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--bt-muted)" }}>
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-full px-2 py-0.5 text-xs"
            style={{ background: "oklch(0 0 0 / 0.04)", color: "var(--bt-muted)" }}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-3 flex gap-3 text-xs" style={{ color: "var(--bt-accent)" }}>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-1">
          <Github className="h-3.5 w-3.5" aria-hidden="true" />
          Code
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-1">
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Live
          </a>
        )}
      </div>
    </StatTile>
  );
}
