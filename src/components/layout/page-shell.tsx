import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

type PageShellProps = {
  title: string;
  description?: string;
};

export function PageShell({ title, description }: PageShellProps) {
  return (
    <Section className="bg-white pt-32">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
          {siteConfig.name}
        </p>
        <h1 className="heading-display mt-3 text-4xl text-neutral-900 md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">{description}</p>
        )}
        <p className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-brand-soft px-6 py-8 text-sm text-neutral-600">
          This page is ready for detailed content. Contact us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-brand-blue hover:underline"
          >
            {siteConfig.contact.email}
          </a>{" "}
          to discuss your project.
        </p>
      </Container>
    </Section>
  );
}
