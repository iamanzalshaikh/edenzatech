import type { Metadata } from "next";
import Image from "next/image";
import { Mail, ExternalLink, Code2, Users, Layers, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";

export const metadata: Metadata = {
  title: "About Us — Meet the Founders",
  description: "Learn more about EDENZATECH, founded by Anzal Shaikh and Aftab Asif, dedicated to shipping high-end web, mobile, and custom applications.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FFFDF8] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-gradient pt-16 pb-6 text-white md:pt-24 md:pb-12">
        <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
        <Container className="relative z-10 text-center max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            About EDENZATECH
          </p>
          <h1 className="heading-display mt-3 text-3xl font-extrabold md:text-5xl">
            Engineering Digital Products That Perform
          </h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            We are a software development agency focused on turning ideas into scalable, high-performance applications. Meet the engineering team behind the vision.
          </p>
        </Container>
      </section>

      {/* Leadership / Founders Section */}
      <section className="py-20 bg-white" id="founders">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Our Leadership
            </p>
            <h2 className="heading-display mt-3 text-3xl font-bold text-brand-blue md:text-4xl">
              Meet Our Founders
            </h2>
            <p className="mt-4 text-base text-brand-muted">
              Bespoke digital architecture built by engineers, for growing companies.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            
            {/* CEO Anzal Card */}
            <article className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#F2FAF8] to-[#E9F6F3] p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-[0_24px_48px_rgba(19,77,74,0.08)] hover:-translate-y-1.5 flex flex-col items-center text-center">
              
              {/* Backlight Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D2EBE7]/40 rounded-full blur-3xl pointer-events-none" />
              
              <div className="absolute -top-3 -right-3 h-24 w-24 text-[#134D4A]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110">
                <Users className="h-full w-full" />
              </div>

              {/* Large Circular Avatar container with White Ring and Rich Drop Shadow */}
              <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#D2EBE7] to-[#B0DFD8] p-1.5 shadow-[0_12px_28px_rgba(19,77,74,0.14)] ring-4 ring-white transition-all duration-500 group-hover:scale-[1.04] group-hover:shadow-[0_16px_36px_rgba(19,77,74,0.22)] relative z-10">
                <Image
                  src="/anzal-avatar.png"
                  alt="Anzal Shaikh CEO Profile"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>

              <div className="mt-8 relative z-10">
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-brand-orange uppercase bg-white/80 border border-brand-orange/10 px-3 py-1 rounded-full shadow-sm">
                  FOUNDER &amp; CEO
                </span>
                <h3 className="text-2xl font-bold text-brand-blue mt-4">Anzal Shaikh</h3>
                <p className="text-xs text-[#134D4A] font-bold mt-1 tracking-wide">Lead Architect &amp; System Engineer</p>
              </div>

              <p className="mt-5 text-xs sm:text-sm leading-relaxed text-brand-muted relative z-10 max-w-sm">
                Anzal is a full-stack engineer and MERN stack expert specializing in cloud systems design, backend architecture, and robust cross-platform mobile apps. He ensures EDENZATECH builds solid, secure, and production-grade core products.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-1.5 relative z-10">
                {["System Design", "Node.js / MERN", "React Native", "DevOps", "GraphQL"].map((tag) => (
                  <span key={tag} className="rounded-full bg-white/95 border border-[#D2EBE7] px-3 py-1 text-[10px] font-bold text-brand-blue shadow-sm hover:bg-[#D2EBE7]/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-6 w-full flex items-center justify-between relative z-10 border-t border-[#D2EBE7]/50">
                <div className="flex gap-2.5">
                  <a
                    href="https://github.com/iamanzalshaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-xl bg-white flex items-center justify-center text-brand-blue hover:text-brand-orange transition-all border border-brand-muted/10 shadow-sm hover:scale-105 active:scale-95"
                  >
                    <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anzal-shaikh-1a313536b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-xl bg-white flex items-center justify-center text-brand-blue hover:text-brand-orange transition-all border border-brand-muted/10 shadow-sm hover:scale-105 active:scale-95"
                  >
                    <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                <a
                  href="mailto:enganzalshaikh@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#134D4A] hover:text-brand-orange transition-colors hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" /> Contact Anzal
                </a>
              </div>
            </article>

            {/* Co-founder Aftab Card */}
            <article className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#FFF7F2] to-[#FFF0E6] p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-[0_24px_48px_rgba(249,115,22,0.08)] hover:-translate-y-1.5 flex flex-col items-center text-center">
              
              {/* Backlight Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FEEAD9]/40 rounded-full blur-3xl pointer-events-none" />
              
              <div className="absolute -top-3 -right-3 h-24 w-24 text-brand-orange/5 pointer-events-none transition-transform duration-500 group-hover:scale-110">
                <Code2 className="h-full w-full" />
              </div>

              {/* Large Circular Avatar container with White Ring and Rich Drop Shadow */}
              <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#FEEAD9] to-[#FDCEAB] p-1.5 shadow-[0_12px_28px_rgba(249,115,22,0.14)] ring-4 ring-white transition-all duration-500 group-hover:scale-[1.04] group-hover:shadow-[0_16px_36px_rgba(249,115,22,0.22)] relative z-10">
                <Image
                  src="/aftab-avatar.png"
                  alt="Aftab Asif Co-Founder Profile"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>

              <div className="mt-8 relative z-10">
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-brand-orange uppercase bg-white/80 border border-brand-orange/10 px-3 py-1 rounded-full shadow-sm">
                  CO-FOUNDER
                </span>
                <h3 className="text-xl font-bold text-brand-blue mt-4">Aftab Asif</h3>
                <p className="text-xs text-brand-orange font-bold mt-1 tracking-wide">Head of Frontend &amp; UI UX</p>
              </div>

              <p className="mt-5 text-xs sm:text-sm leading-relaxed text-brand-muted relative z-10 max-w-sm">
                Aftab is a design engineer and UI specialist. He has engineered web products generating significant user engagement. He leads design token implementation, responsive frontend scaling, and performance optimizations.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-1.5 relative z-10">
                {["Next.js / React", "Tailwind CSS", "Framer Motion", "UI Engineering", "Figma"].map((tag) => (
                  <span key={tag} className="rounded-full bg-white/95 border border-[#FEEAD9] px-3 py-1 text-[10px] font-bold text-brand-orange shadow-sm hover:bg-[#FEEAD9]/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-6 w-full flex items-center justify-between relative z-10 border-t border-[#FEEAD9]/50">
                <div className="flex gap-2.5">
                  <a
                    href="https://github.com/aftabasif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-xl bg-white flex items-center justify-center text-brand-blue hover:text-brand-orange transition-all border border-brand-muted/10 shadow-sm hover:scale-105 active:scale-95"
                  >
                    <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aftab-asif/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-xl bg-white flex items-center justify-center text-brand-blue hover:text-brand-orange transition-all border border-brand-muted/10 shadow-sm hover:scale-105 active:scale-95"
                  >
                    <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-orange">
                  <ExternalLink className="h-3.5 w-3.5" /> Gothenburg, SE
                </span>
              </div>
            </article>

          </div>
        </Container>
      </section>

      {/* Core values block */}
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

      {/* Footer CTA */}
      <section className="py-20 bg-white text-center">
        <Container className="max-w-2xl">
          <h3 className="heading-display text-2xl font-bold text-brand-blue md:text-3xl">
            Have a product vision to execute?
          </h3>
          <p className="mt-3 text-sm text-brand-muted md:text-base">
            Work directly with our founders to draft the technical specification document, choose framework stacks, and build sprint roadmaps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <OrbittButton href="/contact" variant="solid">
              Start Your Project
            </OrbittButton>
            <OrbittButton href="/services" variant="light-outline">
              Explore Our Services
            </OrbittButton>
          </div>
        </Container>
      </section>

    </div>
  );
}
