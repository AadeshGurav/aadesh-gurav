import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import AuroraBackdrop from "./AuroraBackdrop";
import Header from "./Header";
import Hero from "./Hero";
import GlassPanel from "./GlassPanel";
import WorkPanels from "./WorkPanels";
import SkillsPanel from "./SkillsPanel";
import ContactPanel from "./ContactPanel";

export default function GlassNightTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <AuroraBackdrop />
      <Header name={content.profile.name} />
      <Hero profile={content.profile} />
      <section id="about" className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--gn-accent)" }}>
          Field notes
        </h2>
        <GlassPanel>
          <div className="flex flex-col gap-3">
            {content.profile.bio.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--gn-text)" }}>
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
  );
}
