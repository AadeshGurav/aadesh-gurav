import type { Profile } from "@/content";

export default function IntroSpread({ profile }: { profile: Profile }) {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-1">
          <span className="text-sm font-medium" style={{ color: "var(--se-accent)" }}>
            01
          </span>
        </div>
        <div className="col-span-12 sm:col-span-8">
          <h1
            className="multiline text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
            style={{ color: "var(--se-ink)" }}
          >
            {profile.tagline}
          </h1>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <p className="text-sm font-medium uppercase tracking-widest" style={{ color: "var(--se-muted)" }}>
            {profile.role}
          </p>
          <p className="mt-2 text-sm" style={{ color: "var(--se-muted)" }}>
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
