import type { Project, Profile, SkillGroup } from "@/content/types";

/** Escapes a string for safe embedding inside a single-quoted-ish TS template
 * literal / double-quoted string. */
function esc(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/** Produces ready-to-paste content for src/content/projects.ts. */
export function generateProjectsFile(projects: Project[]): string {
  const entries = projects
    .map((p) => {
      const lines = [
        `  {`,
        `    id: "${esc(p.id)}",`,
        `    name: "${esc(p.name)}",`,
        `    description: "${esc(p.description)}",`,
      ];
      if (p.longDescription) lines.push(`    longDescription: "${esc(p.longDescription)}",`);
      lines.push(`    stack: [${p.stack.map((t) => `"${esc(t)}"`).join(", ")}],`);
      lines.push(`    repoUrl: "${esc(p.repoUrl)}",`);
      if (p.liveUrl) lines.push(`    liveUrl: "${esc(p.liveUrl)}",`);
      if (p.highlight) lines.push(`    highlight: "${esc(p.highlight)}",`);
      lines.push(`    show: ${p.show},`);
      lines.push(`    order: ${p.order},`);
      lines.push(`  },`);
      return lines.join("\n");
    })
    .join("\n");

  return `import type { Project } from "./types";

/**
 * The full project list. Toggle \`show\` to feature/hide a project; \`order\`
 * controls display order (lower = first). New entries default to
 * \`show: false\` until real content is written for them — see README.md.
 */
export const projects: Project[] = [
${entries}
];
`;
}

/** Produces ready-to-paste content for src/content/profile.ts. */
export function generateProfileFile(profile: Profile): string {
  const bioLines = profile.bio.map((b) => `    "${esc(b)}",`).join("\n");
  const socialLines = profile.socials
    .map((s) => `    { label: "${esc(s.label)}", href: "${esc(s.href)}"${s.icon ? `, icon: "${s.icon}"` : ""} },`)
    .join("\n");

  return `import type { Profile } from "./types";

export const profile: Profile = {
  name: "${esc(profile.name)}",
  role: "${esc(profile.role)}",
  location: "${esc(profile.location)}",
  tagline: "${esc(profile.tagline)}",
  bio: [
${bioLines}
  ],
  socials: [
${socialLines}
  ],
  email: "${esc(profile.email)}",
};
`;
}

/** Produces ready-to-paste content for src/content/skills.ts. */
export function generateSkillsFile(skills: SkillGroup[]): string {
  const groups = skills
    .map(
      (g) =>
        `  { category: "${esc(g.category)}", items: [${g.items.map((i) => `"${esc(i)}"`).join(", ")}] },`
    )
    .join("\n");

  return `import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
${groups}
];
`;
}
