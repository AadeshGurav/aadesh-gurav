import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/content";
import ProjectWipChip from "@/components/ProjectWipChip";
import Terminal from "./Terminal";

export default function ProjectLog({ projects }: { projects: Project[] }) {
  return (
    <Terminal id="work" title="Work">
      <p className="mb-4" style={{ color: "var(--do-accent)" }}>
        $ ls ./projects
      </p>
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <div key={project.id} className="do-log-entry border-l-2 pl-3" style={{ borderColor: "var(--do-border)" }}>
            <p className="flex flex-wrap items-center gap-2 font-semibold" style={{ color: "var(--do-text)" }}>
              {project.name}/
              {project.status === "wip" && <ProjectWipChip />}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--do-muted)" }}>
              {project.description}
            </p>
            <p className="mt-2 text-xs" style={{ color: "var(--do-muted)" }}>
              {project.stack.map((tech) => `[${tech}]`).join(" ")}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm" style={{ color: "var(--do-accent)" }}>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="do-log-link press flex items-center gap-1.5">
                <Github className="h-4 w-4" aria-hidden="true" />
                code
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="do-log-link press flex items-center gap-1.5">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  live
                </a>
              )}
              <span className="text-xs" style={{ color: "var(--do-muted)" }}>
                try: <code>cat {project.id}.mp4</code>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Terminal>
  );
}
