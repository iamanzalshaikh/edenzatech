export type TechItem = {
  name: string;
  description: string;
  tags: string[];
  devicon?: string;
  deviconVariant?: "original" | "plain" | "line" | "original-wordmark" | "plain-wordmark";
  simpleIcon?: { slug: string; color: string };
};

export type TechCategory = {
  title: string;
  items: TechItem[];
};

export const techStackCategories: TechCategory[] = [
  {
    title: "CMS & E-Commerce Platforms",
    items: [
      {
        name: "Shopify",
        simpleIcon: { slug: "shopify", color: "7AB55C" },
        description: "The gold standard for scalable online stores.",
        tags: ["E-Commerce", "Shopify Plus"],
      },
      {
        name: "WordPress",
        devicon: "wordpress",
        description: "Powerful CMS for blogs and corporate sites.",
        tags: ["CMS", "Themes"],
      },
      {
        name: "Hostinger",
        simpleIcon: { slug: "hostinger", color: "673DE6" },
        description: "Fast, reliable hosting for modern web projects.",
        tags: ["Hosting", "Deployment"],
      },
      {
        name: "WooCommerce",
        simpleIcon: { slug: "woocommerce", color: "96588A" },
        description: "Flexible e-commerce solutions built on WordPress.",
        tags: ["E-Commerce", "Open Source"],
      },
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      {
        name: "React",
        devicon: "react",
        description: "Dynamic UIs for complex, high-performance apps.",
        tags: ["UI Library", "SaaS"],
      },
      {
        name: "Next.js",
        devicon: "nextjs",
        description: "The ultimate React framework for SEO and speed.",
        tags: ["SSR", "Static Sites"],
      },
      {
        name: "HTML5 / CSS3 / JS",
        devicon: "html5",
        description: "Clean, performant, and framework-free code.",
        tags: ["Core Web", "Fast"],
      },
      {
        name: "Tailwind CSS",
        devicon: "tailwindcss",
        description: "Utility-first styling for modern custom designs.",
        tags: ["CSS", "Responsive"],
      },
      {
        name: "TypeScript",
        devicon: "typescript",
        description: "Type-safe code for scalable, maintainable products.",
        tags: ["Types", "Enterprise"],
      },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      {
        name: "React Native",
        devicon: "reactnative",
        description: "Cross-platform iOS & Android apps from one codebase.",
        tags: ["iOS", "Android"],
      },
      {
        name: "Expo",
        simpleIcon: { slug: "expo", color: "000020" },
        description: "Rapid mobile delivery with over-the-air updates.",
        tags: ["Mobile", "Fast Launch"],
      },
      {
        name: "Flutter",
        devicon: "flutter",
        description: "High-performance cross-platform apps with native Dart compilation.",
        tags: ["Dart", "iOS", "Android", "Bloc"],
      },
    ],
  },
  {
    title: "Backend & Server Technologies",
    items: [
      {
        name: "Python / Flask",
        devicon: "python",
        description: "Flexible backend for custom apps and REST APIs.",
        tags: ["Python", "Backend"],
      },
      {
        name: "Node.js / Express",
        devicon: "nodejs",
        description: "Fast runtime for real-time and scalable systems.",
        tags: ["Node.js", "WebSockets"],
      },
      {
        name: "GraphQL",
        simpleIcon: { slug: "graphql", color: "E10098" },
        description: "Efficient APIs with precise data fetching.",
        tags: ["API", "Flexible"],
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "PostgreSQL",
        devicon: "postgresql",
        description: "Advanced open-source relational database.",
        tags: ["SQL", "Relational"],
      },
      {
        name: "MySQL",
        devicon: "mysql",
        description: "Trusted SQL database for web applications.",
        tags: ["SQL", "Popular"],
      },
      {
        name: "MongoDB",
        devicon: "mongodb",
        description: "Flexible NoSQL for modern, document-based data.",
        tags: ["NoSQL", "Scalable"],
      },
      {
        name: "Redis",
        devicon: "redis",
        description: "In-memory caching and real-time data store.",
        tags: ["Cache", "Performance"],
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      {
        name: "AWS",
        devicon: "amazonwebservices",
        deviconVariant: "original-wordmark",
        description: "Global infrastructure for your application.",
        tags: ["Cloud", "AWS"],
      },
      {
        name: "Google Cloud",
        devicon: "googlecloud",
        description: "Scalable cloud services and AI integrations.",
        tags: ["Cloud", "GCP"],
      },
      {
        name: "Vercel",
        devicon: "vercel",
        description: "Edge deployment for Next.js and modern frontends.",
        tags: ["Deploy", "Edge"],
      },
      {
        name: "Docker",
        devicon: "docker",
        description: "Containerized, consistent environments everywhere.",
        tags: ["DevOps", "CI/CD"],
      },
      {
        name: "Firebase",
        devicon: "firebase",
        description: "Realtime database, auth, and mobile backends.",
        tags: ["BaaS", "Mobile"],
      },
    ],
  },
];
