import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactInfo } from "@/content";
import Terminal from "./Terminal";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function ContactPrompt({ contact }: { contact: ContactInfo }) {
  return (
    <Terminal id="contact" title="Contact">
      <p className="mb-4" style={{ color: "var(--do-accent)" }}>
        $ contact --info
      </p>
      <div className="flex flex-col gap-2 text-sm">
        {contact.socials.map((social) => {
          const Icon = social.icon ? icons[social.icon] : null;
          return (
            <a
              key={social.href}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="press flex min-w-0 items-center gap-2"
              style={{ color: "var(--do-text)" }}
            >
              {Icon && <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" style={{ color: "var(--do-accent)" }} />}
              <span className="min-w-0 break-all">
                {social.label}: {social.href.replace("mailto:", "")}
              </span>
            </a>
          );
        })}
      </div>
    </Terminal>
  );
}
