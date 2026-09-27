import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "@/content";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

const LONG_PRESS_MS = 600;
const EGG_VISIBLE_MS = 2200;

/**
 * The big typographic moment: profile.tagline set oversized, carrying the
 * page's primary visual interest instead of a panel or a hero image. The
 * cursor-follow glow that used to live here is now page-wide (see
 * CursorGlow.tsx, rendered once at the theme root) — this section no longer
 * hosts its own spotlight.
 */
export default function Hero({ profile }: { profile: Profile }) {
  const [showEgg, setShowEgg] = useState(false);
  const pressTimer = useRef<number>();
  const hideTimer = useRef<number>();

  const clearPressTimer = () => {
    window.clearTimeout(pressTimer.current);
    pressTimer.current = undefined;
  };

  const startPress = () => {
    clearPressTimer();
    pressTimer.current = window.setTimeout(() => {
      setShowEgg(true);
      window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setShowEgg(false), EGG_VISIBLE_MS);
    }, LONG_PRESS_MS);
  };

  useEffect(() => {
    return () => {
      clearPressTimer();
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-12"
    >
      <p className="mb-5 text-sm font-medium uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
        {profile.role} · {profile.location}
      </p>
      <h1
        className="multiline max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight"
        style={{ color: "var(--fm-ink)" }}
      >
        {profile.tagline}
      </h1>
      <p
        className="press mt-6 w-fit text-base font-medium"
        style={{ color: "var(--fm-muted)" }}
        onPointerDown={startPress}
        onPointerUp={clearPressTimer}
        onPointerCancel={clearPressTimer}
        onPointerLeave={clearPressTimer}
      >
        {profile.name}
      </p>
      {showEgg && (
        <p className="fm-egg" aria-live="polite">
          nice — you found this
        </p>
      )}
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
