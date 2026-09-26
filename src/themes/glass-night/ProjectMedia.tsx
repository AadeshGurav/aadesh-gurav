import type { ProjectMedia as ProjectMediaType } from "@/content";

/**
 * Renders `project.media` inside the details/summary reveal. Only "gradient"
 * data exists today, but image/video are coded for since the type allows them.
 */
export default function ProjectMedia({ media }: { media: ProjectMediaType }) {
  const label = media.alt ?? "Project preview";

  if (media.kind === "video") {
    return <video src={media.value} controls aria-label={label} className="gn-media-swatch" />;
  }

  if (media.kind === "image") {
    return <img src={media.value} alt={label} className="gn-media-swatch" />;
  }

  if (media.kind === "gradient") {
    const hue = Number(media.value);
    return (
      <div
        role="img"
        aria-label={label}
        className="gn-media-swatch"
        style={{
          background: `linear-gradient(135deg, oklch(0.6 0.15 ${hue} / 0.85), oklch(0.6 0.15 ${hue + 50} / 0.45))`,
        }}
      />
    );
  }

  // "icon" media isn't part of the current content model's usage — nothing to show yet.
  return null;
}
