import type { ComponentType } from "react";
import type { SiteContent } from "@/content";

export type ThemeId =
  | "dark-ops"
  | "swiss-editorial"
  | "neubrutalist"
  | "glass-night"
  | "liquid-glass"
  | "flat-minimal"
  | "cyberpunk"
  | "bento";

export interface ThemeComponentProps {
  content: SiteContent;
}

export type ThemeComponent = ComponentType<ThemeComponentProps>;

export interface ThemeDef {
  id: ThemeId;
  name: string;
  load: () => Promise<{ default: ThemeComponent }>;
}

export const themes: ThemeDef[] = [
  { id: "dark-ops", name: "Dark Ops / Terminal", load: () => import("./dark-ops") },
  { id: "swiss-editorial", name: "Swiss Editorial", load: () => import("./swiss-editorial") },
  { id: "neubrutalist", name: "Neubrutalist Poster", load: () => import("./neubrutalist") },
  { id: "glass-night", name: "Glassmorphic Night", load: () => import("./glass-night") },
  { id: "liquid-glass", name: "Apple Liquid Glass", load: () => import("./liquid-glass") },
  { id: "flat-minimal", name: "Flat Minimal", load: () => import("./flat-minimal") },
  { id: "cyberpunk", name: "Cyberpunk / Neon", load: () => import("./cyberpunk") },
  { id: "bento", name: "Bento Dashboard", load: () => import("./bento") },
];

export function getTheme(id: ThemeId): ThemeDef {
  const theme = themes.find((t) => t.id === id);
  if (!theme) throw new Error(`Unknown theme id: ${id}`);
  return theme;
}
