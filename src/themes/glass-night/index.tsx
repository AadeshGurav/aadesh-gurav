import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import AuroraBackdrop from "./AuroraBackdrop";
import Sidebar from "./Sidebar";
import GlassPanel from "./GlassPanel";
import WorkPanels from "./WorkPanels";
import SkillsPanel from "./SkillsPanel";
import ContactPanel from "./ContactPanel";

export default function GlassNightTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <AuroraBackdrop />
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[300px_1fr] lg:gap-10 lg:px-6 lg:py-16">
        <Sidebar profile={content.profile} />
        <div className="flex flex-col gap-2">
          <section id="about" className="px-4 py-10 sm:px-6 lg:px-0 lg:py-0">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--gn-accent)" }}>
              Field notes
            </h2>
            <GlassPanel>
              <div className="flex flex-col gap-3">
                {content.profile.bio.map((paragraph, i) => (
                  <p key={i} className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--gn-text)" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassPanel>
          </section>
          <WorkPanels projects={content.projects} />
          <SkillsPanel skills={content.skills} />
          <ContactPanel contact={content.contact} name={content.profile.name} />
        </div>
      </div>
    </div>
  );
}
