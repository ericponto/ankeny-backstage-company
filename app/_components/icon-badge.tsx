import type { ReactNode } from "react";

export type IconBadgeProps = {
  icon: ReactNode;
  className?: string;
};

export function IconBadge({ icon, className }: IconBadgeProps) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full shadow-md ${className ?? ""}`.trim()}
    >
      {icon}
    </div>
  );
}
