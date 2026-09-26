export default function About({ bio }: { bio: string[] }) {
  return (
    <section id="about" className="px-4 py-10 sm:px-6 lg:px-0">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--fm-accent)" }}>
        About
      </h2>
      <div className="max-w-2xl space-y-4 text-base leading-relaxed" style={{ color: "var(--fm-ink)" }}>
        {bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
