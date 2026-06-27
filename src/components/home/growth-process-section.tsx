import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { developmentProcess } from "@/lib/home-data";

export function GrowthProcessSection() {
  return (
    <section className="bg-brand-soft py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Our Process
          </p>
          <h2 className="heading-section mt-3 text-2xl text-neutral-900 md:text-3xl">
            From Idea to Production
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            A proven development process that delivers shippable software every sprint—with
            transparency, quality, and speed built in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {developmentProcess.map((step) => (
            <article
              key={step.step}
              className="relative rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-brand-cyan/40 hover:shadow-md"
            >
              <span className="font-mono text-2xl font-bold text-gradient">
                {step.step}
              </span>
              <h3 className="heading-section mt-3 text-lg text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <OrbittButton href="/contact" variant="solid">
            Start Your Project
          </OrbittButton>
        </div>
      </Container>
    </section>
  );
}
