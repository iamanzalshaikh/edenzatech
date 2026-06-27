import { assets } from "./assets";

export const whatWeBuildCategories = [
  {
    id: "web",
    label: "Web Apps",
    number: "01",
    title: "Web Applications",
    description:
      "Scalable, performant web apps with React, Next.js, and modern stacks. Dashboards, portals, SaaS products, and internal tools built for speed and maintainability.",
    tags: ["Next.js", "React", "TypeScript"],
    cta: "Build Web App",
    href: "/services/web-development",
    image: assets.icons.web,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    number: "02",
    title: "Mobile Applications",
    description:
      "Cross-platform iOS and Android apps with React Native. Native-feel UX, offline support, push notifications, and seamless API integration.",
    tags: ["React Native", "iOS", "Android"],
    cta: "Build Mobile App",
    href: "/services/mobile-apps",
    image: assets.icons.mobile,
  },
  {
    id: "saas",
    label: "SaaS",
    number: "03",
    title: "SaaS & Custom Software",
    description:
      "End-to-end SaaS platforms with auth, billing, admin panels, and multi-tenant architecture. From MVP to production-ready products.",
    tags: ["Node.js", "PostgreSQL", "Stripe"],
    cta: "Start SaaS Project",
    href: "/services/custom-software",
    image: assets.icons.saas,
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    number: "04",
    title: "E-Commerce Platforms",
    description:
      "Custom storefronts and headless commerce with fast checkout, inventory management, payment gateways, and conversion-optimized UX.",
    tags: ["Shopify", "WooCommerce", "Custom"],
    cta: "Build Store",
    href: "/services/ecommerce",
    image: assets.icons.ecommerce,
  },
  {
    id: "api",
    label: "APIs",
    number: "05",
    title: "API & Backend Systems",
    description:
      "RESTful and GraphQL APIs, microservices, real-time systems, and cloud infrastructure designed for scale and reliability.",
    tags: ["Node.js", "PostgreSQL", "AWS"],
    cta: "Build Backend",
    href: "/services/backend",
    image: assets.icons.backend,
  },
  {
    id: "frontend",
    label: "UI/UX",
    number: "06",
    title: "UI/UX & Frontend",
    description:
      "Pixel-perfect interfaces, design systems, and accessible frontends. We turn Figma designs into production-ready components.",
    tags: ["Tailwind", "Figma", "Accessibility"],
    cta: "Design Frontend",
    href: "/services/frontend",
    image: assets.icons.frontend,
  },
] as const;

export type WhatWeBuildCategory = (typeof whatWeBuildCategories)[number];
