# IMPACKTA AI Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full IMPACKTA AI marketing website — 6 pages, futuristic dark-mode design (GAADT spec), fully responsive, built with Next.js + Tailwind CSS.

**Architecture:** Next.js 14 App Router. Each page lives as `app/<route>/page.tsx`. Reusable UI components live in `components/` and are composed into pages. Design tokens (colors, fonts, spacing) are defined once in `tailwind.config.ts` and `app/globals.css` so the entire site can be restyled from one place. Scroll-reveal animations use the native IntersectionObserver API.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v3, React 18, Plus Jakarta Sans (Google Fonts via `next/font`), IntersectionObserver API

---

## Design Tokens (locked before any component work)

These values go into `tailwind.config.ts` as custom theme extensions and are referenced as Tailwind classes throughout the codebase:

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#020617` | Page background |
| `bg-secondary` | `#0b1120` | Section alt background |
| `accent` | `#7dd3fc` | CTA buttons, headings, icons, borders |
| `text-primary` | `#ffffff` | Headings, active text |
| `text-muted` | `#94a3b8` | Body copy, labels, inactive |
| `glass-border` | `rgba(255,255,255,0.10)` | Card/container borders |
| `glass-bg` | `rgba(255,255,255,0.04)` | Card backgrounds |

Font: **Plus Jakarta Sans** — loaded via `next/font/google` in `app/layout.tsx`, applied as CSS variable `--font-sans`, set as `fontFamily.sans` in Tailwind config.

---

## File Structure

```
E:\medicalfrontend\
├── app/
│   ├── layout.tsx               ← Root layout: font loading, Navbar, Footer
│   ├── globals.css              ← Tailwind directives, CSS vars, custom utilities
│   │                               (scroll-reveal, dot-blink, glass styles)
│   ├── page.tsx                 ← Home page
│   ├── about/page.tsx
│   ├── solutions/page.tsx
│   ├── services/page.tsx
│   ├── testimonials/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           ← Sticky blur nav, active link, mobile hamburger
│   │   └── Footer.tsx           ← Nav links, contact, legal links, copyright
│   └── ui/
│       ├── Button.tsx           ← Primary / outline variants, renders <Link> or <a> or <button>
│       ├── GlassCard.tsx        ← Glassmorphism card wrapper, hover lift
│       ├── SectionHeading.tsx   ← label + title (with accent span) + subtitle
│       └── AnimatedSection.tsx  ← IntersectionObserver scroll-reveal wrapper ('use client')
│
├── tailwind.config.ts           ← Custom theme: colors, font family, border radius
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages & Content Map

| Route | Page | Key Sections |
|-------|------|-------------|
| `/` | Home | Hero · Problems We Solve · Our AI Services (3 tiers) · AI Use Cases · How It Works · CTA |
| `/about` | About | Page Hero · Mission · Approach · Founder · Vision |
| `/solutions` | Solutions | Page Hero · 4 solution cards (each with Capabilities + Impact) |
| `/services` | Services | Page Hero · 3 service tier cards |
| `/testimonials` | Testimonials | Coming Soon placeholder → link back to Home |
| `/contact` | Contact | Page Hero · Info panel · Consultation form · Calendly button placeholder |
| `/privacy` | Privacy Policy | Full text from PDF, prose layout |
| `/terms` | Terms of Service | Full text from PDF, prose layout |

---

## Reusable Components — What Each Delivers

### `components/ui/Button.tsx`
- Props: `variant` (primary | outline), `size` (default | lg), `href`, `to` (internal link), `onClick`, `type`
- Primary: accent background, dark text, glow on hover
- Outline: transparent background, accent border, accent text
- Renders as `<Link>` for internal routes, `<a>` for external, `<button>` for actions

### `components/ui/GlassCard.tsx`
- Glassmorphism container: semi-transparent dark background, white/10 border, 1.5rem border radius
- Subtle lift + border brightens to accent on hover
- Accepts `className` for extension, `children` for content

### `components/ui/SectionHeading.tsx`
- Props: `label` (small uppercase eyebrow with dot-blink), `title` (bold, supports `<span>` for accent word), `subtitle` (muted paragraph), `center` (boolean)
- Used consistently on every section of every page

### `components/ui/AnimatedSection.tsx`
- `'use client'` directive (uses `useEffect` + `useRef`)
- Wraps any content in a `div` with `opacity-0 translate-y-8` initial state
- IntersectionObserver adds `is-visible` class → transitions to `opacity-100 translate-y-0`
- Props: `delay` (0–5 for staggered children), `className`, `tag` (semantic element override)

### `components/layout/Navbar.tsx`
- `'use client'` (needs `useState` for mobile menu)
- Fixed top, `backdrop-blur-md`, `bg-primary/75`, bottom border glass
- Logo: `IMPACKTA <span accent>AI</span>`
- Links: Home, About, Solutions, Services, Testimonials
- CTA button: "Book Consultation" → `/contact`
- Active link: accent underline (via `usePathname`)
- Mobile: hamburger icon, dropdown menu

### `components/layout/Footer.tsx`
- Three columns: Brand + tagline | Navigation | Contact
- Bottom bar: copyright + Privacy Policy / Terms links
- Email: `contact@impackta.ai`

---

## Task Breakdown

### Task 1 — Project Bootstrap
**Deliver:** Working Next.js 14 + TypeScript + Tailwind project with all dependencies installed, custom Tailwind theme configured (colors + font), `globals.css` set up with base utilities, font loaded via `next/font`.

**Definition of done:** `npm run dev` serves the app, body background is `#020617`, Plus Jakarta Sans is applied globally, Tailwind custom color classes work.

