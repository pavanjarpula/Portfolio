# Jarpula Pavan — Portfolio

A top-class, industry-grade portfolio website built with:

## Tech Stack
- **Vite + React** — Fast development & build
- **Framer Motion** — Page animations, scroll-driven reveals, staggered entries
- **@react-three/fiber + drei** — 3D animated sphere on hero
- **Three.js** — WebGL 3D rendering
- **Custom CSS Variables** — Consistent dark theme system

## Sections
1. **Hero** — 3D WebGL sphere, animated text stagger, stats strip
2. **Marquee Ticker** — Dual-row parallax tech stack marquee
3. **About** — Two-column with profile photo + code snippet overlay
4. **Skills** — 4-column card grid with animated progress bars + parallax chip rows
5. **Projects** — Horizontal-scroll cards tied to vertical scroll (Render.com style)
6. **Achievements** — Competitive programming stats, certifications, education timeline
7. **Contact** — CTA, social links, footer

## Features
- 🖱️ Custom dual-layer cursor with lag follower
- 🌊 Scroll-driven horizontal card rail (Projects section)
- 🎨 Noise texture overlay for depth
- ⚡ GPU-animated 3D distort sphere
- 📐 CSS Grid layout throughout
- 🎯 Section label system with accent lines
- 🔮 Glassmorphism + dark theme with purple/cyan/orange accents

## Running Locally
```bash
npm install
npm run dev
```

## Building
```bash
npm run build
npm run preview
```

## Customization
- Colors: `src/index.css` → `:root` CSS variables
- Content: Each section in `src/sections/`
- Profile photo: Replace `public/profile.jpg`
