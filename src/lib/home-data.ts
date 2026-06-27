import { assets } from "./assets";

export const pillars = [
  {
    title: "Innovate\nWith Purpose",
    description:
      "We architect solutions around your business goals—choosing the right stack, patterns, and roadmap before a single line of code is written.",
    icon: assets.icons.innovate,
  },
  {
    title: "Build\nWith Precision",
    description:
      "Clean code, rigorous testing, and modern DevOps. Every sprint delivers shippable features your users can rely on from day one.",
    icon: assets.icons.build,
  },
  {
    title: "Grow\nAt Scale",
    description:
      "Performance, security, and cloud infrastructure built in from the start—so your product handles growth without costly rewrites.",
    icon: assets.icons.grow,
  },
  {
    title: "Ship\nFaster",
    description:
      "Agile delivery with transparent milestones. MVPs in weeks, not months—with continuous deployment and real-time progress tracking.",
    icon: assets.icons.scale,
  },
  {
    title: "Secure\nBy Design",
    description:
      "Authentication, data protection, and compliance best practices embedded in every layer of your application architecture.",
    icon: assets.icons.secure,
  },
] as const;

/** Active development services */
export const services = [
  {
    title: "Web\nDevelopment",
    description:
      "Custom web applications with React, Next.js, and TypeScript. From marketing sites to complex dashboards—we build fast, SEO-friendly, and maintainable products.",
    icon: assets.icons.web,
    href: "/services/web-development",
  },
  {
    title: "Mobile App\nDevelopment",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native. Native performance, offline support, and seamless backend integration.",
    icon: assets.icons.mobile,
    href: "/services/mobile-apps",
  },
  {
    title: "Custom Software\n& SaaS",
    description:
      "Full-stack SaaS platforms with authentication, subscriptions, admin panels, and multi-tenant architecture—from MVP to enterprise scale.",
    icon: assets.icons.saas,
    href: "/services/custom-software",
  },
  {
    title: "E-Commerce\nDevelopment",
    description:
      "High-converting online stores with custom checkout flows, inventory sync, payment gateways, and headless commerce architectures.",
    icon: assets.icons.ecommerce,
    href: "/services/ecommerce",
  },
  {
    title: "API & Backend\nDevelopment",
    description:
      "Scalable REST and GraphQL APIs, microservices, real-time systems, and cloud deployments on AWS, Vercel, and modern infrastructure.",
    icon: assets.icons.backend,
    href: "/services/backend",
  },
  {
    title: "UI/UX &\nFrontend",
    description:
      "Design systems, responsive interfaces, and accessible frontends. We translate Figma designs into pixel-perfect, production-ready code.",
    icon: assets.icons.frontend,
    href: "/services/frontend",
  },
] as const;

/* Non-development services — commented out per client request
export const legacyMarketingServices = [
  { title: "SEO", href: "/services/seo" },
  { title: "Social Media Marketing", href: "/services/social-media" },
  { title: "Google Ads & Meta Ads", href: "/services/paid-ads" },
  { title: "Brand Identity", href: "/services/branding" },
] as const;
*/

export const whyChooseExecutiveStats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "+", label: "Years Building" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
] as const;

export const whyChooseUs = [
  {
    id: "stack",
    title: "Modern Tech Stack",
    tagline: "Future-proof architecture",
    description:
      "React, Next.js, Node.js, PostgreSQL, and cloud-native tooling—chosen for performance, hiring ease, and long-term maintainability.",
    highlight: "React · Next.js · TypeScript",
  },
  {
    id: "agile",
    title: "Agile Delivery",
    tagline: "Ship every sprint",
    description:
      "Two-week sprints with demos, transparent backlog, and direct access to engineers—no black-box agency workflows.",
    highlight: "Bi-weekly demos & releases",
  },
  {
    id: "quality",
    title: "Code Quality",
    tagline: "Built to last",
    description:
      "TypeScript, automated tests, CI/CD pipelines, and code reviews on every PR. Your codebase stays clean as you scale.",
    highlight: "100% TypeScript codebase",
  },
  {
    id: "scale",
    title: "Scalable Infrastructure",
    tagline: "Cloud-ready from day one",
    description:
      "AWS, Vercel, Docker, and serverless patterns—architected for traffic spikes without downtime or surprise bills.",
    highlight: "99.9% uptime targets",
  },
  {
    id: "support",
    title: "Dedicated Support",
    tagline: "Direct engineer access",
    description:
      "Post-launch maintenance, bug fixes, and feature iterations with the same team that built your product—no handoff chaos.",
    highlight: "< 4 hr response SLA",
  },
  {
    id: "mvp",
    title: "MVP to Production",
    tagline: "Launch fast, iterate smart",
    description:
      "Rapid MVPs in 4–8 weeks, then iterate based on real user data. We help you validate ideas before over-investing.",
    highlight: "MVPs from 4 weeks",
  },
] as const;

