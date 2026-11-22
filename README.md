# Interactive Resume — Muhammad Naireza Nasution

A single-page resume site built with React 19, Vite 6, TypeScript and Tailwind CSS v4.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
npm run lint
```

## Editing your content

**Everything you'd want to change lives in [`src/data/resume.ts`](src/data/resume.ts).**
No component edits needed — the components read from that file.

| What                            | Where in `resume.ts` |
| ------------------------------- | -------------------- |
| Name, title, tagline, summary   | `profile`            |
| Email, phone, LinkedIn          | `contact`            |
| Jobs, bullets, tech tags        | `experience`         |
| Degrees                         | `education`          |
| Skill groups                    | `skills`             |
| Languages + proficiency bars    | `languages`          |
| Nav items / section order       | `sections`           |

Three spots are marked with `TODO` / `⚠️ DRAFT` comments — see "Needs your input" below.

The portrait is `src/assets/portrait.jpg`, pulled from your Word resume and resized
from 893 KB to 78 KB. Drop in a replacement at the same path to change it.

## Needs your input

1. **Skills are a draft.** Your Word resume has a `SKILLS` heading with nothing under
   it, so the skill list is inferred from your job history. Please correct it.
2. **The summary reads like a fresh-graduate objective.** The original is used as-is
   in `profile.summary`; a rewritten version that reflects 5+ years of QA work sits in
   `profile.summaryAlt`. Swap them if you prefer it.
3. **"Present" end date** on the Caction role came from a document last edited in
   May 2025 — confirm it's still current.
4. **Japanese proficiency level** was guessed as "Conversational"; your resume lists
   the language without a level.
5. **Your phone number is on a public page.** Consider removing it from `contact` and
   leaving only email and LinkedIn.

## Features

- Light / dark theme, remembered in `localStorage`, applied before first paint (no flash)
- Scroll-spy navigation with a mobile menu
- Expandable experience entries; the current role is open by default
- Skill category filtering
- Scroll-reveal animations that degrade safely — content is still revealed when the
  viewport jumps (anchor links, `End` key, fast scrolling) and when
  `IntersectionObserver` is unavailable
- `prefers-reduced-motion` respected
- "Save as PDF" triggers the browser print dialog; a dedicated print stylesheet expands
  all collapsed sections and hides interactive chrome
- Keyboard skip-link, `aria-expanded` / `aria-pressed` state, semantic landmarks

## Deploying

The build is fully static — `dist/` can go on any static host.

**Netlify / Vercel / Cloudflare Pages:** build command `npm run build`, publish
directory `dist`.

**GitHub Pages project site** (served from `https://<user>.github.io/<repo>/`): set
`base` in [`vite.config.ts`](vite.config.ts) to `'/<repo-name>/'` first, then deploy
`dist/`. For a user site (`<user>.github.io`) leave `base` as `'/'`.

## Notes

`Resume Reza.docx` is your original source document, left in the repo root for
reference. Delete it if you'd rather not publish it — it is currently not referenced
by the site, but it would be committed to git if you push this folder as-is.
