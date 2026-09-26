import type { Profile } from "@/content";
import MaterializePanel from "./MaterializePanel";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="home" className="mx-auto max-w-2xl px-4 pb-6 pt-12 sm:px-6 sm:pt-20">
      <MaterializePanel>
        <p className="mb-2 text-sm font-medium" style={{ color: "var(--al-accent)" }}>
          {profile.role} · {profile.location}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: "var(--al-text)" }}>
          {profile.name}
        </h1>
        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--al-muted)" }}>
          {profile.tagline}
        </p>
      </MaterializePanel>
    </section>
  );
}
