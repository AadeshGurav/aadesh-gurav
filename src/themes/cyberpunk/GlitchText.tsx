import type { CSSProperties } from "react";
import { useScramble } from "./useScramble";

/**
 * Hover-triggered decryption-style text scramble. Delight-tier only — used
 * on the hero name and section headers, not every link. Off under reduced
 * motion. See useScramble.ts for the shared scramble mechanic (also used by
 * the project media reveal in ProjectCard.tsx).
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
  const { display, scramble } = useScramble(text);

  return (
    <Tag onMouseEnter={() => scramble()} className={`inline-block ${className}`} style={style}>
      {display}
    </Tag>
  );
}
