import type { ContactInfo } from "@/content";
import SectionLabel from "./SectionLabel";

export default function ContactIndex({ contact, name }: { contact: ContactInfo; name: string }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <SectionLabel number="05" title="Contact" />
      <div className="flex flex-col gap-3">
        {contact.socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="press se-link text-lg underline underline-offset-4"
            style={{ color: "var(--se-ink)" }}
          >
            {social.label} — {social.href.replace("mailto:", "")}
          </a>
        ))}
      </div>
      <p className="mt-12 text-xs" style={{ color: "var(--se-muted)" }}>
        &copy; {new Date().getFullYear()} {name}
      </p>
    </section>
  );
}
