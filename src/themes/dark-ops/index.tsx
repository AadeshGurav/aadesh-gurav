import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import StatusBar from "./StatusBar";
import Sidebar from "./Sidebar";
import Terminal from "./Terminal";
import ProjectLog from "./ProjectLog";
import SkillsDump from "./SkillsDump";
import ContactPrompt from "./ContactPrompt";
import LiveTerminal from "./LiveTerminal";

export default function DarkOpsTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <StatusBar />
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[280px_1fr] lg:gap-10 lg:px-6 lg:py-12">
        <Sidebar profile={content.profile} />
        <div className="flex flex-col gap-2">
          <Terminal id="about" title="About">
            <div className="flex max-w-2xl flex-col gap-3 text-sm">
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
          <LiveTerminal projects={content.projects} bio={content.profile.bio} />
          <ContactPrompt contact={content.contact} />
        </div>
      </div>
    </div>
  );
}
