import { useEffect, useRef, useState } from "react";
import type { Profile } from "@/content";

const LONG_PRESS_MS = 600;
const STAMP_DURATION_MS = 900;

export default function HeroBlock({ profile }: { profile: Profile }) {
  // Mobile long-press easter egg on the hero identity block — see the
  // stamp-slam keyframes in theme.css for the payload.
  const [stamped, setStamped] = useState(false);
  const pressTimer = useRef<number | null>(null);
  const resetTimer = useRef<number | null>(null);

  const clearPressTimer = () => {
    if (pressTimer.current !== null) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  const startPress = () => {
    clearPressTimer();
    pressTimer.current = window.setTimeout(() => {
      setStamped(true);
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setStamped(false), STAMP_DURATION_MS);
    }, LONG_PRESS_MS);
  };

  useEffect(
    () => () => {
      clearPressTimer();
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    },
    []
  );

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
      <p className="mb-4 inline-block border-2 px-3 py-1 text-xs font-black uppercase tracking-wide" style={{ borderColor: "var(--nb-ink)", background: "var(--nb-accent)" }}>
        Read this.
      </p>
      <div
        className={`relative nb-hero-identity ${stamped ? "nb-easter-stamp" : ""}`}
        onPointerDown={startPress}
        onPointerUp={clearPressTimer}
        onPointerCancel={clearPressTimer}
        onPointerLeave={clearPressTimer}
      >
        <div
          aria-hidden="true"
          className="nb-hero-shadow absolute -bottom-3 -right-3 h-full w-full sm:-bottom-4 sm:-right-4"
          style={{ background: "var(--nb-accent)", border: "2px solid var(--nb-ink)" }}
        />
        <h1
          className="multiline press relative border-2 px-4 py-6 text-3xl font-black leading-[1.05] sm:px-8 sm:py-10 sm:text-5xl"
          style={{ background: "var(--nb-bg)", borderColor: "var(--nb-ink)", color: "var(--nb-ink)" }}
        >
          {profile.tagline}
        </h1>
        {stamped && (
          <span className="nb-easter-badge" aria-hidden="true">
            Certified easter egg
          </span>
        )}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="nb-press px-6 py-3 text-sm font-black uppercase"
          style={{ background: "var(--nb-ink)", color: "var(--nb-bg)" }}
        >
          See the work →
        </a>
        <p className="text-sm font-bold uppercase" style={{ color: "var(--nb-muted)" }}>
          {profile.role} · {profile.location}
        </p>
      </div>
    </section>
  );
}
