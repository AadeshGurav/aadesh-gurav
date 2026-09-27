import type { CSSProperties } from "react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import type { ProjectMedia } from "@/content/types";
import ProjectWipChip from "@/components/ProjectWipChip";
import StatTile from "./StatTile";

/** Light-tinted compartment colors, rotated across ordinary project cards for variety. */
const lightTones: CSSProperties[] = [
  {
    "--bt-tile-bg": "oklch(0.92 0.06 340)",
    "--bt-tile-fg": "oklch(0.26 0.08 340)",
    "--bt-tile-border": "oklch(0.82 0.08 340)",
  } as CSSProperties,
  {
    "--bt-tile-bg": "oklch(0.91 0.05 235)",
    "--bt-tile-fg": "oklch(0.24 0.07 235)",
    "--bt-tile-border": "oklch(0.8 0.07 235)",
  } as CSSProperties,
  {
    "--bt-tile-bg": "oklch(0.9 0.06 150)",
    "--bt-tile-fg": "oklch(0.22 0.07 150)",
    "--bt-tile-border": "oklch(0.78 0.08 150)",
  } as CSSProperties,
];

/** Bold dark-green block for the featured (first) project — same hue family as lightTones[2]. */
const featuredTone: CSSProperties = {
  "--bt-tile-bg": "oklch(0.36 0.12 150)",
  "--bt-tile-fg": "oklch(0.97 0.02 150)",
  "--bt-tile-shadow": "0 10px 26px oklch(0.32 0.11 150 / 0.32)",
  "--bt-tile-shadow-hover": "0 18px 40px oklch(0.32 0.11 150 / 0.4)",
  "--bt-chip-bg": "oklch(1 0 0 / 0.16)",
} as CSSProperties;

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

export default function ProjectTile({ project, featured = false, hue = 0 }: { project: Project; featured?: boolean; hue?: number }) {
  const tone = featured ? featuredTone : lightTones[hue % lightTones.length];

  return (
    <StatTile
      className={featured ? "sm:col-span-2 lg:row-span-2" : "lg:col-span-2"}
      bold={featured}
      tone={tone}
    >
      <div className="flex items-center gap-2">
        <h2 className="text-base font-bold">{project.name}</h2>
        {project.status === "wip" && <ProjectWipChip />}
      </div>
      <p className="mt-2 text-sm leading-relaxed opacity-90">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-full px-2 py-0.5 text-xs font-medium"
            style={{ background: "var(--bt-chip-bg, oklch(0 0 0 / 0.06))" }}
          >
            {tech}
          </span>
        ))}
      </div>
      {project.media && project.media.kind !== "icon" && (
        <details>
          <summary className="mt-3 text-xs font-semibold opacity-80">Preview</summary>
          <MediaPreview media={project.media} />
        </details>
      )}
      <div className="mt-3 flex gap-4 text-xs font-semibold">
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
