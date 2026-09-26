import type { SkillGroup } from "@/content";

const ROTATIONS = [-2, 1, -1, 2, -1.5, 1.5];

export default function SkillStamps({ skills }: { skills: SkillGroup[] }) {
  const items = skills.flatMap((group) => group.items);
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <h2 className="mb-6 inline-block border-2 px-3 py-1 text-2xl font-black uppercase" style={{ borderColor: "var(--nb-ink)", background: "var(--nb-accent)" }}>
        Skills.
      </h2>
      <div className="flex flex-wrap gap-4">
        {items.map((item, i) => (
          <span
            key={item}
            className="nb-stamp border-2 px-4 py-2 text-sm font-black uppercase"
            style={{
              borderColor: "var(--nb-ink)",
              background: "var(--nb-bg)",
              color: "var(--nb-ink)",
              boxShadow: "3px 3px 0 var(--nb-ink)",
              transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
