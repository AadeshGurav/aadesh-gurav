import { useEffect, useState } from "react";
import type { Profile } from "@/content";

/**
 * Boot-sequence hero: lines reveal via staggered opacity+translateY, not a
 * width-based typewriter (width isn't a transform/opacity property). Rare,
 * first-view-only moment, so a longer/theatrical beat is earned here — see
 * the plan's Motion & Animation Standards.
 */
export default function BootHero({ profile }: { profile: Profile }) {
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [started, setStarted] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const id = requestAnimationFrame(() => setStarted(true));
    return () => cancelAnimationFrame(id);
  }, [reduced]);

  const lines = [
    { text: "$ whoami", accent: true },
    { text: `${profile.name} — ${profile.role}`, indent: true },
    { text: "$ cat tagline.txt", accent: true },
    { text: profile.tagline, indent: true },
  ];

  return (
    <section id="home" className="mx-auto max-w-3xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
      {lines.map((line, i) => (
        <p
          key={i}
          className={line.indent ? "pl-4" : ""}
          style={{
            color: line.accent ? "var(--do-accent)" : "var(--do-text)",
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(4px)",
            transition: reduced
              ? "none"
              : `opacity 200ms var(--ease-out) ${i * 60}ms, transform 200ms var(--ease-out) ${i * 60}ms`,
          }}
        >
          {line.text}
        </p>
      ))}
      <p aria-hidden="true" style={{ color: "var(--do-accent)" }}>
        <span className="do-cursor">_</span>
      </p>
    </section>
  );
}
