import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import ProjectList from "./ProjectList";
import SkillsRow from "./SkillsRow";
import ContactBlock from "./ContactBlock";
import Reveal from "./Reveal";

/**
 * Product-page structure, not a sidebar dashboard: a full-width vertical
 * rhythm of sections (hero statement → about → project strip → skills →
 * contact), each generously spaced. Distinct from swiss-editorial's
 * masthead + single editorial column — this theme carries hierarchy through
 * oversized type and whitespace rather than a running text flow.
 */
export default function FlatMinimalTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Nav name={content.profile.name} />
      <main className="flex flex-col">
        <Hero profile={content.profile} />
        <Reveal className="fm-section">
          <About bio={content.profile.bio} />
        </Reveal>
        <ProjectList projects={content.projects} />
        <Reveal className="fm-section">
          <SkillsRow skills={content.skills} />
        </Reveal>
        <Reveal className="fm-section">
          <ContactBlock contact={content.contact} name={content.profile.name} />
        </Reveal>
      </main>
    </div>
  );
}
