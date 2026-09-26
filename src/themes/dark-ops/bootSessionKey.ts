/** sessionStorage key for the boot-sequence once-per-session gate.
 * Lives in its own file (no React import) so ThemeSwitcher.tsx — loaded
 * eagerly for every theme — can reference it without pulling dark-ops'
 * lazy-loaded component code into the main bundle. */
export const DARK_OPS_BOOT_SESSION_KEY = "do-boot-seen";
