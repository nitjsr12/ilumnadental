"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { treatments } from "@/data/treatments";
import { formatPhoneHref } from "@/lib/utils";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/about" },
  { label: "Testimonials", href: "/patient-stories" },
  { label: "Contact Us", href: "/contact" },
] as const;

function FooterLinkList({
  items,
}: {
  items: readonly { label: string; href: string }[];
}) {
  return (
    <ul className="mt-4 space-y-2.5 text-sm text-white/85">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group inline-flex items-center gap-2 transition-colors hover:text-[#9dd4f5]"
          >
            <ArrowRight
              className="h-3.5 w-3.5 shrink-0 text-[#05a2a4] transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  const { contact, social } = siteConfig;
  const address = `${contact.address.line1}, ${contact.address.line2}`;

  return (
    <footer className="relative bg-gradient-to-b from-[#032d57] via-[#04437f] to-[#033558] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:20px_20px]"
      />

      <div className="hero-page-gutter relative z-10 pt-9 pb-6 sm:pt-10 sm:pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block">
              <div className="inline-flex rounded-xl bg-white px-3 py-2.5">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={siteConfig.logo.width}
                  height={siteConfig.logo.height}
                  sizes="176px"
                  className="h-8 w-auto sm:h-9"
                />
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              Providing premium dental care with advanced technology and a gentle touch in
              Jayanagar, Bengaluru.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-[#05a2a4] hover:bg-white/15"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-[#05a2a4] hover:bg-white/15"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">f</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-bold text-white">Useful Links</p>
            <FooterLinkList items={usefulLinks} />
          </div>

          <div className="lg:col-span-4">
            <p className="text-base font-bold text-white">Our Services</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-x-4">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="group inline-flex items-start gap-2 text-sm text-white/85 transition-colors hover:text-[#9dd4f5]"
                  >
                    <ArrowRight
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#05a2a4]"
                      aria-hidden
                    />
                    <span className="leading-snug">{t.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-base font-bold text-white">Contact Us</p>
            <ul className="mt-4 space-y-4 text-sm text-white/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#05a2a4]" aria-hidden />
                <span className="leading-relaxed">{address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#05a2a4]" aria-hidden />
                <a href={formatPhoneHref(contact.phone)} className="hover:text-[#9dd4f5]">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#05a2a4]" aria-hidden />
                <a href={`mailto:${contact.email}`} className="hover:text-[#9dd4f5]">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-[#05a2a4]" aria-hidden />
                <span>
                  {contact.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-6 backdrop-blur-sm sm:flex-row sm:items-center sm:px-8 lg:mt-12">
          <div>
            <p className="text-lg font-bold text-white sm:text-xl">
              Unlock Your Beautiful{" "}
              <span className="text-[#f5d76e]">Smile</span>
            </p>
            <p className="mt-1 text-sm text-white/75">
              Schedule your dental consultation today!
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-[#04437f] shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Book Now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60 sm:text-sm">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
