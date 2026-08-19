import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Software Development Projects & SaaS Case Studies",
  description: "Explore our diverse portfolio of custom software, SaaS platforms, e-commerce applications, and mobile apps built for clients in Dubai, India, and globally.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
