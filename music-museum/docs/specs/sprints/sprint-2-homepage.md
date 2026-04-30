# Sprint 2 — Homepage

## Goal
Build the full museum homepage that serves as the exhibition entrance.
It should feel like walking into a museum — inviting, organized, and
curious. The Explorer archetype should come through in the tone and
the Social Proof principle should be visible through adoption data.

## Files Expected to Change
- app/page.tsx
- app/globals.css
- components/content/ExhibitCard.tsx
- components/content/EraHero.tsx

## Tasks
1. Create ExhibitCard component — era name, date range, short
   description, and a social proof stat (e.g. "400M+ units sold")
2. Create EraHero component — large full-width banner for the
   homepage entrance with museum title and a welcome message
3. Update homepage to show all five eras as ExhibitCards in a
   Swiss-style grid
4. Add social proof stat to each era card
5. Write Explorer-tone copy for the homepage intro

## Era Content

| Era | Date Range | Social Proof Stat |
|---|---|---|
| Vinyl | 1877–1970s | Over 100M records sold annually at peak |
| Cassette & Walkman | 1963–1990s | 400M+ Walkmans sold worldwide |
| CD & Discman | 1980s–2000s | 2.4B CDs sold in peak year 1999 |
| MP3 & iPod | 1990s–2000s | 450M+ iPods sold before discontinuation |
| Streaming | 2008–present | 600M+ Spotify users worldwide |

## Verification
- npm run build passes
- npm run lint passes
- All five eras visible on homepage
- Social proof stat visible on each card
- Intro copy reflects Explorer archetype tone
- Swiss grid layout is clean and consistent

## Completion Checklist
- [x] ExhibitCard.tsx created in components/content/
- [x] EraHero.tsx created in components/content/
- [x] All five era cards visible on homepage
- [x] Social proof stat on each card
- [x] Explorer-tone intro copy written
- [x] npm run build passes
- [x] npm run lint passes