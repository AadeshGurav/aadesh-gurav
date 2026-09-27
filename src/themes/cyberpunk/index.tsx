import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import Cursor from "./Cursor";
import Header from "./Header";
import HudNav from "./HudNav";
import Hero from "./Hero";
import GlitchText from "./GlitchText";
import WorkGrid from "./WorkGrid";
import SkillsReadout from "./SkillsReadout";
import ContactPanel from "./ContactPanel";

/**
 * HUD layout: fixed corner status readout (Header) + fixed corner nav
 * (HudNav) over a single scrolling column, instead of a persistent
 * sidebar rail. Content gets top/bottom padding to clear both HUD panels.
 */
export default function CyberpunkTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Cursor />
      <Header profile={content.profile} />
      <HudNav />
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 pb-40 pt-16 sm:px-6 sm:pt-20 lg:py-16 lg:pb-40 lg:pt-20">
        <Hero profile={content.profile} />
        <section id="about">
          <GlitchText
            text="[ PROFILE ]"
            as="h2"
            className="mb-6 font-mono text-sm font-bold uppercase tracking-widest"
            style={{ color: "var(--cp-cyan)" }}
          />
          <div className="cp-panel flex flex-col gap-3 p-5">
            {content.profile.bio.map((paragraph, i) => (
              <p key={i} className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--cp-text)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
        <WorkGrid projects={content.projects} />
        <SkillsReadout skills={content.skills} />
        <ContactPanel contact={content.contact} name={content.profile.name} />
      </div>
    </div>
  );
}
