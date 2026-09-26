const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function TabBar() {
  return (
    <nav
      className="al-tabbar flex max-w-[92vw] gap-1 overflow-x-auto px-2 py-2"
      aria-label="Section navigation"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="press flex-shrink-0 rounded-full px-3 py-2 text-xs font-medium sm:px-4 sm:text-sm"
          style={{ color: "var(--al-text)" }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
