const links = [
  { label: "--about", href: "#about" },
  { label: "--work", href: "#work" },
  { label: "--skills", href: "#skills" },
  { label: "--try-it", href: "#try-it" },
  { label: "--contact", href: "#contact" },
];

export default function StatusBar() {
  return (
    <header
      className="sticky top-0 z-40 border-b px-4 py-3 text-sm sm:px-6"
      style={{ borderColor: "var(--do-border)", background: "var(--do-bg)" }}
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2">
        <span style={{ color: "var(--do-accent)" }}>aadesh@portfolio:~$</span>
        <nav className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="press"
              style={{ color: "var(--do-muted)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
