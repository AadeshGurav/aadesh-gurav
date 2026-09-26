import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import GlitchText from "./GlitchText";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <GlitchText
        text="[ WORK LOG ]"
        as="h2"
        className="mb-6 font-mono text-sm font-bold uppercase tracking-widest"
        style={{ color: "var(--cp-cyan)" }}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, i) => {
          const accent = i % 2 === 0 ? "var(--cp-cyan)" : "var(--cp-magenta)";
          return (
            <article key={project.id} className="cp-panel p-5">
              <h3 className="text-lg font-bold" style={{ color: "var(--cp-text)" }}>
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cp-muted)" }}>
                {project.description}
              </p>
              <p className="mt-3 font-mono text-xs" style={{ color: accent }}>
                {project.stack.map((tech) => `[${tech}]`).join(" ")}
              </p>
              <div className="mt-3 flex gap-4 font-mono text-xs uppercase" style={{ color: accent }}>
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
        })}
      </div>
    </section>
  );
}
