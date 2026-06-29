import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-14 md:py-20">
      <div className="absolute inset-0 bg-brand-black/10" aria-hidden />
      <Container className="relative max-w-3xl text-center">
        <h2 className="heading-section text-2xl text-white md:text-3xl">
          Ready to Build Your Product?
        </h2>
        <p className="mt-4 text-base text-white/90 md:text-[17px]">
          We help startups and businesses ship web apps, mobile apps, and custom software
          with modern stacks, agile delivery, and code you can scale on.
        </p>
        <p className="mt-4 text-sm text-white/80 md:text-base">
          Book a free 30-minute discovery call. No sales pitch—just a focused conversation
          about your product goals and technical roadmap.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <OrbittButton href="/contact" icon="phone" variant="gradient">
            Schedule Free Consultation
          </OrbittButton>
          <OrbittButton href={siteConfig.contact.whatsapp} icon="whatsapp" external variant="outline">
            WhatsApp Us
          </OrbittButton>
        </div>
      </Container>
    </section>
  );
}
