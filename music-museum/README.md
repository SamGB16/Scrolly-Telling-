# Music Consumption Museum
## Overview
This project is a museum style website that explores the evolution of music consumption, from early physical formats such as vinyl records and cassette tapes to modern digital streaming platforms like spotify. Rather than functioning as a traditional website, this project is designed as a curated exhibition, where each section represents a different era in the history of music consumption.

## Project Goal
The goal of this museum is to create an engaging and educational experience that helps users understand how technology has shaped the way people listen to music over time.

## Design Framework
### Design Style - Swiss Style
This project uses the Swiss design style, which is characterized by:
- Clean, minimal layouts
- Strong grid systems
- Clear typography and hierarchy

This style provides a structured and modern visual system for the museum 

### Cialdini Principle - Social Proof
This project uses the principle of social proof by highlighting how widely each music format was adopted. This helps users understand the cultural impact of each era and encourages deeper engagement.

### Brand Archetype - The Explorer
The site follows the Explorer archetype, guiding users through a journey across different eras of music consumption. Each section is designed to feel like a new "room" in a museum.

## AI Workflow
This projects follows a structured AI-assisted development process inspired by the reference repository and previous assignments. 

### Workflow:
1. Define a spec(Project goals and structure)
2. Break work into sprints
3. Implement one sprint at a time
4. Perform QA after each step

This approach reduces errors, prevents drift, and improves overall quality.

## Reference Project Analysis
I used AI to analyze the reference repository and extract key ideas about how it was built.

### Strongest Ideas:
- Work is broken into specs and sprints instead of one large task
- AI is used as a tool for execution, not decision-making
- The project relies on artifact-based memory (files) instead of chat history
- Each step is verified before being considered complete

### Process Used: 
The reference project follows a structured lifecycle:
Spec → Sprint → Implementation → QA

### Workflow Patterns That Improve Quality:
- Breaking work into smaller, manageable tasks
- Using verification tools (testing, linting, type checking)
- Separating UI, content, and routing layers
- Avoiding one-shot AI prompts
These ideas directly influenced how I structured my own project.

## Project Structure (Planned)
    components/ 
        ui/     # Reusable UI components (Button, Card, Panel)
        content/ # Museum-specific components (exhibit cards, timeline sections)
    
    app/
        page.tsx # Homepage
        vinyl/
        walkman/
        cd/
        ipod/
        streaming/

## Architectural Approach
- UI Layer (components/ui)
    Reusable design system components
- Content Layer (components/content)
    Museum specific patterns and layouts
- Routes (app/)
    Page composition and orchestration only 

This separation ensures a scalable, maintainable, and DRY system

## Next Steps
### Sprint 1 - Project Setup
- Set up Next.js project
- Configure Tailwind CSS
- Create base folder structure (components/ui, components/content, app)

### Sprint 2 - UI Foundation
- Build reusable UI components (Card, Panel, SectionHeading)
- Establish consistent layout and spacing system

### Sprint 3 - Homepage
- Create homepage layout
- Add introduction to the museum concept
- Design initial “exhibit flow” for users

### Sprint 4 - Exhibit Pages
- Create pages for key eras (vinyl, cassette, CD, iPod, streaming)
- Add content and structure for each exhibit

### Sprint 5 - QA and Improvement
- Review site as a museum curator (AI critique)
- Improve narrative flow and visual consistency
- Refine user experience and design

## QA Approach 
Each sprint is followed by a QA step where the site is reviewed for:
- Visual Consistency
- Narrative flow
- User experience
- Alignment with design framework
