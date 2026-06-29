import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqs } from "@/lib/home-data";

export function FaqSection() {
  return (
    <section className="border-t border-brand-muted/10 bg-brand-cream py-14 md:py-20" id="faqs">
      <Container className="max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-brand-orange">
          FAQs
        </p>
        <h2 className="heading-section mt-2 text-center text-2xl font-bold text-brand-blue md:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-brand-muted">
          Everything you need to know about working with EDENZATECH
        </p>
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
