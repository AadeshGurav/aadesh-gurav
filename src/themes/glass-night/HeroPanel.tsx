import type { Profile } from "@/content";
import GlassPanel from "./GlassPanel";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** Identity + nav. One bento cell among many now, not a sticky sidebar. */
export default function HeroPanel({ profile }: { profile: Profile }) {
  return (
    <div id="home">
      <GlassPanel>
        <p className="mb-3 text-sm font-medium" style={{ color: "var(--gn-accent)" }}>
          Now building
        </p>
        <h1 className="text-3xl font-semibold leading-tight" style={{ color: "var(--gn-text)" }}>
          {profile.name}
        </h1>
        <p className="mt-2 text-sm font-medium" style={{ color: "var(--gn-muted)" }}>
          {profile.role} · {profile.location}
        </p>
        <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--gn-text)" }}>
          {profile.tagline}
        </p>
        <a
          href="#work"
          className="gn-hover-lift press mt-6 inline-block rounded-full px-5 py-2.5 text-sm font-medium"
          style={{ background: "var(--gn-accent)", color: "var(--gn-bg)" }}
        >
          See what's deployed
        </a>
        <nav className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="gn-hover-lift press rounded-lg px-2 py-2 text-sm font-medium"
              style={{ color: "var(--gn-muted)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </GlassPanel>
    </div>
  );
}
