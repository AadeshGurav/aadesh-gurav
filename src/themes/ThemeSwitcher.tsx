import { Shuffle, Palette } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { themes, type ThemeId } from "./registry";

interface ThemeSwitcherProps {
  current: ThemeId;
  onSelect: (id: ThemeId) => void;
  onSurprise: () => void;
}

/**
 * Floating theme picker. Shared markup/behavior; visual skin comes from each
 * theme's own theme.css via `[data-theme="x"] .theme-switcher { ... }`
 * overrides — see src/themes/<id>/theme.css.
 */
export default function ThemeSwitcher({ current, onSelect, onSurprise }: ThemeSwitcherProps) {
  return (
    <div className="theme-switcher fixed bottom-4 right-4 z-[9999]">
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label="Choose theme"
            className="theme-switcher-trigger press flex h-12 w-12 items-center justify-center rounded-full bg-black/85 text-white shadow-lg backdrop-blur-sm ring-1 ring-white/10 transition-transform hover:scale-105"
          >
            <Palette className="h-5 w-5" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" sideOffset={12} className="theme-switcher-panel w-64">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Theme
          </p>
          <div className="flex flex-col gap-1">
            {themes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => onSelect(theme.id)}
                aria-pressed={theme.id === current}
                className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  theme.id === current
                    ? "bg-accent font-medium text-accent-foreground"
                    : "hover:bg-accent/50"
                }`}
              >
                {theme.name}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={onSurprise}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Shuffle className="h-4 w-4" aria-hidden="true" />
            Surprise me
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
