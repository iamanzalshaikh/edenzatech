import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { siteConfig } from "@/lib/site-config";
import { LoadingScreen } from "@/components/ui/loading-screen";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Custom Software & SaaS Development Company`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Top-tier custom software development company in India & Dubai specializing in SaaS platforms, web applications, and enterprise mobile apps.",
  keywords: [
    "Custom software development company",
    "SaaS development agency UAE",
    "Software development company in Dubai",
    "Custom software services India",
    "B2B SaaS development services",
    "Mobile app development Dubai",
    "Enterprise web app development",
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Custom Software & SaaS Development Company`,
    description: "Top-tier custom software development company in India & Dubai specializing in SaaS platforms, web applications, and enterprise mobile apps.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/edenza-favicon.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Custom Software & SaaS Development Company`,
    description: "Top-tier custom software development company in India & Dubai specializing in SaaS platforms, web applications, and enterprise mobile apps.",
    images: ["/edenza-favicon.png"],
  },
  icons: {
    icon: "/edenza-favicon.png",
    shortcut: "/edenza-favicon.png",
    apple: "/edenza-favicon.png",
  },
  verification: {
    google: "gjMIxeRActm30BFYdIJvxzfmupghjB3ksgq4vRFGm2M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/edenza-favicon.png`,
        "sameAs": [
          siteConfig.social.instagram,
          siteConfig.social.facebook,
          siteConfig.social.linkedin,
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        }
      },
      {
        "@type": "LocalBusiness",
        "name": siteConfig.name,
        "image": `${siteConfig.url}/edenza-favicon.png`,
        "@id": `${siteConfig.url}`,
        "url": siteConfig.url,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai & Dubai",
          "addressCountry": "IN, AE"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-clip bg-white font-sans text-neutral-900 antialiased">
        <AppProviders>
          <LoadingScreen />
          <Header />
          <main className="flex-1 overflow-x-clip">{children}</main>
          <Footer />
        </AppProviders>
        {/* WhatsApp widget lives outside AppProviders so fixed positioning is never clipped */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
