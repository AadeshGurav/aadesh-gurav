import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/content";
import type { ProjectMedia } from "@/content/types";
import ProjectWipChip from "@/components/ProjectWipChip";

function MediaPreview({ media }: { media: ProjectMedia }) {
  if (media.kind === "gradient") {
    return (
      <div
        role="img"
        aria-label={media.alt ?? "Project preview"}
        className="h-40 w-full rounded-md sm:h-48"
        style={{
          background: `linear-gradient(135deg, oklch(0.93 0.05 ${media.value}), oklch(0.55 0.19 ${media.value}))`,
        }}
      />
    );
  }
  if (media.kind === "image") {
    return <img src={media.value} alt={media.alt ?? ""} className="h-40 w-full rounded-md object-cover sm:h-48" />;
  }
  if (media.kind === "video") {
    return (
      <video
        src={media.value}
        aria-label={media.alt}
        className="h-40 w-full rounded-md object-cover sm:h-48"
        muted
        loop
        playsInline
      />
    );
  }
  return null;
}

/**
 * Subtle 3D tilt following the cursor, gated to fine-pointer/hover devices
 * and off under reduced motion. Purpose: delight on an occasional surface
 * (a visitor hovers a handful of cards per visit).
 */
export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) scale(1.015)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <article
      ref={ref}
      className="fm-card flex h-full flex-col rounded-lg border p-6 [transition-timing-function:var(--ease-out)]"
      style={{ borderColor: "var(--fm-border)", background: "var(--fm-surface)" }}
    >
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold" style={{ color: "var(--fm-ink)" }}>
          {project.name}
        </h3>
        {project.status === "wip" && <ProjectWipChip />}
      </div>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fm-muted)" }}>
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border px-2.5 py-1 text-xs"
            style={{ borderColor: "var(--fm-border)", color: "var(--fm-muted)" }}
          >
            {tech}
          </span>
        ))}
      </div>
      {project.media && project.media.kind !== "icon" && (
        <details className="fm-disclosure mt-4">
          <summary className="text-xs font-medium" style={{ color: "var(--fm-muted)" }}>
            Preview
          </summary>
          <div className="fm-disclosure-panel">
            <MediaPreview media={project.media} />
          </div>
        </details>
      )}
      <div className="mt-auto flex gap-4 pt-4 text-sm" style={{ color: "var(--fm-muted)" }}>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="fm-icon-link press flex items-center gap-1.5">
          <Github className="h-4 w-4" aria-hidden="true" />
          Code
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="fm-icon-link press flex items-center gap-1.5">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live
          </a>
        )}
      </div>
    </article>
  );
}
