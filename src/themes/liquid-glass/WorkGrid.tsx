import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import type { Project } from "@/content";
import type { ProjectMedia } from "@/content/types";
import MaterializePanel from "./MaterializePanel";
import ProjectWipChip from "@/components/ProjectWipChip";

function MediaFace({ media, name }: { media?: ProjectMedia; name: string }) {
  if (!media) return null;
  if (media.kind === "gradient") {
    const hue = Number(media.value) || 250;
    return (
      <div
        className="h-32 w-full"
        style={{ background: `linear-gradient(135deg, oklch(0.9 0.14 ${hue}), oklch(0.55 0.19 ${hue + 40}))` }}
        role="img"
        aria-label={media.alt ?? `${name} preview`}
      />
    );
  }
  if (media.kind === "image") {
    return <img src={media.value} alt={media.alt ?? name} className="h-32 w-full object-cover" />;
  }
  if (media.kind === "video") {
    return (
      <video
        src={media.value}
        autoPlay
        muted
        loop
        playsInline
        aria-label={media.alt ?? `${name} preview`}
        className="h-32 w-full object-cover"
      />
    );
  }
  // "icon" — no dedicated asset yet; a flat tinted plate keeps the card's rhythm intact.
  return <div className="flex h-32 w-full items-center justify-center text-xs" style={{ background: "oklch(0 0 0 / 0.05)", color: "var(--al-muted)" }}>{name}</div>;
}

/** Full-bleed glass overlay: swipe across every project's media via native
 * scroll-snap. No gesture library — touch scrolling already tracks 1:1. */
function MediaCarousel({ projects, startIndex, onClose }: { projects: Project[]; startIndex: number; onClose: () => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const track = trackRef.current;
    const card = track?.children[startIndex] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [startIndex, onClose]);

  return (
    <div className="al-carousel-backdrop" role="dialog" aria-modal="true" aria-label="Project previews" onClick={onClose}>
      <button ref={closeRef} onClick={onClose} className="al-carousel-close press" aria-label="Close preview">
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <div ref={trackRef} className="al-carousel" onClick={(e) => e.stopPropagation()}>
        {projects.map((project) => (
          <div key={project.id} className="al-carousel-card al-tile">
            <MediaFace media={project.media} name={project.name} />
            <div className="p-4">
              <h3 className="text-base font-semibold" style={{ color: "var(--al-text)" }}>
                {project.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--al-muted)" }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="work" className="px-4 py-6 sm:px-6 lg:px-0">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--al-accent)" }}>
        Work
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <MaterializePanel
            key={project.id}
            delayMs={i * 40}
            bodyClassName=""
            className={`overflow-hidden ${i === 0 ? "sm:col-span-2 xl:col-span-1" : ""}`}
          >
            {project.media && (
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="press block w-full text-left"
                aria-label={`Preview ${project.name}`}
              >
                <MediaFace media={project.media} name={project.name} />
              </button>
            )}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold" style={{ color: "var(--al-text)" }}>
                  {project.name}
                </h3>
                {project.status === "wip" && <ProjectWipChip />}
              </div>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--al-muted)" }}>
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full px-2.5 py-1 text-xs"
                    style={{ background: "oklch(0 0 0 / 0.05)", color: "var(--al-muted)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-4 text-sm" style={{ color: "var(--al-accent)" }}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="al-hit-target press flex items-center gap-1.5"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="al-hit-target press flex items-center gap-1.5"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </MaterializePanel>
        ))}
      </div>
      {openIndex !== null && (
        <MediaCarousel projects={projects} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  );
}
