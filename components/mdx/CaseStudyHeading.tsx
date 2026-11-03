import { Children, isValidElement, type ComponentProps, type ReactNode } from "react";
import { headingId } from "@/lib/mdx-headings";

type HeadingProps = ComponentProps<"h2">;

function headingText(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (isValidElement<{ children?: ReactNode }>(child)) {
        return headingText(child.props.children);
      }
      return "";
    })
    .join("");
}

export default function CaseStudyHeading({
  children,
  id,
  ...props
}: HeadingProps) {
  const generatedId = headingId(headingText(children));

  return (
    <h2
      id={id || generatedId}
      className="mb-step mt-section scroll-mt-32 font-display text-heading font-medium tracking-tight"
      {...props}
    >
      {children}
    </h2>
  );
}
