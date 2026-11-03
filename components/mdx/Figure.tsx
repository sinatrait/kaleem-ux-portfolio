import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  size?: "small" | "medium" | "large" | "full";
};

const sizes: Record<NonNullable<FigureProps["size"]>, string> = {
  small: "max-w-reading",
  medium: "max-w-site",
  large: "max-w-none",
  full: "max-w-none",
};

export default function Figure({
  src,
  alt,
  caption,
  size = "large",
}: FigureProps) {
  return (
    <figure className={`my-section ${sizes[size]}`}>
      <div
        className={`relative aspect-[3/2] overflow-hidden rounded-card bg-surface-raised ${
          size === "full" ? "-mx-gutter sm:mx-0" : ""
        }`}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 65ch" className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-tight text-small text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
