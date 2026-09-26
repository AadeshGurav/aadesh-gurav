export interface SocialLink {
  label: string;
  href: string;
  icon?: "github" | "linkedin" | "mail";
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string[];
  avatarUrl?: string;
  socials: SocialLink[];
  email: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  highlight?: string;
  show: boolean;
  order: number;
}

export interface ContactInfo {
  email: string;
  socials: SocialLink[];
  availability?: string;
}

export interface SiteContent {
  profile: Profile;
  skills: SkillGroup[];
  projects: Project[];
  contact: ContactInfo;
}
