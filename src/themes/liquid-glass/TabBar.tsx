import { Home, User, Briefcase, Sparkles, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home", Icon: Home },
  { label: "About", href: "#about", Icon: User },
  { label: "Work", href: "#work", Icon: Briefcase },
  { label: "Skills", href: "#skills", Icon: Sparkles },
  { label: "Contact", href: "#contact", Icon: Mail },
];

/**
 * Floating capsule nav — real Liquid Glass tab bars are icon-driven islands
 * inset from every edge, never a full-width scrolling strip. Sized to its
 * content (5 × 44px targets + padding + gaps ≈ 260px), so it fits with room
 * to spare even at a 320px viewport — see the theme's report for the exact
 * arithmetic.
 */
export default function TabBar() {
  return (
    <nav className="al-tabbar" aria-label="Section navigation">
      {links.map(({ label, href, Icon }) => (
        <a key={href} href={href} className="al-tab press" aria-label={label} title={label}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
