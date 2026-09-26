import type { Project } from "@/content";
import GlitchText from "./GlitchText";
import ProjectCard from "./ProjectCard";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="px-4 py-12 sm:px-6 lg:px-0">
      <GlitchText
        text="[ WORK LOG ]"
        as="h2"
        className="mb-6 font-mono text-sm font-bold uppercase tracking-widest"
        style={{ color: "var(--cp-cyan)" }}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
