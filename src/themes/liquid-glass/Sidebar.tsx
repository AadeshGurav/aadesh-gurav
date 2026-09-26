import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "@/content";
import MaterializePanel from "./MaterializePanel";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };
const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/**
 * Identity + nav. A normal block at the top of the page on mobile (acts as
 * the hero); becomes a sticky left column at lg+ so the wide viewport gets a
 * real two-column layout instead of one centered strip with dead space on
 * both sides.
 */
export default function Sidebar({ profile }: { profile: Profile }) {
  return (
    <div id="home" className="al-sidebar px-4 pt-12 sm:px-6 sm:pt-16 lg:px-0 lg:pt-20">
      <MaterializePanel immediate>
        <p className="mb-2 text-sm font-medium" style={{ color: "var(--al-accent)" }}>
          {profile.role} · {profile.location}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: "var(--al-text)" }}>
          {profile.name}
        </h1>
        <p className="multiline mt-4 text-base leading-relaxed" style={{ color: "var(--al-muted)" }}>
          {profile.tagline}
        </p>
        <nav className="mt-6 hidden flex-col gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="al-nav-link press rounded-lg px-3 py-2 text-sm font-medium"
              style={{ color: "var(--al-muted)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-6 flex items-center gap-3 lg:mt-8">
          {profile.socials.map((social) => {
            const Icon = social.icon ? icons[social.icon] : null;
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="al-social press flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: "oklch(0 0 0 / 0.05)", color: "var(--al-text)" }}
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : social.label[0]}
              </a>
            );
          })}
        </div>
      </MaterializePanel>
    </div>
  );
}
