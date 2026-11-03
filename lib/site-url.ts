const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://kaleem-ux-portfolio.vercel.app";

export const SITE_URL = new URL(configuredSiteUrl);
