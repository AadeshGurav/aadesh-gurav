import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import ProjectWipChip from "@/components/ProjectWipChip";
import { useScramble } from "./useScramble";

/** oklch-based neon gradient block for kind:"gradient" media, keyed off a hue degree string. */
function gradientMedia(hueValue: string) {
  const hue = Number(hueValue) || 280;
  return `linear-gradient(135deg, oklch(0.75 0.22 ${hue}) 0%, oklch(0.32 0.2 ${(hue + 70) % 360}) 100%)`;
}

export default function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const [phase, setPhase] = useState<"idle" | "scrambling" | "revealed">("idle");
  const { display, scramble } = useScramble("DECRYPTING SIGNAL...");

  function activate() {
    if (phase === "revealed") {
      setPhase("idle");
      return;
    }
    setPhase("scrambling");
    scramble(() => setPhase("revealed"));
  }

  const media = project.media;
  const revealed = phase === "revealed";
  const label = phase === "idle" ? "View media" : phase === "scrambling" ? display : "Media";

  return (
    <article className={`cp-card p-5 ${flip ? "cp-card-flip" : ""}`}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold" style={{ color: "var(--cp-text)" }}>
          {project.name}
        </h3>
        {project.status === "wip" && <ProjectWipChip />}
      </div>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cp-muted)" }}>
        {project.description}
      </p>
      <p className="mt-3 font-mono text-xs" style={{ color: "var(--cp-cyan)" }}>
        {project.stack.map((tech) => `[${tech}]`).join(" ")}
      </p>

      {media && (
        <div className="mt-4">
          <button
            type="button"
            onClick={activate}
            aria-expanded={revealed}
            className="cp-hud-btn press flex w-full items-center justify-between px-3 py-2 font-mono text-[11px] uppercase tracking-wide"
            style={{ color: "var(--cp-magenta)" }}
          >
            {label}
            <span aria-hidden="true">{revealed ? "▲" : "▼"}</span>
          </button>
          {revealed && (
            <div className="cp-media-reveal mt-2 h-32 w-full overflow-hidden" role="img" aria-label={media.alt ?? `${project.name} preview`}>
              {media.kind === "gradient" && (
                <div className="h-full w-full" style={{ background: gradientMedia(media.value) }} />
              )}
              {media.kind === "image" && (
                <img src={media.value} alt={media.alt ?? project.name} className="h-full w-full object-cover" />
              )}
              {media.kind === "video" && (
                <video src={media.value} className="h-full w-full object-cover" muted loop playsInline autoPlay />
              )}
              {media.kind === "icon" && (
                <div className="flex h-full w-full items-center justify-center text-3xl" style={{ background: "var(--cp-bg)" }}>
                  {media.value}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex gap-4 font-mono text-xs uppercase" style={{ color: "var(--cp-cyan)" }}>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-1.5">
          <Github className="h-3.5 w-3.5" aria-hidden="true" />
          Code
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-1.5">
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Live
          </a>
        )}
      </div>
    </article>
  );
}
