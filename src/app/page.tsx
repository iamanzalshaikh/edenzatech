import dynamic from "next/dynamic";
import { AuditCtaSection } from "@/components/home/audit-cta-section";
import { HeroBlock } from "@/components/home/hero-block";

const AboutSection = dynamic(
  () => import("@/components/home/about-section").then((m) => m.AboutSection),
);
const WhatWeBuildSection = dynamic(
  () => import("@/components/home/what-we-build-section").then((m) => m.WhatWeBuildSection),
);
const EdenzaStandardSection = dynamic(
  () =>
    import("@/components/home/edenza-standard-section").then(
      (m) => m.EdenzaStandardSection,
    ),
);
const AgencyIntroSection = dynamic(
  () => import("@/components/home/agency-intro-section").then((m) => m.AgencyIntroSection),
);
const StatsSection = dynamic(
  () => import("@/components/home/stats-section").then((m) => m.StatsSection),
);
const ServicesSection = dynamic(
  () => import("@/components/home/services-section").then((m) => m.ServicesSection),
);
const WhyChooseSection = dynamic(
  () => import("@/components/home/why-choose-section").then((m) => m.WhyChooseSection),
);
const TechnologyArsenalSection = dynamic(
  () =>
    import("@/components/home/technology-arsenal-section").then(
      (m) => m.TechnologyArsenalSection,
    ),
);
const GrowthProcessSection = dynamic(
  () => import("@/components/home/growth-process-section").then((m) => m.GrowthProcessSection),
);
const TestimonialsSection = dynamic(
  () => import("@/components/home/testimonials-section").then((m) => m.TestimonialsSection),
);
const FinalCtaSection = dynamic(
  () => import("@/components/home/final-cta-section").then((m) => m.FinalCtaSection),
);
const FaqSection = dynamic(() => import("@/components/home/faq-section").then((m) => m.FaqSection));

export default function HomePage() {
  return (
    <div className="w-full overflow-x-clip">
      <HeroBlock />
      <AuditCtaSection />
      <AgencyIntroSection />
      <AboutSection />
      <WhatWeBuildSection />
      <EdenzaStandardSection />
      <StatsSection />
      {/* <ServicesSection /> */}
      <WhyChooseSection />
      <TechnologyArsenalSection />
      {/* <GrowthProcessSection /> */}
      <TestimonialsSection />
      <FinalCtaSection />
      {/* <FaqSection /> */}
    </div>
  );
}
