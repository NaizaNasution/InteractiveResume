# Interactive Resume — Muhammad Naireza Nasution

A single-page resume site built with React 19, Vite 6, TypeScript and Tailwind CSS v4.

## Who the page is for

Two user stories drive the design:

1. **An employer sizing up an experienced QA Automation Engineer.** Automation leads
   everywhere — the headline, the summary, the first skill group, and the first bullet
   of the current role.
2. **An employer who wants all the information concisely.** Nothing is hidden behind a
   click by default: every experience entry is expanded on load and tech tags are always
   visible. The toggle only lets a reader *collapse* a role.

Changing either of these means changing copy in `src/data/resume.ts`, not components.

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

1. **Skills are partly a draft.** Your Word resume has a `SKILLS` heading with nothing
   under it. Git, TestMu and Ego-Browser are yours; the rest is inferred from your job
   history. Please correct it.
2. **The headline is a positioning choice.** `profile.title` reads "QA Automation
   Engineer" — your professional identity. Your employer's actual title for the role,
   "System Tester", stays on the Experience entry, so nothing is misrepresented.
3. **The summary was rewritten.** `profile.summary` is now automation-forward prose,
   not the original objective statement. The verbatim original is preserved in
   `profile.summaryOriginal` if you want it back.
4. **"Present" end date** on the Caction role — confirm it's still current.
5. **Japanese proficiency level** was guessed as "Conversational"; your resume lists
   the language without a level.
6. **Your phone number is on a public page.** Consider removing it from `contact` and
   leaving only email and LinkedIn.

## Features

- Light / dark theme, remembered in `localStorage`, applied before first paint (no flash)
- Scroll-spy navigation with a mobile menu
- Experience entries expanded by default, collapsible on click; tech tags always visible
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

**Cloudflare Pages (current target).** Connect the GitHub repo in the Cloudflare
dashboard and use:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `master` |

`.node-version` pins the build image to Node 22 so Cloudflare's default doesn't drift
away from what Vite 6 supports. Every push to `master` triggers a redeploy.

**Netlify / Vercel:** same build command and publish directory.

**GitHub Pages project site** (served from `https://<user>.github.io/<repo>/`): set
`base` in [`vite.config.ts`](vite.config.ts) to `'/<repo-name>/'` first, then deploy
`dist/`. For a user site (`<user>.github.io`) leave `base` as `'/'`.

## Notes

`Resume Reza.docx` is your original source document, left in the repo root for
reference. Delete it if you'd rather not publish it — it is currently not referenced
by the site, but it would be committed to git if you push this folder as-is.
