# Portfolio site

Molly Carroll's developer portfolio. Astro 7 (static output), TypeScript strict, plain CSS with variables (no Tailwind, no UI framework).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Scripts: `npm run dev`, `npm run build`, `npm run preview`. The user usually runs builds and the dev server themselves; don't run builds, take screenshots or open the browser unless asked.

## Where things live

- `src/data/site.ts`: all page copy and structured content (site info, nav, bio, home cards, skills, jobs, education, books, Goodreads URL). Edit content here, not in the page files. It holds real content, so don't overwrite it with placeholders.
- `src/content/projects/*.md`: one file per project (the `projects` collection, schema in `src/content.config.ts`). Frontmatter: `name`, `year` (string), `summary`, `stack`, optional `url`, `repo`, `screenshot`, and `order` (lower is listed first). The Markdown body is the writeup shown on `/projects/<id>`.
- `src/pages/`: `index`, `projects`, `projects/[id]`, `skills`, `career`, `education`.
- `src/components/`: `Header.astro` (brand, theme toggle, nav, Resume link) and `PageHero.astro`.
- `src/layouts/Base.astro`: head, fonts, theme bootstrap script, header and `.shell` wrapper.
- `src/styles/global.css`: theme tokens and shared classes.
- `public/resume.pdf`: the file behind the Resume link (`site.resume` in `site.ts`).

## Projects

- Optional fields must be omitted, not left blank. A bare `url:` parses as `null` and fails validation, which silently drops the project.
- `screenshot` points to an image in `src/assets/projects/`, e.g. `screenshot: ../../assets/projects/name.png`. It is rendered with Astro's `<Image>` (resized and converted to WebP at build) and shown at its natural proportions, uncropped.
- `screenshot` states: a path shows the image; omitted shows the striped placeholder; `false` shows no image area.
- Sample or placeholder content may remain in some project writeups; check before assuming it is final.

## Design and styling

- Designs come from Claude Design, project "Portfolio site UI directions" (`d649be6a-27ad-4958-9772-f9e9386026a7`, file `Portfolio Options.dc.html`). The current theme is 4a (light) and 4b (dark): red, black and white. The `claude_design` MCP reads it and needs the user's own account (`/design-login`).
- Dark mode is the default. `data-theme` on `<html>` switches tokens; an inline script in `Base.astro` sets it before paint, and the choice is stored in `localStorage` under `theme`.
- Use the role-based tokens (`--accent`, `--accent-fg`, `--accent-text`, `--alt`, `--alt-fg`, `--tile`, `--text`, `--muted`, and so on). Don't hard-code colours. `--accent` is a fill with black text on it; use `--accent-text` for red type.
- Reuse the shared classes: `.tile`, `.tile-accent`, `.tile-alt`, `.grid-2/3/4`, `.chip`, `.section-head`, `.count`, `.mono`. Tiles on a page should look identical (the Education certifications and book tiles share the same styles on purpose).
- Fonts: Space Grotesk and Space Mono. Indentation is tabs. Mobile breakpoint is 760px (header wraps at 860px).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
