import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollToTop } from "@/components/home/scroll-to-top";
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
    default: `${siteConfig.name} | Software Development Company`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/edenza-favicon.png",
    shortcut: "/edenza-favicon.png",
    apple: "/edenza-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-white font-sans text-neutral-900 antialiased">
        <AppProviders>
          <LoadingScreen />
          <Header />
          <main className="flex-1 overflow-x-clip">{children}</main>
          <Footer />
          <ScrollToTop />
        </AppProviders>
      </body>
    </html>
  );
}
