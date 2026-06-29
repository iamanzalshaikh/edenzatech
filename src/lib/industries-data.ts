export type IndustryItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenges: string[];
  deliverables: string[];
  metric: string;
  bgClass: string;
  textClass: string;
  serviceHref: string;
};

export const industriesList: IndustryItem[] = [
  {
    id: "fintech",
    title: "FinTech & Banking",
    tagline: "Secure, compliant financial products",
    description:
      "Payment gateways, lending platforms, wallet apps, and dashboards built with encryption, audit trails, and regulatory-ready architecture.",
    challenges: [
      "PCI-DSS & data compliance",
      "Real-time transaction processing",
      "Fraud detection & KYC flows",
    ],
    deliverables: [
      "Payment & billing integrations",
      "Admin & reporting dashboards",
      "Multi-currency wallet systems",
    ],
    metric: "40% faster go-to-market for fintech MVPs",
    bgClass: "bg-[#F3F7FD]",
    textClass: "text-[#0c4ca6]",
    serviceHref: "/services/custom-software",
  },
  {
    id: "healthcare",
    title: "Healthcare & Wellness",
    tagline: "Patient-first digital experiences",
    description:
      "Telehealth portals, appointment systems, health tracking apps, and clinic management tools designed for privacy and reliability.",
    challenges: [
      "HIPAA-aware data handling",
      "Appointment & scheduling logic",
      "Cross-device patient access",
    ],
    deliverables: [
      "Telehealth & booking platforms",
      "Patient & provider dashboards",
      "Mobile health companion apps",
    ],
    metric: "99.9% uptime for critical care workflows",
    bgClass: "bg-[#F5FAF9]",
    textClass: "text-[#134D4A]",
    serviceHref: "/services/mobile-apps",
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Retail",
    tagline: "Stores that convert and scale",
    description:
      "Headless storefronts, custom checkout flows, inventory sync, and marketplace platforms optimized for speed and conversion.",
    challenges: [
      "Cart abandonment & checkout UX",
      "Inventory & order sync",
      "Peak-traffic performance",
    ],
    deliverables: [
      "Custom storefronts & marketplaces",
      "Payment & shipping integrations",
      "Admin & fulfillment panels",
    ],
    metric: "Up to 35% lift in checkout completion",
    bgClass: "bg-[#FFF9F5]",
    textClass: "text-brand-orange",
    serviceHref: "/services/ecommerce",
  },
  {
    id: "saas",
    title: "SaaS & Startups",
    tagline: "From MVP to product-market fit",
    description:
      "Multi-tenant SaaS platforms with auth, subscriptions, onboarding, and analytics—shipped in fast sprints so you can validate and iterate.",
    challenges: [
      "Rapid MVP validation",
      "Subscription & billing setup",
      "Scaling from 10 to 10,000 users",
    ],
    deliverables: [
      "MVP builds in 4–8 weeks",
      "Stripe billing & tenant isolation",
      "Feature flags & admin tooling",
    ],
    metric: "MVPs launched in as little as 4 weeks",
    bgClass: "bg-[#FFF5F8]",
    textClass: "text-[#be185d]",
    serviceHref: "/services/custom-software",
  },
  {
    id: "edtech",
    title: "Education & EdTech",
    tagline: "Learning platforms that engage",
    description:
      "LMS portals, course marketplaces, student dashboards, and mobile learning apps with progress tracking and content delivery at scale.",
    challenges: [
      "Video & content delivery",
      "Progress & certification flows",
      "Multi-role access (student, tutor, admin)",
    ],
    deliverables: [
      "LMS & course platforms",
      "Live class & scheduling tools",
      "Mobile learning applications",
    ],
    metric: "50K+ concurrent learners supported",
    bgClass: "bg-[#FCFAF2]",
    textClass: "text-[#b07f18]",
    serviceHref: "/services/web-development",
  },
  {
    id: "logistics",
    title: "Logistics & Trade",
    tagline: "Operations made visible",
    description:
      "Shipment tracking, fleet management, trade compliance portals, and B2B logistics dashboards that connect suppliers, buyers, and carriers.",
    challenges: [
      "Real-time tracking & notifications",
      "Multi-party workflow coordination",
      "Document & compliance automation",
    ],
    deliverables: [
      "Tracking & dispatch systems",
      "B2B trade & escrow portals",
      "Fleet & warehouse dashboards",
    ],
    metric: "60% reduction in manual ops overhead",
    bgClass: "bg-[#F9F7FD]",
    textClass: "text-[#6b21a8]",
    serviceHref: "/services/backend",
  },
];
