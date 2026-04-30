# Change Note 002 — Fix Image Paths for GitHub Pages

## Problem
Images are not loading on the deployed GitHub Pages site at
https://SamGB16.github.io/music-museum/ because Next.js Image
components are not resolving paths correctly under the /music-museum/
base path.

## Scope
Replace all Next.js Image components with standard HTML img tags
and prefix all image src paths with /music-museum/ on all exhibit
pages and the homepage.

## Invariants
- Do not change any copy or layout
- Do not change any components other than image tags
- Do not change next.config.ts

## Files Expected to Change
- app/page.tsx
- app/vinyl/page.tsx
- app/cassette/page.tsx
- app/cd/page.tsx
- app/ipod/page.tsx
- app/streaming/page.tsx

## Verification
- npm run build passes
- npm run lint passes
- Images load correctly on https://SamGB16.github.io/music-museum/

## Outcome
All images load correctly on the deployed GitHub Pages site.