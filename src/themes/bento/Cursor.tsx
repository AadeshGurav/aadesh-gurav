import { useEffect, useRef } from "react";

/**
 * A small rounded "tile" that trails the pointer, echoing this theme's
 * chunky rounded-block language. Position is written to CSS custom
 * properties on <html> from a rAF-throttled mousemove listener, never
 * through React state, so a mouse move never triggers a re-render. There's
 * no CSS transition on the transform, so it tracks the pointer directly —
 * already instant, so there's no lag to drop under reduced motion.
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

  return <div className="bt-cursor" aria-hidden="true" />;
}
