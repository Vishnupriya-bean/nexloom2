# Nexloom → Next.js Migration Plan

> **Goal:** Pixel-perfect Next.js rebuild of the Nexloom static HTML site — SSR, SEO-optimised, easy to extend.
>
> **Source:** `D:\HPA\Nexloom` (static HTML/CSS/JS)
> **Target:** `D:\HPA\Nexloom_nextjs` (this repo)
>
> **Stack:** Next.js 16.2.9 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · next/metadata · next/font · next/image
>
> **Tailwind v4 note:** No `tailwind.config.ts` in v4. Design tokens are defined via `@theme {}` in `globals.css`. `tokens.ts` holds the same values as TypeScript constants for non-CSS usage. Both files must stay in sync.

---

## SITE MAP (15 routes)

| Route | Source File |
|---|---|
| `/` | `Home/home.html` |
| `/about` | `About/about (1).html` |
| `/contact` | `Contact/contact (2).html` |
| `/how-we-work` | `How we work/how-we-work.html` |
| `/book-a-call` | `Book a call/book-a-call.html` |
| `/services/engineering-product` | `Services/1. Engineering product/services-engineering-product.html` |
| `/services/cloud-devops` | `Services/2. Cloud Devops/services-cloud-devops.html` |
| `/services/ai-automation` | `Services/3. AI-Automation/services-ai-automation.html` |
| `/services/integrations-growth` | `Services/4. Integrations-growth/services-integrations-growth.html` |
| `/blog` | `Blogs/Listing page/blog (1).html` |
| `/blog/[slug]` (×6) | `Blogs/Blog -*/blog-*.html` |
| `/case-studies` | `Casestudies/Listing page/case-studies.html` |
| `/case-studies/[slug]` (×6) | `Casestudies/Case Studies -*/case-study-*.html` |
| `/privacy-policy` | `Privacy Policy/privacy-policy.html` |
| `/terms-of-service` | `Terms of service/terms-of-service.html` |
| 404 (Next.js default + custom) | `404 page/404.html` |

---

## CORE ARCHITECTURE RULES (follow everywhere)

**Rule 1 — One Token File.**
`src/lib/tokens.ts` is the single source of truth for ALL design values: colors, font sizes, spacing, radius, shadows. `globals.css` `@theme {}` mirrors it exactly. Never hardcode design values in components.

**Rule 2 — One SEO File.**
`src/lib/seo.config.ts` owns ALL page metadata. Each `page.tsx` imports only its slice. No metadata strings anywhere else.

**Rule 3 — Content in lib.**
All copy (nav links, footer sections, blog data, case study data, service details) lives in `src/lib/content/`. Components receive content as typed props — nothing hardcoded.

**Rule 4 — Images in public.**
All images downloaded from Unsplash URLs and saved locally under `public/images/<section>/`. Use `next/image` everywhere. No external image URLs at runtime.

---

## IMAGE ASSETS INVENTORY

### External Unsplash images to download → `public/images/`
| File name | Source URL | Used on |
|---|---|---|
| `coding-laptop.jpg` | `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80` | Blog / Home |
| `datacenter.jpg` | `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80` | Services / Blog |
| `ai-prompt.jpg` | `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80` | AI service / Blog |
| `team-working.jpg` | `https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80` | About / Case studies |
| `healthcare.jpg` | `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80` | Case study 2 |
| `servers.jpg` | `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80` | Cloud DevOps |
| `robot-ai.jpg` | `https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80` | AI Automation |
| `code-screen.jpg` | `https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80` | Engineering |
| `ecommerce.jpg` | `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80` | Case study 3 |
| `devs-collab.jpg` | `https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80` | Blog / Home |
| `logistics.jpg` | `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80` | Case study 5 |
| `people-meeting.jpg` | `https://images.unsplash.com/photo-1531746790095-e5995aef3026?w=800&q=80` | About / Contact |

### Logo
| File name | Source URL |
|---|---|
| `logo.svg` | `https://assets.cdn.filesafe.space/6iXApjTTucBUWuz5gi0C/media/69aaa6787bdf3883d29582aa.svg` |

