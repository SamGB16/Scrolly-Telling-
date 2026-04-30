# Sprint 0 — Scroll Foundation

## Goal
Set up the scroll-triggered animation system that all pages will use.
This sprint creates the reusable building blocks for scrollytelling
without changing any existing page content.

## Technical Approach
Use the Intersection Observer API with CSS transitions. When a
section enters the viewport it triggers a CSS class that animates
the element in. No external animation libraries.

## Files Expected to Change
- app/globals.css
- components/ui/ScrollReveal.tsx

## Tasks
1. Add scroll animation CSS classes to globals.css:
   - .reveal — base class, element starts invisible
   - .reveal.visible — element animates to visible
   - Animations: fade-in, slide-up, slide-in-left
2. Create ScrollReveal.tsx component in components/ui/
   - Uses Intersection Observer to watch for elements
   - Adds .visible class when element enters viewport
   - Accepts animation type as a prop (fade, slide-up, slide-left)
   - Accepts delay as a prop for staggered animations
3. Add amber/gold accent color token to globals.css
   - --color-accent: #D4A853

## Verification
- npm run build passes
- npm run lint passes
- ScrollReveal component exists in components/ui/
- Animation classes exist in globals.css
- Accent color token defined in globals.css

## Completion Checklist
- [x] ScrollReveal.tsx created in components/ui/
- [x] reveal and visible CSS classes in globals.css
- [x] Accent color token added to globals.css
- [x] npm run build passes
- [x] npm run lint passes