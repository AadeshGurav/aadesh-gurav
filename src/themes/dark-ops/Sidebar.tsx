import { useEffect, useState } from "react";
import type { Profile } from "@/content";

const links = [
  { label: "--about", href: "#about" },
  { label: "--work", href: "#work" },
  { label: "--skills", href: "#skills" },
  { label: "--try-it", href: "#try-it" },
  { label: "--contact", href: "#contact" },
];

/**
 * Boot sequence + nav. A normal block at the top on mobile (the hero);
 * becomes a sticky left column at lg+ so the terminal doesn't sit as one
 * centered strip on a huge flat-black void.
 */
export default function Sidebar({ profile }: { profile: Profile }) {
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
    <div id="home" className="do-sidebar px-4 pb-10 pt-10 sm:px-6 lg:px-0 lg:py-16">
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
      <nav className="mt-8 flex flex-wrap gap-x-4 gap-y-1 lg:flex-col">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="press" style={{ color: "var(--do-muted)" }}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
