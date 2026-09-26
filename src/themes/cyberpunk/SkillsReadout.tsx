import type { SkillGroup } from "@/content";
import GlitchText from "./GlitchText";

export default function SkillsReadout({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <GlitchText
        text="[ DIAGNOSTICS ]"
        as="h2"
        className="mb-6 font-mono text-sm font-bold uppercase tracking-widest"
        style={{ color: "var(--cp-cyan)" }}
      />
      <div className="cp-panel flex flex-col gap-3 p-5">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-wrap items-baseline gap-2 font-mono text-sm">
            <span style={{ color: "var(--cp-magenta)" }}>[ONLINE]</span>
            <span className="uppercase" style={{ color: "var(--cp-muted)" }}>
              {group.category}:
            </span>
            <span style={{ color: "var(--cp-text)" }}>{group.items.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
