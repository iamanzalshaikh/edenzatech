"use client";

import { motion } from "framer-motion";
import { Code2, Headphones, Layers, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";

const commitments = [
  {
    icon: Zap,
    title: "Agile Sprints",
    description: "Bi-weekly releases & interactive demos so you see progress in real-time.",
    cardBg: "bg-[#FFF9F5]",
    cardBorder: "border-[#FDF0E6]",
    iconColor: "bg-[#FEEAD9] text-brand-orange",
    watermarkColor: "text-brand-orange/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(224,122,46,0.06)]"
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Strict TypeScript, automated tests, and thorough code reviews on every pull request.",
    cardBg: "bg-[#F5FAF9]",
    cardBorder: "border-[#E4F2F0]",
    iconColor: "bg-[#D2EBE7] text-[#134D4A]",
    watermarkColor: "text-[#134D4A]/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(19,77,74,0.06)]"
  },
  {
    icon: Layers,
    title: "Cloud Scale",
    description: "Serverless architectures built on AWS and Vercel to handle traffic spikes effortlessly.",
    cardBg: "bg-[#FCFAF2]",
    cardBorder: "border-[#F6F1D9]",
    iconColor: "bg-[#FAF2CD] text-[#b07f18]",
    watermarkColor: "text-[#b07f18]/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(241,179,51,0.06)]"
  },
  {
    icon: Headphones,
    title: "Direct Access",
    description: "Direct communications with the engineers building your code—no account managers.",
    cardBg: "bg-[#F3F7FD]",
    cardBorder: "border-[#E2ECFA]",
    iconColor: "bg-[#D1E2FB] text-[#0c4ca6]",
    watermarkColor: "text-[#0c4ca6]/5",
    shadowClass: "hover:shadow-[0_12px_30px_rgba(12,76,166,0.06)]"
  }
];

export function AgencyIntroSection() {
  return (
    <section className="bg-white py-20" id="services">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Headline and Description */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col text-left lg:col-span-7"
          >
            {/* Eyebrow */}
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
              Your Technical Partner
            </span>

            {/* Title */}
            <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-brand-blue sm:text-4xl lg:text-5xl">
              Engineering Digital Products <br />
              That Elevate Your Brand
            </h2>

            {/* Paragraphs */}
            <p className="mt-6 text-base font-light leading-relaxed text-brand-muted sm:text-lg">
              As specialists in modern web and mobile development, we deliver custom-engineered systems that accelerate your business goals. We translate complex requirements into clean, production-grade applications.
            </p>

            <p className="mt-4 text-base font-light leading-relaxed text-brand-muted">
              From early-stage MVPs to robust enterprise architectures, our team bridges the gap between high-fidelity UI/UX design and scalable backend engineering—eliminating black boxes and communication handoffs.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <OrbittButton href="/contact" variant="solid">
                Explore Our Work
              </OrbittButton>
              <OrbittButton href="/about" variant="light-outline">
                Contact Us
              </OrbittButton>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Core Commitments */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-5"
          >
            {commitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl p-5 text-left border ${item.cardBg} ${item.cardBorder} shadow-sm transition-all duration-300 ${item.shadowClass} hover:-translate-y-0.5`}
                >
                  {/* Large background watermark icon in top right corner */}
                  <Icon className={`absolute -top-3 -right-3 h-20 w-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 rotate-12 ${item.watermarkColor}`} />

                  {/* Normal Icon block */}
                  <div className={`relative z-10 h-9 w-9 rounded-lg flex items-center justify-center ${item.iconColor} shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="relative z-10 mt-4 text-sm font-bold text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-1.5 text-xs leading-relaxed text-brand-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
