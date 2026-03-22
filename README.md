# Prizmux Website

The official documentation website for [Prizmux](https://npmjs.com/package/prizmux) — a developer-first React Native component system.

---

## Stack

- **Framework** — [Next.js](https://nextjs.org) (App Router)
- **Styling** — [Tailwind CSS](https://tailwindcss.com)
- **Docs** — [Contentlayer](https://contentlayer.dev) + MDX
- **Theme** — Dark / Light (system default, user toggleable)
- **Deployment** — [Vercel](https://vercel.com)

---

## Project Structure

```
prizmux-web/
  app/
    layout.tsx              # Root layout, theme provider
    page.tsx                # Landing page
    docs/
      layout.tsx            # Docs layout with sidebar
      page.tsx              # Docs index → redirects to /docs/introduction
      [slug]/
        page.tsx            # Dynamic doc page renderer
  components/
    navbar.tsx              # Top nav — logo, GitHub, npm, theme toggle
    sidebar.tsx             # Left sidebar with doc navigation
    code-block.tsx          # Syntax highlighted code block
    theme-toggle.tsx        # Dark / light switcher
  content/
    docs/
      introduction.mdx
      installation.mdx
      components/
        button.mdx
        card.mdx
        bottom-sheet.mdx
        image-preview.mdx
        header-with-back.mdx
        empty-state.mdx
        phone-input.mdx
  public/
    og.png                  # Open Graph image
  styles/
    globals.css
```

---

## Pages

### Landing `/`
- Hero — package name, one-line description, install command, GitHub + Docs buttons
- Feature grid — 4 cards: Zero dependencies, Fully typed, Bring your own icons, Production ready
- Component list — quick visual summary of all 7 components
- Footer — npm link, GitHub link, license

### Docs `/docs`
Sidebar navigation with the following structure:

```
Getting Started
  Introduction
  Installation
  Philosophy

Components
  Button
  Card
  BottomSheet
  ImagePreview
  HeaderWithBack
  EmptyState
  PhoneInput
```

Each component page covers:
- Overview — what it is and when to use it
- Props table — all props, types, defaults, and descriptions
- Usage — copy-paste code examples
- Notes — edge cases, tips, dependency decisions

---

## Design

- **Colors** — black and white only. No brand color on the site itself.
- **Typography** — `Geist` (same font as Vercel/shadcn docs)
- **Dark mode** — `#09090b` background, `#fafafa` text
- **Light mode** — `#ffffff` background, `#09090b` text
- **Code blocks** — `github-dark` theme in dark mode, `github-light` in light mode
- **No heavy animations** — page transitions only, no scroll-triggered effects
- **Sidebar** — fixed left, scrollable, active item highlighted with a left border accent

---

## Getting Started (local dev)

```bash
git clone https://github.com/contecfy/prizmux-web
cd prizmux-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Writing Docs

All documentation lives in `/content/docs` as `.mdx` files. To add or edit a component page:

```mdx
---
title: Button
description: A pressable component with variants, sizes, and icon support.
---

## Overview

...

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | — | Label text |
| variant | filled \| outline | filled | Visual style |

## Usage

```tsx
<Button title="Submit" variant="filled" onPress={() => {}} />
```
```

---

## Deployment

The site deploys automatically to Vercel on every push to `main`.

```bash
# Manual deploy
npx vercel --prod
```

---

## License

MIT — same as the package itself.