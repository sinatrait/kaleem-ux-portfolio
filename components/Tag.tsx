import type { ComponentProps } from "react";

export type TagVariant = "accent" | "neutral";

type TagProps = ComponentProps<"span"> & {
  variant?: TagVariant;
};

const variants: Record<TagVariant, string> = {
  accent: "bg-accent text-accent-contrast",
  neutral: "bg-surface-raised text-text-muted",
};

export default function Tag({
  className = "",
  variant = "neutral",
  ...props
}: TagProps) {
  return (
    <span
      className={`inline-flex items-center border border-border px-tag-x py-tag-y text-caption font-medium ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
