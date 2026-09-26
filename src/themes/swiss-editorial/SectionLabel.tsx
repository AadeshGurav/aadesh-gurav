export default function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <span className="text-sm font-medium" style={{ color: "var(--se-accent)" }}>
        {number}
      </span>
      <h2 className="text-sm font-medium uppercase tracking-widest" style={{ color: "var(--se-ink)" }}>
        {title}
      </h2>
      <span className="h-px flex-1" style={{ background: "var(--se-hairline)" }} />
    </div>
  );
}
