import type { Profile } from "@/content";

export default function HeroBlock({ profile }: { profile: Profile }) {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
      <p className="mb-4 inline-block border-2 px-3 py-1 text-xs font-black uppercase tracking-wide" style={{ borderColor: "var(--nb-ink)", background: "var(--nb-accent)" }}>
        Read this.
      </p>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 h-full w-full sm:-bottom-4 sm:-right-4"
          style={{ background: "var(--nb-accent)", border: "2px solid var(--nb-ink)" }}
        />
        <h1
          className="multiline relative border-2 px-4 py-6 text-3xl font-black leading-[1.05] sm:px-8 sm:py-10 sm:text-5xl"
          style={{ background: "var(--nb-bg)", borderColor: "var(--nb-ink)", color: "var(--nb-ink)" }}
        >
          {profile.tagline}
        </h1>
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
