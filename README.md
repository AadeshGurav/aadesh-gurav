# aadeshgurav.online

Personal portfolio for Aadesh Gurav. Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

On every visit, one of 8 fully distinct themes (different colors, type, shapes, and
layout) is picked at random and rendered from the same content. A floating switcher
lets a visitor pick a specific theme or reshuffle; the choice persists in
`localStorage`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4000
```

```sh
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Editing content

All real content — bio, skills, contact info, projects — lives in `src/content/`
and is shared by every theme. Edit it once; every theme picks it up.

- `src/content/profile.ts` — name, role, bio, socials.
- `src/content/skills.ts` — skill groups.
- `src/content/contact.ts` — email + socials shown in the contact section.
- `src/content/projects.ts` — the project list. Each entry has:
  - `show: boolean` — whether it appears on the site.
  - `order: number` — display order (lower = first).

  To feature a project: find its entry and set `show: true`. To add a new one,
  add an entry with real `description`/`stack`/`repoUrl` and `show: true` — new
  entries default to `show: false` until you write real content for them.

## Admin editor

`/admin` is a lightweight content editor gated by a password — not a real
backend, just a nicer way to edit content than hand-writing TypeScript:

1. Set `VITE_ADMIN_PASSWORD` in Render → this service → Environment, and redeploy.
   (For local dev, put it in `.env.local`, which is gitignored.)
2. Visit `/admin`, enter the password.
3. Edit projects (show/hide, reorder, description, stack, links), profile, or
   skills, then hit **Copy** — it generates the exact file content for
   `src/content/*.ts`. Paste it in, commit, push.

**Important:** this is a soft gate, not real security. `VITE_ADMIN_PASSWORD`
is a build-time env var, so it ends up readable in the shipped JS bundle —
anyone who opens dev tools can find it. It only keeps casual visitors from
finding the edit screen; it does not protect against a determined one, and
nothing behind it can change the live site by itself (every action just
generates text for you to paste and push yourself).

## Themes

Each theme lives in `src/themes/<theme-id>/` as a self-contained layout
(`index.tsx` + its own components + `theme.css`), registered in
`src/themes/registry.ts`. Themes are lazy-loaded — a visitor only downloads the
JS/CSS of whichever theme they got, not all 8.

## Deployment

Static build (`npm run build` → `dist/`), deployed on Render's static site tier,
served at `aadeshgurav.online`.

- **Publish directory:** `dist`
- **Build command:** `npm run build`
- Add a rewrite rule `/* → /index.html` (client-side routing via React Router —
  without this, refreshing any non-root URL 404s).
