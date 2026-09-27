import { useEffect } from "react";

/**
 * Custom cursor: a small glass ring echoing the capsule nav's material
 * (see .al-tabbar in theme.css). Position is written straight to CSS custom
 * properties on the root element, rAF-throttled, so mousemove never triggers
 * a React re-render. Hidden on touch via the CSS media gate in theme.css.
 */
export default function Cursor() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="al-custom-cursor" aria-hidden="true" />;
}
