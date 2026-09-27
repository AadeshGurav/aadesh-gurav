import { useEffect } from "react";

/**
 * Custom cursor: a soft accent-colored glow that trails the real pointer.
 * Position is written straight to CSS vars on <html> (no React state/rerender
 * per mousemove); the "trail" is a plain CSS transition on transform, not JS
 * easing — the var jumps instantly, the transition animates toward it.
 * Hidden entirely off hover-capable/fine-pointer devices (see theme.css).
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
    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="gn-custom-cursor" aria-hidden="true" />;
}
