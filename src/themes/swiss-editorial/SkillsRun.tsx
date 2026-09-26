import type { SkillGroup } from "@/content";
import SectionLabel from "./SectionLabel";

export default function SkillsRun({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <SectionLabel number="04" title="Skills" />
      <div className="flex flex-col gap-3">
        {skills.map((group) => (
          <p key={group.category} className="text-lg leading-relaxed" style={{ color: "var(--se-ink)" }}>
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--se-muted)" }}>
              {group.category}
            </span>{" "}
            — {group.items.join(" / ")}
          </p>
        ))}
      </div>
    </section>
  );
}
