import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "YouTube Sentiment Analysis",
    description:
      "Built a sentiment analysis pipeline for Study Hall's YouTube channel. Wrote the analysis code, processed viewer comments, and delivered insights through an interactive dashboard to help the content team understand audience reception.",
    problem:
      "Turns thousands of unstructured YouTube comments into actionable content strategy insights, helping creators understand what resonates with their audience.",
    tags: ["Python", "Sentiment Analysis", "Data Dashboard", "YouTube API"],
    span: "wide" as const,
  },
  {
    title: "Smart Bookmark App",
    description:
      "A bookmark manager with Google Auth, real-time sync via Supabase, and private per-user bookmarks. Bookmarks update across tabs without page refresh. Built with Next.js App Router, Supabase (Auth, Database, Realtime), and Tailwind CSS.",
    problem:
      "Solves the chaos of browser bookmark clutter by providing a private, cloud-synced bookmark manager that works seamlessly across multiple devices and tabs in real time.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Google Auth", "Realtime"],
  },
  {
    title: "Project Ripple - Otter Chatbots",
    description:
      "A suite of AI-powered chatbot companions for analysts. Ripple provides instant access to templates, requirements docs, and AI-guided workflows via a role-based Otter Dashboard. Addresses $852K/year in analyst inefficiency from redundant work and unclear processes. Vibe coded with v0.",
    problem:
      "Saves analysts an estimated 5+ hours per week by centralizing institutional knowledge into AI companions, eliminating redundant work across 35+ data exchanges serving 100K+ students.",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK", "TypeScript", "Vibe Coded"],
    liveLinks: [
      { url: "https://v0-ripple-dashboard.vercel.app/", label: "Dashboard" },
      { url: "https://v0-chatbot-with-open-ai-pi.vercel.app/", label: "Chatbot" },
    ],
    span: "wide" as const,
  },
  {
    title: "Hallmate - AI Chatbot for Study Hall",
    description:
      "An AI chatbot powered by Google Gemini, integrated directly into Google Classroom for Study Hall. Conducted A/B testing on prompt variations and prompt optimization to improve response quality, and ran user experience testing to refine the conversational flow.",
    problem:
      "Gives students instant, contextual AI-powered support inside the tools they already use, improving learning outcomes through data-driven prompt optimization.",
    tags: ["Gemini AI", "Google Classroom", "A/B Testing", "Prompt Optimization", "UX Research"],
  },
  {
    title: "JSM Forms Redesign & Tracking Dashboards",
    description:
      "Led the redesign of Jira Service Management forms to improve usability, data accuracy, and request tracking. Added dynamic fields, automation rules for assignment and escalation, and built JQL-powered tracking dashboards natively in Jira for submission volume, request types, and resolution time visibility.",
    problem:
      "Eliminated slow, misrouted tickets and incomplete data by redesigning the intake process and giving leadership real-time visibility into workflow performance through native Jira dashboards.",
    tags: ["Jira", "JSM", "JQL", "Automation", "Dashboard", "Process Improvement"],
    span: "wide" as const,
  },
  {
    title: "Pomodoro Timer App",
    description:
      "A focused productivity timer app using the Pomodoro technique. Features customizable work and break intervals, session tracking, and a clean interface designed to keep you in flow state.",
    problem:
      "Helps users maintain deep focus by structuring work into timed intervals, reducing burnout and improving productivity throughout the day.",
    tags: ["Next.js", "React", "TypeScript", "Productivity"],
    liveUrl: "https://mypomoapp.vercel.app/",
  },
  {
    title: "Salesforce Integration Project",
    description:
      "Worked with Salesforce CRM to build custom workflows, dashboards, and data integrations. Streamlined lead management, reporting pipelines, and automated business processes to improve team efficiency.",
    problem:
      "Reduces manual data entry and disjointed processes by connecting Salesforce to existing business systems, giving teams a single source of truth for customer data.",
    tags: ["Salesforce", "CRM", "Automation", "Data Integration"],
  },
  {
    title: "CSAT Analysis for Learners & Students",
    description:
      "Designed and built a Customer Satisfaction (CSAT) analysis pipeline to measure learner and student satisfaction across courses and programs. Processed survey data, identified trends, and delivered actionable insights via an interactive dashboard.",
    problem:
      "Gives education teams a clear, data-driven view of student satisfaction, enabling targeted improvements to course content, support, and the overall learning experience.",
    tags: ["Data Analysis", "CSAT", "Dashboard", "Python", "Education"],
    span: "wide" as const,
  },
  {
    title: "Vintage Photobooth",
    description:
      "A browser-based vintage photobooth experience with retro film aesthetics. Open the curtains, strike a pose, and capture photos with authentic vintage filters and effects. Vibe coded with v0.",
    problem:
      "Brings the nostalgia of classic photobooths to the browser, letting anyone create stylized vintage photos without physical equipment or photo editing skills.",
    tags: ["Next.js", "TypeScript", "CSS Animations", "Vibe Coded"],
    codeUrl: "https://github.com/typicalrobot/vintagephotobooth",
    liveUrl: "https://vintagephotobooth-plum.vercel.app/",
  },
  {
    title: "Idea Garden - Task Manager",
    description:
      "A garden-themed to-do app where tasks grow like plants. A playful, visual approach to productivity that makes task management feel less like a chore. Vibe coded with v0.",
    problem:
      "Turns mundane task management into an engaging, visual experience that motivates users to stay productive through a nature-inspired metaphor.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vibe Coded"],
    codeUrl: "https://github.com/typicalrobot/gardentodoapp",
    liveUrl: "https://gardentodoapp.vercel.app/",
  },
  {
    title: "Pokemon or Drug Quiz",
    description:
      "An interactive quiz app that challenges players to guess whether a name belongs to a Pokemon or a pharmaceutical drug. Created to help remote and in-office teams bond and connect during Zoom calls.",
    problem:
      "Bridges the gap between remote and in-office teams by providing a fun, interactive icebreaker game that sparks conversation and laughter during virtual meetings.",
    tags: ["Next.js", "React", "Interactive", "Team Building"],
    liveUrl: "https://pokemonordrugquiz.vercel.app/",
  },
  {
    title: "Arizona Water Quality Analysis",
    description:
      "Interactive Tableau dashboard analyzing 20 years of water quality data in Arizona. Tracks E. coli levels, pH values, and metal concentrations across domestic, agricultural, and wildlife water usage categories.",
    problem:
      "Enables communities and environmental agencies to monitor water safety trends over two decades, supporting data-driven decisions for public health.",
    tags: ["Tableau", "Data Visualization", "Environmental Analysis"],
    liveUrl: "https://public.tableau.com/app/profile/anushree.misra/viz/TestingMyWaters-Arizona/Main",
  },
  {
    title: "Football Management System",
    description:
      "A comprehensive database system for tracking football teams, players, matches, and leagues. Features entity relationships for players, managers, stadiums, and more with complete data modeling.",
    problem:
      "Streamlines sports league data management, making it easier for organizations to track team rosters, match results, and player statistics.",
    tags: ["Database Design", "Entity-Relationship", "ORM"],
    codeUrl: "https://github.com/typicalrobot/footballinventory",
  },
  {
    title: "Pixel Art Maker",
    description:
      "An interactive web application that allows users to create pixel art on a customizable grid. Features include color selection, eraser tool, grid clearing, and the ability to download the finished artwork.",
    problem:
      "Provides an accessible, browser-based creative tool for anyone to design and export pixel art without needing expensive software.",
    tags: ["JavaScript", "HTML5", "CSS3", "Interactive Design"],
  },
  {
    title: "Pokemon Proposal App",
    description:
      "A creative, interactive web application with a Pokemon theme designed to ask someone out on a date. Features bouncing Pokeball animations, a multi-stage flow, and a persistent 'No' button that becomes increasingly difficult to click.",
    problem:
      "Adds a memorable, playful twist to asking someone on a date, turning a simple question into a delightful interactive experience.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    codeUrl: "https://github.com/typicalrobot/askingsomeoneout",
  },
  {
    title: "Cloud Learning Platform",
    description:
      "A cloud-based platform built to host classroom management for higher education institutions. Handled QA work to ensure stability, accessibility, and a smooth user experience across the platform.",
    problem:
      "Modernizes higher education administration by replacing fragmented tools with a unified cloud platform for managing courses, students, and resources.",
    tags: ["Cloud Platform", "Higher Education", "QA Testing", "Classroom Management"],
  },
  {
    title: "Sobriety Tracker (Retro Style)",
    description:
      "A minimalist, retro-styled sobriety tracker that helps users monitor their sober days with a clean, nostalgic interface. Features customizable start dates and responsive design for daily use. Vibe coded with v0.",
    problem:
      "Provides a private, judgment-free tool for tracking sobriety milestones with a warm retro aesthetic that feels personal rather than clinical.",
    tags: ["TypeScript", "Next.js", "Retro UI", "Vibe Coded"],
    codeUrl: "https://github.com/typicalrobot/sobrietyappretrostyle-",
  },
  {
    title: "Inventory Management System",
    description:
      "A comprehensive inventory management application built with Next.js. Features real-time inventory tracking, product management, and analytics dashboard for efficient warehouse and stock management.",
    problem:
      "Helps businesses track inventory in real-time, reducing losses from stock mismanagement and preventing both shortages and overstocking.",
    tags: ["Next.js", "React", "TypeScript", "Dashboard"],
  },
  {
    title: "Pixel Gifts for You and Yours",
    description:
      "A pixel art gift generator that lets users create and share personalized pixel art presents. Combines creativity with a gifting experience in a nostalgic 8-bit style.",
    problem:
      "Offers a unique, handcrafted digital gifting experience that stands out from generic e-cards by letting users create something personal and creative.",
    tags: ["Next.js", "TypeScript", "Pixel Art"],
    codeUrl: "https://github.com/typicalrobot/pixelgiftsforyouandyours",
  },
  {
    title: "Agriculture Dashboard",
    description:
      "A data-driven agriculture analytics dashboard built with NestJS. Provides real-time crop monitoring, yield predictions, and resource management insights to support farming operations and data-backed decision making.",
    problem:
      "Empowers agricultural teams with centralized analytics, replacing manual tracking with automated dashboards that improve yield forecasting and resource allocation.",
    tags: ["NestJS", "TypeScript", "Dashboard", "Agriculture", "Analytics"],
  },
]

export function ProjectsSection() {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Project Highlights
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
