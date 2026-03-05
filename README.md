# Anushree Misra - Developer Portfolio

## Live Site

- add link

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4, shadcn/ui
- **Language:** TypeScript
- **Theming:** next-themes (light/dark mode)
- **Fonts:** DM Sans, Geist Mono
- **Deployment:** Vercel

## Features

- Bento grid layout with responsive design
- Light/dark mode toggle with system preference detection
- Animated typing effect on the hero heading (loops continuously)
- Earthy color palette: sage green, cream, warm taupe
- 20+ project highlights with live demo links and GitHub repos
- Skills & technologies overview
- Contact section with LinkedIn, email, and Calendly

## Project Highlights

| Project | Description | Tags |
|---------|-------------|------|
| YouTube Sentiment Analysis | Sentiment pipeline for Study Hall's YouTube channel | Python, YouTube API, Dashboard |
| Smart Bookmark App | Cloud-synced bookmark manager with Google Auth | Next.js, Supabase, Realtime |
| Project Ripple - Otter Chatbots | AI chatbot suite for analysts, addressing $852K/year inefficiency | Next.js, OpenAI, Vercel AI SDK |
| Hallmate - AI Chatbot | Gemini-powered chatbot for Google Classroom | Gemini AI, A/B Testing, Prompt Optimization |
| JSM Forms Redesign | Jira Service Management forms with JQL tracking dashboards | Jira, JSM, JQL, Automation |
| CSAT Analysis | Student satisfaction analysis pipeline | Python, Data Analysis, Dashboard |
| Vintage Photobooth | Browser-based retro photobooth | Next.js, CSS Animations |
| Idea Garden | Garden-themed task manager | Next.js, React, Tailwind CSS |
| Arizona Water Quality | 20-year Tableau water quality dashboard | Tableau, Data Visualization |
| Agriculture Dashboard | Crop monitoring and analytics | NestJS, TypeScript, Analytics |
| Cloud Learning Platform | Classroom management for higher education | Cloud Platform, QA Testing |

## Project Structure

```
app/
  layout.tsx          # Root layout with theme provider and fonts
  page.tsx            # Main bento grid page
  globals.css         # Tailwind v4 config with earthy design tokens
components/
  portfolio/
    header.tsx        # Top navigation with dark mode toggle
    hero-card.tsx     # Animated typing hero section
    stats-card.tsx    # Quick stats (projects, technologies, experience)
    location-card.tsx # Status indicator (open to opportunities)
    about-card.tsx    # Bio section
    skills-card.tsx   # Skills & technologies grid
    projects-section.tsx  # All project data and grid layout
    project-card.tsx  # Individual project card component
    contact-card.tsx  # Contact links (email, LinkedIn, Calendly)
  theme-provider.tsx  # next-themes wrapper
  theme-toggle.tsx    # Light/dark mode toggle button
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Color System

The portfolio uses an earthy, natural palette following the 80/20 rule:

- **80% dominant:** Cream and warm taupe neutrals
- **20% accent:** Sage green for interactive elements and highlights
- Full dark mode with warm dark tones instead of pure black

## License

MIT
