import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/industries",
    "/contact",
    "/faqs",
    "/case-studies",
    "/book-consultation",
  ];

  const services = [
    "/services/web-development",
    "/services/mobile-apps",
    "/services/custom-software",
    "/services/ecommerce",
    "/services/backend",
    "/services/frontend",
  ];

  const allRoutes = [...routes, ...services];

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
