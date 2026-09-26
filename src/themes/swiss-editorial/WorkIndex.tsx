import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import type { ProjectMedia } from "@/content/types";
import ProjectWipChip from "@/components/ProjectWipChip";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

function MediaPreview({ media, projectName }: { media: ProjectMedia; projectName: string }) {
  const alt = media.alt ?? projectName;
  const className = "se-media-frame mt-3 h-40 w-full max-w-md";

  switch (media.kind) {
    case "image":
      return <img src={media.value} alt={alt} className={`${className} object-cover`} />;
    case "video":
      return (
        <video
          src={media.value}
          muted
          loop
          autoPlay
          playsInline
          aria-label={alt}
          className={`${className} object-cover`}
        />
      );
    case "icon":
      return (
        <div className={`${className} flex items-center justify-center text-3xl`} role="img" aria-label={alt}>
          {media.value}
        </div>
      );
    case "gradient":
    default:
      return (
        <div
          className={className}
          role="img"
          aria-label={alt}
          style={{
            background: `linear-gradient(135deg, oklch(0.6 0.15 ${media.value} / 0.9), oklch(0.85 0.08 ${media.value} / 0.9))`,
          }}
        />
      );
  }
}

export default function WorkIndex({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <SectionLabel number="03" title="Work" />
      <div>
        {projects.map((project, i) => (
          <Reveal key={project.id} delayMs={i * 40}>
            <div
              className="se-row group grid grid-cols-12 items-baseline gap-4 border-t py-6"
              style={{ borderColor: "var(--se-hairline)" }}
            >
              <div className="col-span-1 hidden sm:block">
                <span
                  className="inline-block text-sm font-medium transition-all duration-200 [transition-timing-function:var(--ease-out)] group-hover:scale-125 motion-reduce:group-hover:scale-100"
                  style={{ color: "var(--se-muted)" }}
                >
                  <span className="group-hover:hidden">{String(i + 1).padStart(2, "0")}</span>
                  <span className="hidden group-hover:inline" style={{ color: "var(--se-accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <h3
                  className="flex items-center gap-2 text-2xl font-bold tracking-tight transition-colors duration-200 [transition-timing-function:var(--ease-out)] group-hover:text-[var(--se-accent)]"
                  style={{ color: "var(--se-ink)" }}
                >
                  {project.name}
                  {project.status === "wip" && <ProjectWipChip />}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "var(--se-muted)" }}>
                  {project.stack.join(" · ")}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-5">
                <p className="text-base leading-relaxed" style={{ color: "var(--se-muted)" }}>
                  {project.description}
                </p>
              </div>
              <div className="col-span-12 flex gap-4 text-sm sm:col-span-2 sm:justify-end">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press se-link flex items-center gap-1.5"
                  style={{ color: "var(--se-accent)" }}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press se-link flex items-center gap-1.5"
                    style={{ color: "var(--se-accent)" }}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live
                  </a>
                )}
              </div>
              {project.media && (
                <details className="col-span-12">
                  <summary
                    className="se-link inline-block cursor-pointer text-xs uppercase tracking-widest"
                    style={{ color: "var(--se-muted)" }}
                  >
                    Preview
                  </summary>
                  <MediaPreview media={project.media} projectName={project.name} />
                </details>
              )}
            </div>
          </Reveal>
        ))}
        <div className="border-t" style={{ borderColor: "var(--se-hairline)" }} />
      </div>
    </section>
  );
}
