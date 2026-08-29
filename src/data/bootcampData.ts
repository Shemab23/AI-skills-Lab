import { TopicModule, CurriculumWeek, Instructor, StudentProject, Testimonial, FAQItem } from '../types';

import heroTeaching from '../assets/images/hero_teaching_1787920596703.jpg';
import pillarCreate from '../assets/images/pillar_create_1787920616024.jpg';
import pillarAutomate from '../assets/images/pillar_automate_1787920633368.jpg';
import pillarMonetize from '../assets/images/pillar_monetize_1787920646985.jpg';
import projectDocuBrain from '../assets/images/project_docubrain_1787920671314.jpg';
import projectAutoReach from '../assets/images/project_autoreach_1787920687952.jpg';
import projectSaasCrm from '../assets/images/project_saas_crm_blue_1787919262823.jpg';
import projectMediaStudio from '../assets/images/project_media_studio_blue_1787919280060.jpg';
import instructorTimothy from '../assets/Timothy.jpeg';
import instructorEmmanuella from '@/src/assets/Ellah.jpeg';

import easyInvoice from '../assets/EasyInvoice.png';
import tortoiseback from '../assets/tortoiseBack.png';
import pureClean from '../assets/PureClean.png';
import peacefullLife from '../assets/peacefulLife.png';
import pureShine from '../assets/pureShine.png';
import christianism from '../assets/christianism.png';
import rubberbandpromo from '../assets/rubberBandPromo.png';
import annieYap from '../assets/annieYap.png';
import camppromo from '../assets/camppromo.png';
import winterEd from '../assets/winterEd.png';
import contentM from '../assets/flyer.png';
import campwebsite from '../assets/campwebsite.png';

export const ASSETS = {
  heroTeaching,
  pillarCreate,
  easyInvoice,
  tortoiseback,
  pureClean,
  pureShine,
  peacefullLife,
  christianism,
  rubberbandpromo,
  annieYap,
  camppromo,
  winterEd,
  contentM,
  campwebsite,
  pillarAutomate,
  pillarMonetize,
  projectDocuBrain,
  projectAutoReach,
  projectSaasCrm,
  projectMediaStudio,
  instructorTimothy,
  instructorEmmanuella,
};

type person = {name: string,role: string}
export const student: person[] =[
  {
    name: "Bruno Shema",
    role: "developer"
  },
  {
    name:"Annie",
    role:"content creator"
  },
  {
    name:"Bethel",
    role:"content creator"
  }
]
export const instructor: person[] =[
  {
    name: "Timothy Ajide",
    role: "Web Designer · AI Automation Specialist"
  },
  {
    name: "Dr. Emmanuella Imo Akubuko",
    role: "Communications Professional · AI Practitioner"
  }
]

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
  id: "project1",
  name: "Easy Invoice",
  category: "AI Powered Web App",
  description:
    "An instant quotation and invoice generator built for small businesses. It handles taxes, discounts, extra charges, currency, and calculations automatically, so users only need to enter their products and amounts.",
  student: student[0].name,
  studentRole: student[0].role,
  instructor: instructor[0].name,
  image: ASSETS.easyInvoice,
  tech: ["ChatGPT", "Google AI Studio", "Claude AI"],
  revenueOrMetric: "Completed digital project",
  liveUrl: "https://easy-invoice-ltd.vercel.app/",
  summaryDetails:
    "The current MVP was built in approximately 20 hours, with AI significantly accelerating development. It is already stable enough for current client use, with further improvements becoming easier as the product evolves. A practical example of how AI-powered development can turn an idea into a working product in a very short time.",
},

