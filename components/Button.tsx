import type { ComponentProps } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-contrast transition-[filter] hover:brightness-90",
  secondary:
    "border border-border bg-surface-raised text-text hover:bg-surface",
  ghost: "text-text-muted hover:bg-surface-raised hover:text-text",
};

export default function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-control items-center justify-center gap-tight rounded-control px-button-x py-button-y text-small font-medium transition-colors duration-motion ease-editorial disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
