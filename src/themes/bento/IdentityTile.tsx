import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "@/content";
import StatTile from "./StatTile";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

const LONG_PRESS_MS = 600;
const REVEAL_MS = 2800;

const identityTone: CSSProperties = {
  "--bt-tile-bg": "oklch(0.32 0.12 305)",
  "--bt-tile-fg": "oklch(0.97 0.01 305)",
  "--bt-tile-shadow": "0 10px 26px oklch(0.3 0.12 305 / 0.32), 0 3px 8px oklch(0.3 0.12 305 / 0.22)",
  "--bt-tile-shadow-hover": "0 18px 40px oklch(0.3 0.12 305 / 0.4), 0 5px 12px oklch(0.3 0.12 305 / 0.26)",
} as CSSProperties;

export default function IdentityTile({ profile }: { profile: Profile }) {
  // Mobile long-press easter egg on the name: a small "secret compartment"
  // chip pops open beneath it. A quick tap clears the timer before it fires.
  const [revealed, setRevealed] = useState(false);
  const pressTimer = useRef<number | null>(null);
  const hideTimer = useRef<number | null>(null);

  const clearPressTimer = () => {
    if (pressTimer.current !== null) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  const startPress = () => {
    clearPressTimer();
    pressTimer.current = window.setTimeout(() => {
      setRevealed(true);
      if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setRevealed(false), REVEAL_MS);
    }, LONG_PRESS_MS);
  };

  useEffect(
    () => () => {
      clearPressTimer();
      if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
    },
    []
  );

  return (
    <StatTile id="home" className="sm:col-span-2 lg:col-span-3 lg:row-span-2" bold tone={identityTone}>
      <p className="text-sm font-semibold" style={{ color: "oklch(0.88 0.06 305)" }}>
        {profile.role} · {profile.location}
      </p>
      <h1
        className="press long-press-target mt-2 select-none text-3xl font-extrabold tracking-tight sm:text-5xl"
        onPointerDown={startPress}
        onPointerUp={clearPressTimer}
        onPointerCancel={clearPressTimer}
        onPointerLeave={clearPressTimer}
      >
        {profile.name}
      </h1>
      {revealed && (
        <p className="bt-secret" aria-hidden="true">
          Nice find — that&rsquo;s the last compartment in this box.
        </p>
      )}
      <p className="multiline mt-4 max-w-md text-base leading-relaxed" style={{ color: "oklch(0.92 0.02 305)" }}>
        {profile.tagline}
      </p>
      <div className="mt-6 flex items-center gap-3">
        {profile.socials.map((social) => {
          const Icon = social.icon ? icons[social.icon] : null;
          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="press flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: "oklch(1 0 0 / 0.14)" }}
            >
              {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : social.label[0]}
            </a>
          );
        })}
      </div>
    </StatTile>
  );
}
