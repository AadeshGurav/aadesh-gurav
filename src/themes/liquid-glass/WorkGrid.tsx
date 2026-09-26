import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import MaterializePanel from "./MaterializePanel";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--al-accent)" }}>
        Work
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <MaterializePanel key={project.id} delayMs={i * 40} className={i === 0 ? "sm:col-span-2" : ""}>
            <h3 className="text-lg font-semibold" style={{ color: "var(--al-text)" }}>
              {project.name}
            </h3>
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
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-1.5">
                <Github className="h-4 w-4" aria-hidden="true" />
                Code
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-1.5">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live
                </a>
              )}
            </div>
          </MaterializePanel>
        ))}
      </div>
    </section>
  );
}
