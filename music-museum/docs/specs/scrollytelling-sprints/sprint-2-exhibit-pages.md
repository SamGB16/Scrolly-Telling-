# Sprint 2 — Exhibit Pages Scrollytelling Redesign

## Goal
Transform all five exhibit pages into scrollytelling experiences
where each section of the story reveals itself as the visitor
scrolls. Each page should feel like walking deeper into a museum
room with each scroll step.

## Files Expected to Change
- app/vinyl/page.tsx
- app/cassette/page.tsx
- app/cd/page.tsx
- app/ipod/page.tsx
- app/streaming/page.tsx

## Page Structure for Each Exhibit
Each exhibit page should follow this scroll step sequence:

### Step 1 — Full Screen Era Hero
- Full screen section with era image as background
- Era name in large Swiss typography over the image
- Date range below the name
- Scroll indicator at the bottom

### Step 2 — Context (ScrollReveal fade-in)
- Heading: "The World Then"
- Short paragraph about what the world was like during this era
- Use accent color (#D4A853) on the heading

### Step 3 — Artifact (ScrollReveal slide-up)
- Heading: "The Device"
- Key artifact name and description
- Key fact highlighted in accent color

### Step 4 — Social Proof (ScrollReveal slide-in-left)
- Heading: "The Impact"
- Social proof stat displayed large in accent color
- Short sentence explaining the significance

### Step 5 — Why This Matters (ScrollReveal fade-in)
- Heading: "Why This Matters"
- Existing Why This Matters copy
- accent color on heading

### Step 6 — Navigation (ScrollReveal fade-in)
- Back to Exhibition link
- Next Era link (where applicable)

## Era Context Content

### Vinyl (1877–1970s)
- Context: The world had never heard recorded sound. Music existed
  only in the moment — live, fleeting, and unrepeatable.

### Cassette & Walkman (1963–1990s)
- Context: Music was freeing itself from the living room. A new
  generation wanted their soundtrack everywhere they went.

### CD & Discman (1980s–2000s)
- Context: The digital revolution was beginning. Consumers wanted
  perfect sound and the convenience of skipping tracks instantly.

### MP3 & iPod (1990s–2000s)
- Context: The internet was changing everything. Music was becoming
  data — shareable, downloadable, and dangerously free.

### Streaming (2008–present)
- Context: Ownership gave way to access. Why buy when you could
  stream everything ever recorded for less than a coffee a day?

## Invariants
- Do not modify the homepage
- Do not modify any UI components
- Use the existing ScrollReveal component for all animations
- Keep Swiss typography and grid system

## Verification
- npm run build passes
- npm run lint passes
- All five exhibit pages build correctly
- Each page follows the six step scroll structure

## Completion Checklist
- [ ] /vinyl page follows scroll step structure
- [ ] /cassette page follows scroll step structure
- [ ] /cd page follows scroll step structure
- [ ] /ipod page follows scroll step structure
- [ ] /streaming page follows scroll step structure
- [ ] ScrollReveal used on all animated sections
- [ ] Accent color applied to headings
- [ ] npm run build passes
- [ ] npm run lint passes