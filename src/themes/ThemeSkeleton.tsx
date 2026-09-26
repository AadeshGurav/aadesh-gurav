import type { ThemeId } from "./registry";

/**
 * Suspense fallback shown while the active theme's chunk downloads. Renders
 * on the same [data-theme] base background (base.css) so there's no color
 * clash when the real theme finishes loading.
 */
export default function ThemeSkeleton({ themeId }: { themeId: ThemeId }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center" data-theme={themeId}>
      <span className="text-sm tracking-wide opacity-60" aria-busy="true">
        Aadesh Gurav
      </span>
    </div>
  );
}
