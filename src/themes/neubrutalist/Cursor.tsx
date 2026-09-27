import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a, button, [role="button"], summary, input, textarea, select, label, [tabindex]:not([tabindex="-1"])';

/**
 * Chunky offset-shadow square cursor, matching this theme's hard-shadow
 * grammar (see .nb-card/.nb-press in theme.css). Position is written to CSS
 * custom properties on <html> from a rAF-throttled mousemove listener, never
 * through React state, so a mouse move never triggers a re-render.
 * Hidden on touch via the (hover: hover) and (pointer: fine) gate in CSS.
 *
 * A delegated mouseover/mouseout pair toggles `.cursor-hover-active` on
 * <html> over clickable elements, so the square itself reacts instead of
 * the native pointer cursor reappearing.
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
    const onOver = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest(INTERACTIVE)) {
        root.classList.add("cursor-hover-active");
      }
    };
    const onOut = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest(INTERACTIVE)) {
        root.classList.remove("cursor-hover-active");
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return <div className="nb-custom-cursor" aria-hidden="true" />;
}
