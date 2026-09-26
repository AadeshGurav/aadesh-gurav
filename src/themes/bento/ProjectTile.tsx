import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import type { ProjectMedia } from "@/content/types";
import ProjectWipChip from "@/components/ProjectWipChip";
import StatTile from "./StatTile";

function MediaPreview({ media }: { media: ProjectMedia }) {
  if (media.kind === "gradient") {
    return (
      <div
        role="img"
        aria-label={media.alt ?? "Project preview"}
        className="bt-media h-32 w-full"
        style={{
          background: `linear-gradient(135deg, oklch(0.93 0.05 ${media.value}), oklch(0.6 0.15 ${media.value}))`,
        }}
      />
    );
  }
  if (media.kind === "image") {
    return <img src={media.value} alt={media.alt ?? ""} className="bt-media h-32 w-full object-cover" />;
  }
  if (media.kind === "video") {
    return (
      <video src={media.value} aria-label={media.alt} className="bt-media h-32 w-full object-cover" muted loop playsInline />
    );
  }
  return null;
}

export default function ProjectTile({ project }: { project: Project }) {
  return (
    <StatTile>
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold" style={{ color: "var(--bt-text)" }}>
          {project.name}
        </h2>
        {project.status === "wip" && <ProjectWipChip />}
      </div>
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
      {project.media && project.media.kind !== "icon" && (
        <details>
          <summary className="mt-3 text-xs font-medium" style={{ color: "var(--bt-muted)" }}>
            Preview
          </summary>
          <MediaPreview media={project.media} />
        </details>
      )}
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
