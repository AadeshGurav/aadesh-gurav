import { useEffect, useRef, useState } from "react";
import type { Profile } from "@/content";
import { DARK_OPS_BOOT_SESSION_KEY as SESSION_KEY } from "./bootSessionKey";

const BOOT_LINES = [
  "Initializing kernel...",
  "Mounting /home/aadesh...",
  "Checking network interfaces... OK",
  "Loading profile.json...",
  "System ready.",
];

const LINE_DELAY_MS = 260;
const LONG_PRESS_MS = 600;

function hasSeenBootThisSession(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false; // private browsing — animation replays, harmless
  }
}

function markBootSeen(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // private browsing — nothing to persist, harmless
  }
}

/**
 * Boot-sequence intro + "whoami" reveal. Plays once per session; every
 * later visit (or prefers-reduced-motion) renders the end state instantly.
 */
export default function BootSequence({ profile }: { profile: Profile }) {
  const [skipAnimation] = useState(
    () =>
      hasSeenBootThisSession() ||
      (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  );
  const [visibleLines, setVisibleLines] = useState(skipAnimation ? BOOT_LINES.length : 0);
  const done = visibleLines >= BOOT_LINES.length;
  const [eggFound, setEggFound] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Long-press (mouse or touch) on the `whoami` line reveals a hidden log
  // line. A quick tap/click never starts a timer that fires, so it can't
  // interfere with anything else on that element.
  function startPress() {
    if (pressTimer.current) return;
    pressTimer.current = setTimeout(() => {
      pressTimer.current = null;
      setEggFound(true);
    }, LONG_PRESS_MS);
  }
  function cancelPress() {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  }
  useEffect(() => () => cancelPress(), []);

  useEffect(() => {
    if (skipAnimation || done) return;
    const t = setTimeout(() => setVisibleLines((n) => n + 1), LINE_DELAY_MS);
    return () => clearTimeout(t);
  }, [visibleLines, skipAnimation, done]);

  useEffect(() => {
    if (done) markBootSeen();
  }, [done]);

  return (
    <div id="home" className="do-boot px-4 pb-8 pt-10 sm:px-6 lg:px-0 lg:pt-16">
      <div className="flex flex-col gap-1 text-sm" aria-hidden="true">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <p key={i} className="do-boot-line">
            <span style={{ color: "var(--do-accent-dim)" }}>[boot] </span>
            <span style={{ color: "var(--do-muted)" }}>{line}</span>
          </p>
        ))}
      </div>
      {!done && (
        <button
          type="button"
          onClick={() => setVisibleLines(BOOT_LINES.length)}
          autoFocus
          className="do-skip press mt-2 text-xs underline"
          style={{ color: "var(--do-muted)" }}
        >
          skip boot sequence [enter]
        </button>
      )}
      {done && (
        <div className="mt-4 flex flex-col gap-1 text-base">
          <p style={{ color: "var(--do-accent)" }}>$ whoami</p>
          <h1
            className="press pl-4 text-base font-normal"
            style={{ color: "var(--do-text)" }}
            onPointerDown={startPress}
            onPointerUp={cancelPress}
            onPointerCancel={cancelPress}
            onPointerLeave={cancelPress}
          >
            {profile.name} — {profile.role}
          </h1>
          {eggFound && (
            <p
              className="do-log-entry do-egg-reveal border-l-2 pl-3 text-xs"
              style={{ borderColor: "var(--do-border)", color: "var(--do-accent-dim)" }}
            >
              [hidden] you found the easter egg. respect.
            </p>
          )}
          <p style={{ color: "var(--do-accent)" }}>$ cat tagline.txt</p>
          <p className="multiline pl-4" style={{ color: "var(--do-text)" }}>
            {profile.tagline}
          </p>
          <p aria-hidden="true" style={{ color: "var(--do-accent)" }}>
            <span className="do-cursor">_</span>
          </p>
        </div>
      )}
    </div>
  );
}
