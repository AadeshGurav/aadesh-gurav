export default function StatusBar() {
  return (
    <header
      className="sticky top-0 z-40 border-b px-4 py-3 text-sm sm:px-6"
      style={{ borderColor: "var(--do-border)", background: "var(--do-bg)" }}
    >
      <span className="mx-auto flex max-w-6xl items-center" style={{ color: "var(--do-accent)" }}>
        aadesh@portfolio:~$
      </span>
    </header>
  );
}
