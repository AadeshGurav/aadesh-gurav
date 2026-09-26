/** Soft pastel color washes behind the glass tiles — Control-Center-style
 * depth. Without this the light theme reads as a flat, empty void on wide
 * screens (exactly what glass needs something to refract). Purely
 * decorative; drift is paused under prefers-reduced-motion (see theme.css). */
export default function AmbientBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="al-blob absolute -left-1/5 -top-1/5 h-[50vh] w-[50vh] rounded-full opacity-50 blur-3xl"
        style={{ background: "oklch(0.85 0.08 250)" }}
      />
      <div
        className="al-blob absolute -right-1/6 top-1/4 h-[45vh] w-[45vh] rounded-full opacity-40 blur-3xl"
        style={{ background: "oklch(0.88 0.09 340)" }}
      />
      <div
        className="al-blob absolute bottom-0 left-1/3 h-[45vh] w-[45vh] rounded-full opacity-40 blur-3xl"
        style={{ background: "oklch(0.87 0.08 160)" }}
      />
    </div>
  );
}
