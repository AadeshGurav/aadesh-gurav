import type { ReactNode } from "react";

export default function StatTile({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`bt-tile p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}
