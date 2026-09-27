import { useRef } from "react";
import type { Profile } from "@/content";
import GlassPanel from "./GlassPanel";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const LONG_PRESS_MS = 600;

/** Identity + nav. One bento cell among many now, not a sticky sidebar. */
export default function HeroPanel({ profile }: { profile: Profile }) {
  const hostRef = useRef<HTMLHeadingElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // Long-press easter egg on the name: a refraction pulse from the touch
  // point. A quick tap never fires it — the timeout is cleared on release.
  const clearPress = () => {
    clearTimeout(timerRef.current);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLHeadingElement>) => {
    const host = hostRef.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    timerRef.current = setTimeout(() => {
      const ripple = document.createElement("span");
      ripple.className = "gn-ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.addEventListener("animationend", () => ripple.remove());
      host.appendChild(ripple);
    }, LONG_PRESS_MS);
  };

  return (
    <div id="home">
      <GlassPanel>
        <p className="mb-3 text-sm font-medium" style={{ color: "var(--gn-accent)" }}>
          Now building
        </p>
        <h1
          ref={hostRef}
          className="gn-ripple-host press long-press-target text-3xl font-semibold leading-tight"
          style={{ color: "var(--gn-text)" }}
          onPointerDown={onPointerDown}
          onPointerUp={clearPress}
          onPointerCancel={clearPress}
          onPointerLeave={clearPress}
        >
          {profile.name}
        </h1>
        <p className="mt-2 text-sm font-medium" style={{ color: "var(--gn-muted)" }}>
          {profile.role} · {profile.location}
        </p>
        <p className="multiline mt-5 text-base leading-relaxed" style={{ color: "var(--gn-text)" }}>
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
