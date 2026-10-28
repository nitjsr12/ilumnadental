"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { siteConfig, mainNav } from "@/lib/site-config";
import { treatments } from "@/data/treatments";
import { formatPhoneHref } from "@/lib/utils";

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-gold/25 bg-primary text-white"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-secondary via-gold to-secondary opacity-80"
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="relative mb-4 h-12 w-40">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              fill
              sizes="160px"
              className="object-contain object-left brightness-0 invert"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/75">{siteConfig.description}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Treatments</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {treatments.slice(0, 5).map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="rounded transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
            </li>
            <li>
              <a href={formatPhoneHref(siteConfig.contact.phone)} className="hover:text-gold">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {siteConfig.contact.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms & conditions
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
