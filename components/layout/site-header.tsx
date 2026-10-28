"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn, formatPhoneHref } from "@/lib/utils";

const navLinkClass =
  "group relative inline-flex items-center gap-1 rounded-md px-3.5 py-2.5 text-base font-medium text-[#0d1b3e]/85 transition-colors duration-200 hover:text-[#1781be] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary lg:px-4 lg:text-[1.0625rem]";

function NavHoverLine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-3 bottom-1.5 h-0.5 origin-center scale-x-0 rounded-full bg-secondary transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 lg:inset-x-4"
    />
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-[background,box-shadow,border-color] duration-300",
          scrolled
            ? "border-primary/8 bg-white/94 shadow-[0_10px_40px_-12px_rgba(4,67,127,0.14)] backdrop-blur-xl"
            : "border-transparent bg-white/55 backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          aria-hidden
        />
        <div
          className={cn(
            "hero-page-gutter flex w-full max-w-none items-center gap-4 lg:gap-6",
            scrolled ? "py-3" : "py-3.5 lg:py-4",
          )}
        >
          <Link
            href="/"
            className="relative flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary lg:mr-1"
          >
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 152px"
              className="h-auto w-[7rem] sm:w-[7.75rem] md:w-[8.25rem] lg:w-[8.75rem] xl:w-[9.25rem]"
              priority
            />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
            aria-label="Main"
          >
            {mainNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={item.href} className={navLinkClass}>
                    <span className="transition-transform duration-200 group-hover:-translate-y-px">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 opacity-50 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180 opacity-80",
                      )}
                      aria-hidden
                    />
                    <NavHoverLine />
                  </Link>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-lg border border-primary/10 bg-surface p-1.5 shadow-xl shadow-primary/10"
                      >
                        {item.children.map((child, ci) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: ci * 0.03, duration: 0.18 }}
                          >
                            <Link
                              href={child.href}
                              className="group/child block rounded-md px-3.5 py-2.5 text-base text-foreground transition-colors hover:bg-accent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                            >
                              <span className="inline-block transition-transform duration-200 group-hover/child:translate-x-0.5">
                                {child.label}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={navLinkClass}>
                  <span className="transition-transform duration-200 group-hover:-translate-y-px">
                    {item.label}
                  </span>
                  {(item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)) && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-x-2 bottom-1 h-0.5 rounded-full bg-brand-cta"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <NavHoverLine />
                </Link>
              ),
            )}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-5">
            <a
              href={formatPhoneHref(siteConfig.contact.phone)}
              className="group inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors duration-200 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <Phone className="h-4 w-4 text-secondary" strokeWidth={1.75} aria-hidden />
              <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
              <span className="xl:hidden">Call clinic</span>
            </a>
            <Button
              href="/book-appointment"
              showArrow
              className="!px-5 !py-2.5 text-base transition-transform duration-200 hover:scale-[1.02]"
            >
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 bg-surface text-primary lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,22rem)] flex-col bg-surface shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-primary/10 px-5 py-4">
                <p className="font-heading text-sm font-bold text-primary">Menu</p>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
                {mainNav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3.5 text-lg font-semibold text-foreground transition-colors active:bg-accent"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="mb-2 ml-3 border-l border-primary/10 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2.5 text-base text-muted transition-colors active:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="space-y-3 border-t border-primary/10 p-5">
                <a
                  href={formatPhoneHref(siteConfig.contact.phone)}
                  className="flex items-center gap-3 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-primary"
                >
                  <Phone className="h-4 w-4 text-secondary" aria-hidden />
                  {siteConfig.contact.phone}
                </a>
                <Button
                  href="/book-appointment"
                  className="w-full"
                  showArrow
                  onClick={() => setMobileOpen(false)}
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
