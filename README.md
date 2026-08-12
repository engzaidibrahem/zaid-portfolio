# Zaid Ibrahem — Portfolio

Personal portfolio for **Zaid Ibrahem**, Full-Stack Engineer & Product Builder.

Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Add project screenshots

Place images in `public/projects/`:

| File | Project |
|------|---------|
| `public/projects/indoform.jpg` | IndoForm |
| `public/projects/delivery.jpg` | Valley Order |
| `public/projects/school.jpg` | School Management |
| `public/projects/gia.jpg` | Gia Maharani Group |

Recommended size: **1600×1000** (or similar 16:10 / 16:9). JPG or PNG works. Replace the placeholder files with real screenshots — the site already points to these paths.

If an image fails to load, each project card shows a graceful branded fallback.

## Change email, LinkedIn, and language

Edit `lib/site.ts` for contact links:

```ts
export const siteConfig = {
  email: "engzaid386@gmail.com",
  linkedin: "https://linkedin.com/in/your-handle",
  // ...
} as const;
```

Language strings live in `lib/i18n/dictionaries.ts` (English + Arabic). The navbar **AR / EN** button switches the full site language and RTL layout.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Click **Deploy**.

Or with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
app/
  layout.tsx      # Fonts, metadata, global shell
  page.tsx        # Home page composition
  globals.css     # Design tokens + utilities
components/
  Navbar.tsx
  Hero.tsx
  ArchitectureCard.tsx
  Projects.tsx
  Capabilities.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx
lib/
  site.ts         # Contact / brand config
  projects.ts     # Project + capability data
public/
  projects/       # Screenshots
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |
