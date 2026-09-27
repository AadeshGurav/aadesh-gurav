import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import StatusBar from "./StatusBar";
import BootSequence from "./BootSequence";
import Terminal from "./Terminal";
import ProjectLog from "./ProjectLog";
import SkillsDump from "./SkillsDump";
import ContactPrompt from "./ContactPrompt";
import LiveTerminal from "./LiveTerminal";
import Cursor from "./Cursor";

/** Single-column system-log flow: boot sequence, then the live terminal
 * above the fold, then sequential log entries — no sidebar/grid skeleton. */
export default function DarkOpsTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Cursor />
      <StatusBar />
      <div className="mx-auto flex max-w-3xl flex-col gap-2 lg:px-6 lg:py-12">
        <BootSequence profile={content.profile} />
        <LiveTerminal projects={content.projects} bio={content.profile.bio} />
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
        <ContactPrompt contact={content.contact} />
      </div>
    </div>
  );
}
