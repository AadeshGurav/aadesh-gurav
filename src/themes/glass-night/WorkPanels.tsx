import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import GlassPanel from "./GlassPanel";

export default function WorkPanels({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="px-4 py-10 sm:px-6 lg:px-0">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--gn-accent)" }}>
        Deployed
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <GlassPanel key={project.id}>
            <h3 className="text-lg font-semibold" style={{ color: "var(--gn-text)" }}>
              {project.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--gn-muted)" }}>
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-2.5 py-1 text-xs"
                  style={{ background: "oklch(1 0 0 / 0.08)", color: "var(--gn-muted)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-4 text-sm" style={{ color: "var(--gn-accent)" }}>
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
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
