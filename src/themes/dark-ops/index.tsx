import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import StatusBar from "./StatusBar";
import BootHero from "./BootHero";
import Terminal from "./Terminal";
import ProjectLog from "./ProjectLog";
import SkillsDump from "./SkillsDump";
import ContactPrompt from "./ContactPrompt";
import LiveTerminal from "./LiveTerminal";

export default function DarkOpsTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <StatusBar />
      <BootHero profile={content.profile} />
      <Terminal id="about" title="About">
        <div className="flex flex-col gap-3 text-sm">
          {content.profile.bio.map((paragraph, i) => (
            <p key={i} style={{ color: "var(--do-text)" }}>
              <span style={{ color: "var(--do-muted)" }}># </span>
              {paragraph}
            </p>
          ))}
        </div>
      </Terminal>
      <ProjectLog projects={content.projects} />
      <SkillsDump skills={content.skills} />
      <LiveTerminal />
      <ContactPrompt contact={content.contact} />
    </div>
  );
}
