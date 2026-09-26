const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ name }: { name: string }) {
  return (
    <header className="sticky top-4 z-40 mx-auto flex max-w-2xl items-center justify-between gap-4 px-4">
      <div className="gn-panel flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2.5 sm:px-6">
        <a href="#home" className="press text-sm font-semibold" style={{ color: "var(--gn-text)" }}>
          {name}
        </a>
        <nav className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="press" style={{ color: "var(--gn-muted)" }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
