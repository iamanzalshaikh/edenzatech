import Link from "next/link";
import { Container } from "@/components/ui/container";
import { EdenzaLogo } from "@/components/ui/edenza-logo";
import { OrbittButton } from "@/components/ui/orbitt-button";
import { navLinks, siteConfig } from "@/lib/site-config";

const serviceLinks = navLinks.find((l) => l.label === "Services");
const services =
  serviceLinks && "children" in serviceLinks ? serviceLinks.children : [];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="lg:col-span-1">
          <EdenzaLogo variant="wordmark" theme="dark" className="!h-16 !py-2 md:!h-20 md:!py-3" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            {siteConfig.description}
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            {siteConfig.tagline}
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              className="text-sm font-medium text-neutral-400 transition-colors hover:text-brand-cyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              className="text-sm font-medium text-neutral-400 transition-colors hover:text-brand-cyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.linkedin}
              className="text-sm font-medium text-neutral-400 transition-colors hover:text-brand-cyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-brand-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Development Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-brand-cyan"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <OrbittButton href="/contact" variant="gradient">
            Start Your Project
          </OrbittButton>
          <div className="mt-4 text-sm text-neutral-400 space-y-1.5">
            {siteConfig.locations?.map((loc) => (
              <div key={loc.name} className="flex items-center gap-2">
                <img src={loc.flag} alt={loc.name} className="w-5 h-auto rounded-[2px] shadow-sm" />
                <span>{loc.name}</span>
              </div>
            ))}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-brand-cyan block pt-1"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-neutral-800 bg-neutral-950">
        <Container className="flex flex-col items-center justify-center gap-2 py-5 text-center text-xs text-neutral-500 sm:flex-row sm:gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-neutral-500 transition-colors hover:text-brand-cyan"
          >
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
