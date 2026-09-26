/** Fixed dark aurora behind every glass panel. Purely decorative; drift
 * animation is paused under prefers-reduced-motion (see theme.css). */
export default function AuroraBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="gn-blob absolute -left-1/4 -top-1/4 h-[60vh] w-[60vh] rounded-full opacity-40 blur-3xl"
        style={{ background: "oklch(0.5 0.18 300)" }}
      />
      <div
        className="gn-blob absolute -right-1/4 top-1/3 h-[55vh] w-[55vh] rounded-full opacity-35 blur-3xl"
        style={{ background: "oklch(0.55 0.15 200)" }}
      />
      <div
        className="gn-blob absolute bottom-0 left-1/4 h-[50vh] w-[50vh] rounded-full opacity-30 blur-3xl"
        style={{ background: "oklch(0.55 0.16 350)" }}
      />
    </div>
  );
}
