import { useEffect, useState } from "react";

const links = [
  { label: "--about", href: "#about" },
  { label: "--work", href: "#work" },
  { label: "--skills", href: "#skills" },
  { label: "--try-it", href: "#try-it" },
  { label: "--contact", href: "#contact" },
];

function formatUptime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

/** Sticky top bar: nav + a real (not simulated) session-uptime clock. */
export default function StatusBar() {
  const [uptimeMs, setUptimeMs] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setUptimeMs(Date.now() - start), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 border-b px-4 py-3 text-sm sm:px-6"
      style={{ borderColor: "var(--do-border)", background: "var(--do-bg)" }}
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span style={{ color: "var(--do-accent)" }}>aadesh@portfolio:~$</span>
        <nav className="flex flex-wrap gap-x-4 gap-y-1">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="do-nav-link press" style={{ color: "var(--do-muted)" }}>
              {link.label}
            </a>
          ))}
        </nav>
        <span className="hidden sm:inline" style={{ color: "var(--do-muted)" }}>
          uptime {formatUptime(uptimeMs)}
        </span>
      </div>
    </header>
  );
}
