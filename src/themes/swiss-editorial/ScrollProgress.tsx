import { useEffect, useRef } from "react";

/** Thin editorial scroll-progress rule across the top. Purpose: state
 * indication ("where am I in this read"), a magazine-native device. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
        if (ref.current) ref.current.style.width = `${pct}%`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] w-full" aria-hidden="true">
      <div ref={ref} className="h-full" style={{ width: 0, background: "var(--se-accent)" }} />
    </div>
  );
}
