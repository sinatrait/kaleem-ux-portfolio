type PullQuoteProps = {
  quote: string;
  attribution?: string;
};

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <figure className="my-section border-y border-border py-wide">
      <blockquote className="max-w-reading font-display text-subheading leading-relaxed tracking-tight text-text">
        “{quote}”
      </blockquote>
      {attribution && (
        <figcaption className="mt-step text-small text-text-muted">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
