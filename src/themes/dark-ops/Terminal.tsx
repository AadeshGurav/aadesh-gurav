import type { ReactNode } from "react";

/** Shared terminal-panel chrome for this theme's sections. Not exported
 * outside dark-ops/ — each theme's layout is its own, per the plan. */
export default function Terminal({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      <div className="rounded-md border" style={{ borderColor: "var(--do-border)", background: "var(--do-panel)" }}>
        <div
          className="border-b px-4 py-2 text-xs uppercase tracking-wide"
          style={{ borderColor: "var(--do-border)", color: "var(--do-muted)" }}
        >
          [ {title} ]
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </section>
  );
}
