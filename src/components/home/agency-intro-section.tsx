import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { agencyIntro } from "@/lib/home-data";

export function AgencyIntroSection() {
  return (
    <section className="border-y border-neutral-200 bg-brand-soft py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              {agencyIntro.eyebrow}
            </p>
            <h2 className="heading-display mt-4 whitespace-pre-line text-2xl text-neutral-900 md:text-3xl lg:text-4xl">
              {agencyIntro.title}
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              {agencyIntro.description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              {agencyIntro.secondary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <OrbittButton href="/services" variant="solid">
                Explore Our Work
              </OrbittButton>
              <OrbittButton href="/contact" variant="light-outline">
                Contact Us
              </OrbittButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
