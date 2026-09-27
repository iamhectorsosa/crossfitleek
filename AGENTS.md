<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Styling Conventions

## Check globals.css

Check `app/globals.css` for existing colors and abstractedutility classes. Don't repeat classes or create arbritrary classes when you can use from this file.

- Avoid: "font-header font-medium uppercase"; Use: "heading-styles"
- Avoid: "bg-[oklch(1_0_0)]/20"; Use: "bg-border"

Avoid creating variations of existing colors via transparency. Just pick a color from the existing.

### Spacing

Use `space-*` utility functions instead of adding `mt-*` for spacing.

### Long utility classes

Use `cn` imported from `app/lib/utils.ts` to organizing utility classes for better readability by grouping them in logical classes. Here's an example of organized utility classes:

```
<p
  className={cn(
    "text-base sm:text-lg", // text sizing utilities
    "text-primary" // color utilities could also be `bg-*` instead
    "flex flex-col sm:flex-row gap-3" // spacing utilities
    // etc...
  )}
 />
```
