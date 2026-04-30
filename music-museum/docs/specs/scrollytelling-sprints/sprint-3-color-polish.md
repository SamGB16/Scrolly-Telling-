# Sprint 3 — Color & Polish

## Goal
Refine the accent color usage, smooth out animations, and do a
full QA pass to ensure the scrollytelling experience feels cohesive
and professional across all pages.

## Files Expected to Change
- app/globals.css
- app/page.tsx
- app/vinyl/page.tsx
- app/cassette/page.tsx
- app/cd/page.tsx
- app/ipod/page.tsx
- app/streaming/page.tsx

## Tasks

### 1. Animation Refinement
- Ensure all ScrollReveal animations have smooth easing
- Add staggered delays to elements that appear together
- Make sure scroll indicator arrow animates (gentle bounce)
- Ensure animations don't trigger too early or too late

### 2. Accent Color Consistency
- Audit every page for accent color (#D4A853) usage
- Accent color should appear on:
  - Key headings (Context, Artifact, Impact, Why This Matters)
  - Social proof stats (the large numbers)
  - CTA buttons and links
  - Scroll indicator arrow
- Remove any accent color used inconsistently

### 3. Typography Polish
- Ensure heading sizes are consistent across all pages
- Era names should be the largest element on each page
- Date ranges should be smaller and lighter
- Body text should be readable — not too small

### 4. Navigation Polish
- Back to Exhibition link should be consistent on all pages
- Next Era links should follow this order:
  Vinyl → Cassette → CD → iPod → Streaming
- Links should use accent color on hover

### 5. Smithsonian Curator QA
Have AI review the full site as a Smithsonian curator and check:
- Does the narrative flow logically from era to era?
- Is the tone consistent with the Explorer archetype?
- Does each era feel distinct and memorable?
- Are the social proof stats presented compellingly?

## Invariants
- Do not change any factual content
- Do not change the ScrollReveal component
- Do not change next.config.ts

## Verification
- npm run build passes
- npm run lint passes
- Accent color consistent across all pages
- Animations feel smooth and natural
- Navigation works correctly between all pages
- Era order is correct: Vinyl → Cassette → CD → iPod → Streaming

## Completion Checklist
- [x] Animations smooth with proper easing
- [x] Accent color consistent across all pages
- [x] Typography hierarchy consistent
- [x] Next era navigation in correct order
- [x] Smithsonian curator review completed
- [x] npm run build passes
- [x] npm run lint passes