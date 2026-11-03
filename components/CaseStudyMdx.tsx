import { MDXRemote } from "next-mdx-remote/rsc";
import Callout from "@/components/mdx/Callout";
import CaseStudyHeading from "@/components/mdx/CaseStudyHeading";
import Figure from "@/components/mdx/Figure";
import ImageGrid from "@/components/mdx/ImageGrid";
import MetricsRow from "@/components/mdx/MetricsRow";
import PullQuote from "@/components/mdx/PullQuote";
import TwoColumn from "@/components/mdx/TwoColumn";
import VideoEmbed from "@/components/mdx/VideoEmbed";

const components = {
  h2: CaseStudyHeading,
  Figure,
  ImageGrid,
  MetricsRow,
  PullQuote,
  Callout,
  VideoEmbed,
  TwoColumn,
};

type CaseStudyMdxProps = {
  source: string;
};

export default async function CaseStudyMdx({ source }: CaseStudyMdxProps) {
  return (
    <div className="case-study-prose">
      <MDXRemote
        source={source}
        components={components}
        options={{ blockJS: false, blockDangerousJS: true }}
      />
    </div>
  );
}
