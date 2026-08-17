# Solidara website

Homepage built with [Astro](https://astro.build). Static site, no CMS, no database — content lives in the code and (soon) in Markdown files.

## Run it locally

```
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Images needed for the homepage

Placeholder tiles are already in `public/images/` so the page previews
correctly. Replace them with real photos using the **exact same
filenames** and the page picks them up automatically — no code changes
needed.

| Filename | Suggested size | Used for |
| --- | --- | --- |
| `public/images/hero-home.jpg` | 1600 × 1067px, landscape | Hero image next to "People first, at every stage of life." |
| `public/images/teaser-belief.jpg` | 900 × 900px, square | "Our belief" card — ideally a human/portrait moment |
| `public/images/teaser-activities.jpg` | 900 × 900px, square | "What we do" card — a group/workshop moment |
| `public/images/teaser-shapewithus.jpg` | 900 × 900px, square | "Shape with us" card — people building/collaborating |
| `public/images/logo.jpg` | as-is | Already the real Solidara logo, copied from the brand files |

JPG or PNG both work. Slightly oversized is fine — Astro/the browser will scale down; just try to keep close to the aspect ratio listed so nothing crops awkwardly.

## Deploying to Netlify

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Netlify auto-detects the settings from `netlify.toml` — build command `npm run build`, publish directory `dist`. Just confirm and deploy.
4. From then on, every `git push` triggers a new build and redeploy automatically.

No server, no database, no environment variables needed for the homepage.

## What's next

This currently has the homepage only. About, Activities, Projects, Shape
With Us, News, and Contact still need their own pages — say the word and
we'll build the next one the same way.
