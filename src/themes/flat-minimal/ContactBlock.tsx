import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/content";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function ContactBlock({ contact, name }: { contact: ContactInfo; name: string }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
        Contact
      </h2>
      <p className="mb-6 text-base" style={{ color: "var(--fm-muted)" }}>
        Feel free to reach out for collaborations, project inquiries, or just to say hello.
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
              className="press flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:opacity-70"
              style={{ borderColor: "var(--fm-border)", color: "var(--fm-ink)" }}
            >
              {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
              {social.label}
            </a>
          );
        })}
      </div>
      <p className="mt-10 text-xs" style={{ color: "var(--fm-muted)" }}>
        &copy; {new Date().getFullYear()} {name}
      </p>
    </section>
  );
}
