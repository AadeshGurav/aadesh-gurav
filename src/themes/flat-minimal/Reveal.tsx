import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades + lifts children into view the first time they scroll into the
 * viewport. Purpose: prevent a jarring appearance on first visit (see the
 * plan's Motion & Animation Standards). Skips straight to visible under
 * prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delayMs = 0,
  className,
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
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
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 250ms var(--ease-out) ${delayMs}ms, transform 250ms var(--ease-out) ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
