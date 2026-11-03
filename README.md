# UX Portfolio

## Run the development server

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Add a case study

Each case study is one editable MDX file in `content/case-studies/`. The
portfolio includes projects from Abdul's resume and supplied UX portfolio PDF:
Rehrig Vision, AI Quote Generation, Lien Registration and Search, Predictive
Analytics, AI Trailer Inventory, Soulax branding, Svarupa, RFID warehouse
operations, trailer inspection, service marketplace, Kyndryl Solution Library,
ENPF Mobile App, Beatflow, and Actifio. Edit the matching `.mdx` file or add
another file using this schema:

```md
---
title: "My Case Study"
client: "Client name"
role: "Product Designer"
year: 2026
summary: "A short description of the project."
tags:
  - Research
  - Product design
coverImage: /casestudies/AI%20Project/screen.png
coverAlt: "Describe the cover image"
featured: true
order: 1
metrics:
  - label: "Task completion"
    value: "TODO"
draft: false
---

## Context

{/* TODO: Replace this placeholder copy. */}
Write the case study using Markdown and the MDX components below.
```

The home page displays up to three featured studies, sorted by `order`; the
`/work` index and detail pages omit studies with `draft: true`. Missing
frontmatter fields use safe defaults. Add project images under
`public/casestudies/` and reference them with root-relative URL paths, encoding
spaces as `%20` when needed. The current case studies use the project names
listed in Abdul's resume; add only details and outcomes that can be supported.

Available MDX components are `Figure` (`src`, `alt`, optional `caption` and
`size`), `ImageGrid` (`columns` and `images`), `PullQuote` (`quote`, optional
`attribution`), `MetricsRow` (`metrics`), `Callout` (optional `title` and
Markdown/MDX children), `VideoEmbed` (`url`, `title`), and `TwoColumn`
(`imageSrc`, `imageAlt`, and Markdown/MDX children). MDX is compiled from
trusted files in this repository; do not render MDX supplied by untrusted
users.

## Deploy

Push the repository to GitHub, then import it into [Vercel](https://vercel.com/)
and deploy it as a Next.js project. Vercel can use the default build command,
`npm run build`; connect the GitHub repository to enable automatic deployments
on future pushes. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL
(for example, `https://portfolio.example.com`) so canonical links and the
sitemap use your real domain. If unset, the site uses
`https://kaleem-ux-portfolio.vercel.app` as a placeholder canonical URL.

## Resume PDF

The `/resume` page provides a download link to
`public/Abdul_Kaleem_Principal_UX_Product_Designer.pdf`. Replace that file to
update the downloadable resume.
