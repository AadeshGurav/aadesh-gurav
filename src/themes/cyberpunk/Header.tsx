export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b px-4 py-3 text-sm sm:px-6"
      style={{ borderColor: "var(--cp-border)", background: "var(--cp-bg)" }}
    >
      <span className="mx-auto flex max-w-6xl items-center gap-2 font-mono text-xs" style={{ color: "var(--cp-cyan)" }}>
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--cp-cyan)", boxShadow: "0 0 8px var(--cp-cyan)" }} />
        SYSTEM ONLINE
      </span>
    </header>
  );
}
