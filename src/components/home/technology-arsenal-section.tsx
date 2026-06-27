import Image from "next/image";
import { Container } from "@/components/ui/container";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { getTechIconUrl } from "@/lib/tech-icons";
import { techStackCategories, type TechItem } from "@/lib/tech-stack-data";

function TechCard({ item }: { item: TechItem }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:shadow-lg md:p-6">
      <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-brand-soft p-3">
          <Image
            src={getTechIconUrl(item)}
            alt={`${item.name} logo`}
            width={48}
            height={48}
            className="h-10 w-10 object-contain"
            unoptimized
          />
        </div>
        <h4 className="mt-4 font-semibold text-neutral-900">{item.name}</h4>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-cyan/10 px-2.5 py-0.5 text-xs font-medium text-brand-blue"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function TechnologyArsenalSection() {
  return (
    <section className="border-t border-neutral-200 bg-white py-14 md:py-20" id="tech-stack">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Our Technology Arsenal
          </p>
          <h2 className="heading-section mt-3 text-2xl text-neutral-900 md:text-4xl">
            Modern Stacks We Master
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            We choose the right tools for your product—proven technologies that scale,
            hire easily, and stay maintainable for years.
          </p>
        </div>

        <div className="mt-14 space-y-12 md:mt-16 md:space-y-14">
          {techStackCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 text-lg font-semibold text-neutral-900 md:text-xl">
                <span className="border-l-4 border-brand-cyan pl-3">{category.title}</span>
              </h3>
              <div
                className={
                  category.items.length <= 2
                    ? "grid gap-4 sm:grid-cols-2 lg:max-w-2xl"
                    : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
                }
              >
                {category.items.map((item) => (
                  <TechCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-neutral-200 bg-brand-soft px-6 py-8 text-center md:mt-16 md:px-10 md:py-10">
          <h3 className="heading-section text-xl text-neutral-900 md:text-2xl">
            Need a custom stack recommendation?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
            Tell us your product goals and we&apos;ll architect the ideal technology
            combination for performance, budget, and timeline.
          </p>
          <div className="mt-6">
            <OrbittButton href="/contact" variant="solid">
              Get Tech Consultation
            </OrbittButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
