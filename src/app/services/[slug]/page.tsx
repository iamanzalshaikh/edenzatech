import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { CheckCircle2, Globe, Smartphone, Server, Palette, Layers, Code2, Database, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

const serviceDetailsData: Record<string, {
  title: string;
  tagline: string;
  icon: any;
  bgClass: string;
  iconBg: string;
  textClass: string;
  summary: string;
  features: string[];
  techStack: string[];
  badge: string;
}> = {
  "web-development": {
    title: "Web Development",
    tagline: "High-performance marketing platforms, custom dashboards, and web applications built for conversion.",
    icon: Globe,
    bgClass: "bg-[#F5FAF9]",
    iconBg: "bg-[#D2EBE7]",
    textClass: "text-[#134D4A]",
    badge: "Speed & SEO",
    summary: "Our web engineering focus targets sub-2s loading speeds, semantic SEO structures, and clean modular code. We design and build Next.js applications that function as robust long-term assets for your company.",
    features: [
      "Custom Next.js App Router pre-rendering frameworks",
      "Interactive React dashboard interfaces with real-time sync",
      "Fluid, responsive CSS layouts tested across devices",
      "Core Web Vitals optimizations for high search indexing"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  "mobile-apps": {
    title: "Mobile App Development",
    tagline: "Premium native iOS & Android applications compiled from a single optimized codebase.",
    icon: Smartphone,
    bgClass: "bg-[#FFF9F5]",
    iconBg: "bg-[#FEEAD9]",
    textClass: "text-brand-orange",
    badge: "iOS & Android",
    summary: "We develop native-feel mobile experiences using React Native and Flutter. By leveraging custom build pipelines and native hooks, we provide rapid development sprints without sacrificing UI fluidity or security.",
    features: [
      "Cross-platform React Native & Expo app development",
      "Strict state management via Flutter and BLoC structures",
      "Offline cache management and device hardware integrations",
      "App Store & Google Play Store release administration"
    ],
    techStack: ["React Native", "Flutter", "Expo", "Dart", "TypeScript"]
  },
  "custom-software": {
    title: "Custom Software & SaaS",
    tagline: "Tailor-made cloud architectures engineered to handle complex business processes.",
    icon: Layers,
    bgClass: "bg-[#F3F7FD]",
    iconBg: "bg-[#D1E2FB]",
    textClass: "text-[#0c4ca6]",
    badge: "Enterprise Grade",
    summary: "We design and deploy bespoke administrative portals, multi-tenant subscription networks, and automation routines. Built on strict type safety guidelines, we establish foundations ready for scale.",
    features: [
      "Multi-tenant data isolation and organization mapping",
      "Stripe subscriptions and automated billing loops",
      "High-throughput task queue systems and background workers",
      "Comprehensive administration decks and activity audit logs"
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"]
  },
  "ecommerce": {
    title: "E-Commerce Development",
    tagline: "Headless storefronts, custom checkout hooks, and payment gateway integrations built for speed.",
    icon: Server,
    bgClass: "bg-[#FFF9F5]",
    iconBg: "bg-[#FEEAD9]",
    textClass: "text-brand-orange",
    badge: "High Conversion",
    summary: "Standard e-commerce page speeds can kill conversion rates. We engineer custom headless storefronts that load instantly, utilizing GraphQL hooks to sync inventories and process transactions securely.",
    features: [
      "Headless Shopify storefronts using the Storefront API",
      "Custom shopping cart hooks and local state caching",
      "Secure Stripe, Razorpay, and Apple Pay payment checkouts",
      "Frictionless funnel setups and conversion event mapping"
    ],
    techStack: ["Shopify API", "Next.js", "GraphQL", "Stripe", "Tailwind CSS"]
  },
  "backend": {
    title: "API & Backend Development",
    tagline: "Secure high-throughput API endpoints, database clustering, and cloud routing.",
    icon: Database,
    bgClass: "bg-[#F5FAF9]",
    iconBg: "bg-[#D2EBE7]",
    textClass: "text-[#134D4A]",
    badge: "Secure & Scalable",
    summary: "Establish data backbones that remain responsive under loads. We construct optimized REST and GraphQL engines, index queries for sub-10ms response times, and isolation-protect credentials.",
    features: [
      "Modular API routing with token auth & rate limits",
      "PostgreSQL query tuning, connection pools, and Redis caching",
      "AWS cloud setups utilizing Docker containers and Lambdas",
      "Staging environment isolation and CI/CD testing pipelines"
    ],
    techStack: ["AWS", "Docker", "PostgreSQL", "Redis", "GraphQL"]
  },
  "frontend": {
    title: "UI/UX & Frontend Development",
    tagline: "Translating visual Figma layouts into responsive, interactive, and high-performance frontend code.",
    icon: Palette,
    bgClass: "bg-[#FCFAF2]",
    iconBg: "bg-[#FAF2CD]",
    textClass: "text-[#b07f18]",
    badge: "Figma to Code",
    summary: "A gorgeous layout is only as good as its implementation. We map visual Figma designs directly to atomic Tailwind components, adding fluid keyframe micro-animations for an interactive user feel.",
    features: [
      "Figma design audits, asset compilation, and component naming",
      "Atomic Tailwind CSS token files and shared components",
      "Fluid page transitions and hover effects using Framer Motion",
      "Bundle weight reduction, image compression, and layout testing"
    ],
    techStack: ["Figma", "Framer Motion", "React", "TypeScript", "Tailwind CSS"]
  }
};

export async function generateStaticParams() {
  return Object.keys(serviceDetailsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceDetailsData[slug];
  if (!data) return {};
  return { title: `${data.title} — EDENZATECH` };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = serviceDetailsData[slug];
  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-brand-cyan mb-4">
            <Sparkles className="h-2.5 w-2.5 text-brand-orange fill-current" />
            {data.badge}
          </span>
          <h1 className="heading-display mt-2 text-3xl font-extrabold md:text-5xl">
            {data.title}
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            {data.tagline}
          </p>
        </Container>
      </section>

      {/* Details layout - No borders or bottom divider lines */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-[1fr_260px] items-start">
            
            {/* Left Content Column */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${data.iconBg} ${data.textClass} shadow-inner`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-brand-blue">Capabilities Details</h2>
              </div>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                {data.summary}
              </p>

              {/* Sub-capabilities checklist */}
              <ul className="space-y-3.5 mt-8">
                {data.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-brand-muted">
                    <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${data.textClass}`} />
                    <span className="font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right sidebar tech stack card - No borders */}
            <aside className={`rounded-3xl ${data.bgClass} p-6 shadow-sm`}>
              <h3 className={`text-xs font-extrabold tracking-wider uppercase ${data.textClass} mb-4`}>
                Core Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-blue shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="flex items-center justify-between w-full rounded-xl bg-brand-blue text-white px-4 py-3 text-xs font-extrabold uppercase tracking-wider hover:bg-brand-blue-hover shadow-sm transition-colors"
                >
                  Get Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>

          </div>
        </Container>
      </section>

      {/* Global workflow or commitments section - No borders or bottom divider lines */}
      <section className="bg-brand-cream/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
              Our Core Engineering Commitments
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Clean Architecture</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Code should be an organizational asset. We build modular, type-safe structures that any development team can scale, understand, and easily extend.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-[#E2ECFA] flex items-center justify-center text-[#0c4ca6] mb-4">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Zero compiler warnings</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                We enforce strict lint policies and compiler type validation. Resolving anomalies before they reach production makes applications rock-solid.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-[#D2EBE7] flex items-center justify-center text-[#134D4A] mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-brand-blue text-base">Security &amp; Encryption</h4>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Credentials security, TLS routing, injection checks, and environment isolation are native priorities. We protect your company and user data.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-white text-center">
        <Container className="max-w-2xl">
          <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
            Ready to build?
          </h3>
          <p className="mt-3 text-sm text-brand-muted md:text-base">
            Discuss architectural setups and deployment paths directly with our co-founders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <OrbittButton href="/contact" variant="solid">
              Start Your Project
            </OrbittButton>
            <OrbittButton href="/services" variant="light-outline">
              Explore Other Services
            </OrbittButton>
          </div>
        </Container>
      </section>

    </div>
  );
}
