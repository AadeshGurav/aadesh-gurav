import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/content";
import StatTile from "./StatTile";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function ContactTile({ contact, name }: { contact: ContactInfo; name: string }) {
  return (
    <StatTile id="contact" className="sm:col-span-2">
      <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--bt-muted)" }}>
        Contact
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {contact.socials.map((social) => {
          const Icon = social.icon ? icons[social.icon] : null;
          return (
            <a
              key={social.href}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="press flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              style={{ background: "var(--bt-accent)", color: "white" }}
            >
              {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
              {social.label}
            </a>
          );
        })}
      </div>
      <p className="mt-4 text-xs" style={{ color: "var(--bt-muted)" }}>
        &copy; {new Date().getFullYear()} {name}
      </p>
    </StatTile>
  );
}
