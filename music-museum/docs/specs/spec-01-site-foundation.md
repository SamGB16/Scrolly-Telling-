# Music Consumption Museum — Site Foundation Spec

## Problem Statement
There is no central, exhibition-style resource that guides users
through the full arc of music consumption technology. Younger
generations lack awareness of formats like the Walkman or Discman.
This site fills that gap by presenting the history as a curated
museum exhibition.

## Design Framework

### Design Style: Swiss (International Style)
Clean grid-based layouts, strong typographic hierarchy, generous
whitespace. Every page should feel like a gallery wall.

### Cialdini Principle: Social Proof
Each era page highlights adoption data — units sold, peak users,
cultural dominance — to validate the importance of each era and
encourage deeper engagement.

### Brand Archetype: The Explorer
The site guides users on a journey through time. Tone is curious,
inviting, and forward-moving. Each exhibit is a new room to discover.

## Exhibit Structure

| Route       | Era                          |
|-------------|------------------------------|
| /           | Homepage — exhibition entrance|
| /vinyl      | Phonograph & Vinyl (1877–1970s)|
| /cassette   | Cassette & Walkman (1963–1990s)|
| /cd         | CD & Discman (1980s–2000s)   |
| /ipod       | MP3 & iPod (1990s–2000s)     |
| /streaming  | Streaming Era (2008–present) |

## Architecture

### UI Layer — components/ui/
Reusable design system components: Card, Panel, SectionHeading

### Content Layer — components/content/
Museum-specific patterns: ExhibitCard, EraHero, StatBadge

### Routes — app/
Page composition only. No business logic at the route level.

## Sprint Plan

| Sprint | Name           | Scope                          |
|--------|----------------|-------------------------------|
| 0      | Scaffold       | Next.js setup, Tailwind, folders|
| 1      | UI Foundation  | Card, Panel, SectionHeading   |
| 2      | Homepage       | Exhibition entrance page      |
| 3      | Exhibit Pages  | One page per era              |
| 4      | QA & Polish    | Curator review, refinement    |

## Acceptance Criteria
- All five era routes exist and are reachable
- Swiss design style is visibly applied
- Social proof data appears on each era page
- npm run build completes without errors
- Site reads as an exhibition, not a generic webpage