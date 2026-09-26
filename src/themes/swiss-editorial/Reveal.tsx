import { useEffect, useRef, useState, type ReactNode } from "react";

/** Theme-local copy of the scroll-reveal pattern (see Flat Minimal's Reveal.tsx).
 * Not yet promoted to a shared component — only a couple of themes use this
 * shape so far, per the plan's no-premature-sharing rule. */
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
