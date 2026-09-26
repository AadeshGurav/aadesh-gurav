import type { SkillGroup } from "@/content";

export default function SkillsRow({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
        Skills
      </h2>
      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-sm font-medium sm:w-28 sm:shrink-0" style={{ color: "var(--fm-muted)" }}>
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1 text-sm"
                  style={{ background: "var(--fm-surface)", color: "var(--fm-ink)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
