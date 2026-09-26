import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "@/content";
import StatTile from "./StatTile";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function IdentityTile({ profile }: { profile: Profile }) {
  return (
    <StatTile id="home" className="sm:col-span-2 sm:row-span-2">
      <p className="text-sm font-medium" style={{ color: "var(--bt-accent)" }}>
        {profile.role} · {profile.location}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: "var(--bt-text)" }}>
        {profile.name}
      </h1>
      <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--bt-muted)" }}>
        {profile.tagline}
      </p>
      <div className="mt-6 flex items-center gap-3">
        {profile.socials.map((social) => {
          const Icon = social.icon ? icons[social.icon] : null;
          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="press flex h-10 w-10 items-center justify-center rounded-full border"
              style={{ borderColor: "var(--bt-border)", color: "var(--bt-text)" }}
            >
              {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : social.label[0]}
            </a>
          );
        })}
      </div>
    </StatTile>
  );
}
