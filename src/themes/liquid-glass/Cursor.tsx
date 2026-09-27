import { useEffect } from "react";

const INTERACTIVE =
  'a, button, [role="button"], summary, input, textarea, select, label, [tabindex]:not([tabindex="-1"])';

/**
 * Custom cursor: a small glass ring echoing the capsule nav's material
 * (see .al-tabbar in theme.css). Position is written straight to CSS custom
 * properties on the root element, rAF-throttled, so mousemove never triggers
 * a React re-render. Hidden on touch via the CSS media gate in theme.css.
 *
 * A delegated mouseover/mouseout pair toggles `.cursor-hover-active` on the
 * root over clickable elements, so the ring itself reacts instead of the
 * native pointer cursor reappearing.
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
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="al-custom-cursor" aria-hidden="true" />;
}
