import { Container } from "@/components/ui/container";
import { TestimonialsMarquee } from "./testimonials-marquee";

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden border-t border-neutral-200 bg-white py-14 md:py-20" id="testimonials">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Testimonials
          </p>
          <h2 className="heading-section mt-2 text-2xl text-neutral-900 md:text-3xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-neutral-600">
            Teams trust EDENZATECH to ship reliable software—from MVPs to production
            platforms that scale with their business.
          </p>
        </div>
      </Container>
      <TestimonialsMarquee />
    </section>
  );
}
