import type { Project } from "@/content";
import ProjectCard from "./ProjectCard";

/** Asymmetric bento rhythm (see `.gn-work-grid` in theme.css) instead of a
 * uniform two-column grid — repeats every 6 cards so it stays interesting
 * regardless of project count. */
export default function WorkPanels({ projects }: { projects: Project[] }) {
  return (
    <section id="work">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--gn-accent)" }}>
        Deployed
      </h2>
      <div className="gn-work-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
