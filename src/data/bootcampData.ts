import { TopicModule, CurriculumWeek, Instructor, StudentProject, Testimonial, FAQItem } from '../types';

import heroTeaching from '../assets/images/hero_teaching_1787920596703.jpg';
import pillarCreate from '../assets/images/pillar_create_1787920616024.jpg';
import pillarAutomate from '../assets/images/pillar_automate_1787920633368.jpg';
import pillarMonetize from '../assets/images/pillar_monetize_1787920646985.jpg';
import projectDocuBrain from '../assets/images/project_docubrain_1787920671314.jpg';
import projectAutoReach from '../assets/images/project_autoreach_1787920687952.jpg';
import projectSaasCrm from '../assets/images/project_saas_crm_blue_1787919262823.jpg';
import projectMediaStudio from '../assets/images/project_media_studio_blue_1787919280060.jpg';
import instructorTimothy from '../assets/images/instructor_timothy_realistic_1787919222298.jpg';
import instructorEmmanuella from '../assets/images/instructor_emmanuella_realistic_1787919235269.jpg';

export const ASSETS = {
  heroTeaching,
  pillarCreate,
  pillarAutomate,
  pillarMonetize,
  projectDocuBrain,
  projectAutoReach,
  projectSaasCrm,
  projectMediaStudio,
  instructorTimothy,
  instructorEmmanuella,
};

export const COHORT_INFO = {
  name: "Winter Edition",
  editionTag: "Enrolling Now",
  location: "Lefkoşa, Cyprus",
  venue: "Laranova Innovation Hub, Dereboyu Ave",
  dates: "Feb 01 to Feb 28",
  duration: "4 Weeks, In-Person",
  schedule: "Monday to Thursday (18:00 – 21:00) + Saturday Lab (11:00 – 16:00)",
  format: "In-Person Intensive & 1:1 Mentoring",
  award: "Accredited Certificate of Completion & Verified Portfolio",
  level: "Beginner friendly to intermediate",
  price: "$250",
  partner: "Laranova × Hexa Media",
};

export const VALUE_PILLARS = [
  {
    id: "create",
    title: "CREATE",
    tagline: "Build production software and modern interfaces with AI",
    description: "Move from idea to working software in days. Write structured prompts and system architectures that output full-stack web applications, functional backends, and responsive user interfaces.",
    image: pillarCreate,
    outcomes: [
      "Full-stack React and TypeScript applications",
      "Clean UI design systems with Tailwind CSS",
      "Live deployment to custom domains",
    ],
  },
  {
    id: "automate",
    title: "AUTOMATE",
    tagline: "Deploy autonomous agents and self-running workflows",
    description: "Eliminate repetitive manual tasks. Connect multi-model AI reasoning, webhook triggers, database syncs, and autonomous agent loops that execute complex workflows 24/7 without human intervention.",
    image: pillarAutomate,
    outcomes: [
      "Autonomous agent loops and webhook triggers",
      "Multi-model pipeline connections via APIs",
      "Automated lead capture, processing, and CRM syncing",
    ],
  },
  {
    id: "monetize",
    title: "MONETIZE",
    tagline: "Turn AI capabilities into paying clients and recurring revenue",
    description: "Package your skills into high-demand client services, micro-SaaS products, and agency retainers. Learn client acquisition frameworks, pricing structures, and live payment gateway integration.",
    image: pillarMonetize,
    outcomes: [
      "Stripe payment and subscription checkouts",
      "Client proposal frameworks and pricing retainers",
      "Live portfolio showcasing deployed customer apps",
    ],
  },
];

export const STATS = [
  {
    number: "4",
    label: "Weeks, In Person",
    subtext: "Hands-on studio sessions with direct instructor feedback",
  },
  {
    number: "1:1",
    label: "Mentor Guidance",
    subtext: "Personalized code and project reviews with industry practitioners",
  },
  {
    number: "100%",
    label: "Project-Based",
    subtext: "Build and deploy real live URLs and functional software",
  },
  {
    number: "$250",
    label: "All-Inclusive Tuition",
    subtext: "Covers 40+ hours, API credits, tools, and showcase",
  },
];

