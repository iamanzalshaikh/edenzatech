import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  Layout,
  Monitor,
  Palette,
  Rocket,
  Server,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

export type MegaMenuItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type MegaMenuCategory = {
  title: string;
  items: MegaMenuItem[];
};

export const servicesMegaMenu: MegaMenuCategory[] = [
  {
    title: "Engineering",
    items: [
      {
        label: "Website Development",
        description: "High-performance marketing sites & corporate web",
        href: "/services/web-development",
        icon: Globe,
      },
      {
        label: "Web Applications",
        description: "Dashboards, portals & custom web products",
        href: "/services/web-development",
        icon: Monitor,
      },
      {
        label: "Mobile Apps",
        description: "Cross-platform iOS & Android with React Native",
        href: "/services/mobile-apps",
        icon: Smartphone,
      },
      {
        label: "MVP Development",
        description: "Launch your product in 4–8 weeks",
        href: "/contact",
        icon: Rocket,
      },
    ],
  },
  {
    title: "Platforms",
    items: [
      {
        label: "SaaS Development",
        description: "Multi-tenant apps with auth, billing & admin",
        href: "/services/custom-software",
        icon: Layers,
      },
      {
        label: "Custom Software",
        description: "Tailored systems for your business logic",
        href: "/services/custom-software",
        icon: Code2,
      },
      {
        label: "E-Commerce",
        description: "Stores, checkout flows & payment integrations",
        href: "/services/ecommerce",
        icon: ShoppingCart,
      },
      {
        label: "Enterprise Software",
        description: "Scalable platforms for growing teams",
        href: "/services/custom-software",
        icon: Server,
      },
    ],
  },
  {
    title: "Frontend & UX",
    items: [
      {
        label: "UI/UX Design",
        description: "Figma to pixel-perfect production code",
        href: "/services/frontend",
        icon: Palette,
      },
      {
        label: "Design Systems",
        description: "Reusable components & brand consistency",
        href: "/services/frontend",
        icon: Layout,
      },
      {
        label: "Frontend Engineering",
        description: "React, Next.js & TypeScript interfaces",
        href: "/services/frontend",
        icon: Code2,
      },
      {
        label: "Responsive Web",
        description: "Mobile-first layouts tested on real devices",
        href: "/services/web-development",
        icon: Smartphone,
      },
    ],
  },
  {
    title: "Cloud & Backend",
    items: [
      {
        label: "API Development",
        description: "REST, GraphQL & real-time endpoints",
        href: "/services/backend",
        icon: Database,
      },
      {
        label: "Cloud Infrastructure",
        description: "AWS, Vercel & scalable deployments",
        href: "/services/backend",
        icon: Cloud,
      },
      {
        label: "DevOps & CI/CD",
        description: "Automated pipelines & monitoring",
        href: "/services/backend",
        icon: Server,
      },
      {
        label: "Database Design",
        description: "PostgreSQL, MySQL & data architecture",
        href: "/services/backend",
        icon: Database,
      },
    ],
  },
];

export const featuredService = {
  badge: "Featured",
  title: "Full-Stack Product Engineering",
  description:
    "End-to-end web & mobile development — from discovery and design to deployment and scale.",
  href: "/contact",
  cta: "Explore",
} as const;

export const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true as const },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;
