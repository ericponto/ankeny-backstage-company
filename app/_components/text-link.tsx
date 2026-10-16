import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { ActionLink, type ActionLinkProps } from "./action-link";

const inlineLinkTones = {
  maroon: "text-maroon-500 hover:text-maroon-700",
  gold: "text-gold-200 hover:text-gold-100",
} as const;

export type TextLinkProps = Omit<ActionLinkProps, "variant" | "size"> & {
  variant?: "inline";
  tone?: keyof typeof inlineLinkTones;
  showArrow?: boolean;
};

export function TextLink({
  href,
  className,
  children,
  target,
  rel,
  external,
  tone = "maroon",
  showArrow = false,
}: TextLinkProps) {
  return (
    <ActionLink
      href={href}
      variant="inline"
      className={`${inlineLinkTones[tone]} ${className ?? ""}`.trim()}
      target={target}
      rel={rel}
      external={external}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
        )}
      </span>
    </ActionLink>
  );
}
