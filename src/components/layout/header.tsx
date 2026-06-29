"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useScroll } from "@/components/providers/scroll-context";
import { Container } from "@/components/ui/container";
import { EdenzaLogo } from "@/components/ui/edenza-logo";
import { featuredService, primaryNavLinks, servicesMegaMenu } from "@/lib/mega-menu-data";
import { cn } from "@/lib/utils";
import { ServicesMegaMenu } from "./services-mega-menu";

export function Header() {
  const pathname = usePathname();
  const { scrollToTop } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToTop();
      setMobileOpen(false);
    }
  };

  const closeAll = () => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-500 ease-in-out py-0"
      onMouseLeave={() => setMegaOpen(false)}
    >
      <Container
        className={cn(
          "relative flex items-center justify-between gap-6 transition-all duration-500 ease-in-out",
          scrolled
            ? "mt-4 w-[calc(100%-2rem)] rounded-full border border-neutral-200/50 bg-white/70 shadow-lg backdrop-blur-lg h-14 px-6 md:h-16 md:px-8"
            : "w-full border-b border-neutral-200/80 bg-brand-cream/95 h-16 px-4 md:h-20 md:px-6"
        )}
      >
        <Link href="/" className="shrink-0" onClick={handleLogoClick}>
          <EdenzaLogo
            variant="wordmark"
            showSubtitle
            className={cn(
              "transition-all duration-300",
              scrolled
                ? "!h-[48px] !py-[2px] md:!h-[56px] md:!py-[2px]"
                : "!h-[60px] !py-[2px] md:!h-[76px] md:!py-[2px]"
            )}
          />
        </Link>
 
        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2"
          aria-label="Main"
        >
          {primaryNavLinks.map((link) => {
            if ("mega" in link && link.mega) {
              return (
                <div
                  key={link.href}
                  className="group relative"
                  onMouseEnter={() => setMegaOpen(true)}
                >
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                      megaOpen || isActive(link.href)
                        ? "text-neutral-900"
                        : "text-neutral-600 hover:text-neutral-900",
                    )}
                    aria-expanded={megaOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        megaOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isActive(link.href) ? (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand-blue/40 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </div>
              );
            }
 
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900",
                )}
              >
                {link.label}
                {isActive(link.href) ? (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand-blue"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand-blue/40 transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-hover hover:shadow-md"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-900 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {megaOpen && (
          <ServicesMegaMenu onNavigate={() => setMegaOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-neutral-200 bg-white lg:hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto px-4 py-4">
              {primaryNavLinks.map((link) => {
                if ("mega" in link && link.mega) {
                  return (
                    <div key={link.href} className="border-b border-neutral-100 py-1">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-neutral-900"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            mobileServicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="space-y-4 pb-3 pl-3">
                          {servicesMegaMenu.map((cat) => (
                            <div key={cat.title}>
                              <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
                                {cat.title}
                              </p>
                              <div className="mt-1 space-y-0.5">
                                {cat.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-brand-soft"
                                    onClick={closeAll}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                           <Link
                            href={featuredService.href}
                            className="mx-3 mt-2 block rounded-xl bg-brand-blue px-4 py-3 text-sm font-semibold text-white hover:bg-brand-blue-hover"
                            onClick={closeAll}
                          >
                            {featuredService.title} →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-neutral-900 hover:bg-brand-soft"
                    onClick={closeAll}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 px-3 pb-2">
                <Link
                  href="/book-consultation"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-hover"
                  onClick={closeAll}
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
