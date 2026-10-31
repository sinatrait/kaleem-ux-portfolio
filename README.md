# UX Portfolio

## Run the development server

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Add a case study

Create an `.mdx` file in `content/case-studies/`, for example
`content/case-studies/my-case-study.mdx`. Start it with YAML frontmatter:

```md
---
title: My Case Study
summary: A short description of the project.
date: 2026-10-31
role: Product Designer
---

Write the case study content here using Markdown and MDX.
```

The content folder is ready for case studies; rendering those files on the site
will be added separately.

## Deploy

Push the repository to GitHub, then import it into [Vercel](https://vercel.com/)
and deploy it as a Next.js project. Vercel can use the default build command,
`npm run build`; connect the GitHub repository to enable automatic deployments
on future pushes.
