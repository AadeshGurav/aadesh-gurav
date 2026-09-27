import { useEffect, useRef } from "react";

/**
 * Custom crosshair cursor: rAF-throttled mousemove writes position to CSS
 * vars on <html> (no per-move React state/re-renders), styled entirely in
 * theme.css using the theme's existing chromatic-aberration cyan/magenta
 * pair. Hidden on touch via the theme.css hover/pointer media gate.
 */
export default function Cursor() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
        rafRef.current = null;
      });
    }
    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div className="cp-custom-cursor cp-custom-cursor-trail" />
      <div className="cp-custom-cursor cp-custom-cursor-ghost" />
      <div className="cp-custom-cursor cp-custom-cursor-reticle" />
    </div>
  );
}
