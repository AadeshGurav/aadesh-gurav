import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a, button, [role="button"], summary, input, textarea, select, label, [tabindex]:not([tabindex="-1"])';

/**
 * Custom terminal-caret cursor. Position is written straight to CSS vars on
 * <html> from a rAF-throttled mousemove listener — no React state, so a
 * mouse move never triggers a re-render. The visual block itself only shows
 * under `(hover: hover) and (pointer: fine)` (see theme.css); this listener
 * is cheap enough to leave attached everywhere.
 *
 * A delegated mouseover/mouseout pair toggles `.cursor-hover-active` on
 * <html> when the pointer is over a clickable element, so the cursor itself
 * can visually react (see theme.css) instead of the native pointer cursor
 * reappearing — every link/button/summary has its own `cursor: pointer`
 * (browser default or a Tailwind utility) that otherwise wins over the
 * theme root's `cursor: none` by CSS specificity.
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
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div className="do-custom-cursor" aria-hidden="true" />;
}
