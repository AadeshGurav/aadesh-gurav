import type { SkillGroup } from "@/content";
import MaterializePanel from "./MaterializePanel";

export default function SkillsChips({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="px-4 py-6 sm:px-6 lg:px-0">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--al-accent)" }}>
        Skills
      </h2>
      <MaterializePanel>
        <div className="flex flex-col gap-3">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--al-muted)" }}>
                {group.category}
              </span>
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-2.5 py-1 text-xs"
                  style={{ background: "oklch(0 0 0 / 0.05)", color: "var(--al-text)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </MaterializePanel>
    </section>
  );
}
