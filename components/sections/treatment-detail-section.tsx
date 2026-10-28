"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Treatment } from "@/data/treatments";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { TreatmentCard } from "@/components/ui/treatment-card";
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
      <SectionShell className="relative overflow-hidden !pt-6">
        <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 shadow-lg"
          >
            <Image
              src={treatment.image}
              alt={treatment.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-2">
              {treatment.category}
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              {treatment.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-muted">
              {treatment.description}
            </motion.p>
            <motion.p variants={fadeUp} className="text-lead mt-4">
              {treatment.shortDescription}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button href="/book-appointment" showArrow className="btn-shimmer">
                Book a consultation
              </Button>
              <Link
                href="/treatments"
                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/12 bg-surface px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-secondary/30"
              >
                All treatments
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SectionShell>

      {related.length > 0 && (
        <SectionShell variant="muted" className="!pt-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-2">Related care</p>
            <h2 className="section-title">You may also be interested in</h2>
          </motion.div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {related.map((t, i) => (
              <TreatmentCard key={t.slug} treatment={t} index={i} />
            ))}
          </div>
        </SectionShell>
      )}
    </>
  );
}
