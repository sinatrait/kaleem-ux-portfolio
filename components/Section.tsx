import type { ComponentProps } from "react";

type SectionProps = ComponentProps<"section">;

export default function Section({
  className = "",
  ...props
}: SectionProps) {
  return <section className={`py-section ${className}`} {...props} />;
}
