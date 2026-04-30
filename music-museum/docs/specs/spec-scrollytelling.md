# Music Consumption Museum — Scrollytelling Redesign Spec

## Problem Statement
The current museum site presents information statically. Each page
loads content all at once with no sense of narrative progression.
The goal of this redesign is to transform the site into an immersive
scrollytelling experience where the story of music consumption
unfolds step by step as the visitor scrolls.

## Design Framework

### Design Style: Swiss + Animation
Retain the Swiss grid, typography, and structure. Add:
- A warm accent color (amber/gold) to highlight key moments
- Smooth scroll-triggered animations (fade in, slide up)
- Full-screen scroll sections that feel like museum rooms

### Cialdini Principle: Social Proof (retained)
Social proof stats remain on each era section, now revealed
dramatically as the visitor scrolls to them.

### Brand Archetype: The Explorer (retained)
The scrollytelling format reinforces the Explorer archetype —
the visitor is literally on a journey, moving through time
with each scroll.

## Scrollytelling Approach
Each page uses a step-by-step narrative scroll where:
- Each scroll "step" reveals one piece of the story
- Content fades and slides in as the visitor reaches it
- Full-screen sections act as chapter breaks
- The visitor feels like they are moving through time

## Technical Approach
Use the Intersection Observer API with CSS transitions to trigger
animations as sections enter the viewport. No heavy animation
libraries needed — keep it lightweight and performant.

## Page Structure

### Homepage
1. Full-screen hero — title, tagline, scroll prompt
2. Introduction step — why music consumption matters
3. Era preview steps — each era appears one by one
4. Call to action — enter the exhibition

### Exhibit Pages (each era)
1. Full-screen era hero with image
2. Context step — what the world was like then
3. Artifact step — the key device or platform
4. Social proof step — the numbers that show impact
5. Why This Matters step — cultural significance
6. Navigation — back to exhibition / next era

## Sprint Plan

| Sprint | Name | Scope |
|---|---|---|
| 0 | Scroll Foundation | Intersection Observer setup, base animations |
| 1 | Homepage Redesign | Full scrollytelling homepage |
| 2 | Exhibit Pages | Scrollytelling on all five era pages |
| 3 | Color & Polish | Accent color, animation refinement, QA |

## Acceptance Criteria
- Each page uses scroll-triggered animations
- Swiss style is maintained throughout
- Accent color (amber/gold) applied consistently
- All five era pages follow the scrollytelling structure
- npm run build passes
- npm run lint passes
- Site feels like a narrative journey not a static page