# Sprint 3 — Exhibit Pages

## Goal
Build individual exhibit pages for each era. Each page should feel
like walking into a dedicated museum room — immersive, educational,
and coherent with the Swiss design style and Explorer archetype.

## Files Expected to Change
- app/vinyl/page.tsx
- app/cassette/page.tsx
- app/cd/page.tsx
- app/ipod/page.tsx
- app/streaming/page.tsx
- components/content/ExhibitHero.tsx
- components/content/ArtifactDisplay.tsx

## Tasks
1. Create ExhibitHero component — full width era banner with era
   name, date range, and one sentence description
2. Create ArtifactDisplay component — shows the key artifact of the
   era (e.g. Walkman, vinyl record) with a name and description
3. Build all five era pages using ExhibitHero and ArtifactDisplay
4. Each page must include social proof stat for that era
5. Each page must link back to the homepage
6. Homepage era cards must link to their respective exhibit pages

## Era Page Content

### Vinyl (1877–1970s)
- Artifact: The Phonograph / LP Record
- Key fact: Thomas Edison invented the phonograph in 1877
- Social proof: Over 100M records sold annually at peak

### Cassette & Walkman (1963–1990s)
- Artifact: Sony Walkman TPS-L2
- Key fact: Released July 1, 1979 in Japan
- Social proof: 400M+ Walkmans sold worldwide

### CD & Discman (1980s–2000s)
- Artifact: Compact Disc / Sony Discman
- Key fact: CD introduced commercially in 1982
- Social proof: 2.4B CDs sold in peak year 1999

### MP3 & iPod (1990s–2000s)
- Artifact: Apple iPod (1st generation, 2001)
- Key fact: "1,000 songs in your pocket" — Steve Jobs, 2001
- Social proof: 450M+ iPods sold before discontinuation

### Streaming (2008–present)
- Artifact: Spotify
- Key fact: Spotify launched in 2008 in Sweden
- Social proof: 600M+ Spotify users worldwide

## Verification
- npm run build passes
- npm run lint passes
- All five routes are reachable (/vinyl, /cassette, /cd, /ipod,
  /streaming)
- Each page has ExhibitHero, ArtifactDisplay, and social proof stat
- Homepage cards link to correct exhibit pages
- Each exhibit page links back to homepage

## Completion Checklist
- [x] ExhibitHero.tsx created in components/content/
- [x] ArtifactDisplay.tsx created in components/content/
- [x] /vinyl page exists and loads
- [x] /cassette page exists and loads
- [x] /cd page exists and loads
- [x] /ipod page exists and loads
- [x] /streaming page exists and loads
- [x] Homepage cards link to exhibit pages
- [x] npm run build passes
- [x] npm run lint passes