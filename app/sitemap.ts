import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/work", "/about", "/contact", "/resume"];
  const caseStudies = await getCaseStudies();

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route, SITE_URL).toString(),
    })),
    ...caseStudies.map(({ slug }) => ({
      url: new URL(`/work/${slug}`, SITE_URL).toString(),
    })),
  ];
}
