import type { Project } from "@/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="px-4 py-10 sm:px-6 lg:px-0">
      <Reveal>
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
          Work
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delayMs={i * 40}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
