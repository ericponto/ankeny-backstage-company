import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm font-extrabold uppercase tracking-[0.22em] text-gold-700 ${className ?? ""}`.trim()}
    >
      {children}
    </p>
  );
}