{
  id: "project2",
  name: "Why Tortoises Have a Cracked Back",
  category: "AI-Assisted Creative Project",
  description:
    "A creative digital storytelling project developed as part of the bootcamp, combining AI-assisted content creation with structured storytelling and visual presentation.",
  student: student[1].name,
  studentRole: student[1].role,
  instructor: instructor[1].name,
  image: ASSETS.tortoiseback,
  tech: ["ChatGPT"," gemini ai","canva"],
  revenueOrMetric: "Completed creative project",
  liveUrl:
    "https://res.cloudinary.com/dmn1dhmxe/image/upload/v1787908289/why_tortoise_have_cracked_back_tdguhk.pdf",
  summaryDetails:
    "A practical demonstration of using AI tools to move from an idea and written concept to a finished, shareable digital piece.",
},

{
  id: "project3",
  name: "Purest Cleaning",
  category: "AI Powered Web App",
  description:
    "A professional business website created to give a cleaning service a clear online presence, communicate its services, and make it easier for potential customers to discover and contact the business.",
  student: student[2].name,
  studentRole: student[2].role,
  instructor: instructor[0].name,
  image: ASSETS.pureClean,
  tech: ["ChatGPT", "Google AI Studio", "Claude AI"],
  revenueOrMetric: "Live business website",
  liveUrl: "https://purest-cleaning.vercel.app/",
  summaryDetails:
    "A practical example of using AI-assisted development to take a real business requirement and turn it into a complete, responsive website that can be deployed and used immediately.",
},

{
  id: "project4",
  name: "The Peaceful Life",
  category: "Digital Creative Project",
  description:
    "A creative digital project focused on presenting an idea through structured written content and a polished final document.",
  student: student[2].name,
  studentRole: student[2].role,
  instructor: instructor[1].name,
  image: ASSETS.peacefullLife,
  tech: ["ChatGPT"," gemini ai","canva"],
  revenueOrMetric: "Completed creative project",
  liveUrl:
    "https://res.cloudinary.com/dmn1dhmxe/image/upload/v1787908253/the_peaceful_life_jg8oxp.pdf",
  summaryDetails:
    "The project demonstrates how AI can support the full creative workflow, from developing the initial idea and content to producing a finished document ready to share.",
},

{
  id: "project5",
  name: "Pure Shine Services",
  category: "Business Website",
  description:
    "A business website designed to give a service-based company a professional online presence, clearly present its offering, and provide customers with a direct way to learn more about the business.",
  student: student[1].name,
  studentRole: student[1].role,
  instructor: instructor[0].name,
  image: ASSETS.pureShine,
  tech: ["ChatGPT", "Google AI Studio", "Claude AI"],
  revenueOrMetric: "Live business website",
  liveUrl: "https://pureshineservices.vercel.app/",
  summaryDetails:
    "Another practical example of building a complete client-facing website with AI-assisted development, from the initial concept through implementation and deployment.",
},

{
  id: "project6",
  name: "Christianism",
  category: "Digital Content Project",
  description:
    "A structured digital content project developed around a Christian-themed subject, demonstrating the use of AI to research, organize, write, and present information in a finished format.",
  student: student[0].name,
  studentRole: "student[0].role",
  instructor: instructor[1].name,
  image: ASSETS.christianism,
  tech: ["ChatGPT"," gemini ai","canva"],
  revenueOrMetric: "Completed digital project",
  liveUrl:
    "https://res.cloudinary.com/dmn1dhmxe/image/upload/v1787222047/Christianism_nchctq.pdf",
  summaryDetails:
    "A practical demonstration of using AI throughout the content-production process, turning a broad subject into an organized and shareable final document.",
},

{
  id: "project7",
  name: "rubberBand Promo video",
  category: "AI Video Production",
  description:
    "A short-form video project created as an example of how AI can be used to develop and produce engaging visual content.",
  student: student[2].name,
  studentRole: student[2].role,
  instructor: instructor[1].name,
  image: ASSETS.rubberbandpromo,
  tech: ["ChatGPT", "Google AI Studio", "Claude AI"],
  revenueOrMetric: "Published short-form video",
  liveUrl: "https://www.youtube.com/shorts/l_di03kUqNw",
  summaryDetails:
    "A practical exploration of AI-assisted content creation, showing how an idea can move from concept to a finished piece of short-form media.",
},

