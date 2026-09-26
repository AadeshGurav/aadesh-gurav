import type { Profile } from "@/content";
import GlitchText from "./GlitchText";

/**
 * Identity block, now a normal in-flow HUD panel instead of a persistent
 * sidebar rail — nav moved to the corner-anchored HudNav.
 */
export default function Hero({ profile }: { profile: Profile }) {
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
      <GlitchText
        text={profile.name}
        as="h1"
        className="relative text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--cp-text)" }}
      />
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