---

### Task 2 — Global CSS & Tailwind Configuration
**Deliver:** `tailwind.config.ts` with full custom theme (all design tokens above). `globals.css` with:
- Tailwind `@base`, `@components`, `@utilities` layers
- CSS custom properties matching token values
- `.glass-card` utility class (backdrop-filter, semi-transparent bg, border)
- `.reveal` / `.is-visible` classes for scroll animations
- `.dot-blink` keyframe animation
- Custom scrollbar styles
- Page-level padding utilities (`section`, `container`, `page-hero`)

**Definition of done:** Importing a Tailwind class like `bg-primary` or `text-accent` renders the correct color. `glass-card` class produces glassmorphism effect.

---

### Task 3 — Reusable UI Components
**Deliver:** All four components in `components/ui/` fully built and exported:
- `Button.tsx` — both variants, both sizes, all render modes
- `GlassCard.tsx` — hover effects included
- `SectionHeading.tsx` — all props, center variant
- `AnimatedSection.tsx` — IntersectionObserver wired up, delay classes applied

**Definition of done:** Components can be imported in a page and render correctly with expected styles and behavior.

---

### Task 4 — Navbar
**Deliver:** `components/layout/Navbar.tsx` — sticky, glassmorphism, active link highlighting, mobile hamburger with slide-down menu, CTA button. Wired into `app/layout.tsx`.

**Definition of done:** Nav is visible on all pages, active page link is highlighted, mobile menu opens/closes, CTA routes to `/contact`.

---

### Task 5 — Footer
**Deliver:** `components/layout/Footer.tsx` — three-column layout, collapses on mobile, legal links to `/privacy` and `/terms`. Wired into `app/layout.tsx`.

**Definition of done:** Footer visible on all pages, all links work, copyright year renders dynamically.

---

### Task 6 — Root Layout
**Deliver:** `app/layout.tsx` — font loading, metadata, Navbar + Footer wrapping `{children}`, `globals.css` imported.

**Definition of done:** Every page inherits the font, nav, and footer without repeating them.

---

### Task 7 — Home Page (`app/page.tsx`)
**Deliver:** Full Home page composed of these sections (each as a named component within the file or imported):
1. **HeroSection** — headline, subheadline, two CTA buttons, grid-line background overlay, radial accent glow
2. **ProblemsSection** — 6-card grid with problem tiles
3. **ServicesOverview** — 3-column service tier cards (AI Automations, AI Systems, Custom AI) with tag, title, description, feature list
4. **UseCasesSection** — 8-item grid of use case chips
5. **HowItWorksSection** — 4-step process with numbered circles and connecting line
6. **HomeCTA** — full-width CTA banner

All sections wrapped in `AnimatedSection` for scroll reveal.

**Definition of done:** Page renders all sections, CTA buttons route correctly, scroll animations trigger.

---

