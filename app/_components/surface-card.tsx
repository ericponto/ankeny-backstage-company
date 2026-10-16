import type { ReactNode } from "react";

export type SurfaceCardProps = {
  className?: string;
  children: ReactNode;
  tone?: "default" | "highlight" | "dark";
};

export function SurfaceCard({
  className,
  children,
  tone = "default",
}: SurfaceCardProps) {
  const toneClasses = {
    default: "rounded-3xl border border-[#e4d6c3] bg-ivory-50 shadow-sm",
    highlight:
      "rounded-2xl border border-gold-400 bg-ivory-50 shadow-md shadow-gold-900/5",
    dark: "rounded-2xl border border-gold-500/30 bg-white/5",
  };

  return (
    <article className={`${toneClasses[tone]} ${className ?? ""}`.trim()}>
      {children}
    </article>
  );
}
