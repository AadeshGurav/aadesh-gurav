import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import Cursor from "./Cursor";
import IdentityTile from "./IdentityTile";
import StatTile from "./StatTile";
import ProjectTile from "./ProjectTile";
import LiveCounterTile from "./LiveCounterTile";
import SkillsTile from "./SkillsTile";
import ContactTile from "./ContactTile";

export default function BentoTheme({ content }: ThemeComponentProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
      <Cursor />
      {/* Spans are hand-placed (not grid-auto-flow: dense) so DOM order always
          matches visual/reading order — see theme.css. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <IdentityTile profile={content.profile} />
        <LiveCounterTile />
        <StatTile id="about" className="lg:col-span-2">
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--bt-muted)" }}>
            About
          </p>
          <div className="mt-2 flex flex-col gap-2">
            {content.profile.bio.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </StatTile>
        <SkillsTile skills={content.skills} />
        {content.projects.map((project, i) => (
          <ProjectTile key={project.id} project={project} featured={i === 0} hue={i} />
        ))}
        <ContactTile contact={content.contact} name={content.profile.name} />
      </div>
    </div>
  );
}
