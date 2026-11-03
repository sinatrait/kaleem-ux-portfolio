import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  index?: number;
  featured?: boolean;
};

export default function CaseStudyCard({
  caseStudy,
  index,
  featured = false,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      aria-label={`Read ${caseStudy.title}`}
      prefetch={false}
      className={`group block h-full ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <article className="h-full">
        <div
          className={`relative overflow-hidden bg-surface-raised ${
            featured ? "aspect-[2.4/1]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={caseStudy.coverImage}
            alt={caseStudy.coverAlt}
            fill
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 80vw"
                : "(max-width: 768px) 100vw, 40vw"
            }
            className="object-cover transition-transform duration-motion ease-editorial group-hover:scale-[1.02]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-text/75 text-small font-medium text-surface opacity-0 transition-opacity duration-motion ease-editorial group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            View case study →
          </span>
        </div>

        <div className="pt-wide">
          <div className="flex flex-wrap items-center justify-between gap-tight">
            <div className="flex flex-wrap gap-tight">
              {caseStudy.tags.slice(0, 3).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {index !== undefined && (
              <span className="font-display text-subheading text-text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>
          <h3
            className={`mt-tight font-display tracking-tight ${
              featured ? "text-heading" : "text-subheading"
            }`}
          >
            {caseStudy.title}
          </h3>
          <p className="mt-tight max-w-reading text-small text-text-muted">
            {caseStudy.summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
