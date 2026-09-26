import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import type { ProjectMedia } from "@/content/types";
import ProjectWipChip from "@/components/ProjectWipChip";

function MediaPreview({ media }: { media: ProjectMedia }) {
  if (media.kind === "gradient") {
    return (
      <div
        role="img"
        aria-label={media.alt ?? "Project preview"}
        className="nb-media h-32 w-full"
        style={{ background: `oklch(0.6 0.15 ${media.value})` }}
      />
    );
  }
  if (media.kind === "image") {
    return <img src={media.value} alt={media.alt ?? ""} className="nb-media h-32 w-full object-cover" />;
  }
  if (media.kind === "video") {
    return (
      <video
        src={media.value}
        aria-label={media.alt}
        className="nb-media h-32 w-full object-cover"
        muted
        loop
        playsInline
      />
    );
  }
  return null;
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <h2 className="mb-6 inline-block border-2 px-3 py-1 text-2xl font-black uppercase" style={{ borderColor: "var(--nb-ink)", background: "var(--nb-accent)" }}>
        Work.
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="nb-card border-2 p-6"
            style={{ borderColor: "var(--nb-ink)", background: "var(--nb-bg)" }}
          >
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black" style={{ color: "var(--nb-ink)" }}>
                {project.name}
              </h3>
              {project.status === "wip" && <ProjectWipChip />}
            </div>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--nb-muted)" }}>
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border-2 px-2 py-0.5 text-xs font-bold uppercase"
                  style={{ borderColor: "var(--nb-ink)", color: "var(--nb-ink)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.media && project.media.kind !== "icon" && (
              <details className="nb-disclosure mt-4">
                <summary>Preview</summary>
                <div className="p-3">
                  <MediaPreview media={project.media} />
                </div>
              </details>
            )}
            <div className="mt-4 flex gap-4 text-sm font-bold uppercase" style={{ color: "var(--nb-ink)" }}>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="nb-link flex items-center gap-1.5">
                <Github className="h-4 w-4" aria-hidden="true" />
                Code
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="nb-link flex items-center gap-1.5">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
