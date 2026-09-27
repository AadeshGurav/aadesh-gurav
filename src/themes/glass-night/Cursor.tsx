import { useEffect } from "react";

const INTERACTIVE =
  'a, button, [role="button"], summary, input, textarea, select, label, [tabindex]:not([tabindex="-1"])';

/**
 * Custom cursor: a soft accent-colored glow that trails the real pointer.
 * Position is written straight to CSS vars on <html> (no React state/rerender
 * per mousemove); the "trail" is a plain CSS transition on transform, not JS
 * easing — the var jumps instantly, the transition animates toward it.
 * Hidden entirely off hover-capable/fine-pointer devices (see theme.css).
 *
 * A delegated mouseover/mouseout pair toggles `.cursor-hover-active` on
 * <html> over clickable elements, so the glow itself reacts instead of the
 * native pointer cursor reappearing (every link/button has its own
 * `cursor: pointer` that otherwise wins over the root's `cursor: none`).
 */
export default function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const root = document.documentElement;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${e.clientX}px`);
        root.style.setProperty("--cursor-y", `${e.clientY}px`);
      });
    };
    const onOver = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest(INTERACTIVE)) {
        root.classList.add("cursor-hover-active");
      }
    };
    const onOut = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest(INTERACTIVE)) {
        root.classList.remove("cursor-hover-active");
      }
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="gn-custom-cursor" aria-hidden="true" />;
}
