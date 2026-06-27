import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { navLinks } from "@/lib/site-config";

const services = navLinks.find((l) => l.label === "Services");
const items =
  services && "children" in services ? services.children : [];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return items.map((s) => ({
    slug: s.href.replace("/services/", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((s) => s.href === `/services/${slug}`);
  if (!item) return {};
  return { title: item.label };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((s) => s.href === `/services/${slug}`);
  if (!item) notFound();

  return <PageShell title={item.label} />;
}