### Hero images needed (local placeholders in source — download appropriate stock)
These were referenced as `/images/hero-*.jpg` in the static site but had no actual files:
- `public/images/heroes/hero-blog.jpg`
- `public/images/heroes/hero-casestudies.jpg`
- `public/images/heroes/hero-about.jpg`
- `public/images/heroes/hero-contact.jpg`
- `public/images/heroes/hero-services.jpg`
- `public/images/heroes/hero-bookcall.jpg`
- `public/images/heroes/hero-howwework.jpg`

---

## DESIGN TOKENS (Nexloom Brand)

| Token | Value | CSS Variable |
|---|---|---|
| Primary Blue | `hsl(230, 84%, 55%)` → `#3B5BDB` | `--color-primary` |
| Accent Cyan | `hsl(190, 95%, 50%)` → `#02D6F5` | `--color-accent` |
| Dark BG | `#0a0a0f` | `--color-dark` |
| Dark Surface | `#12121a` | `--color-dark-surface` |
| Text Primary | `#f0f0f5` | `--color-text` |
| Text Muted | `#8a8a9a` | `--color-muted` |
| Border | `rgba(255,255,255,0.1)` | `--color-border` |
| White | `#ffffff` | `--color-white` |
| Glass BG | `rgba(255,255,255,0.05)` | `--color-glass` |
| Font | Montserrat 300–900 | `--font-sans` |
| Container Max Width | `1400px` | `--layout-max-width` |
| Border Radius | `0.75rem` | `--radius-base` |
| Border Radius SM | `0.5rem` | `--radius-sm` |

---

## PROGRESS TRACKER

| Phase | Description | Status |
|---|---|---|
| 0 | Project Scaffolding | ✅ Complete |
| 1 | Design Tokens | ⬜ Not Started |
| 2 | SEO Config | ⬜ Not Started |
| 3 | Image Assets — Download & Organise | ⬜ Not Started |
| 4 | Shared Layout (Header + Footer) | ⬜ Not Started |
| 5 | Reusable UI Components | ⬜ Not Started |
| 6 | Home Page `/` | ⬜ Not Started |
| 7 | About Page `/about` | ⬜ Not Started |
| 8 | How We Work `/how-we-work` | ⬜ Not Started |
| 9 | Services Pages (×4) | ⬜ Not Started |
| 10 | Blog System (`/blog` + `/blog/[slug]`) | ⬜ Not Started |
| 11 | Case Studies (`/case-studies` + `/case-studies/[slug]`) | ⬜ Not Started |
| 12 | Contact + Book a Call | ⬜ Not Started |
| 13 | Legal Pages (Privacy + Terms) | ⬜ Not Started |
| 14 | 404 Page | ⬜ Not Started |
| 15 | SEO & JSON-LD Schema | ⬜ Not Started |
| 16 | Performance (next/image, fonts, scripts) | ⬜ Not Started |
| 17 | QA Checklist | ⬜ Not Started |
| 18 | Deployment | ⬜ Not Started |

---

## PHASE 0 — Project Scaffolding ✅

