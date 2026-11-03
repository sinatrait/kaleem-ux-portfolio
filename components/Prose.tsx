import type { ComponentProps } from "react";

type ProseProps = ComponentProps<"div">;

export default function Prose({ className = "", ...props }: ProseProps) {
  return (
    <div
      className={`max-w-reading text-text [&_a]:text-accent-text [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-wide [&_blockquote]:text-text-muted [&_blockquote]:italic [&_code]:rounded-control [&_code]:bg-surface-raised [&_code]:px-code-x [&_code]:py-code-y [&_h1]:mb-step [&_h1]:font-display [&_h1]:text-heading [&_h1]:font-medium [&_h1]:tracking-tight [&_h2]:mb-step [&_h2]:mt-section [&_h2]:font-display [&_h2]:text-subheading [&_h2]:font-medium [&_h2]:tracking-tight [&_h3]:mb-tight [&_h3]:mt-wide [&_h3]:font-medium [&_h3]:text-body-lg [&_li]:pl-tight [&_ol]:my-step [&_ol]:list-decimal [&_ol]:pl-list [&_p]:text-body [&_p]:leading-relaxed [&_p+p]:mt-step [&_ul]:my-step [&_ul]:list-disc [&_ul]:pl-list ${className}`}
      {...props}
    />
  );
}
