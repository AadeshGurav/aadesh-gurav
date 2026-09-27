import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import AuroraBackdrop from "./AuroraBackdrop";
import Cursor from "./Cursor";
import HeroPanel from "./HeroPanel";
import GlassPanel from "./GlassPanel";
import WorkPanels from "./WorkPanels";
import SkillsPanel from "./SkillsPanel";
import ContactPanel from "./ContactPanel";

/** Asymmetric bento grid (`.gn-grid` in theme.css) — every section below is a
 * direct grid child, laid out by id so a single stacked column on mobile
 * becomes a moody, editorial arrangement of varying spans at lg+. */
export default function GlassNightTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <AuroraBackdrop />
      <Cursor />
      <div className="gn-grid">
        <HeroPanel profile={content.profile} />
        <section id="about">
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
  );
}
