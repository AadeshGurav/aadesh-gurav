import { useEffect, useRef } from "react";

/**
 * Minimal thin-ring custom cursor. Writes pointer position to CSS vars on
 * <html> via rAF-throttled mousemove — no React re-renders per move. Visually
 * gated to fine-pointer/hover devices in theme.css, so it's a no-op on touch.
 */
export default function Cursor() {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const handleMove = (event: MouseEvent) => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${event.clientX}px`);
        root.style.setProperty("--cursor-y", `${event.clientY}px`);
        rafId.current = null;
      });
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div className="se-custom-cursor" aria-hidden="true" />;
}
