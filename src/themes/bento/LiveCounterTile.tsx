import { useEffect, useState, type CSSProperties } from "react";
import StatTile from "./StatTile";

const counterTone: CSSProperties = {
  "--bt-tile-bg": "oklch(0.87 0.15 88)",
  "--bt-tile-fg": "oklch(0.24 0.08 88)",
  "--bt-tile-border": "oklch(0.78 0.14 88)",
  "--bt-tile-shadow": "0 6px 18px oklch(0.55 0.12 88 / 0.22), 0 1px 3px oklch(0.55 0.12 88 / 0.15)",
  "--bt-tile-shadow-hover": "0 14px 30px oklch(0.55 0.12 88 / 0.28)",
} as CSSProperties;

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
    <StatTile tone={counterTone}>
      <p className="text-xs font-bold uppercase tracking-wide opacity-80">Time on this page</p>
      <p className="mt-2 font-mono text-2xl font-bold">{formatDuration(seconds)}</p>
    </StatTile>
  );
}
