import type { Profile } from "@/content";
import GlassPanel from "./GlassPanel";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/**
 * Identity + nav. A normal panel at the top on mobile (the hero); becomes a
 * sticky left column at lg+ so the aurora-lit page uses its full width
 * intentionally instead of one centered glass strip.
 */
export default function Sidebar({ profile }: { profile: Profile }) {
  return (
    <div id="home" className="gn-sidebar px-4 py-6 sm:px-6 lg:px-0 lg:py-16">
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
          className="press mt-6 inline-block rounded-full px-5 py-2.5 text-sm font-medium"
          style={{ background: "var(--gn-accent)", color: "var(--gn-bg)" }}
        >
          See what's deployed
        </a>
        <nav className="mt-8 flex flex-wrap gap-x-4 gap-y-1 lg:flex-col lg:gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="press rounded-lg lg:px-2 lg:py-2 text-sm font-medium"
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
