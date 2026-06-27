import Image from "next/image";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { services } from "@/lib/home-data";

export function ServicesSection() {
  return (
    <section className="bg-brand-soft py-14 md:py-20" id="services">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Our Services
          </p>
          <h2 className="heading-section mt-3 text-2xl text-neutral-900 md:text-3xl">
            Development Services Built for Scale
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            End-to-end software development—from MVPs to enterprise platforms. We focus
            exclusively on building products that perform in the real world.
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-brand-gradient" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.href}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-brand-cyan/40 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-cyan/10">
                <Image
                  src={service.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  unoptimized
                />
              </div>
              <h4 className="heading-section whitespace-pre-line text-lg text-neutral-900">
                {service.title}
              </h4>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
              <OrbittButton
                href={service.href}
                icon="arrow"
                variant="light-outline"
                className="mt-5 w-full sm:w-auto"
              >
                Learn More
              </OrbittButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
