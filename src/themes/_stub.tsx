import type { ThemeComponentProps } from "./registry";

/**
 * Placeholder for a theme not yet built (Phases 1-7 of the redesign plan).
 * Renders real content plainly so the theme registry/switcher work end-to-end
 * today; gets replaced by that theme's real layout when it's built.
 */
export function createStubTheme(themeName: string) {
  return function StubTheme({ content }: ThemeComponentProps) {
    return (
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-xs uppercase tracking-widest opacity-60">{themeName} — coming soon</p>
        <h1 className="text-3xl font-semibold">{content.profile.name}</h1>
        <p className="opacity-80">{content.profile.tagline}</p>
        <a href={`mailto:${content.contact.email}`} className="underline">
          {content.contact.email}
        </a>
      </main>
    );
  };
}
