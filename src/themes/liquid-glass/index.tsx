import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import AmbientBackdrop from "./AmbientBackdrop";
import TabBar from "./TabBar";
import Sidebar from "./Sidebar";
import MaterializePanel from "./MaterializePanel";
import WorkGrid from "./WorkGrid";
import SkillsChips from "./SkillsChips";
import ContactTile from "./ContactTile";

export default function LiquidGlassTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <AmbientBackdrop />
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 lg:px-6 lg:py-16">
        <Sidebar profile={content.profile} />
        <div className="flex flex-col gap-2">
          <section id="about" className="px-4 py-6 sm:px-6 lg:px-0">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--al-accent)" }}>
              About
            </h2>
            <MaterializePanel>
              <div className="flex flex-col gap-3">
                {content.profile.bio.map((paragraph, i) => (
                  <p key={i} className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--al-text)" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </MaterializePanel>
          </section>
          <WorkGrid projects={content.projects} />
          <SkillsChips skills={content.skills} />
          <ContactTile contact={content.contact} name={content.profile.name} />
        </div>
      </div>
      <TabBar />
    </div>
  );
}
