import type { SkillGroup } from "@/content";
import Terminal from "./Terminal";

export default function SkillsDump({ skills }: { skills: SkillGroup[] }) {
  return (
    <Terminal id="skills" title="Skills">
      <p className="mb-4" style={{ color: "var(--do-accent)" }}>
        $ skills --list
      </p>
      <div className="flex flex-col gap-3 text-sm">
        {skills.map((group) => (
          <div key={group.category} className="do-log-entry border-l-2 pl-3" style={{ borderColor: "var(--do-border)" }}>
            <p style={{ color: "var(--do-muted)" }}>[{group.category}]</p>
            <p className="pl-4" style={{ color: "var(--do-text)" }}>
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Terminal>
  );
}
