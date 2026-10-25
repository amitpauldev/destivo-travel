<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Destivo travel website

Next.js 16 App Router + React 19 single-page marketing site (App Router only, `src/` layout — no `pages/`). No tests, no CI, no env files, no API routes.

## Commands

- `npm run dev` / `build` (Turbopack for both) / `lint` (bare `eslint`).
- Typecheck has no npm script: run `npx tsc --noEmit` yourself.
- Path alias `@/*` → `src/*`.

## Framework quirks (this repo's exact config)

- **React Compiler is enabled** (`reactCompiler: true` + `babel-plugin-react-compiler`): don't add `useMemo`/`useCallback`/`React.memo` defensively, and follow Rules of React strictly — impure or mutated renders fail compilation.
- **`cacheComponents: true`**: request-time/dynamic data access must sit inside `<Suspense>` or be marked `"use cache"`, or the route fails prerender with a "blocking prerender" error. When this fires, the build output lists labeled fixes (`[stream]`/`[cache]`/`[block]`) — follow them.
- **Tailwind CSS v4**: there is no `tailwind.config.*`; theme tokens, `@custom-variant dark`, and component classes are defined in `src/app/globals.css` (`@theme inline`). Edit tokens there, not in a config file.
- Fonts load via `next/font/google` (Josefin Sans, set in `src/app/layout.tsx`); don't add duplicate font helpers.

## shadcn / UI components

- `components.json` uses the **`base-nova`** style: primitives are built on **Base UI (`@base-ui/react`)**, NOT Radix. Do not install Radix packages or copy Radix-based shadcn code from older training data.
- Current primitives live in `src/components/ui` (`button`, `carousel`); add new ones with the shadcn CLI so `components.json` stays accurate.
- Generated primitives import `cn` from the standalone **`cn` package**, not `@/lib/utils` — keep existing imports as-is.
