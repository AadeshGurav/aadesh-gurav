import type { Project } from "@/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

/**
 * Full-width horizontal scroll-snap showcase strip — the theme's visual
 * signature, in place of a stacked/grid list. Native CSS scroll-snap, no
 * library; cards bleed to the viewport edge while the heading stays aligned
 * to the same container gutter as every other section.
 */
export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <Reveal>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
            Work
          </h2>
        </Reveal>
      </div>
      <div className="fm-strip">
        {projects.map((project, i) => (
          <Reveal key={project.id} delayMs={i * 40} className="fm-strip-item">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
