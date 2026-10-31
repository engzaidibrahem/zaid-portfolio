# Zaid Ibrahem · SOFT STEP Portfolio

Premium portfolio for **Zaid Ibrahem** (Software Engineer) and **SOFT STEP** (Indonesia).

Stack: Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion.

## Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  page.tsx              # Home
  work/[slug]/page.tsx  # Case studies
  sitemap.ts
components/site/        # Home sections
components/work/        # Case study layout
lib/
  site.ts               # Brand & contact
  case-studies.ts       # All project + case study content
public/projects/        # Screenshots
```

## Edit content

- **Brand, hero, email:** `lib/site.ts`
- **Projects & case studies:** `lib/case-studies.ts`
- **Screenshots:** `public/projects/` (see filenames in `case-studies.ts`)

## Deploy (Vercel)

Connect [GitHub repo](https://github.com/engzaidibrahem/zaid-portfolio) — Next.js is auto-detected. Push to `master` to deploy.

## Build

```bash
npm run build
npm start
```
