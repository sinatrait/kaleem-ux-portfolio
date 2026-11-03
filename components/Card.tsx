import type { ComponentProps } from "react";

type CardProps = ComponentProps<"article">;

export default function Card({ className = "", ...props }: CardProps) {
  return (
    <article
      className={`rounded-card border border-border bg-surface-raised p-card shadow-card ${className}`}
      {...props}
    />
  );
}
