const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ name }: { name: string }) {
  return (
    <header
      className="sticky top-0 z-40 border-b lg:hidden"
      style={{ borderColor: "var(--fm-border)", background: "color-mix(in oklch, var(--fm-canvas) 90%, transparent)", backdropFilter: "blur(6px)" }}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-sm font-semibold" style={{ color: "var(--fm-ink)" }}>
          {name}
        </a>
        <ul className="flex gap-4 text-sm sm:gap-6" style={{ color: "var(--fm-muted)" }}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:opacity-80">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
