# CrossFit Leek — Brand Guidelines (Color & Typography)

**Tagline:** MOVE LIKE A HUMAN
**Theme:** Single dark theme only (no light/dark toggle)

---

## 01. Color Palette

### Design rationale

- **Base:** Near-black background with off-white text — high-contrast, gritty, gym-signage feel.
- **Brand red** is pulled directly from the official CrossFit Leek logo file (`#FF1616`) and is used as the **single accent color** — reserved for CTAs, links, focus states, and small highlights. It is never used as a large fill.
- **Neutrals** (surfaces, borders, muted text) are custom-judged greys tuned for a dark theme — dark enough to feel premium, light enough to keep clear separation between background → card → border layers.
- **Destructive** is a distinct, slightly more orange-leaning red so error states never get visually confused with the brand's primary red CTAs.

### Core tokens

```css
:root {
  --background: #0a0a0a; /* near-black page background */
  --foreground: #fafafa; /* off-white primary text (use on background, primary, secondary) */

  --card: #161616; /* raised surface — cards, panels, header bar, modals */

  --primary: #ff1616; /* brand red — from logo. CTAs, links, highlights */

  --secondary: #1e1e1e; /* dark grey surface — secondary buttons, alt sections */

  --muted-foreground: #8c8c8c; /* grey secondary text — captions, metadata, timestamps */

  --border: #2e2e2e; /* dividers, card borders, input outlines */
}
```

### Quick reference

| Token                | Hex       | Use                                                  |
| -------------------- | --------- | ---------------------------------------------------- |
| `--background`       | `#0A0A0A` | Page background                                      |
| `--foreground`       | `#FAFAFA` | Text on background, primary, or secondary            |
| `--card`             | `#161616` | Cards, panels, header bar, modals                    |
| `--primary`          | `#FF1616` | Brand red — buttons, links, highlights, focus states |
| `--secondary`        | `#1E1E1E` | Secondary buttons, alt surfaces                      |
| `--muted-foreground` | `#8C8C8C` | Captions, metadata, disabled/helper text             |
| `--border`           | `#2E2E2E` | Dividers, card borders, input outlines               |

### Usage rules

- `--background` is **always** the base — never use light backgrounds anywhere on the site.
- `--primary` (red) is reserved for: primary buttons, links, active nav state, focus states, small icon accents, and the logo. **Never use red as a large background fill.**
- Use `--card` to lift any content off the pure-black background (feature cards, pricing tables, forms, testimonial blocks).
- Use `--muted-foreground` for secondary/supporting text — never pure white (`--foreground`) for anything non-primary.
- Buttons: primary action = `--primary` bg with `--foreground` text; secondary action = `--secondary` bg with `--foreground` text and a `--border` outline.

---

## 02. Typography

Gotham (used in the CrossFit Leek logotype) is a paid Hoefler & Co. font and isn't available on Google Fonts. **Montserrat** is the closest free/Google Fonts match, especially at heavy weights — it mirrors the blocky, geometric letterforms of the logo. To avoid a flat, single-font site, it's paired with two complementary fonts for a 3-tier system:

| Role                            | Font                                                | Source       | Why                                                                                                                                                   |
| ------------------------------- | --------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Headings / Display**          | **Montserrat** (800 ExtraBold / 900 Black)          | Google Fonts | Closest free match to Gotham's geometric, blocky uppercase forms — used in the logotype itself                                                        |
| **Labels / Tags / Stats / Nav** | **Oswald** (600 SemiBold / 700 Bold)                | Google Fonts | Condensed, athletic, gym-signage feel — ideal for short punchy text: stat numbers, WOD tags, nav items, badges, the "MOVE LIKE A HUMAN" tagline style |
| **Body / UI text**              | **Inter** (400 Regular / 500 Medium / 600 SemiBold) | Google Fonts | Neutral, highly legible at small sizes — paragraphs, forms, buttons, captions                                                                         |

### Import (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Font family variables

```css
:root {
  --font-display: "Montserrat", sans-serif; /* headings */
  --font-accent: "Oswald", sans-serif; /* labels, tags, stats, nav */
  --font-body: "Inter", sans-serif; /* paragraphs, UI */
}
```

### Type scale

| Element                            | Font       | Weight        | Size (desktop) | Case / Style                              |
| ---------------------------------- | ---------- | ------------- | -------------- | ----------------------------------------- |
| H1 / Hero headline                 | Montserrat | 900 Black     | 48–64px        | UPPERCASE, tight letter-spacing (-0.01em) |
| H2 / Section title                 | Montserrat | 800 ExtraBold | 32–40px        | UPPERCASE                                 |
| H3 / Card / sub-section title      | Montserrat | 700 Bold      | 22–28px        | Sentence case or uppercase                |
| Stat / big number callout          | Oswald     | 700 Bold      | 40–56px        | Numerals, tight tracking                  |
| Tag / badge / nav label            | Oswald     | 600 SemiBold  | 12–14px        | UPPERCASE, letter-spacing +0.08em         |
| Tagline (e.g. "Move Like a Human") | Oswald     | 500 Medium    | 14–18px        | UPPERCASE, letter-spacing +0.12em         |
| Body / paragraph                   | Inter      | 400 Regular   | 16–18px        | Sentence case                             |
| Body bold / emphasis               | Inter      | 600 SemiBold  | 16–18px        | Sentence case                             |
| Caption / metadata / timestamp     | Inter      | 400 Regular   | 12–13px        | Sentence case, `--muted-foreground` color |
| Button text                        | Oswald     | 600 SemiBold  | 14–16px        | UPPERCASE, letter-spacing +0.04em         |

### Usage rules

- **Never** use Montserrat below 700 weight for headings — it needs to stay heavy/blocky to echo the logotype.
- Oswald is for **short bursts of text only** (2–6 words) — labels, stat numbers, buttons, tags. Don't use it for paragraphs.
- Inter is the only font used for body copy over ~2 lines — it's the most legible of the three at small sizes.
- Max 3 font families total on any single page/screen (this system already uses exactly 3 — don't introduce a 4th).
- Headings and accent text on the dark background should default to `--foreground` (off-white) or `--primary` (red, for 1 emphasized word per section — mirroring how Xatruch uses gold as a single accent word).
