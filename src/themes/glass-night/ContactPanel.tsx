import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/content";
import GlassPanel from "./GlassPanel";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function ContactPanel({ contact, name }: { contact: ContactInfo; name: string }) {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--gn-accent)" }}>
        Signal
      </h2>
      <GlassPanel>
        <p className="mb-4 text-sm" style={{ color: "var(--gn-muted)" }}>
          Send something up — I'm listening.
        </p>
        <div className="flex flex-wrap gap-3">
          {contact.socials.map((social) => {
            const Icon = social.icon ? icons[social.icon] : null;
            return (
              <a
                key={social.href}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="press flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                style={{ background: "oklch(1 0 0 / 0.08)", color: "var(--gn-text)" }}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" style={{ color: "var(--gn-accent)" }} />}
                {social.label}
              </a>
            );
          })}
        </div>
        <p className="mt-6 text-xs" style={{ color: "var(--gn-muted)" }}>
          &copy; {new Date().getFullYear()} {name}
        </p>
      </GlassPanel>
    </section>
  );
}
