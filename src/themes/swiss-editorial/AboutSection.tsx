import SectionLabel from "./SectionLabel";

export default function AboutSection({ bio }: { bio: string[] }) {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-12 sm:px-8">
      <SectionLabel number="02" title="About" />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col gap-4 sm:col-span-8">
          {bio.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed" style={{ color: "var(--se-ink)" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
