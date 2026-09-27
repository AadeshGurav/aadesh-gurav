import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a, button, [role="button"], summary, input, textarea, select, label, [tabindex]:not([tabindex="-1"])';

/**
 * Custom crosshair cursor: rAF-throttled mousemove writes position to CSS
 * vars on <html> (no per-move React state/re-renders), styled entirely in
 * theme.css using the theme's existing chromatic-aberration cyan/magenta
 * pair. Hidden on touch via the theme.css hover/pointer media gate.
 *
 * A delegated mouseover/mouseout pair toggles `.cursor-hover-active` on
 * <html> over clickable elements, so the reticle itself reacts instead of
 * the native pointer cursor reappearing.
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
    function onOver(e: MouseEvent) {
      if (e.target instanceof Element && e.target.closest(INTERACTIVE)) {
        document.documentElement.classList.add("cursor-hover-active");
      }
    }
    function onOut(e: MouseEvent) {
      if (e.target instanceof Element && e.target.closest(INTERACTIVE)) {
        document.documentElement.classList.remove("cursor-hover-active");
      }
    }
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
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
