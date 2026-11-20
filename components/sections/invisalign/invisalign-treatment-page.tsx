"use client";

import "@/styles/invisalign-landing.css";

import { motion } from "motion/react";
import {
  invisalignComparison,
  invisalignPageMeta,
} from "@/data/invisalign-page";
import { SectionShell } from "@/components/ui/section-shell";
import { PremiumSectionHeader } from "@/components/ui/premium-section-header";
import { Button } from "@/components/ui/button";
import { InvisalignCompareSplit } from "@/components/sections/invisalign/invisalign-compare-split";
import { InvisalignGoogleReviewSection } from "@/components/sections/invisalign/invisalign-google-review-section";
import { InvisalignJourneySection } from "@/components/sections/invisalign/invisalign-journey-section";
import { InvisalignWhySection } from "@/components/sections/invisalign/invisalign-why-section";

export function InvisalignTreatmentPage() {
  return (
    <div className="invisalign-page">
      <SectionShell id="invisalign-why" variant="surface" className="!pt-6 !pb-10" decor={false} animate={false}>
        <InvisalignWhySection />
      </SectionShell>

      <SectionShell id="invisalign-compare" variant="muted" decorDensity="soft" className="!pt-4" animate={false}>
        <div className="invisalign-compare-arena relative overflow-hidden rounded-[1.75rem] border border-[#04437f]/10 bg-[#fffbf7] px-4 py-10 sm:px-6 sm:py-12 lg:rounded-[2.25rem] lg:px-8 lg:py-12">
          <span
            className="invisalign-section-tag pointer-events-none absolute right-6 top-6 hidden text-[4.5rem] font-black leading-none text-[#04437f]/[0.06] sm:block lg:right-10 lg:top-8"
            aria-hidden
          >
            02
          </span>
          <div aria-hidden className="invisalign-compare-mesh pointer-events-none absolute inset-0" />
          <div aria-hidden className="invisalign-compare-dots pointer-events-none absolute inset-0" />

          <PremiumSectionHeader
            align="center"
            title={invisalignComparison.h2}
            titleClassName="invisalign-display-title !text-[clamp(1.35rem,2.6vw,2.15rem)] !text-[#0d1b3e] leading-tight"
            description={invisalignPageMeta.description}
            className="relative z-[1] mx-auto max-w-4xl"
            descriptionClassName="!text-[#475569]"
          />

          <InvisalignCompareSplit />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="invisalign-compare-board relative z-[1] mx-auto mt-10 w-full max-w-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="invisalign-compare-close mt-8 rounded-2xl px-6 py-8 text-center sm:px-8"
            >
              <h2 className="mx-auto max-w-xl text-lg font-extrabold leading-snug text-[#0d1b3e] sm:text-xl">
                {invisalignComparison.closingHeading}
              </h2>
              <Button href="/book-appointment" showArrow className="hero-cta-primary mt-6 !px-8">
                {invisalignComparison.cta}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </SectionShell>

      <SectionShell id="invisalign-process" variant="surface" decorDensity="soft" className="!pt-2" animate={false}>
        <InvisalignJourneySection />
      </SectionShell>

      <SectionShell
        id="invisalign-reviews"
        variant="muted"
        decorDensity="soft"
        className="!pt-4 !pb-12"
        animate={false}
      >
        <InvisalignGoogleReviewSection />
      </SectionShell>
    </div>
  );
}