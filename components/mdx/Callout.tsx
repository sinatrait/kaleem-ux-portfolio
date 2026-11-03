import type { ReactNode } from "react";

type CalloutProps = {
  title?: string;
  children: ReactNode;
};

export default function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="my-section rounded-card border border-border bg-surface-raised p-card">
      {title && (
        <h3 className="font-display text-subheading tracking-tight">{title}</h3>
      )}
      <div className={`${title ? "mt-tight " : ""}text-body text-text-muted`}>
        {children}
      </div>
    </aside>
  );
}
