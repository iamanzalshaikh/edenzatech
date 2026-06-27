import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { navLinks } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
};

const services = navLinks.find((l) => l.label === "Services");
const items =
  services && "children" in services ? services.children : [];

export default function ServicesPage() {
  return (
    <>
      <PageShell
        title="Development Services"
        description="Full-stack software development — web apps, mobile apps, SaaS, APIs, and more."
      />
      <Section className="bg-brand-black pt-0">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block rounded-2xl border border-border bg-brand-surface p-6 transition-colors hover:border-brand-cyan/30 hover:bg-brand-elevated"
                >
                  <h2 className="text-lg font-semibold text-white">{s.label}</h2>
                  <p className="mt-2 text-sm text-brand-cyan">Learn more →</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