- [x] **0.1** `create-next-app@latest` — Next.js 16.2.9, TypeScript, Tailwind v4, App Router, ESLint, src-dir, `@/*` alias
- [x] **0.2** Installed: `framer-motion clsx tailwind-merge`
- [x] **0.3** Folder renamed to `Nexloom_nextjs` (package name: `nexloom-nextjs`)
- [x] **0.4** `MIGRATION_PLAN.md` created
- [ ] **0.5** Clear boilerplate: `page.tsx` (empty placeholder), `globals.css` (Tailwind import + scroll-behaviour only)
- [ ] **0.6** `next.config.ts` — add `remotePatterns` for `images.unsplash.com` + `assets.cdn.filesafe.space`
- [ ] **0.7** `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- [ ] **0.8** Create full component/lib folder structure
- [ ] **0.9** `npx next build` passes clean ✓

---

## PHASE 1 — Design Tokens

- [ ] **1.1** `src/lib/tokens.ts` — ALL Nexloom design tokens (colors, font, radius, shadows, layout)
- [ ] **1.2** `src/app/globals.css` — `@theme {}` block mirroring tokens.ts exactly (Tailwind v4 reads this)
- [ ] **1.3** `src/app/layout.tsx` — load Montserrat via `next/font/google` (weights 300–900), apply CSS variable to `<html>`

---

## PHASE 2 — SEO Config

- [ ] **2.1** `src/lib/seo.config.ts` — typed metadata objects for all 15 routes:
  - home, about, contact, howWeWork, bookACall
  - servicesEngineering, servicesCloudDevops, servicesAiAutomation, servicesIntegrationsGrowth
  - blogListing, blogPost (template)
  - caseStudiesListing, caseStudy (template)
  - privacyPolicy, termsOfService
- [ ] **2.2** `src/app/sitemap.ts` — all static routes + dynamic blog/case-study slugs
- [ ] **2.3** `src/app/robots.ts` — allow everything, disallow none (update if needed)
- [ ] **2.4** `src/app/layout.tsx` — `metadataBase` + favicon icons config

---

## PHASE 3 — Image Assets

- [ ] **3.1** Download all 12 Unsplash images → `public/images/`
- [ ] **3.2** Download logo SVG → `public/images/logo.svg`
- [ ] **3.3** Source or create 7 hero images → `public/images/heroes/`
- [ ] **3.4** `next.config.ts` — `remotePatterns` for unsplash + filesafe CDN (for any remaining external refs during migration)

---

## PHASE 4 — Shared Layout (Header + Footer)

### 4A — Header
- [ ] **4A.1** `src/components/layout/Header.tsx` — sticky, scroll shadow, logo (`next/image`), desktop nav
- [ ] **4A.2** Mega dropdown — Services with 4 groups × 6 items each, hover-activated
- [ ] **4A.3** Mobile hamburger menu — Framer Motion `AnimatePresence` slide-in, services accordion
- [ ] **4A.4** "Book a Call" CTA button in header

### 4B — Footer
- [ ] **4B.1** `src/components/layout/Footer.tsx` — 4-column grid: logo+tagline, Services, Company, Resources
- [ ] **4B.2** Social links (LinkedIn, Twitter, GitHub, Email)
- [ ] **4B.3** Legal links (Privacy Policy, Terms of Service), copyright

### 4C — Root Shell
- [ ] **4C.1** `src/components/layout/RootShell.tsx` — Header + `{children}` + Footer
- [ ] **4C.2** Wire into `src/app/layout.tsx`

---

## PHASE 5 — Reusable UI Components

- [ ] **5.1** `src/components/ui/Button.tsx` — `variant: 'primary' | 'outline'`, accepts `href` (→ `<Link>`) or `onClick` (→ `<button>`), arrow icon variant
- [ ] **5.2** `src/components/ui/SectionWrapper.tsx` — consistent `py`, max-width container, `id` prop
- [ ] **5.3** `src/components/ui/RevealOnScroll.tsx` — `useInView` + Framer Motion fade + `y: 20 → 0`, `delay` prop for stagger
- [ ] **5.4** `src/components/ui/GlassCard.tsx` — glass morphism card (backdrop blur, semi-transparent bg, border)
- [ ] **5.5** `src/components/ui/GradientText.tsx` — reusable blue-to-cyan gradient text span
- [ ] **5.6** `src/components/ui/FAQAccordion.tsx` — receives `items: FAQItem[]`, ARIA compliant, one open at a time, Framer Motion height animation
- [ ] **5.7** `src/components/ui/SectionLabel.tsx` — small uppercase label chip (used above section headings)
- [ ] **5.8** Inline SVG icon components in `src/components/icons/`: `ArrowIcon`, `CheckIcon`, `ChevronIcon`, `MenuIcon`, `CloseIcon`, `LinkedInIcon`, `TwitterIcon`, `GitHubIcon`, `MailIcon`

---

## PHASE 6 — Home Page `/`

Source: `D:\HPA\Nexloom\Home\home.html`

- [ ] **6.1** `src/components/home/Hero.tsx` — headline, subtext, CTA buttons, scroll indicator
- [ ] **6.2** `src/components/home/TrustedBy.tsx` — "Trusted by teams at…" logo strip (if present)
- [ ] **6.3** `src/components/home/Services.tsx` — 4-service grid cards with icons and links
- [ ] **6.4** `src/components/home/WhyNexloom.tsx` — value proposition section
- [ ] **6.5** `src/components/home/HowWeWork.tsx` — 3/4-step process preview
- [ ] **6.6** `src/components/home/CaseStudiesPreview.tsx` — featured case study cards
- [ ] **6.7** `src/components/home/BlogPreview.tsx` — latest blog post cards
- [ ] **6.8** `src/components/home/CTA.tsx` — bottom "Ready to build?" CTA banner
- [ ] **6.9** `src/app/page.tsx` — assembles all sections, exports `seoConfig.home`

---

## PHASE 7 — About Page `/about`

Source: `D:\HPA\Nexloom\About\about (1).html`

- [ ] **7.1** `src/components/about/Hero.tsx` — page hero with headline
- [ ] **7.2** `src/components/about/Mission.tsx` — mission and values section
- [ ] **7.3** `src/components/about/Team.tsx` — team/founder section (if present)
- [ ] **7.4** `src/components/about/CTA.tsx` — bottom CTA
- [ ] **7.5** `src/app/about/page.tsx`

---

## PHASE 8 — How We Work `/how-we-work`

Source: `D:\HPA\Nexloom\How we work\how-we-work.html`

- [ ] **8.1** `src/components/how-we-work/Process.tsx` — numbered step-by-step process
- [ ] **8.2** `src/components/how-we-work/Principles.tsx` — engineering principles/values
- [ ] **8.3** `src/app/how-we-work/page.tsx`

---

## PHASE 9 — Services Pages (×4)

Source: `D:\HPA\Nexloom\Services\`

Each service page follows the same structure:
- Hero with page title + subtitle
- Service overview section
- 6 sub-service cards (with anchor links matching header mega dropdown)
- Process/approach section
- Related case studies
- CTA

- [ ] **9.1** `src/components/services/ServiceHero.tsx` — shared hero for all service pages
- [ ] **9.2** `src/components/services/ServiceGrid.tsx` — 6-item sub-service grid
- [ ] **9.3** `src/components/services/ServiceCTA.tsx` — shared bottom CTA
- [ ] **9.4** `src/app/services/engineering-product/page.tsx`
- [ ] **9.5** `src/app/services/cloud-devops/page.tsx`
- [ ] **9.6** `src/app/services/ai-automation/page.tsx`
- [ ] **9.7** `src/app/services/integrations-growth/page.tsx`

---

## PHASE 10 — Blog System

Source: `D:\HPA\Nexloom\Blogs\`

### Blog content as static data (no CMS needed for now)
- [ ] **10.1** `src/lib/content/blogs.ts` — typed array of all 6 blog posts:
  ```ts
  export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    category: string
    author: string
    date: string
    readTime: string
    image: string  // local public path
    content: BlogSection[]
  }
  ```
- [ ] **10.2** `src/components/blog/BlogCard.tsx` — card used on listing page
- [ ] **10.3** `src/components/blog/BlogHero.tsx` — article hero (title, meta, share buttons)
- [ ] **10.4** `src/components/blog/TableOfContents.tsx` — sticky sidebar ToC with active section tracking
- [ ] **10.5** `src/components/blog/ShareButtons.tsx` — LinkedIn, Twitter, Facebook, copy-link
- [ ] **10.6** `src/components/blog/BlogCTA.tsx` — bottom CTA to "Book a Call"
- [ ] **10.7** `src/app/blog/page.tsx` — listing page with filter by category
- [ ] **10.8** `src/app/blog/[slug]/page.tsx` — dynamic route, `generateStaticParams()` for all 6 posts
- [ ] **10.9** `generateMetadata()` per blog post from `blogs.ts` data

**Blog slugs:**
- `building-ai-agents-production`
- `microservices-vs-monolith-2026`
- `kubernetes-cost-optimization`
- `llm-integration-patterns`
- `cicd-pipeline-best-practices`
- `api-design-developer-experience`

---

## PHASE 11 — Case Studies

Source: `D:\HPA\Nexloom\Casestudies\`

- [ ] **11.1** `src/lib/content/case-studies.ts` — typed array of all 6 case studies:
  ```ts
  export interface CaseStudy {
    slug: string
    title: string
    industry: string
    challenge: string
    solution: string
    results: string[]
    technologies: string[]
    image: string
  }
  ```
- [ ] **11.2** `src/components/case-studies/CaseStudyCard.tsx` — listing card
- [ ] **11.3** `src/components/case-studies/CaseStudyHero.tsx` — article hero
- [ ] **11.4** `src/components/case-studies/ResultsGrid.tsx` — metrics/results highlights
- [ ] **11.5** `src/app/case-studies/page.tsx` — listing page
- [ ] **11.6** `src/app/case-studies/[slug]/page.tsx` — dynamic route with `generateStaticParams()`

**Case study slugs:**
- `saas-platform-fintech-startup`
- `cloud-migration-healthcare`
- `ai-customer-support-ecommerce`
- `data-pipeline-retail-analytics`
- `mobile-app-logistics`
- `devops-pipeline-saas-company`

---

## PHASE 12 — Contact + Book a Call

Source: `D:\HPA\Nexloom\Contact\` + `D:\HPA\Nexloom\Book a call\`

- [ ] **12.1** `src/app/contact/page.tsx` — contact info + form/email link
- [ ] **12.2** `src/app/book-a-call/page.tsx` — Cal.com embed (`https://cal.com/stevefowler/30m?embed=true`) via `<iframe>` or `next/script`

