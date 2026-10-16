import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

export type ActionLinkVariant = "primary" | "secondary" | "ghost" | "inline";
export type ActionLinkSize = "sm" | "md" | "lg";

const actionLinkClasses = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-maroon-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-maroon-300 bg-white px-6 py-2.5 text-sm font-bold text-maroon-600 transition hover:border-maroon-500 hover:text-maroon-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-white hover:text-gold-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
  inline:
    "inline-flex items-center gap-2 font-bold underline-offset-8 transition hover:underline",
} as const;

const actionLinkSizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl sm:text-2xl",
} as const;

export type ActionLinkProps = {
  href: string;
  variant?: ActionLinkVariant;
  size?: ActionLinkSize;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function ActionLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  target,
  rel,
  external,
  onClick,
}: ActionLinkProps) {
  const isExternal = Boolean(external || /^https?:\/\//.test(href));

  return (
    <Link
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noreferrer" : undefined)}
      onClick={onClick}
      className={`${actionLinkClasses[variant]} ${actionLinkSizes[size]} ${className ?? ""}`.trim()}
    >
      {children}
    </Link>
  );
}

export type SharedButtonProps = ActionLinkProps;
