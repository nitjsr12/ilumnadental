"use client";

import { motion } from "motion/react";
import { SectionShell } from "@/components/ui/section-shell";
import { TreatmentCard } from "@/components/ui/treatment-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { treatments } from "@/data/treatments";

export function TreatmentsPageGrid() {
  return (
    <SectionShell variant="muted" className="relative overflow-hidden !pt-6">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
      />

      <SectionHeading
        eyebrow="Treatments & services"
        title="Complete dental care under one roof"
        description="From dental implants and Invisalign to smile design and root canal care — personalized treatments with digital precision."
      />

      <div className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((treatment, index) => (
          <motion.div
            key={treatment.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (index % 3) * 0.06, duration: 0.45 }}
          >
            <TreatmentCard treatment={treatment} index={index} />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
