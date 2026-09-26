import { useCallback, useEffect, useState } from "react";
import { themes, type ThemeId } from "./registry";

export const STORAGE_KEY = "portfolio-theme";

function pickRandom(): ThemeId {
  return themes[Math.floor(Math.random() * themes.length)].id;
}

export function readStoredTheme(): ThemeId | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return themes.some((t) => t.id === v) ? (v as ThemeId) : null;
  } catch {
    return null;
  }
}

export function useTheme() {
  const [themeId, setThemeIdState] = useState<ThemeId>(() => readStoredTheme() ?? pickRandom());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch {
      // storage unavailable (private browsing) — theme still works for this session
    }
    document.documentElement.setAttribute("data-theme", themeId);
  }, [themeId]);

  const randomize = useCallback(() => setThemeIdState(pickRandom()), []);

  return { themeId, setThemeId: setThemeIdState, randomize };
}
