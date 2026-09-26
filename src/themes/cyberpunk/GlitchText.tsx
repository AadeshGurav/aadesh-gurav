import { useEffect, useRef, useState, type CSSProperties } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________";

/**
 * Hover-triggered decryption-style text scramble: characters resolve
 * left-to-right through random glyphs before settling to the real text.
 * Delight-tier only — used on the hero name and section headers, not every
 * link, or it stops feeling special. Off under reduced motion.
 */
export default function GlitchText({
  text,
  as: Tag = "span",
  className = "",
  style,
}: {
  text: string;
  as?: "span" | "h1" | "h2";
  className?: string;
  style?: CSSProperties;
}) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  function scramble() {
    if (reducedRef.current) return;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    let revealCount = 0;
    intervalRef.current = window.setInterval(() => {
      revealCount += 1;
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealCount) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
      if (revealCount >= text.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 35);
  }

  useEffect(() => () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  }, []);

  return (
    <Tag onMouseEnter={scramble} className={`inline-block ${className}`} style={style}>
      {display}
    </Tag>
  );
}
