import { useEffect, useRef } from "react";

/**
 * Custom terminal-caret cursor. Position is written straight to CSS vars on
 * <html> from a rAF-throttled mousemove listener — no React state, so a
 * mouse move never triggers a re-render. The visual block itself only shows
 * under `(hover: hover) and (pointer: fine)` (see theme.css); this listener
 * is cheap enough to leave attached everywhere.
 */
export default function Cursor() {
  const latest = useRef({ x: -100, y: -100 });
  const scheduled = useRef(false);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      latest.current = { x: e.clientX, y: e.clientY };
      if (scheduled.current) return;
      scheduled.current = true;
      requestAnimationFrame(() => {
        const root = document.documentElement.style;
        root.setProperty("--cursor-x", `${latest.current.x}px`);
        root.setProperty("--cursor-y", `${latest.current.y}px`);
        scheduled.current = false;
      });
    }
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return <div className="do-custom-cursor" aria-hidden="true" />;
}
