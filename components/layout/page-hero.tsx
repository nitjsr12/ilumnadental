"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PageBannerKey } from "@/lib/images";

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Subtle accent variant (no photo — gradient only) */
  banner?: PageBannerKey;
  className?: string;
};

const bannerAccent: Record<PageBannerKey, string> = {
  default: "page-hero-banner--default",
  about: "page-hero-banner--about",
  treatments: "page-hero-banner--treatments",
  treatment: "page-hero-banner--treatments",
  blog: "page-hero-banner--blog",
  blogPost: "page-hero-banner--blog",
  contact: "page-hero-banner--contact",
  bookAppointment: "page-hero-banner--book",
  patientStories: "page-hero-banner--stories",
};

export function PageHero({
  eyebrow,
  title,
  banner = "default",
  className,
}: PageHeroProps) {
  const accent = bannerAccent[banner] ?? bannerAccent.default;

  return (
    <section
      className={cn(
        "page-hero-banner relative min-h-[11.5rem] overflow-hidden border-b border-[#04437f]/20 sm:min-h-[12.5rem]",
        accent,
        className,
      )}
    >
      <div aria-hidden className="page-hero-banner-bg" />
      <div aria-hidden className="page-hero-banner-grid" />
      <div aria-hidden className="page-hero-banner-scrim" />
      <div aria-hidden className="page-hero-banner-orb page-hero-banner-orb--a" />
      <div aria-hidden className="page-hero-banner-orb page-hero-banner-orb--b" />

      <div className="page-hero-banner-content hero-page-gutter flex flex-col justify-end py-10 sm:py-11 lg:py-12">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-hero-banner-eyebrow mb-4 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#f5d76e]" strokeWidth={2} aria-hidden />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-hero-banner-title max-w-3xl text-[clamp(1.625rem,3.25vw,2.5rem)] font-extrabold leading-[1.12] tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="page-hero-banner-rule mt-5 h-1 w-28 max-w-[40%] origin-left rounded-full"
          aria-hidden
        />
      </div>
    </section>
  );
}