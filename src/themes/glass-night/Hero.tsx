import type { Profile } from "@/content";
import GlassPanel from "./GlassPanel";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="home" className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <GlassPanel>
        <p className="mb-3 text-sm font-medium" style={{ color: "var(--gn-accent)" }}>
          Now building
        </p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: "var(--gn-text)" }}>
          {profile.name}
        </h1>
        <p className="mt-2 text-sm font-medium" style={{ color: "var(--gn-muted)" }}>
          {profile.role} · {profile.location}
        </p>
        <p className="mt-5 max-w-lg text-base leading-relaxed" style={{ color: "var(--gn-text)" }}>
          {profile.tagline}
        </p>
        <a
          href="#work"
          className="press mt-6 inline-block rounded-full px-5 py-2.5 text-sm font-medium"
          style={{ background: "var(--gn-accent)", color: "var(--gn-bg)" }}
        >
          See what's deployed
        </a>
      </GlassPanel>
    </section>
  );
}
