import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { siteConfig } from "@/lib/site-config";

export function AuditCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-brand-soft py-12 md:py-14">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
          {siteConfig.tagline}
        </p>
        <h2 className="heading-section mx-auto mt-4 max-w-3xl text-[clamp(1.5rem,3.5vw,2.25rem)] leading-snug text-neutral-900">
          Ready to Build Your Next Product?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600">
          6+ years of engineering expertise. 150+ products shipped. From MVP to
          enterprise scale—we deliver code you can trust.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <OrbittButton href="/contact" variant="solid">
            Book Free Consultation
          </OrbittButton>
          <OrbittButton
            href={siteConfig.contact.whatsapp}
            icon="whatsapp"
            external
            variant="light-outline"
          >
            WhatsApp Us
          </OrbittButton>
        </div>
      </Container>
    </section>
  );
}
