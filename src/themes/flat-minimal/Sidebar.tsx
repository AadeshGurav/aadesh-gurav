import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "@/content";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };
const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/**
 * Identity + nav + the cursor spotlight. A normal block at the top on
 * mobile (the hero); becomes a sticky left column at lg+ so the page uses
 * its full width intentionally instead of one centered strip.
 */
export default function Sidebar({ profile }: { profile: Profile }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reduced) return;
    const section = sectionRef.current;
    const spot = spotRef.current;
    if (!section || !spot) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        spot.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        spot.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      });
    };
    const onEnter = () => { spot.style.opacity = "1"; };
    const onLeave = () => { spot.style.opacity = "0"; };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="home"
      ref={sectionRef}
      className="fm-sidebar relative overflow-hidden px-4 pb-10 pt-10 sm:px-6 lg:px-0 lg:py-16"
    >
      <div
        ref={spotRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: 0,
          background:
            "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklch, var(--fm-accent) 12%, transparent), transparent 70%)",
        }}
      />
      <p className="mb-3 text-sm font-medium" style={{ color: "var(--fm-accent)" }}>
        {profile.role} · {profile.location}
      </p>
      <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--fm-ink)" }}>
        {profile.name}
      </h1>
      <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--fm-muted)" }}>
        {profile.tagline}
      </p>
      <a
        href="#projects"
        className="press mt-6 inline-block rounded-md px-5 py-2.5 text-sm font-medium"
        style={{ background: "var(--fm-accent)", color: "var(--fm-on-accent)" }}
      >
        View work
      </a>
      <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-1 lg:mt-8 lg:flex-col lg:gap-1">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="press rounded-md text-sm font-medium lg:px-0 lg:py-1"
            style={{ color: "var(--fm-muted)" }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="mt-6 flex items-center gap-3">
        {profile.socials.map((social) => {
          const Icon = social.icon ? icons[social.icon] : null;
          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="press flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:opacity-70"
              style={{ borderColor: "var(--fm-border)", color: "var(--fm-ink)" }}
            >
              {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : social.label[0]}
            </a>
          );
        })}
      </div>
    </div>
  );
}
