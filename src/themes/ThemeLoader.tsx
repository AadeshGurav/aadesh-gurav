import { Suspense, lazy, useMemo } from "react";
import { content } from "@/content";
import { getTheme } from "./registry";
import { useTheme } from "./useTheme";
import ThemeSkeleton from "./ThemeSkeleton";
import ThemeSwitcher from "./ThemeSwitcher";

export default function ThemeLoader() {
  const { themeId, setThemeId, randomize } = useTheme();
  const ActiveTheme = useMemo(() => lazy(getTheme(themeId).load), [themeId]);

  return (
    <>
      <main>
        <Suspense fallback={<ThemeSkeleton themeId={themeId} />}>
          <ActiveTheme content={content} />
        </Suspense>
      </main>
      <ThemeSwitcher current={themeId} onSelect={setThemeId} onSurprise={randomize} />
    </>
  );
}
