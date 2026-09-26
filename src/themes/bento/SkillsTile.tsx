import type { SkillGroup } from "@/content";
import StatTile from "./StatTile";

export default function SkillsTile({ skills }: { skills: SkillGroup[] }) {
  return (
    <StatTile id="skills" className="sm:col-span-2">
      <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--bt-muted)" }}>
        Skills
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.flatMap((group) => group.items).map((item) => (
          <span
            key={item}
            className="rounded-full px-3 py-1 text-sm"
            style={{ background: "oklch(0 0 0 / 0.04)", color: "var(--bt-text)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </StatTile>
  );
}
