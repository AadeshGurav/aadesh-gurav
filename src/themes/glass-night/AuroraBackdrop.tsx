/** Fixed dark aurora behind every glass panel. Purely decorative: two large,
 * slow-drifting blobs (restraint over "everything glows") each wrapped in a
 * `.gn-blob-layer` that carries the scroll-linked translateZ parallax, plus
 * a static grain overlay so the blur reads as textured glass rather than a
 * flat plastic gradient. Drift and parallax both pause under
 * prefers-reduced-motion (see theme.css). */

// A tiled fractal-noise SVG, inlined as a data URI — no image asset, no dependency.
const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`,
  );

export default function AuroraBackdrop() {
  return (
    <div aria-hidden="true" className="gn-aurora-scene pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="gn-blob-layer absolute -left-1/4 -top-1/3 h-[85vh] w-[85vh]">
        <div
          className="gn-blob h-full w-full rounded-full opacity-35 blur-3xl"
          style={{ background: "oklch(0.5 0.16 300)" }}
        />
      </div>
      <div className="gn-blob-layer absolute -right-1/3 bottom-[-20%] h-[75vh] w-[75vh]">
        <div
          className="gn-blob h-full w-full rounded-full opacity-30 blur-3xl"
          style={{ background: "oklch(0.52 0.14 210)" }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ opacity: 0.05, mixBlendMode: "overlay", backgroundImage: `url("${GRAIN_SVG}")` }}
      />
    </div>
  );
}
