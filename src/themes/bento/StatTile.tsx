import type { CSSProperties, ReactNode } from "react";

interface StatTileProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Larger radius + borderless edge for the hero-weight compartments (identity, featured project, contact). */
  bold?: boolean;
  /** Sets this tile's compartment colors via the --bt-tile-* custom properties consumed in theme.css. Omit for the neutral default surface. */
  tone?: CSSProperties;
}

export default function StatTile({ children, className = "", id, bold = false, tone }: StatTileProps) {
  return (
    <div id={id} className={`bt-tile relative ${bold ? "bt-tile--bold" : ""} p-5 sm:p-6 ${className}`} style={tone}>
      {children}
    </div>
  );
}
