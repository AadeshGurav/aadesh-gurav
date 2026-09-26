import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import TabBar from "./TabBar";
import Hero from "./Hero";
import MaterializePanel from "./MaterializePanel";
import WorkGrid from "./WorkGrid";
import SkillsChips from "./SkillsChips";
import ContactTile from "./ContactTile";

export default function LiquidGlassTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Hero profile={content.profile} />
      <section id="about" className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--al-accent)" }}>
          About
        </h2>
        <MaterializePanel>
          <div className="flex flex-col gap-3">
            {content.profile.bio.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--al-text)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </MaterializePanel>
      </section>
      <WorkGrid projects={content.projects} />
      <SkillsChips skills={content.skills} />
      <ContactTile contact={content.contact} name={content.profile.name} />
      <TabBar />
    </div>
  );
}