{
  id: "project8",
  name: "Annie's short video",
  category: "AI Video Production",
  description:
    "A short-form creative video produced using an AI-assisted workflow, from developing the concept to preparing the final visual content.",
  student: student[1].name,
  studentRole: student[1].role,
  instructor: instructor[1].name,
  image: ASSETS.annieYap,
  tech: ["ChatGPT", "Google google flow", "CapCut"],
  revenueOrMetric: "Published short-form video",
  liveUrl: "https://www.youtube.com/shorts/OjbYQ295rYo",
  summaryDetails:
    "Demonstrates how AI can reduce the distance between an initial creative idea and a finished piece of content that is ready to publish.",
},

{
  id: "project9",
  name: "AI BOOTCAMP PROMO BY ANNIE YAPS",
  category: "AI Video Production",
  description:
    "A finished short-form video created through an AI-assisted creative workflow, combining generated ideas, content development, and visual production.",
  student: student[1].name,
  studentRole: student[1].role,
  instructor: instructor[1].name,
  image: ASSETS.camppromo,
  tech: ["ChatGPT", "Google AI Studio", "Claude AI"],
  revenueOrMetric: "Published short-form video",
  liveUrl: "https://www.youtube.com/shorts/aQCuDFLZch4",
  summaryDetails:
    "Another practical example of applying AI to creative production and turning a concept into a finished piece of media.",
},

{
  id: "project10",
  name: "annie yaps video ad-winter ed",
  category: "AI Video Production",
  description:
    "A short-form video project created as part of the bootcamp, demonstrating an AI-assisted approach to developing and producing digital media.",
  student: student[1].name,
  studentRole: student[1].role,
  instructor: instructor[1].name,
  image: ASSETS.winterEd,
  tech: ["ChatGPT", "Google AI Studio", "Claude AI"],
  revenueOrMetric: "Published short-form video",
  liveUrl: "https://www.youtube.com/shorts/pWSA_SJG7e0",
  summaryDetails:
    "The project shows how modern AI tools can support the creative process while allowing a single builder to produce finished content much faster.",
},

{
  id: "project11",
  name: "Marketing Flyer",
  category: "Content Management",
  description:
    "A professionally designed marketing flyer created to communicate a business offer clearly, present key information visually, and produce content that is ready to share with customers.",
  student: student[0].name,
  studentRole: student[0].role,
  instructor: instructor[1].name,
  image: ASSETS.contentM,
  tech: ["ChatGPT", "Pomeli", "Gemini AI"],
  revenueOrMetric: "Publish-ready marketing content",
  liveUrl: "https://drive.google.com/drive/folders/1jrUEDyaZW9Vuls8iwmaAe1mPzi1j3qxf?usp=drive_link",
  summaryDetails:
    "A practical example of using AI to support the content creation process, from developing the message and structure to producing polished marketing material ready for distribution.",
},
{
  id: "project11",
  name: "AI BootCamp Website",
  category: "AI-Assisted Web Development",
  description:
    "A full website prototype built for the AI BootCamp, using AI-assisted development to move from an initial concept to a working, deployed website.",
  student: student[0].name,
  studentRole: student[0].role,
  instructor: instructor[1].name,
  image: ASSETS.campwebsite,
  tech: ["TypeScript", "React", "ChatGPT", "Claude", "Google Flow", "Vercel", "Git"],
  revenueOrMetric: "Live deployed bootcamp website",
  liveUrl: "https://ai-skills-lab.vercel.app/",
  summaryDetails:
    "The website started as a prototype developed with ChatGPT, Claude, and Google Flow. The project was then pushed to Git, connected to Vercel for deployment, and pulled into VS Code for hands-on refinement. Most of the implementation is written in TypeScript, with AI used throughout the development process to accelerate building, debugging, and iteration.",
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
