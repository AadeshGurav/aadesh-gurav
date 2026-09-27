import type { CSSProperties } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/content";
import StatTile from "./StatTile";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

const contactTone: CSSProperties = {
  "--bt-tile-bg": "oklch(0.46 0.16 35)",
  "--bt-tile-fg": "oklch(0.98 0 0)",
  "--bt-tile-shadow": "0 10px 26px oklch(0.35 0.14 35 / 0.34)",
  "--bt-tile-shadow-hover": "0 18px 40px oklch(0.35 0.14 35 / 0.42)",
} as CSSProperties;

export default function ContactTile({ contact, name }: { contact: ContactInfo; name: string }) {
  return (
    <StatTile id="contact" className="sm:col-span-2 lg:col-span-4" bold tone={contactTone}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide opacity-80">Get in touch</p>
          <p className="mt-1 text-sm opacity-90">
            &copy; {new Date().getFullYear()} {name}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contact.socials.map((social) => {
            const Icon = social.icon ? icons[social.icon] : null;
            return (
              <a
                key={social.href}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="press flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ background: "oklch(1 0 0 / 0.16)" }}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                {social.label}
              </a>
            );
          })}
        </div>
      </div>
    </StatTile>
  );
}
