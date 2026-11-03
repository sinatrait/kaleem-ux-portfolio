import type { ComponentProps } from "react";

type TextLinkProps = ComponentProps<"a">;

export default function TextLink({
  className = "",
  ...props
}: TextLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-tight text-accent-text underline decoration-border underline-offset-4 transition-colors duration-motion ease-editorial hover:decoration-accent-text ${className}`}
      {...props}
    />
  );
}
