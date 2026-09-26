import type { SkillGroup } from "@/content";
import GlassPanel from "./GlassPanel";

export default function SkillsPanel({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="px-4 py-10 sm:px-6 lg:px-0">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--gn-accent)" }}>
        Toolkit
      </h2>
      <GlassPanel>
        <div className="flex flex-col gap-3">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-wrap items-baseline gap-2">
              <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--gn-muted)" }}>
                {group.category}
              </span>
              <span className="text-sm" style={{ color: "var(--gn-text)" }}>
                {group.items.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}
