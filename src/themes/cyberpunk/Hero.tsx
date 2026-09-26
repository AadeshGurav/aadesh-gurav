import type { Profile } from "@/content";
import GlitchText from "./GlitchText";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="home" className="relative mx-auto max-w-3xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute -left-10 top-8 h-24 w-[130%] opacity-20"
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
        className="relative text-4xl font-black uppercase tracking-tight sm:text-6xl"
        style={{ color: "var(--cp-text)" }}
      />
      <p className="relative mt-6 max-w-xl text-base leading-relaxed" style={{ color: "var(--cp-muted)" }}>
        {profile.tagline}
      </p>
      <a
        href="#work"
        className="press relative mt-8 inline-block px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide"
        style={{ background: "var(--cp-cyan)", color: "var(--cp-bg)" }}
      >
        View work →
      </a>
    </section>
  );
}
