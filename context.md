# Project Context: Sanchit Bajaj — Personal Portfolio Website

## Overview

This is a **personal portfolio website** for Sanchit Bajaj, a full-stack software engineer with 2+ years of experience. It showcases his professional background, projects, blog posts, and contact information. The site is hosted at `sanchitbajaj02.github.io`.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.3.8 (App Router) |
| UI Library | React 19.0.0 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4.17 + Custom CSS |
| Icons | Lucide React 0.447.0 |
| Font | Poppins (via next/font) |
| Blog API | Hashnode GraphQL API |
| Email | EmailJS Browser 4.4.1 |
| Build Tool | Turbopack (dev), Next.js build (prod) |
| Node Version | >=20.0.0 |

---

## Directory Structure

```
Sanchitbajaj02.github.io/
├── public/
│   ├── docs/
│   │   └── Sanchit's resume.pdf
│   └── assets/images/
│       ├── project-*.{jpg,png}     # 9 project thumbnails
│       ├── blog-*.jpg              # 6 blog placeholder images
│       ├── avatar-*.png            # 4 avatar variants
│       ├── logo-*-color.png        # 6 tech/brand logos
│       ├── icon-*.svg              # 4 service icons
│       ├── profile-pic.png
│       └── logo.{svg,ico}
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Home / About page
│   │   ├── layout.tsx              # Root layout (fonts, metadata)
│   │   ├── resume/page.tsx         # Resume page
│   │   ├── portfolio/page.tsx      # Portfolio page (filterable projects)
│   │   ├── blog/page.tsx           # Blog page (Hashnode integration)
│   │   └── contact/page.tsx        # Contact page
│   ├── components/
│   │   ├── layouts/MainGridLayout.tsx  # Two-column page layout
│   │   ├── Sidebar/index.tsx          # Profile sidebar
│   │   ├── Navbar/index.tsx           # Navigation bar
│   │   ├── MainContent/index.tsx      # Dynamic page content renderer
│   │   ├── ContactForm/index.tsx      # EmailJS contact form
│   │   └── PortfolioCard/index.tsx    # Project card component
│   ├── static/                     # Static data/content files
│   │   ├── navItems.ts             # Navigation menu items (5)
│   │   ├── tabList.ts              # Portfolio filter categories (4)
│   │   ├── projectList.ts          # 9 portfolio project entries
│   │   ├── skillItems.ts           # 6 professional skills with ratings
│   │   ├── workExperienceTimeline.ts  # 3 job experience entries
│   │   └── studyTimeline.ts        # 3 education entries
│   ├── lib/
│   │   └── graphql.ts              # Hashnode GraphQL client + query
│   ├── types/
│   │   └── index.d.ts              # Global TypeScript types
│   └── styles/
│       ├── globals.css             # Tailwind directives
│       └── style.css               # Custom dark theme CSS system
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── .eslintrc.json
```

---

## Pages

### 1. Home (`/`) — `src/app/page.tsx`
- **About Me** section with professional summary
- Lists 4 services offered:
  - Web Design
  - Frontend Development
  - Backend Development
  - Mobile Development

### 2. Resume (`/resume`) — `src/app/resume/page.tsx`
- Work experience timeline (3 positions)
- Education timeline (3 entries)
- Professional skills with percentage ratings (6 skills)
- Technology badges (30+ tools/frameworks)

### 3. Portfolio (`/portfolio`) — `src/app/portfolio/page.tsx`
- **Client-side filterable** project grid
- Filter tabs: All / Web Design / Applications / Web Development
- Displays 9 projects using `PortfolioCard` component

### 4. Blog (`/blog`) — `src/app/blog/page.tsx`
- **Server-side rendered** with ISR (revalidates every 86400s = 24 hours)
- Fetches 10 most recent posts from Hashnode publication `solitrix02.hashnode.dev`
- Displays: post title, cover image, publish date, tags

### 5. Contact (`/contact`) — `src/app/contact/page.tsx`
- Google Maps embed centered on Delhi, India
- `ContactForm` component with EmailJS integration
- Fields: Full Name, Email, Message

---

## Components

### `MainGridLayout` — `src/components/layouts/MainGridLayout.tsx`
Two-column responsive layout: Sidebar (fixed) + Main Content (scrollable).

### `Sidebar` — `src/components/Sidebar/index.tsx`
- Profile photo, name, title
- Collapsible contact info panel:
  - Email: `sanchitbajaj02@gmail.com`
  - Calendar: `topmate.io/sanchitbajaj02`
  - Location: Delhi, India
- Social links: LinkedIn, GitHub (`@sanchitbajaj02`), Twitter (`@solitrix02`)

### `Navbar` — `src/components/Navbar/index.tsx`
- 5 navigation items with active route highlighting
- Routes: About, Resume, Portfolio, Blog, Contact

### `PortfolioCard` — `src/components/PortfolioCard/index.tsx`
- Displays project image (lazy-loaded via Next.js Image)
- Project title, category tag, external link

