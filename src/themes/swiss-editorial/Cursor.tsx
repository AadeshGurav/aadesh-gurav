import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a, button, [role="button"], summary, input, textarea, select, label, [tabindex]:not([tabindex="-1"])';

/**
 * Minimal thin-ring custom cursor. Writes pointer position to CSS vars on
 * <html> via rAF-throttled mousemove — no React re-renders per move. Visually
 * gated to fine-pointer/hover devices in theme.css, so it's a no-op on touch.
 *
 * A delegated mouseover/mouseout pair toggles `.cursor-hover-active` on
 * <html> over clickable elements, so the ring itself reacts instead of the
 * native pointer cursor reappearing.
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
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div className="se-custom-cursor" aria-hidden="true" />;
}
