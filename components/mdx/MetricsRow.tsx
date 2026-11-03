import type { CaseStudyMetric } from "@/lib/case-studies";

type MetricsRowProps = {
  metrics: CaseStudyMetric[];
};

export default function MetricsRow({ metrics = [] }: MetricsRowProps) {
  if (metrics.length === 0) {
    return null;
  }

  return (
    <dl className="my-section grid gap-step border-y border-border py-wide sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div key={`${metric.label}-${metric.value}`}>
          <dt className="text-small text-text-muted">{metric.label}</dt>
          <dd className="mt-tight font-display text-heading tracking-tight text-accent-text">
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