export const testimonials = [
  {
    name: "Rahul Mehta",
    handle: "@rahulmehta_dev",
    quote:
      "EDENZATECH delivered our SaaS MVP in 6 weeks. Clean code, great communication, and they understood our product vision from day one. We've since scaled to 2,000+ users without a single architecture rewrite.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    handle: "@priyasharma",
    quote:
      "Our React Native app launched on both iOS and Android simultaneously. The team handled complex payment integrations and offline sync flawlessly. Best development partner we've worked with.",
    rating: 5,
  },
  {
    name: "James Chen",
    handle: "@jameschen_tech",
    quote:
      "They rebuilt our legacy platform with Next.js and cut page load times by 70%. The new admin dashboard alone saved our ops team 15 hours a week. Transparent, skilled, and reliable.",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    question: "How long does a typical web development project take?",
    answer:
      "MVPs typically ship in 4–8 weeks. Full-featured web apps take 8–16 weeks depending on scope. We follow agile sprints with bi-weekly demos so you see progress continuously.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our primary stack is React, Next.js, TypeScript, Node.js, PostgreSQL, and React Native for mobile. We also work with AWS, Docker, Stripe, and modern DevOps tooling based on project needs.",
  },
  {
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We build MVPs for early-stage startups and scale existing products for growing companies. Our process adapts to your stage—lean for MVPs, rigorous for enterprise compliance needs.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely. We offer maintenance retainers, bug-fix SLAs, and ongoing feature development with the same engineering team that built your product.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Yes. We audit existing codebases, propose refactoring roadmaps, and can join your team for feature development or full rewrites when needed.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "Slack or Teams for daily async, weekly video standups, and a shared project board. You get direct access to engineers—not account managers reading from scripts.",
  },
  {
    question: "What does a project engagement look like?",
    answer:
      "Discovery call → technical proposal → sprint planning → bi-weekly demos → launch → optional maintenance. Fixed-price for defined scope, or monthly retainer for ongoing development.",
  },
  {
    question: "How do I get started with EDENZATECH?",
    answer:
      "Book a free 30-minute discovery call. We'll discuss your product goals, technical requirements, and timeline—then send a tailored proposal within 48 hours.",
  },
] as const;

export const homeStats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Years of Experience", value: 6, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
] as const;

export const developmentProcess = [
  {
    step: "01",
    title: "Discovery",
    description: "Requirements, user flows, tech stack selection, and project roadmap.",
  },
  {
    step: "02",
    title: "Design",
    description: "Wireframes, UI design in Figma, and interactive prototypes for approval.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile sprints with bi-weekly demos, code reviews, and CI/CD deployment.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Production deployment, monitoring, optimization, and ongoing support.",
  },
] as const;

export const edenzaStandard = [
  {
    id: "performance",
    title: "Lightning Performance",
    description:
      "Sub-2s load times via Core Web Vitals, lazy loading, CDN, and smart caching — a 1-second delay costs 7% of conversions.",
  },
  {
    id: "mobile",
    title: "Mobile-First Design",
    description:
      "70%+ of traffic is mobile. The phone is the primary canvas — every tap target, layout, and scroll flow tested on real devices.",
  },
  {
    id: "journey",
    title: "Clear User Journey",
    description:
      "Every visitor has a question. We map the journey before writing code — guiding them naturally toward a purchase or booking.",
  },
  {
    id: "identity",
    title: "Strong Visual Identity",
    description:
      "Visitors judge your brand in 50 milliseconds. Typography, colour, and spacing that communicate your positioning instantly.",
  },
  {
    id: "seo",
    title: "SEO-Optimised Architecture",
    description:
      "Semantic HTML5, structured data, clean URLs, and page-speed scores that satisfy Google's algorithms from day one.",
  },
  {
    id: "security",
    title: "Security & Reliability",
    description:
      "SSL, input validation, XSS and SQL injection protection built in — not bolted on. Your site is a business asset, we protect it.",
  },
] as const;

export const agencyIntro = {
  eyebrow: "Your Certified Web Development Partner",
  title: "Engineering Digital Products\nThat Elevate Your Brand",
  description:
    "As specialists in modern web and mobile development, we deliver tailor-made solutions that take your online presence to a whole new level. Our expertise spans responsive design, UX/UI optimisation, and production-grade architecture — so your product is visually stunning and highly functional.",
  secondary:
    "From MVPs to enterprise platforms, we combine strategy, design, and engineering in one team — no handoffs, no black boxes, just software built to perform.",
} as const;
