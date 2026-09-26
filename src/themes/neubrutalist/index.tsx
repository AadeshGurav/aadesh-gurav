import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import Header from "./Header";
import HeroBlock from "./HeroBlock";
import WorkGrid from "./WorkGrid";
import SkillStamps from "./SkillStamps";
import ContactBlock from "./ContactBlock";

export default function NeubrutalistTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Header name={content.profile.name} />
      <HeroBlock profile={content.profile} />
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        <h2
          className="mb-6 inline-block border-2 px-3 py-1 text-2xl font-black uppercase"
          style={{ borderColor: "var(--nb-ink)", background: "var(--nb-accent)" }}
        >
          The story.
        </h2>
        <div className="flex flex-col gap-4 sm:max-w-2xl">
          {content.profile.bio.map((paragraph, i) => (
            <p key={i} className="text-lg font-medium leading-relaxed" style={{ color: "var(--nb-ink)" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <WorkGrid projects={content.projects} />
      <SkillStamps skills={content.skills} />
      <ContactBlock contact={content.contact} name={content.profile.name} />
    </div>
  );
}
