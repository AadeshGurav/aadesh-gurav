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
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
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
  }, []);

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
      <div className="p-6 sm:p-8">{children}</div>
    </div>
  );
}
