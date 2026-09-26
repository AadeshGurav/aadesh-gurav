import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import ProjectList from "./ProjectList";
import SkillsRow from "./SkillsRow";
import ContactBlock from "./ContactBlock";
import Reveal from "./Reveal";

export default function FlatMinimalTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Nav name={content.profile.name} />
      <Hero profile={content.profile} />
      <Reveal>
        <About bio={content.profile.bio} />
      </Reveal>
      <ProjectList projects={content.projects} />
      <Reveal>
        <SkillsRow skills={content.skills} />
      </Reveal>
      <Reveal>
        <ContactBlock contact={content.contact} name={content.profile.name} />
      </Reveal>
    </div>
  );
}
