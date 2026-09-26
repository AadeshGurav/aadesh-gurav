import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import GlitchText from "./GlitchText";
import WorkGrid from "./WorkGrid";
import SkillsReadout from "./SkillsReadout";
import ContactPanel from "./ContactPanel";

export default function CyberpunkTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[300px_1fr] lg:gap-10 lg:px-6 lg:py-12">
        <Sidebar profile={content.profile} />
        <div className="flex flex-col gap-2">
          <section id="about" className="px-4 py-12 sm:px-6 lg:px-0 lg:py-0">
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
    </div>
  );
}