---

## PHASE 13 — Legal Pages

Source: `D:\HPA\Nexloom\Privacy Policy\` + `D:\HPA\Nexloom\Terms of service\`

- [ ] **13.1** `src/components/legal/LegalLayout.tsx` — sticky ToC sidebar (desktop) + prose content
- [ ] **13.2** `src/components/legal/TableOfContents.tsx` — active section via `IntersectionObserver`
- [ ] **13.3** `src/app/privacy-policy/page.tsx`
- [ ] **13.4** `src/app/terms-of-service/page.tsx`

---

## PHASE 14 — 404 Page

- [ ] **14.1** `src/app/not-found.tsx` — Next.js 404 page matching Nexloom design
- [ ] **14.2** "Back to Home" button, consistent header/footer

---

## PHASE 15 — SEO & JSON-LD Schema

- [ ] **15.1** `src/components/seo/JsonLd.tsx` — generic `<script type="application/ld+json">` component
- [ ] **15.2** `src/lib/schema.ts` — all schema objects:
  - `organizationSchema` — `@type: Organization` (Nexloom)
  - `websiteSchema` — `@type: WebSite` with `SearchAction`
  - `serviceSchema` — 4 service offerings
  - `faqSchema` — per-page FAQ if applicable
  - `breadcrumbSchema` — for blog posts and case studies
  - `articleSchema` — for each blog post
- [ ] **15.3** Home `page.tsx` injects `organizationSchema` + `websiteSchema`
- [ ] **15.4** Blog posts inject `articleSchema` + `breadcrumbSchema`
- [ ] **15.5** Service pages inject `serviceSchema`

---

## PHASE 16 — Performance

- [ ] **16.1** `next/image` for ALL images — `priority` on above-fold, `loading="lazy"` rest, correct `width`/`height`
- [ ] **16.2** `next/font` for Montserrat — zero CLS, no FOUT
- [ ] **16.3** All inline SVGs — no icon CDN
- [ ] **16.4** Cal.com embed on Book a Call — lazy loaded via `next/script strategy="lazyOnload"`
- [ ] **16.5** Scroll animations trigger only when in viewport (`useInView`)
- [ ] **16.6** Target: Lighthouse Performance ≥ 90, SEO 100, Accessibility ≥ 90

---

## PHASE 17 — QA Checklist

### Visual
- [ ] Home: 1280px · 768px · 390px — matches source HTML pixel-for-pixel
- [ ] All 4 service pages: sub-service anchor links work
- [ ] Blog listing: 6 cards visible, category filter works
- [ ] Case studies listing: 6 cards
- [ ] All hero images load correctly
- [ ] Glass morphism cards render correctly
- [ ] Gradient text renders correctly

### Navigation
- [ ] Desktop mega dropdown: all 24 service links work
- [ ] Mobile menu: services accordion expands/collapses
- [ ] All footer links resolve to correct routes
- [ ] Header "Book a Call" CTA links to `/book-a-call`

### SEO (verify in page source — must be server-rendered)
- [ ] All `<meta>` tags in `<head>` visible in page source (not JS-injected)
- [ ] JSON-LD in `<head>` on relevant pages
- [ ] `/sitemap.xml` accessible and lists all routes
- [ ] `/robots.txt` returns 200
- [ ] Canonical URLs correct on all pages
- [ ] OG + Twitter card tags present

### Performance
- [ ] Lighthouse Performance ≥ 90 on home
- [ ] LCP < 2.5s · CLS < 0.1
- [ ] `next/image` serving WebP
- [ ] No render-blocking resources

### Accessibility
- [ ] All `<img>` / `<Image>` have `alt`
- [ ] Mobile menu has `aria-expanded`, `aria-label`
- [ ] FAQ accordion has `aria-expanded`, `aria-controls`
- [ ] Color contrast ≥ 4.5:1 for body text

---

## PHASE 18 — Deployment

- [ ] **18.1** Push to GitHub repo
- [ ] **18.2** Connect to Vercel — zero-config Next.js deploy
- [ ] **18.3** Set `NEXT_PUBLIC_SITE_URL=https://nexloom.com` env var in Vercel
- [ ] **18.4** Configure custom domain on Vercel
- [ ] **18.5** Enable Vercel Analytics (Core Web Vitals monitoring)
- [ ] **18.6** Submit sitemap to Google Search Console

