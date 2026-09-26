export default function About({ bio }: { bio: string[] }) {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
          About
        </h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed" style={{ color: "var(--fm-ink)" }}>
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
