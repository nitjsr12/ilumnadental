"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Treatment } from "@/data/treatments";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { TreatmentServiceCard } from "@/components/sections/treatment-service-card";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

export function TreatmentDetailSection({
  treatment,
  related,
}: {
  treatment: Treatment;
  related: Treatment[];
}) {
  return (
    <>
      <SectionShell variant="surface" className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="premium-card-surface relative aspect-[4/3] overflow-hidden !p-0"
          >
            <Image
              src={treatment.image}
              alt={treatment.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04437f]/35 to-transparent" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 inline-flex rounded-full bg-[#e8f4fc] px-4 py-1.5 text-sm font-semibold text-[#1781be]"
            >
              {treatment.category}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="premium-section-title text-[#0d1b3e]"
            >
              {treatment.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-[#64748b]">
              {treatment.description}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-[#0d1b3e]/90">
              {treatment.shortDescription}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button href="/book-appointment" showArrow className="hero-cta-primary !px-8">
                Book a consultation
              </Button>
              <Link
                href="/treatments"
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1781be]/30 bg-white px-6 py-3 text-sm font-semibold text-[#04437f] transition-colors hover:border-[#1781be] hover:bg-[#f0f8ff]"
              >
                All treatments
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SectionShell>

      {related.length > 0 && (
        <SectionShell variant="muted" className="!pt-0">
          <PremiumSectionHeader
            badge="Related care"
            align="left"
            className="!mx-0 max-w-2xl !text-left"
            title={
              <>
                <PremiumTitleDark>You May Also </PremiumTitleDark>
                <PremiumTitleBlue>Be </PremiumTitleBlue>
                <PremiumTitleGold>Interested In</PremiumTitleGold>
              </>
            }
          />
          <ul className="mt-8 grid list-none gap-5 p-0 sm:grid-cols-2">
            {related.map((t) => (
              <li key={t.slug}>
                <TreatmentServiceCard treatment={t} />
              </li>
            ))}
          </ul>
        </SectionShell>
      )}
    </>
  );
}
