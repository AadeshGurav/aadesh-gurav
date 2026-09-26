import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import ProjectWipChip from "@/components/ProjectWipChip";
import GlassPanel from "./GlassPanel";
import ProjectMedia from "./ProjectMedia";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassPanel>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold" style={{ color: "var(--gn-text)" }}>
          {project.name}
        </h3>
        {project.status === "wip" && <ProjectWipChip />}
      </div>
      <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--gn-muted)" }}>
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full px-2.5 py-1 text-xs"
            style={{ background: "oklch(1 0 0 / 0.08)", color: "var(--gn-muted)" }}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-3 flex gap-4 text-sm" style={{ color: "var(--gn-accent)" }}>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gn-hover-lift press flex items-center gap-1.5"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gn-hover-lift press flex items-center gap-1.5"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live
          </a>
        )}
      </div>
      {project.media && (
        <details className="gn-media-reveal mt-3">
          <summary
            className="gn-hover-lift press inline-block rounded-full px-3 py-1.5 text-xs font-medium"
            style={{ background: "oklch(1 0 0 / 0.08)", color: "var(--gn-accent)" }}
          >
            Preview
          </summary>
          <ProjectMedia media={project.media} />
        </details>
      )}
    </GlassPanel>
  );
}