export const TOPIC_MODULES: TopicModule[] = [
  {
    id: "ai-software-engineering",
    title: "AI Software Engineering & Web Architecture",
    category: "Software Development",
    summary: "Understand modern AI coding agents, component design, database persistence, and cloud deployment to ship functional software rapidly.",
    image: pillarCreate,
    isNew: true,
    newBadgeText: "Updated for 2026 AI Models",
    subtopics: [
      {
        name: "Prompt Architecture & System Directives",
        description: "How to craft deterministic prompts, system constraints, and context tokens for clean code generation.",
        isNew: false,
      },
      {
        name: "Full-Stack React & TypeScript Workflows",
        description: "Scaffolding modern components, state management, and responsive layouts with zero syntax roadblocks.",
        isNew: false,
      },
      {
        name: "Server-Side AI Integration & Streaming",
        description: "Connecting backend endpoints, Gemini API keys, and real-time streaming text and data.",
        isNew: true,
      },
      {
        name: "Database Persistence & Authentication",
        description: "Setting up secure user sign-in, Firestore/PostgreSQL tables, and role-based data security.",
        isNew: false,
      },
      {
        name: "Stripe Billing & Cloud Deployment",
        description: "Integrating checkout sessions, webhooks, and deploying live production builds to Cloud Run.",
        isNew: true,
      },
    ],
    keyOutcomes: [
      "Deploy custom web apps with real user logins and database storage",
      "Integrate live payment checkouts with Stripe",
    ],
  },
  {
    id: "generative-media-storytelling",
    title: "Generative Media & Visual Storytelling",
    category: "Media & Design",
    summary: "Command advanced diffusion pipelines, consistent character generation, generative video motion, and AI audio synthesis for brand storytelling.",
    image: projectMediaStudio,
    isNew: true,
    newBadgeText: "High-Resolution Video AI",
    subtopics: [
      {
        name: "Diffusion Models & Camera Framing",
        description: "Mastering Midjourney, Stable Diffusion, and prompt weight controls for commercial-grade aesthetics.",
        isNew: false,
      },
      {
        name: "Generative Video & Motion Direction",
        description: "Directing cinematic AI video shots, consistent camera angles, and character stability across scenes.",
        isNew: true,
      },
      {
        name: "AI Voice Synthesis & Lip Sync",
        description: "Studio-quality voice cloning, multilingual dubbing, and expressive narration audio.",
        isNew: true,
      },
      {
        name: "Commercial Campaign Production",
        description: "Packaging complete multi-channel visual assets, ad creatives, and high-converting video formats.",
        isNew: false,
      },
    ],
    keyOutcomes: [
      "Produce cinematic promotional video campaigns",
      "Generate complete brand identity kits and visual advertising assets",
    ],
  },
  {
    id: "agentic-automation-pipelines",
    title: "Agentic Workflows & Business Automation",
    category: "Automation & Systems",
    summary: "Connect multi-model AI logic, webhooks, autonomous agent loops, and database syncs to build business tools that operate on autopilot.",
    image: pillarAutomate,
    isNew: true,
    newBadgeText: "Multi-Agent Systems",
    subtopics: [
      {
        name: "Autonomous Agent Reasoning Loops",
        description: "Structuring goal-oriented AI agents with tools, memory, and function-calling capabilities.",
        isNew: true,
      },
      {
        name: "No-Code & Low-Code Orchestration",
        description: "Building automated data flows using webhooks, Make, n8n, and custom API connections.",
        isNew: false,
      },
      {
        name: "Inbound Lead Scraping & CRM Enrichment",
        description: "Automatically capturing potential customers, qualifying inquiries, and syncing records.",
        isNew: false,
      },
      {
        name: "Custom Knowledge Base & RAG Chatbots",
        description: "Deploying WhatsApp and web concierge assistants grounded in private business documents.",
        isNew: true,
      },
      {
        name: "Packaging & Monetizing AI Services",
        description: "Pricing agency retainers, writing commercial proposals, and closing service contracts.",
        isNew: false,
      },
    ],
    keyOutcomes: [
      "Deploy self-running lead generation and client support agents",
      "Structure high-ticket AI automation retainers for local and remote businesses",
    ],
  },
];

