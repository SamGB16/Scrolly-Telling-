# Music Consumption Museum

A museum-style website exploring the evolution of music consumption, from the phonograph and vinyl record to modern streaming platforms.

## Live Site
https://SamGB16.github.io/music-museum/

## Project Overview
This project is a curated museum exhibition that guides visitors
through five eras of music consumption technology. Each exhibit page represents a different room in the museum, telling the story of how humanity has listened to music from 1877 to the present day.

## Design Style — Swiss (International Style)
The site uses the Swiss design style, characterized by:
- Clean, minimal layouts with strong grid systems
- Clear typographic hierarchy with generous whitespace
- Limited color palette — dark backgrounds with high contrast text
- Content and structure take priority over decoration

This style grounds the site in a recognizable visual tradition that feels authoritative and museum-like, letting the content speak without visual noise.

## Brand Archetype — The Explorer
The site follows the Explorer archetype. This shapes:
- Tone: curious, inviting, forward-moving
- Vocabulary: journey, discovery, room, exhibition
- Structure: each era is a new room to explore
- Emotional character: wonder at how far we have come

The Explorer archetype was chosen because music consumption is
a universal human journey and everyone has a relationship with how
they listen to music.

## Cialdini Principle — Social Proof
The site applies Social Proof by highlighting adoption data on every exhibit page and era card:
- Vinyl: Over 100M records sold annually at peak
- Walkman: 400M+ units sold worldwide
- CD: 2.4B CDs sold in peak year 1999
- iPod: 450M+ units sold before discontinuation
- Spotify: 600M+ users worldwide

Showing how widely each format was adopted validates the cultural
importance of each era and encourages visitors to engage more deeply with the content.

## AI Orchestration Process
This project follows a spec-driven development workflow inspired by the reference repository. The core principle is that AI is a tool for execution, not decision-making.

### Workflow
```
Spec → QA Spec → Sprint Doc → Implement → QA → Commit
```

### Why This Process
- Prevents drift — AI stays within bounded sprint scope
- Preserves intent — decisions live in files not chat history
- Enables verification — each sprint has explicit acceptance criteria
- Improves quality — QA is a separate deliberate step

### Sprints Completed

| Sprint | Name | Scope |
|---|---|---|
| 0 | Scaffold | Next.js setup, Tailwind, folder structure |
| 1 | UI Foundation | Card, Panel, SectionHeading components |
| 2 | Homepage | Exhibition entrance, era cards, social proof |
| 3 | Exhibit Pages | Five era pages with artifacts and copy |
| 4 | QA & Polish | Smithsonian curator review, polish |
| 5 | Images | Hero images for all exhibit pages |

### Change Notes
Small, low-risk changes used the lightweight change note path:
- Change 001: Homepage hero image
- Change 002: Fix image paths for GitHub Pages deployment

### Smithsonian Curator Review
As required by the assignment, AI reviewed the site as a Smithsonian curator evaluating narrative flow, artifact presentation, educational value, emotional engagement, and visual coherence. This review produced the "Why This Matters" section on each exhibit page and improvements to the Explorer-tone copy throughout the site.

### Verification
Each sprint was verified with:
- npm run build
- npm run lint
- Visual browser check against the sprint checklist

## Tech Stack
- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript
- Deployed via GitHub Actions to GitHub Pages

## Sources
- Phonograph & Vinyl: https://en.wikipedia.org/wiki/Phonograph_record
- Sony Walkman: https://en.wikipedia.org/wiki/Walkman
- Walkman release: https://www.history.com/this-day-in-history/july-1/the-first-sony-walkman-goes-on-sale
- Compact Disc: https://en.wikipedia.org/wiki/Compact_disc
- iPod: https://en.wikipedia.org/wiki/IPod
- Spotify: https://newsroom.spotify.com/company-info/