---

## FILE STRUCTURE (Target)

```
Nexloom_nextjs/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── heroes/            ← 7 hero images
│   │   ├── blog/              ← blog featured images
│   │   └── case-studies/      ← case study images
│   └── favicon.ico
│
├── src/
│   ├── app/                   ← App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx           ← Home /
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── how-we-work/page.tsx
│   │   ├── book-a-call/page.tsx
│   │   ├── services/
│   │   │   ├── engineering-product/page.tsx
│   │   │   ├── cloud-devops/page.tsx
│   │   │   ├── ai-automation/page.tsx
│   │   │   └── integrations-growth/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── case-studies/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── terms-of-service/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── RootShell.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustedBy.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyNexloom.tsx
│   │   │   ├── HowWeWork.tsx
│   │   │   ├── CaseStudiesPreview.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   └── CTA.tsx
│   │   ├── about/
│   │   ├── how-we-work/
│   │   ├── services/
│   │   │   ├── ServiceHero.tsx
│   │   │   ├── ServiceGrid.tsx
│   │   │   └── ServiceCTA.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogHero.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── ShareButtons.tsx
│   │   │   └── BlogCTA.tsx
│   │   ├── case-studies/
│   │   │   ├── CaseStudyCard.tsx
│   │   │   ├── CaseStudyHero.tsx
│   │   │   └── ResultsGrid.tsx
│   │   ├── legal/
│   │   │   ├── LegalLayout.tsx
│   │   │   └── TableOfContents.tsx
│   │   ├── seo/
│   │   │   └── JsonLd.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   ├── RevealOnScroll.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── GradientText.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── SectionLabel.tsx
│   │   └── icons/
│   │       ├── ArrowIcon.tsx
│   │       ├── CheckIcon.tsx
│   │       ├── ChevronIcon.tsx
│   │       ├── MenuIcon.tsx
│   │       ├── CloseIcon.tsx
│   │       ├── LinkedInIcon.tsx
│   │       ├── TwitterIcon.tsx
│   │       ├── GitHubIcon.tsx
│   │       └── MailIcon.tsx
│   │
│   └── lib/
│       ├── tokens.ts          ← ALL design tokens
│       ├── seo.config.ts      ← ALL page metadata
│       ├── utils.ts           ← cn() helper
│       ├── schema.ts          ← ALL JSON-LD schema objects
│       └── content/
│           ├── nav.ts         ← header nav links + mega dropdown data
│           ├── footer.ts      ← footer columns + links
│           ├── home.ts        ← home page sections content
│           ├── services.ts    ← all 4 service pages content
│           ├── blogs.ts       ← all 6 blog posts data
│           └── case-studies.ts← all 6 case studies data
│
├── next.config.ts
├── tsconfig.json
├── package.json
├── MIGRATION_PLAN.md
└── .gitignore
```

---

## KEY VALUES REFERENCE

| Item | Value |
|---|---|
| Primary Blue | `hsl(230, 84%, 55%)` |
| Accent Cyan | `hsl(190, 95%, 50%)` |
| Font | Montserrat 300–900 |
| Container Max Width | `1400px` |
| Border Radius | `0.75rem` |
| Email | `hello@nexloom.com` |
| Cal.com Booking | `https://cal.com/stevefowler/30m?embed=true` |
| Logo CDN | `assets.cdn.filesafe.space` |
| Domain (target) | `nexloom.com` |

---

*Updated: 2026-06-12 | Nexloom → Next.js Migration*
