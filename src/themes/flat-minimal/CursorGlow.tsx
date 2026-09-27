import { useEffect, useRef } from "react";

/**
 * Page-wide cursor-follow glow — this theme's answer to the custom-cursor
 * treatment. Position is written to CSS vars on <html> via a rAF-throttled
 * document listener (no React re-render per mouse pixel); the glow itself is
 * a single `fixed` layer positioned purely in CSS via theme.css's
 * `.fm-cursor-glow`. Inert on touch/coarse pointers and under reduced motion.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reduced) return;

    const root = document.documentElement;
    const glow = glowRef.current;
    if (!glow) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${e.clientX}px`);
        root.style.setProperty("--cursor-y", `${e.clientY}px`);
        glow.style.opacity = "1";
      });
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} aria-hidden="true" className="fm-cursor-glow" />;
}
