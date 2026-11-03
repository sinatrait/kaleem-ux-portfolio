import Image from "next/image";
import type { ReactNode } from "react";

type TwoColumnProps = {
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  children: ReactNode;
};

export default function TwoColumn({
  imageSrc,
  imageAlt,
  caption,
  children,
}: TwoColumnProps) {
  return (
    <section className="my-section grid gap-wide lg:grid-cols-2 lg:items-start">
      <div className="min-w-0">{children}</div>
      <figure className="lg:sticky lg:top-32">
        <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface-raised">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 32vw"
            className="object-cover"
          />
        </div>
        {caption && (
          <figcaption className="mt-tight text-small text-text-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
