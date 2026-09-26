import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/content";
import GlitchText from "./GlitchText";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function ContactPanel({ contact, name }: { contact: ContactInfo; name: string }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <GlitchText
        text="[ ESTABLISH CONNECTION ]"
        as="h2"
        className="mb-6 font-mono text-sm font-bold uppercase tracking-widest"
        style={{ color: "var(--cp-cyan)" }}
      />
      <div className="cp-panel flex flex-col gap-3 p-5">
        {contact.socials.map((social) => {
          const Icon = social.icon ? icons[social.icon] : null;
          return (
            <a
              key={social.href}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="press flex min-w-0 items-center gap-2 font-mono text-sm"
              style={{ color: "var(--cp-text)" }}
            >
              {Icon && <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" style={{ color: "var(--cp-magenta)" }} />}
              <span className="min-w-0 break-all">
                {social.label}: {social.href.replace("mailto:", "")}
              </span>
            </a>
          );
        })}
      </div>
      <p className="mt-6 font-mono text-xs" style={{ color: "var(--cp-muted)" }}>
        &copy; {new Date().getFullYear()} {name}
      </p>
    </section>
  );
}
