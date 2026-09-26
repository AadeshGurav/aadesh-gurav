import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________";

/**
 * Decryption-style text scramble: characters resolve left-to-right through
 * random glyphs before settling to the real text. Shared by GlitchText
 * (hover) and the WorkGrid media reveal (activation) — one scramble
 * mechanic, two triggers. Off under reduced motion (resolves instantly).
 */
export function useScramble(text: string, speed = 35) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const scramble = useCallback(
    (onDone?: () => void) => {
      if (reducedRef.current) {
        setDisplay(text);
        onDone?.();
        return;
      }
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
          onDone?.();
        }
      }, speed);
    },
    [text, speed]
  );

  useEffect(
    () => () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    },
    []
  );

  return { display, scramble };
}
