const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Masthead({ name }: { name: string }) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-8 sm:px-8">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--se-accent)" }}>
        Vol. 01 — Engineering Notes
      </p>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <a
          href="#home"
          className="press text-3xl font-bold uppercase tracking-tight sm:text-4xl"
          style={{ color: "var(--se-ink)" }}
        >
          {name}
        </a>
        <nav className="flex gap-4 pt-2 text-xs font-medium uppercase tracking-widest">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="press" style={{ color: "var(--se-muted)" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-6 h-px w-full" style={{ background: "var(--se-ink)" }} />
    </header>
  );
}
