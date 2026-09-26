const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** Slim top bar — the theme's only navigation, on every viewport. */
export default function Nav({ name }: { name: string }) {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        borderColor: "var(--fm-border)",
        background: "color-mix(in oklch, var(--fm-canvas) 88%, transparent)",
        backdropFilter: "blur(6px)",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        <a href="#home" className="fm-link text-sm font-semibold" style={{ color: "var(--fm-ink)" }}>
          {name}
        </a>
        <ul className="flex gap-4 text-sm sm:gap-6" style={{ color: "var(--fm-muted)" }}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="fm-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
