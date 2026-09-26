import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import Header from "./Header";
import Hero from "./Hero";
import GlitchText from "./GlitchText";
import WorkGrid from "./WorkGrid";
import SkillsReadout from "./SkillsReadout";
import ContactPanel from "./ContactPanel";

export default function CyberpunkTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero profile={content.profile} />
      <section id="about" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <GlitchText
          text="[ PROFILE ]"
          as="h2"
          className="mb-6 font-mono text-sm font-bold uppercase tracking-widest"
          style={{ color: "var(--cp-cyan)" }}
        />
        <div className="cp-panel flex flex-col gap-3 p-5">
          {content.profile.bio.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--cp-text)" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <WorkGrid projects={content.projects} />
      <SkillsReadout skills={content.skills} />
      <ContactPanel contact={content.contact} name={content.profile.name} />
    </div>
  );
}