### Task 8 — About Page (`app/about/page.tsx`)
**Deliver:** Page hero + 4 pillar cards (Mission, Approach, Founder Perspective, What We Do) in a 2-column grid + Vision block with CTA.

**Definition of done:** Page renders with correct content from the PDF spec, all sections animate in on scroll.

---

### Task 9 — Solutions Page (`app/solutions/page.tsx`)
**Deliver:** Page hero + 4 full-width solution cards, each with Capabilities and Impact in a two-column layout inside the card.

Solutions:
1. AI Receptionist & Virtual Front Desk
2. AI Admin Assistant
3. AI Sales Support Agent
4. Backend Operations Automation

**Definition of done:** All 4 solutions render with correct capabilities and impact lists per the PDF.

---

### Task 10 — Services Page (`app/services/page.tsx`)
**Deliver:** Page hero + 3 service tier cards in a 3-column grid. Middle card (AI Systems) is visually featured with accent border and "Most Popular" tag.

Tiers: AI Automations · AI Systems · Custom AI Transformation

**Definition of done:** 3 cards render, featured card is visually distinct, "Get Started" buttons route to `/contact`.

---

### Task 11 — Testimonials Page (`app/testimonials/page.tsx`)
**Deliver:** Full-height centered "Coming Soon" placeholder with heading, explanation copy, and a "Back to Home" button.

**Definition of done:** Page renders without errors, button routes to `/`.

---

### Task 12 — Contact Page (`app/contact/page.tsx`)
**Deliver:** Two-column layout:
- Left: "In this call we will..." checklist + Calendly placeholder button (link to be filled in later)
- Right: GlassCard containing the full consultation form with fields:
  - First Name, Last Name (row)
  - Email, Phone (row)
  - Company Name, Type of Business (row)
  - Biggest Challenge (textarea)
  - What Solution Interests You? (select dropdown)
  - Privacy consent note with link to `/privacy`
  - Submit button

Form has a success state (replaces form with confirmation message on submit). Form `handleSubmit` logs to console — backend integration is a separate task.

**Definition of done:** Form renders all fields, submits, shows success state, all inputs styled with dark glass theme.

---

### Task 13 — Privacy Policy Page (`app/privacy/page.tsx`)
**Deliver:** Page hero + prose layout rendering all 12 sections from the PDF. Max-width `780px` container, muted body text, accent section headings.

**Definition of done:** All sections from the PDF are present and readable.

---

### Task 14 — Terms of Service Page (`app/terms/page.tsx`)
**Deliver:** Same prose layout as Privacy Policy. All 15 sections from the PDF rendered.

**Definition of done:** All terms sections present, linked correctly from Footer.

---

### Task 15 — Final QA
**Deliver:** Verified working site with:
- All 8 routes accessible, no blank pages
- Mobile responsive at 375px and 768px breakpoints
- Scroll animations fire on all pages
- Production build passes (`npm run build`)
- `CLAUDE.md` updated with final stack, commands, and notes on Calendly + form backend integration

**Definition of done:** `npm run build` exits with no errors. All routes work in `npm run start`.

---

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | Next.js 14 App Router | Production-grade, file-based routing, SSG-ready |
| Language | TypeScript | Type safety for props, better DX |
| Styling | Tailwind CSS v3 | Utility-first, easy to customise via config, no CSS file per component |
| Global tokens | `tailwind.config.ts` + `globals.css` | One place to change colors/fonts for entire site |
| Animations | IntersectionObserver (native) | Zero dependency cost, sufficient for fade-in-up reveals |
| Font loading | `next/font/google` | Zero layout shift, automatic subsetting |
| Component granularity | One file per UI primitive | Easy to find, easy to replace |
| Page sections | Defined inside page file (or small co-located files) | Keeps each page self-contained without over-engineering |

## Notes for Implementation

- **Calendly:** Contact page has a placeholder button with `href="#"`. Replace with actual Calendly URL when available.
- **Form backend:** `handleSubmit` on Contact page logs to console. When ready to go live, replace with `fetch()` POST to Formspree, EmailJS, or a custom API route.
- **Images:** No images are required by the spec. Background effects are achieved with CSS gradients and the grid overlay pattern.
- **Testimonials:** Page is a placeholder. Future implementation will add client quote cards and case study links.
