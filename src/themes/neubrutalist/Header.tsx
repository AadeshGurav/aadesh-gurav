const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ name }: { name: string }) {
  return (
    <header className="mx-auto max-w-5xl px-4 pt-6 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <a
          href="#home"
          className="nb-press px-4 py-2 text-xl font-black uppercase"
          style={{ background: "var(--nb-bg)", color: "var(--nb-ink)" }}
        >
          {name}
        </a>
        <nav className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nb-press px-3 py-1.5 text-sm font-bold uppercase"
              style={{ background: "var(--nb-accent)", color: "var(--nb-ink)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
