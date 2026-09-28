<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## React Conventions

# React Conventions

## Components & Files

- Use `PascalCase` for components, `kebab-case` for files
- Use **named exports only**
- Define all components as `React.FC`
- Use namespace imports for React

```tsx
// path: app/components/hero.tsx
import * as React from "react";

export const Hero: React.FC = () => {
  // ...
};
```

# Styling Conventions

## Design System First

- Always check `app/globals.css` before adding new styles
- Prefer existing design tokens/utilities over custom classes
- Avoid duplicating or reinventing colors/styles

**Examples:**

- ❌ `font-header font-medium uppercase`
- ✅ `heading-styles`
- ❌ `bg-[oklch(1_0_0)]/20`
- ✅ `bg-border`

Do not create opacity variants of existing colors—use predefined tokens.

## Spacing

- Prefer `space-*` utilities for layout spacing
- Avoid `mt-*` unless absolutely necessary

## Utility Class Organization

Use `cn` from `app/lib/utils.ts` to structure long class strings:

```tsx
<p
  className={cn(
    "text-base sm:text-lg", // typography
    "text-primary", // color
    "flex flex-col sm:flex-row", // layout
    "gap-3", // spacing
  )}
/>
```

# Translations (i18n)

- No hardcoded UI strings in components

- All strings must live in:

  - `messages/nl.json`
  - `messages/en.json`

- Default locale: `nl` (`i18n/request.ts`)

- Write **Dutch first**, English as faithful translation

# Verification

These commands format and lint modified unstaged changes, tracked and untracked files.

- Run `pnpm format:changed`
- Run `pnpm lint:changed`

There is no command available for changed files for `typecheck`. DO NOT run this command for verification.
