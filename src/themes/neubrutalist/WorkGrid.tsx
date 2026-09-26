import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="mx-auto max-w-5xl px-4 py-12 sm:px-8">
      <h2 className="mb-6 inline-block border-2 px-3 py-1 text-2xl font-black uppercase" style={{ borderColor: "var(--nb-ink)", background: "var(--nb-accent)" }}>
        Work.
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="nb-card border-2 p-6"
            style={{ borderColor: "var(--nb-ink)", background: "var(--nb-bg)" }}
          >
            <h3 className="text-xl font-black" style={{ color: "var(--nb-ink)" }}>
              {project.name}
            </h3>
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
            <div className="mt-4 flex gap-4 text-sm font-bold uppercase" style={{ color: "var(--nb-ink)" }}>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                <Github className="h-4 w-4" aria-hidden="true" />
                Code
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
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
