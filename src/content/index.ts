import { profile } from "./profile";
import { skills } from "./skills";
import { projects as rawProjects } from "./projects";
import { contact } from "./contact";
import type { SiteContent } from "./types";

export const content: SiteContent = {
  profile,
  skills,
  contact,
  projects: rawProjects.filter((p) => p.show).sort((a, b) => a.order - b.order),
};

export type { SiteContent, Profile, SkillGroup, Project, ContactInfo, SocialLink } from "./types";
