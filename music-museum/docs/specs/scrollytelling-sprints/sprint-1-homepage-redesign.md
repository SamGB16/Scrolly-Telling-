# Sprint 1 — Homepage Scrollytelling Redesign

## Goal
Transform the homepage into a full scrollytelling experience where
the story of music consumption unfolds step by step as the visitor
scrolls. Each section should feel like a chapter reveal.

## Files Expected to Change
- app/page.tsx
- app/globals.css

## Tasks
1. Replace the current static homepage with a scrollytelling layout
   using the following steps:

   Step 1 — Full screen hero
   - Museum title in large Swiss typography
   - Tagline: "Five eras. One journey. Scroll to begin."
   - Subtle scroll indicator arrow at the bottom

   Step 2 — Introduction
   - ScrollReveal fade-in
   - Short paragraph about why music consumption history matters
   - Use accent color for a key phrase

   Step 3 — Era previews (one per era, each ScrollReveal)
   - Vinyl — slide in from left
   - Cassette — slide in from right
   - CD — slide in from left
   - iPod — slide in from right
   - Streaming — slide in from left
   - Each shows era name, date range, and social proof stat
   - Each links to its exhibit page

   Step 4 — Call to action
   - ScrollReveal fade-in
   - "Enter the Exhibition" button using accent color
   - Links to /vinyl as the first exhibit

2. Use the ScrollReveal component for all animated sections
3. Apply accent color (#D4A853) to key headings and the CTA button

## Invariants
- Do not modify any exhibit pages
- Do not modify any components except app/page.tsx
- Keep Swiss typography and grid system

## Verification
- npm run build passes
- npm run lint passes
- All four scroll steps visible on homepage
- ScrollReveal animations trigger on scroll
- Accent color visible on key elements
- Era cards link to correct exhibit pages

## Completion Checklist
- [x] Full screen hero with scroll indicator
- [x] Introduction section with ScrollReveal
- [x] Five era preview sections with ScrollReveal
- [x] Call to action with accent color button
- [x] Accent color applied to key elements
- [x] All era cards link to exhibit pages
- [x] npm run build passes
- [x] npm run lint passes