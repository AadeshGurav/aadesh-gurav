import type { ThemeComponentProps } from "../registry";
import "./theme.css";
import Cursor from "./Cursor";
import ScrollProgress from "./ScrollProgress";
import Masthead from "./Masthead";
import IntroSpread from "./IntroSpread";
import AboutSection from "./AboutSection";
import WorkIndex from "./WorkIndex";
import SkillsRun from "./SkillsRun";
import ContactIndex from "./ContactIndex";

export default function SwissEditorialTheme({ content }: ThemeComponentProps) {
  return (
    <div className="min-h-screen">
      <Cursor />
      <ScrollProgress />
      <Masthead name={content.profile.name} />
      <IntroSpread profile={content.profile} />
      <AboutSection bio={content.profile.bio} />
      <WorkIndex projects={content.projects} />
      <SkillsRun skills={content.skills} />
      <ContactIndex contact={content.contact} name={content.profile.name} />
    </div>
  );
}
