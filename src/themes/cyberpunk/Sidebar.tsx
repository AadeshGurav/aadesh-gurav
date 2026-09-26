import type { Profile } from "@/content";
import GlitchText from "./GlitchText";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/**
 * Identity + nav + the diagonal accent. A normal block at the top on mobile
 * (the hero); becomes a sticky left column at lg+ so the wide viewport gets
 * real structure instead of one centered strip on a flat black void.
 */
export default function Sidebar({ profile }: { profile: Profile }) {
  return (
    <div id="home" className="cp-sidebar relative overflow-hidden px-4 py-10 sm:px-6 lg:px-0 lg:py-16">
      <div
        aria-hidden="true"
        className="absolute -left-10 top-6 h-20 w-[150%] opacity-20"
        style={{
          background: "linear-gradient(90deg, var(--cp-magenta), var(--cp-cyan))",
          clipPath: "polygon(0 40%, 100% 0, 100% 60%, 0 100%)",
        }}
      />
      <p className="relative mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--cp-magenta)" }}>
        {profile.role} // {profile.location}
      </p>
      <GlitchText
        text={profile.name}
        as="h1"
        className="relative text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--cp-text)" }}
      />
      <p className="relative mt-4 text-sm leading-relaxed" style={{ color: "var(--cp-muted)" }}>
        {profile.tagline}
      </p>
      <a
        href="#work"
        className="press relative mt-6 inline-block px-5 py-2.5 font-mono text-sm font-medium uppercase tracking-wide"
        style={{ background: "var(--cp-cyan)", color: "var(--cp-bg)" }}
      >
        View work →
      </a>
      <nav className="relative mt-8 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wide lg:flex-col">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="press" style={{ color: "var(--cp-muted)" }}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
