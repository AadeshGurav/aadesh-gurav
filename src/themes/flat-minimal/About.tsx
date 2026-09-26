export default function About({ bio }: { bio: string[] }) {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
        About
      </h2>
      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--fm-ink)" }}>
        {bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
