import { useRef, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const LONG_PRESS_MS = 600;

export default function Masthead({ name }: { name: string }) {
  const [showNote, setShowNote] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startPress = () => {
    pressTimer.current = setTimeout(() => {
      setShowNote(true);
      setTimeout(() => setShowNote(false), 2600);
    }, LONG_PRESS_MS);
  };

  const cancelPress = () => {
    if (pressTimer.current !== null) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  return (
    <header className="mx-auto max-w-6xl px-4 pt-8 sm:px-8">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--se-accent)" }}>
        Vol. 01 — Engineering Notes
      </p>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <a
          href="#home"
          className="press long-press-target se-link inline-block text-3xl font-bold uppercase tracking-tight sm:text-4xl"
          style={{ color: "var(--se-ink)" }}
          onPointerDown={startPress}
          onPointerUp={cancelPress}
          onPointerCancel={cancelPress}
          onPointerLeave={cancelPress}
        >
          {name}
        </a>
        <nav className="flex gap-4 pt-2 text-xs font-medium uppercase tracking-widest">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="press se-link" style={{ color: "var(--se-muted)" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      {showNote && (
        <p className="se-margin-note is-visible" aria-hidden="true">
          ed. note — thanks for reading the fine print.
        </p>
      )}
      <div className="mt-6 h-px w-full" style={{ background: "var(--se-ink)" }} />
    </header>
  );
}
