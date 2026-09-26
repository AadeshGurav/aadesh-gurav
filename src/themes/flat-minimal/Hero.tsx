import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "@/content";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

/**
 * Cursor-reactive spotlight behind the hero content. Purpose: delight, gated
 * to fine-pointer/hover-capable devices and off under reduced motion — a
 * cursor-tracking glow is exactly the kind of motion that gate exists for.
 */
export default function Hero({ profile }: { profile: Profile }) {
  const sectionRef = useRef<HTMLElement>(null);
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
    <section
      id="home"
      ref={sectionRef}
      className="relative mx-auto max-w-3xl overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pt-28"
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
      <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl" style={{ color: "var(--fm-ink)" }}>
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--fm-muted)" }}>
        {profile.tagline}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <a
          href="#projects"
          className="press rounded-md px-5 py-2.5 text-sm font-medium"
          style={{ background: "var(--fm-accent)", color: "var(--fm-on-accent)" }}
        >
          View work
        </a>
        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = social.icon ? icons[social.icon] : null;
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="press flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:opacity-70"
                style={{ borderColor: "var(--fm-border)", color: "var(--fm-ink)" }}
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : social.label[0]}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
