# Mohammed Arfan™ Portfolio

> **⚠️ IMPORTANT NOTICE:** This is a personal portfolio website for **viewing purposes only**. This repository and its code are **NOT available for cloning, copying, or use as a template**. All rights reserved.

A premium, editorial portfolio website built around a warm light-theme design language — soft cream surfaces, refined typography, and product-quality polish across every section, state, and supporting screen. Built with Next.js 16, React 19, and Tailwind CSS 4.

## 🎨 Design Language

A cohesive light-theme system applied across the entire experience:

- **Warm cream surface** (`#FAF8F5`) with subtle peach radial blooms and 3% dot grain
- **Deep warm slate** (`#1A1614`) for primary CTAs and the brand mark surface
- **Warm gold accents** (`#C77F45` / `#E8B97E`) for highlights and interactive accents
- **Sora** for headlines, **Cormorant Garamond** for editorial italics, **Inter** for body
- Consistent motion language across sections (`[0.22, 1, 0.36, 1]` easing, 0.6–0.7s duration)
- Unified card grammar: white surfaces, warm cream borders, layered shadows that deepen on hover

## 🚀 Tech Stack

### Core Framework
- **Next.js 16.1.1** – App Router, React Server Components, image optimization
- **React 19.2.1**
- **TypeScript 5**

### Styling & Animation
- **Tailwind CSS 4** with `@theme inline` tokens
- **Framer Motion 12** for reveal-on-scroll, layout transitions, and microinteractions
- **GSAP 3.14**
- **Lucide React** + **react-icons** for iconography
- **tw-animate-css** for utility animations

### State & Utilities
- **Zustand 5** for lightweight state
- **Class Variance Authority**, **clsx**, **tailwind-merge** for class composition
- **Radix Slot** for composable primitives

### 3D Graphics
- **React Three Fiber 9.4** + **React Three Drei 10.7**

### Analytics & Integrations
- **nextjs-google-analytics** (GA4)
- **FormSubmit** for contact form delivery

## 📋 Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher

## ✨ Sections

- **Hero / About** – Editorial 5/7 split with a layered portrait frame, "Open to Internships" status pill, headline, and inline stat grid
- **Selected Projects** – Asymmetric case-study layout, dominant 16:10 screenshots with floating warm glows, FLAGSHIP and award badges, refined tech pills
- **Experience & Impact** – Floating editorial cards with ambient warm bloom on hover, compact meta column, hairline-separated key outcomes
- **Recognition & Awards** – Hero composition with a gold gradient medallion embossing the rank, editorial index numbering, decorative concentric arcs
- **Skills & Technologies** – 1/2/3-col grid with categorized "Core Stack" + "Additional Toolkit", warm chips, cream-to-dark hover transitions on icon tiles
- **Contact** – 5/7 grid with social cards on the left and a refined form on the right; rounded cream inputs morph to white on focus with a 4px terracotta ring
- **Footer** – Minimal three-column closure with the `</>` brand lockup, copyright, and a back-to-top link

## 🧩 System States & Supporting Screens

All in the same warm light language:

- **`app/loading.tsx`** – `</> ArfanCodes` brand lockup with a dual-ring loader
- **`app/not-found.tsx`** – 404 with the middle `0` accented in terracotta and a peach glow
- **`app/error.tsx`** – Route-level error boundary with a gold medallion and recovery actions
- **`app/global-error.tsx`** – Root crash fallback rendered inline (no layout dependency)
- **`components/ui/ImageFrame.tsx`** – `next/image` wrapper with a shimmer skeleton on load and an editorial fallback card on failure (wired into hero + project screenshots)
- **Contact success modal** – Light recomposition with gold-gradient medallion

## 🎯 Brand & Iconography

- **`</> ArfanCodes`** wordmark used consistently in the navbar, footer, loading state, and social preview
- Favicon family (`32`, `180`, `192`, `512`) drawn as a single geometric `</>` glyph on `#1A1614` with warm gold strokes for legibility at every size
- OG social preview redesigned around the same brand grammar (cream surface, brand lockup, status pill, headline + subtitle)
- PWA manifest theme: `background_color: #FAF8F5`, `theme_color: #1A1614`

## 🖥️ UI/UX Highlights

- Floating glass navbar with refined underline active state (spring-animated `layoutId`)
- Subtle reveal-on-scroll across every section with unified easing and duration
- Card hovers: warm border darkening + shadow deepening + 1–4px lift
- Form fields: cream rest state, white focus state, 4px terracotta focus halo
- Mobile menu: cream overlay with peach blooms and editorial nav reveals
- Reduced-motion respected globally via `prefers-reduced-motion`
- Premium shimmer skeleton + graceful image fallback on every visual surface

## ⚡ Performance

- Next.js App Router with automatic code splitting
- `next/image` for all imagery, with shimmer skeletons hiding loading flicker
- Per-section reveal animations gated by `viewport={{ once: true }}` to avoid re-triggers
- TypeScript end-to-end for type safety

## 🌐 Browser Support

- Chrome, Firefox, Safari, Edge (latest)
- iOS Safari, Chrome Mobile

## 🌍 Live Portfolio

**[https://arfaan.me](https://arfaan.me)**

## ⚠️ Usage Restrictions

**This portfolio is NOT open source and is NOT available for:**

- Cloning or forking
- Using as a template or boilerplate
- Copying code or design elements
- Commercial or personal reuse in any form

This repository is shared publicly for **demonstration and viewing purposes only** to showcase my work to potential employers, clients, and collaborators.

If you're interested in working together or have questions about my work, please use the contact form on the live website.

---

## 📄 License & Copyright

**© 2026 Mohammed Arfan. All Rights Reserved.**

This project and its contents are proprietary and confidential. Unauthorized copying, distribution, modification, or use of this code, via any medium, is strictly prohibited without explicit written permission from the author.

**This is NOT an open-source project.** The code is visible for demonstration purposes only.

## 👤 Author

**Mohammed Arfan**

- Portfolio: [https://arfaan.me](https://arfaan.me)
- LinkedIn: [mohammed-arfan-167452171](https://www.linkedin.com/in/mohammed-arfan-167452171)
- GitHub: [@ArfanCodes](https://github.com/ArfanCodes)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment platform
- Open source community for the excellent libraries

---

**Last Updated:** May 2026
