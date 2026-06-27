import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqs } from "@/lib/home-data";

export function FaqSection() {
  return (
    <section className="border-t border-neutral-200 bg-brand-soft py-14 md:py-20" id="faqs">
      <Container className="max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-brand-cyan">
          FAQs
        </p>
        <h2 className="heading-section mt-2 text-center text-2xl text-neutral-900 md:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-neutral-600">
          Everything you need to know about working with EDENZATECH
        </p>
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