export const CURRICULUM: CurriculumWeek[] = [
  {
    number: "01",
    title: "Foundations & First Live Build",
    subtitle: "Understand AI system architectures and deploy your first live application to the public web.",
    focus: "Mental models, prompt frameworks, modern UI scaffolding, and first deployment",
    topics: [
      "Mastering LLM reasoning: system prompts, temperature controls, and structured outputs",
      "Rapid web app generation using modern React, Tailwind CSS, and component systems",
      "High-speed local development environment setup with Vite, TypeScript, and Git",
      "Deploying your first live web application to a custom domain by Day 4",
    ],
    deliverable: "A functional, interactive web application deployed to the live web.",
  },
  {
    number: "02",
    title: "Full-Stack Architectures & Cloud Data",
    subtitle: "Add persistent database storage, authenticated user accounts, and server-side AI endpoints.",
    focus: "Backend data architecture, security rules, and generative API integration",
    topics: [
      "Connecting cloud databases (Firestore / PostgreSQL) with role-based security rules",
      "Implementing user authentication with Google sign-in and secure session state",
      "Server-side Gemini 2.5 API integration with real-time text and data streaming",
      "Configuring Stripe checkout sessions, customer billing, and webhook event handling",
    ],
    deliverable: "A multi-screen, database-backed web application with user login and payments.",
  },
  {
    number: "03",
    title: "Generative Media, Video & Creative Pipelines",
    subtitle: "Direct commercial-grade visual assets, voiceovers, and cinematic marketing campaigns.",
    focus: "Diffusion imagery, AI video motion, sound design, and brand asset packaging",
    topics: [
      "Diffusion workflows: camera angles, lighting prompts, and character consistency",
      "Generative video direction: motion vectors, transitions, and cinematic pacing",
      "AI voice cloning, multilingual dubbing, and audio sound effect synthesis",
      "Packaging full-funnel marketing assets for product launches and client campaigns",
    ],
    deliverable: "A complete multimedia launch kit with promotional video and campaign creatives.",
  },
  {
    number: "04",
    title: "Agent Automation, Monetization & Demo Day",
    subtitle: "Build autonomous multi-agent pipelines, package client retainers, and present your capstone.",
    focus: "Autonomous workflows, client acquisition, and public project showcase",
    topics: [
      "Building autonomous multi-agent pipelines with webhooks and API orchestration",
      "Packaging AI services: structuring $1,500 to $5,000 project proposals for clients",
      "Client pitching frameworks, statement of work templates, and retainer contracts",
      "Demo Day presentation: pitch your working capstone to founders and peers",
    ],
    deliverable: "A production capstone project with live URL + a client-ready service portfolio.",
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    name: "Timothy Ajide",
    role: "Lead Software & AI Architect",
    bio: "Full-stack engineer and startup founder who builds scalable software systems, AI automation engines, and production web applications across Europe and Africa.",
    image: instructorTimothy,
    specialty: ["Full-Stack AI Engineering", "System Architectures", "Agent Automation", "Production Deployment"],
    tag: "Lead Instructor — Code & Systems",
  },
  {
    name: "Dr. Emmanuella",
    role: "Creative AI & Media Director",
    bio: "Multimedia director and digital strategist specializing in generative video, prompt-based visual storytelling, and commercial creative campaigns for high-growth brands.",
    image: instructorEmmanuella,
    specialty: ["Generative Video Direction", "Brand Identity Design", "Multimedia Storytelling", "Campaign Production"],
    tag: "Lead Instructor — Content & Creative",
  },
];

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "pulseflow-crm",
    name: "PulseFlow AI Sales CRM",
    category: "Full-Stack Web App",
    description: "An automated lead qualification dashboard that transcribes sales calls, drafts contextual follow-up emails with AI, and syncs deal pipeline metrics to Stripe.",
    student: "Bruno Shema",
    studentRole: "Freelance AI Builder",
    instructor: "Timothy Ajide",
    image: ASSETS.pillarCreate,
    tech: ["React", "TypeScript", "Tailwind CSS", "Gemini 2.5", "Stripe API"],
    revenueOrMetric: "$2,400 earned in first 3 weeks",
    liveUrl: "https://pulseflow-crm.app",
    summaryDetails: "Built in 14 days during Weeks 2 and 3. Deployed for 3 local real estate agencies in Lefkoşa to automate sales inquiries.",
  },
  {
    id: "kinetix-studio",
    name: "Kinetix Generative Studio",
    category: "AI Media Production",
    description: "A commercial video generation suite that produces 9:16 vertical ads from e-commerce product links, complete with AI voice narration and captions.",
    student: "Elena Kazantzi",
    studentRole: "Digital Marketing Specialist",
    instructor: "Dr. Emmanuella",
    image: projectMediaStudio,
    tech: ["Diffusion Pipelines", "Audio Synthesis", "Remotion", "Node.js"],
    revenueOrMetric: "450,000+ social video views generated",
    liveUrl: "https://kinetix-studio.app",
    summaryDetails: "Created for e-commerce brands, slashing creative production turnaround from 5 days to 12 minutes per campaign.",
  },
  {
    id: "autoreach-pipeline",
    name: "AutoReach Inbound Pipeline",
    category: "Autonomous Agent & CRM",
    description: "An intelligent lead capture agent that monitors inbound inquiries, enriches company data, and scores sales urgency automatically.",
    student: "Tariq Mansoor",
    studentRole: "AI Automation Consultant",
    instructor: "Timothy Ajide",
    image: projectAutoReach,
    tech: ["Autonomous Loops", "Webhooks", "PostgreSQL", "Tailwind CSS"],
    revenueOrMetric: "Active with $600/month recurring retainer",
    liveUrl: "https://autoreach-demo.app",
    summaryDetails: "Connects web form webhooks to multi-model AI classifiers that draft custom quote proposals within 30 seconds.",
  },
  {
    id: "docubrain-ai",
    name: "DocuBrain Legal Assistant",
    category: "Enterprise AI Document Tool",
    description: "An intelligent contract analysis dashboard that ingests multi-page agreements, flags non-standard liability clauses, and provides actionable summaries.",
    student: "Kerem Yilmaz",
    studentRole: "Product Specialist",
    instructor: "Timothy Ajide",
    image: projectDocuBrain,
    tech: ["RAG Pipelines", "Vector Search", "React", "TypeScript"],
    revenueOrMetric: "Tested with 150+ legal contracts",
    liveUrl: "https://docubrain-preview.app",
    summaryDetails: "Processes PDF contracts in seconds, providing clause-by-clause risk scoring and natural language query capabilities.",
  },
  {
    id: "brandforge-suite",
    name: "BrandForge Creative Suite",
    category: "Brand Design Engine",
    description: "A generative brand identity tool that crafts coordinated typography, color palettes, vector marks, and visual style guides in one workflow.",
    student: "Maya Solon",
    studentRole: "UI/UX Designer",
    instructor: "Dr. Emmanuella",
    image: ASSETS.pillarMonetize,
    tech: ["Diffusion Models", "Design Tokens", "React", "Tailwind"],
    revenueOrMetric: "Used by 8 local agency clients",
    liveUrl: "https://brandforge-design.app",
    summaryDetails: "Delivers comprehensive brand books, mood boards, and social media templates with consistent styling.",
  },
  {
    id: "nexbot-hospitality",
    name: "NexBot Hospitality Concierge",
    category: "WhatsApp AI Concierge",
    description: "A multi-lingual reservation and guest concierge assistant deployed for boutique hotels, answering questions and booking amenities 24/7.",
    student: "Alexander Cole",
    studentRole: "Hospitality Tech Manager",
    instructor: "Timothy Ajide",
    image: ASSETS.pillarAutomate,
    tech: ["WhatsApp API", "n8n Automation", "Gemini Pro", "Supabase"],
    revenueOrMetric: "Deployed across 4 hotel properties",
    liveUrl: "https://nexbot-hotel.app",
    summaryDetails: "Handles guest inquiries in English, Turkish, and Russian with a 98% automated resolution rate.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    quote: "I came in with zero programming experience and left 4 weeks later with a live, revenue-generating SaaS app. Timothy and Dr. Emmanuella provide direct, hands-on guidance every day.",
    name: "Bruno Shema",
    role: "Full-Stack AI Builder",
    initials: "BS",
    track: "Software Development",
    highlight: "Earned $2,400 in first 3 weeks",
  },
  {
    rating: 5,
    quote: "The combination of high-end creative video generation and practical automation was incredible. Our agency replaced weeks of manual editing with automated workflows we built in class.",
    name: "Elena Kazantzi",
    role: "Agency Creative Lead",
    initials: "EK",
    track: "Media & Design",
    highlight: "Saved 20+ hours weekly",
  },
  {
    rating: 5,
    quote: "The best tech investment in Cyprus. Having experienced practitioners sitting next to you debugging code and reviewing architecture was invaluable.",
    name: "Kerem Yilmaz",
    role: "Product Manager",
    initials: "KY",
    track: "Automation & Systems",
    highlight: "Launched 2 live products",
  },
];

