import { useEffect, useState } from "react";
import StatTile from "./StatTile";

function formatDuration(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

/** A genuinely live stat, not a decorative fake — ticks every second. */
export default function LiveCounterTile() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <StatTile>
      <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--bt-muted)" }}>
        Time on this page
      </p>
      <p className="mt-2 font-mono text-2xl font-semibold" style={{ color: "var(--bt-accent)" }}>
        {formatDuration(seconds)}
      </p>
    </StatTile>
  );
}
