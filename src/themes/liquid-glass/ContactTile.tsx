import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/content";
import MaterializePanel from "./MaterializePanel";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function ContactTile({ contact, name }: { contact: ContactInfo; name: string }) {
  return (
    <section id="contact" className="px-4 py-6 sm:px-6 lg:px-0">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--al-accent)" }}>
        Contact
      </h2>
      <MaterializePanel>
        <p className="mb-4 text-sm" style={{ color: "var(--al-muted)" }}>
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
                className="al-social press flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
                style={{ background: "var(--al-accent)", color: "white" }}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                {social.label}
              </a>
            );
          })}
        </div>
        <p className="mt-6 text-xs" style={{ color: "var(--al-muted)" }}>
          &copy; {new Date().getFullYear()} {name}
        </p>
      </MaterializePanel>
    </section>
  );
}
