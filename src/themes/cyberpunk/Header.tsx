const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b px-4 py-3 text-sm sm:px-6"
      style={{ borderColor: "var(--cp-border)", background: "var(--cp-bg)" }}
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3">
        <span className="flex items-center gap-2 font-mono text-xs" style={{ color: "var(--cp-cyan)" }}>
          <span className="h-2 w-2 rounded-full" style={{ background: "var(--cp-cyan)", boxShadow: "0 0 8px var(--cp-cyan)" }} />
          SYSTEM ONLINE
        </span>
        <nav className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wide">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="press" style={{ color: "var(--cp-muted)" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
