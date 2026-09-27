import type { CSSProperties } from "react";
import type { SkillGroup } from "@/content";
import StatTile from "./StatTile";

const skillsTone: CSSProperties = {
  "--bt-tile-bg": "oklch(0.91 0.06 195)",
  "--bt-tile-fg": "oklch(0.24 0.06 195)",
  "--bt-tile-border": "oklch(0.8 0.07 195)",
  "--bt-chip-bg": "oklch(0.82 0.08 195)",
} as CSSProperties;

export default function SkillsTile({ skills }: { skills: SkillGroup[] }) {
  return (
    <StatTile id="skills" className="sm:col-span-2 lg:col-span-2" tone={skillsTone}>
      <p className="text-xs font-bold uppercase tracking-wide opacity-80">Skills</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.flatMap((group) => group.items).map((item) => (
          <span
            key={item}
            className="rounded-full px-3 py-1 text-sm font-medium"
            style={{ background: "var(--bt-chip-bg, oklch(0 0 0 / 0.06))" }}
          >
            {item}
          </span>
        ))}
      </div>
    </StatTile>
  );
}
