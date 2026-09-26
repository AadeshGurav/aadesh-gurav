import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/content";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function ContactBlock({ contact, name }: { contact: ContactInfo; name: string }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <div className="border-2 p-8 sm:p-12" style={{ borderColor: "var(--nb-ink)", background: "var(--nb-accent)" }}>
        <h2 className="text-3xl font-black uppercase sm:text-4xl" style={{ color: "var(--nb-ink)" }}>
          Say hi.
        </h2>
        <p className="mt-2 max-w-xl text-base font-medium" style={{ color: "var(--nb-ink)" }}>
          Got a project, a job, or just want to talk shop? Don't overthink it — send a message.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {contact.socials.map((social) => {
            const Icon = social.icon ? icons[social.icon] : null;
            return (
              <a
                key={social.href}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="nb-press flex items-center gap-2 px-5 py-3 text-sm font-black uppercase"
                style={{ background: "var(--nb-bg)", color: "var(--nb-ink)" }}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                {social.label}
              </a>
            );
          })}
        </div>
      </div>
      <p className="mt-6 text-xs font-bold uppercase" style={{ color: "var(--nb-muted)" }}>
        &copy; {new Date().getFullYear()} {name}
      </p>
    </section>
  );
}