export const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "Do I need prior coding or technical experience?",
    answer: "No prior coding background is required. The curriculum is engineered to guide beginners from first principles using AI-native developer agents, modern tooling, and clear conceptual models. Experienced participants will accelerate into advanced backend architectures and multi-agent workflows.",
  },
  {
    category: "Hardware",
    question: "What laptop or hardware do I need?",
    answer: "You only need a laptop running macOS, Windows, or Linux with a modern web browser and internet connectivity. All intensive AI processing and GPU tasks run in the cloud with API access provided during the bootcamp.",
  },
  {
    category: "Schedule",
    question: "What is the weekly schedule and time commitment?",
    answer: "The cohort meets in-person in Lefkoşa 4 evenings a week (Monday to Thursday, 18:00 to 21:00) plus an optional Saturday collaborative studio lab (11:00 to 16:00). We recommend 3 to 5 additional hours per week for project polish.",
  },
  {
    category: "Outcomes",
    question: "What will I have built by the end of the 4 weeks?",
    answer: "You will leave with at least 3 live, functional projects on custom URLs, a verified Certificate of Completion, complete source code templates, a client pitch deck, and lifetime access to the alumni network.",
  },
  {
    category: "Venue",
    question: "Where is the bootcamp located in Lefkoşa?",
    answer: "Sessions take place in-person at the Laranova Innovation Hub on Dereboyu Avenue in Lefkoşa, Cyprus. High-speed fiber internet, presentation displays, and collaborative workspaces are provided.",
  },
  {
    category: "Tuition",
    question: "How does the $250 tuition work?",
    answer: "Tuition is an all-inclusive $250 covering all 40+ hours of in-person mentorship, workshop materials, API credits, software templates, and the Demo Day showcase. Payment can be made online via card or in-person upon application approval.",
  },
];
