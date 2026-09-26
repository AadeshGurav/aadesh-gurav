import { Home, User, Code2, Cpu, Send } from "lucide-react";

const links = [
  { label: "Home", href: "#home", Icon: Home },
  { label: "About", href: "#about", Icon: User },
  { label: "Work", href: "#work", Icon: Code2 },
  { label: "Skills", href: "#skills", Icon: Cpu },
  { label: "Contact", href: "#contact", Icon: Send },
];

/**
 * Corner-anchored HUD nav, replacing the persistent sidebar rail. Extends
 * SkillsReadout's `[ONLINE]`-bracket readout language into a fixed nav
 * instead of introducing a second visual vocabulary.
 */
export default function HudNav() {
  return (
    <nav
      aria-label="Section navigation"
      className="cp-hud-panel fixed bottom-3 right-3 z-40 flex flex-col gap-0.5 p-2 font-mono text-[10px] uppercase tracking-wide sm:bottom-4 sm:right-4"
    >
      <span className="mb-1 px-1" style={{ color: "var(--cp-magenta)" }}>
        [NAV]
      </span>
      {links.map(({ label, href, Icon }) => (
        <a
          key={href}
          href={href}
          className="cp-hud-btn press flex items-center gap-2 px-2 py-1.5"
          style={{ color: "var(--cp-text)" }}
        >
          <Icon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--cp-cyan)" }} />
          {label}
        </a>
      ))}
    </nav>
  );
}
