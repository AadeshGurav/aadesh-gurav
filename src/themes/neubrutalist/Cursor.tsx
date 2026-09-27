import { useEffect, useRef } from "react";

/**
 * Chunky offset-shadow square cursor, matching this theme's hard-shadow
 * grammar (see .nb-card/.nb-press in theme.css). Position is written to CSS
 * custom properties on <html> from a rAF-throttled mousemove listener, never
 * through React state, so a mouse move never triggers a re-render.
 * Hidden on touch via the (hover: hover) and (pointer: fine) gate in CSS.
 */
export default function Cursor() {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const handleMove = (event: MouseEvent) => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${event.clientX}px`);
        root.style.setProperty("--cursor-y", `${event.clientY}px`);
        frame.current = null;
      });
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return <div className="nb-custom-cursor" aria-hidden="true" />;
}
