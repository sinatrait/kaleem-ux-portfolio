import Image from "next/image";

export type GridImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageGridProps = {
  images: GridImage[];
  columns?: 2 | 3;
};

export default function ImageGrid({ images, columns = 2 }: ImageGridProps) {
  const validImages = images?.slice(0, 3) ?? [];

  if (validImages.length === 0) {
    return null;
  }

  return (
    <div
      className={`my-section grid gap-tight ${
        columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {validImages.map((image) => (
        <figure key={`${image.src}-${image.alt}`}>
          <div className="relative aspect-square overflow-hidden rounded-card bg-surface-raised">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={columns === 3 ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, 50vw"}
              className="object-cover"
            />
          </div>
          {image.caption && (
            <figcaption className="mt-tight text-caption text-text-muted">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
