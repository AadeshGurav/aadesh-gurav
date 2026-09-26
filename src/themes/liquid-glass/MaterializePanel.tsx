import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Apple-design "materialize" entrance: blur + scale animate together, not a
 * plain opacity fade — glass arriving as a real material. Critically damped
 * (no bounce/overshoot) per the skill: bounce is reserved for gesture-driven
 * momentum, and nothing here is dragged.
 */
export default function MaterializePanel({
  children,
  className = "",
  bodyClassName = "p-6 sm:p-8",
  delayMs = 0,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  /** Override the default padded body — pass "" for full-bleed content
   * (e.g. a media thumbnail that should reach the tile's rounded edge). */
  bodyClassName?: string;
  delayMs?: number;
  /** Reveal on mount (next frame) instead of waiting for scroll-into-view —
   * for content that's already above the fold, like the sidebar. */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    if (immediate) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={`al-tile ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.97)",
        filter: visible ? "blur(0px)" : "blur(6px)",
        transition: `opacity 400ms var(--ease-out) ${delayMs}ms, transform 400ms var(--ease-out) ${delayMs}ms, filter 400ms var(--ease-out) ${delayMs}ms`,
      }}
    >
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
