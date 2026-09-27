import { useRef, useState } from "react";
import type { Profile } from "@/content";
import GlitchText from "./GlitchText";
import { useScramble } from "./useScramble";

const EASTER_EGG_MESSAGE = "[ SIGNAL INTERCEPTED — YOU FOUND THE BACK CHANNEL ]";
const LONG_PRESS_MS = 600;

/**
 * Identity block, now a normal in-flow HUD panel instead of a persistent
 * sidebar rail — nav moved to the corner-anchored HudNav.
 *
 * Mobile easter egg: long-pressing the name (~600ms) scrambles a hidden
 * message into view via the same useScramble mechanic GlitchText and
 * ProjectCard's media reveal already use, rather than a second scramble
 * implementation.
 */
export default function Hero({ profile }: { profile: Profile }) {
  const [eggRevealed, setEggRevealed] = useState(false);
  const { display, scramble } = useScramble(EASTER_EGG_MESSAGE);
  const pressTimer = useRef<number | null>(null);

  function startPress() {
    pressTimer.current = window.setTimeout(() => {
      setEggRevealed(true);
      scramble();
    }, LONG_PRESS_MS);
  }

  function cancelPress() {
    if (pressTimer.current !== null) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  }

  return (
    <section id="home" className="cp-panel relative overflow-hidden px-5 py-10 sm:px-8 sm:py-14">
      <div
        aria-hidden="true"
        className="absolute -left-10 top-6 h-20 w-[150%] opacity-20"
        style={{
          background: "linear-gradient(90deg, var(--cp-magenta), var(--cp-cyan))",
          clipPath: "polygon(0 40%, 100% 0, 100% 60%, 0 100%)",
        }}
      />
      <p className="relative mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--cp-magenta)" }}>
        {profile.role} // {profile.location}
      </p>
      <div
        className="press inline-block"
        onPointerDown={startPress}
        onPointerUp={cancelPress}
        onPointerCancel={cancelPress}
        onPointerLeave={cancelPress}
      >
        <GlitchText
          text={profile.name}
          as="h1"
          className="relative text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl"
          style={{ color: "var(--cp-text)" }}
        />
      </div>
      {eggRevealed && (
        <p
          className="relative mt-2 font-mono text-[11px] uppercase tracking-widest"
          style={{ color: "var(--cp-cyan)" }}
        >
          {display}
        </p>
      )}
      <p className="multiline relative mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "var(--cp-muted)" }}>
        {profile.tagline}
      </p>
      <a
        href="#work"
        className="cp-cta press relative mt-6 inline-block px-5 py-2.5 font-mono text-sm font-medium uppercase tracking-wide"
        style={{ background: "var(--cp-cyan)", color: "var(--cp-bg)" }}
      >
        View work →
      </a>
    </section>
  );
}
