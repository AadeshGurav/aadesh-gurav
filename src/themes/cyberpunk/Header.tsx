import type { Profile } from "@/content";

/**
 * HUD status readout, corner-anchored and fixed — not a full-width header.
 * Small enough to stay out of the reading column at every breakpoint.
 */
export default function Header({ profile }: { profile: Profile }) {
  return (
    <div
      className="cp-hud-panel fixed left-3 top-3 z-40 flex items-center gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-widest sm:left-4 sm:top-4"
      role="status"
    >
      <span className="cp-status-dot" aria-hidden="true" />
      <span style={{ color: "var(--cp-cyan)" }}>Online</span>
      <span className="hidden sm:inline" style={{ color: "var(--cp-muted)" }}>
        // {profile.name}
      </span>
    </div>
  );
}
