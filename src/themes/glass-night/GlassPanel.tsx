import { useEffect, useRef, type ReactNode } from "react";

/**
 * Shared glass panel: blur + solid-fallback (theme.css) plus the theme's
 * signature interaction — a cursor-tracked specular sheen, gated to
 * hover-capable/fine-pointer devices and off under reduced motion.
 */
export default function GlassPanel({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reduced) return;
    const panel = panelRef.current;
    const sheen = sheenRef.current;
    if (!panel || !sheen) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = panel.getBoundingClientRect();
        sheen.style.setProperty("--sheen-x", `${e.clientX - rect.left}px`);
        sheen.style.setProperty("--sheen-y", `${e.clientY - rect.top}px`);
      });
    };
    const onEnter = () => { sheen.style.opacity = "1"; };
    const onLeave = () => { sheen.style.opacity = "0"; };

    panel.addEventListener("mousemove", onMove);
    panel.addEventListener("mouseenter", onEnter);
    panel.addEventListener("mouseleave", onLeave);
    return () => {
      panel.removeEventListener("mousemove", onMove);
      panel.removeEventListener("mouseenter", onEnter);
      panel.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id={id} ref={panelRef} className={`gn-panel ${className}`}>
      <div ref={sheenRef} className="gn-panel-sheen" aria-hidden="true" />
      <div className="relative p-6 sm:p-8">{children}</div>
    </div>
  );
}
