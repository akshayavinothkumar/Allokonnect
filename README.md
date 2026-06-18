# AlloKonnect Landing Website

Production-ready React landing website for the AlloKonnect mobile application.

## Stack

- React.js with Vite
- Tailwind CSS
- React Router DOM
- Lucide React icons
- Framer Motion animations

## Project Structure

```text
src/
  assets/
    screenshots/
      index.js
      s1.jpeg
      s2.jpeg
      s3.jpeg
      s4.jpeg
      s5.jpeg
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Features.jsx
    HowItWorks.jsx
    Screenshots.jsx
    Benefits.jsx
    WhyChoose.jsx
    Testimonials.jsx
    FAQ.jsx
    DownloadCTA.jsx
    Footer.jsx
  pages/
    Home.jsx
  App.jsx
  main.jsx
  styles.css
```

## Local Development

Install dependencies:

```bash
npm.cmd install
```

Start the dev server:

```bash
npm.cmd run dev
```

On Windows, you can also double-click [start-dev.bat](start-dev.bat). It installs dependencies, starts Vite, and opens `http://localhost:5173`.

Build for production:

```bash
npm.cmd run build
```

Preview the production build:

```bash
npm.cmd run preview
```

On Windows, you can double-click [preview-production.bat](preview-production.bat) to build and open the production preview at `http://localhost:4173`.

Do not open `index.html` directly in the browser. This React app needs the Vite dev server or production preview server so JavaScript modules and image assets load correctly.

## Deployment Guide

The site builds to the `dist/` folder and can be deployed to Vercel, Netlify, Cloudflare Pages, or any static host.

Recommended build settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: current LTS

## Screenshot Management Guide

All app screenshots are centralized in [src/assets/screenshots/index.js](src/assets/screenshots/index.js).

To update the gallery:

1. Add new screenshot files to `src/assets/screenshots/`.
2. Import them in `src/assets/screenshots/index.js`.
3. Update the `screenshots` array with `id`, `title`, `caption`, and `src`.
4. Rebuild the site with `npm run build`.

The hero and screenshot carousel both read from this centralized array, so updates stay consistent across the site.

## SEO

SEO metadata is configured in [index.html](index.html), including title, description, theme color, robots, and Open Graph tags.

## Content Notes

The page uses concise healthcare SaaS messaging and real AlloKonnect app screens. Product details were aligned with the Google Play listing for `com.savemom.alloconnect`, including family management, health records, appointments, communities, Allobot, personal files, QR-based connections, and device connectivity support.