### `ContactForm` — `src/components/ContactForm/index.tsx`
- Form with client-side validation
- Sends email using EmailJS (`NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` env var)

### `MainContent` — `src/components/MainContent/index.tsx`
- Dynamic content area that renders different page content

---

## Static Data Files

### `src/static/workExperienceTimeline.ts`
3 work experience entries:
1. **Infozech** — Software Developer
2. **Techcurators** — Role details
3. **A4R LLC** — Role details

Each entry has: company name, role title, date range, description bullet points.

### `src/static/studyTimeline.ts`
3 education entries including:
- **Bachelor's in Computer Science**, Manav Rachna University — CGPA: 8.9

### `src/static/skillItems.ts`
6 professional skills with percentage ratings:
- Web App Development, Mobile App Development, Blockchain, UI/UX Design, System Design, Personal Branding

### `src/static/projectList.ts`
9 portfolio projects, each with: image path, title, URL, category tag.

### `src/static/navItems.ts`
Navigation menu item definitions (label + href).

### `src/static/tabList.ts`
Portfolio filter tab definitions: All, Web Design, Applications, Web Development.

---

## API & Integrations

### Hashnode GraphQL (`src/lib/graphql.ts`)
- Endpoint: Hashnode public GraphQL API
- Publication: `solitrix02.hashnode.dev`
- Fetches 10 most recent blog posts
- Fields fetched: title, brief, coverImage, publishedAt, tags, slug, url

### EmailJS
- Library: `@emailjs/browser`
- Config via: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` environment variable
- Used in `ContactForm` for client-side email sending (no backend required)

---

## Styling System

### Tailwind CSS (`tailwind.config.ts`)
- Content paths: `./src/pages/**`, `./src/components/**`, `./src/app/**`
- Extended theme: CSS variables for `--background` and `--foreground`

### Custom CSS (`src/styles/style.css`)
- **Dark theme by default** (`dark` class on `<html>`)
- Color palette: onyx, jet grays + yellow/gold accents
- Glassmorphic card design with gradient borders
- CSS custom properties for design tokens
- Responsive two-column grid layout
- Smooth scroll behavior

### Typography
- Font family: **Poppins** (weights: 300, 400, 500, 600, 800)
- Antialiased rendering

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key for contact form |

Note: Hashnode publication host (`solitrix02.hashnode.dev`) is hardcoded in `src/lib/graphql.ts`.

---

## Next.js Configuration (`next.config.mjs`)

- Allowed remote image hostname: `cdn.hashnode.com` (for blog cover images)
- ESLint: enabled during builds
- React Strict Mode: disabled

---

## TypeScript Configuration

- Strict mode: enabled
- Module resolution: `bundler`
- Path alias: `@/*` → `./src/*`
- Target: ES2017+

---

## Scripts

```bash
npm run dev     # Development server with Turbopack
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint check
```

---

## Person Details (Sanchit Bajaj)

- **Role:** Full-Stack Software Engineer
- **Experience:** 2+ years
- **Primary Stack:** JavaScript, TypeScript, React, Next.js, Node.js, Express.js
- **Database Experience:** SQL and NoSQL databases
- **Email:** sanchitbajaj02@gmail.com
- **Location:** Delhi, India
- **GitHub:** github.com/sanchitbajaj02
- **Twitter/X:** @solitrix02
- **Scheduling:** topmate.io/sanchitbajaj02
- **Blog:** solitrix02.hashnode.dev
- **Resume:** Available at `/docs/Sanchit's resume.pdf` (publicly accessible)

---

## Key Design Decisions

1. **Static data in TypeScript files** — All resume/portfolio content is maintained in typed TS files under `src/static/`, not a CMS or database. To update content, edit those files directly.
2. **No backend server** — EmailJS handles contact emails client-side. Blog data comes from Hashnode's public API.
3. **ISR for blog** — The blog page uses Next.js Incremental Static Regeneration (24h) to avoid hitting the Hashnode API on every request while keeping content fresh.
4. **Dark theme only** — The site is designed exclusively for dark mode. No light mode toggle exists.
5. **App Router** — Uses Next.js App Router (not Pages Router). All pages are in `src/app/`.

---

## Common Tasks & Where to Make Changes

| Task | File to Edit |
|------|-------------|
| Update work experience | `src/static/workExperienceTimeline.ts` |
| Update education | `src/static/studyTimeline.ts` |
| Add/edit skills | `src/static/skillItems.ts` |
| Add/edit projects | `src/static/projectList.ts` |
| Change contact info | `src/components/Sidebar/index.tsx` |
| Update About Me text | `src/app/page.tsx` |
| Change site colors/theme | `src/styles/style.css` |
| Add navigation item | `src/static/navItems.ts` |
| Add portfolio filter tab | `src/static/tabList.ts` |
| Change blog source | `src/lib/graphql.ts` |
