export const siteConfig = {
  name: "EDENZATECH",
  tagline: "INNOVATE • BUILD • GROW",
  description:
    "Full-stack software development company building web apps, mobile apps, SaaS platforms, and custom software with modern technologies.",
  url: "https://edenzatech.com",
  location: "Mumbai, India",
  contact: {
    whatsapp: "https://wa.me/",
    email: "hello@edenzatech.com",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-apps" },
      { label: "Custom Software & SaaS", href: "/services/custom-software" },
      { label: "E-Commerce Development", href: "/services/ecommerce" },
      { label: "API & Backend Development", href: "/services/backend" },
      { label: "UI/UX & Frontend", href: "/services/frontend" },
      // Non-development services — commented out per client request
      // { label: "Search Engine Optimization", href: "/services/seo" },
      // { label: "Social Media Marketing", href: "/services/social-media" },
      // { label: "Google Ads & Meta Ads", href: "/services/paid-ads" },
      // { label: "Brand Identity & Graphic Design", href: "/services/branding" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
] as const;

export const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Years of Experience", value: 6, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
] as const;
