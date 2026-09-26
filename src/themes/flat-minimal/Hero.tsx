import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "@/content";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

/**
 * The big typographic moment: profile.tagline set oversized, carrying the
 * page's primary visual interest instead of a panel or a hero image. A
 * cursor-following spotlight adds a subtle accent wash, gated to
 * fine-pointer/hover devices and off under reduced motion.
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
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-12"
    >
      <div
        ref={spotRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: 0,
          background:
            "radial-gradient(640px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklch, var(--fm-accent) 10%, transparent), transparent 70%)",
        }}
      />
      <p className="mb-5 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
        {profile.role} · {profile.location}
      </p>
      <h1
        className="max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight"
        style={{ color: "var(--fm-ink)" }}
      >
        {profile.tagline}
      </h1>
      <p className="mt-6 text-base font-medium" style={{ color: "var(--fm-muted)" }}>
        {profile.name}
      </p>
      <a
        href="#projects"
        className="fm-cta press mt-10 inline-flex w-fit items-center rounded-md px-6 py-3 text-sm font-medium"
        style={{ background: "var(--fm-accent)", color: "var(--fm-on-accent)" }}
      >
        View work
      </a>
      <div className="mt-10 flex items-center gap-3">
        {profile.socials.map((social) => {
          const Icon = social.icon ? icons[social.icon] : null;
          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="fm-icon-link press flex h-10 w-10 items-center justify-center rounded-full border"
              style={{ borderColor: "var(--fm-border)", color: "var(--fm-ink)" }}
            >
              {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : social.label[0]}
            </a>
          );
        })}
      </div>
    </section>
  );
}
