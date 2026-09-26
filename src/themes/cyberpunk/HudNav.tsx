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
 *
 * A vertical labeled stack is tall enough (~5 rows + header) to overlap
 * page content on a phone-height viewport, since `position: fixed` floats
 * over whatever's scrolled underneath it — confirmed live at 375px, where
 * it cut off the About/Contact text. Below `sm:` it collapses to a single
 * compact icon-only row (~48px tall) instead; the labeled column returns
 * at `sm:` and up where there's vertical room for it not to matter.
 *
 * Bottom-LEFT, not bottom-right: the global ThemeSwitcher button lives in
 * the bottom-right corner on every theme (fixed, z-[9999]) — confirmed via
 * real iPhone Safari screenshots that a bottom-right HudNav visually merges
 * with it. Header already owns the top-left corner, so bottom-left keeps
 * all four HUD corners distinct.
 */
export default function HudNav() {
  return (
    <nav
      aria-label="Section navigation"
      className="cp-hud-panel fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-3 z-40 flex items-center gap-0.5 p-1.5 font-mono text-[10px] uppercase tracking-wide sm:bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:left-4 sm:flex-col sm:items-stretch sm:gap-0.5 sm:p-2"
    >
      <span className="mb-1 hidden px-1 sm:block" style={{ color: "var(--cp-magenta)" }}>
        [NAV]
      </span>
      {links.map(({ label, href, Icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          className="cp-hud-btn press flex h-11 w-11 items-center justify-center gap-2 sm:h-auto sm:w-auto sm:justify-start sm:px-2 sm:py-1.5"
          style={{ color: "var(--cp-text)" }}
        >
          <Icon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--cp-cyan)" }} />
          <span className="hidden sm:inline">{label}</span>
        </a>
      ))}
    </nav>
  );
}
