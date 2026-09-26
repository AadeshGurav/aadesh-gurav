import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import IdentityTile from "./IdentityTile";
import StatTile from "./StatTile";
import ProjectTile from "./ProjectTile";
import LiveCounterTile from "./LiveCounterTile";
import SkillsTile from "./SkillsTile";
import ContactTile from "./ContactTile";

export default function BentoTheme({ content }: ThemeComponentProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <IdentityTile profile={content.profile} />
        <StatTile id="about">
          <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--bt-muted)" }}>
            About
          </p>
          <div className="mt-2 flex flex-col gap-2">
            {content.profile.bio.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--bt-text)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </StatTile>
        <LiveCounterTile />
        {content.projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
        <SkillsTile skills={content.skills} />
        <ContactTile contact={content.contact} name={content.profile.name} />
      </div>
    </div>
  );
}
