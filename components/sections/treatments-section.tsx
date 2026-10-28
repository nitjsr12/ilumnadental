"use client";

import { motion } from "motion/react";
import { treatments } from "@/data/treatments";
import { TreatmentServiceCard } from "@/components/sections/treatment-service-card";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

export function TreatmentsSection() {
  return (
    <section
      id="treatments"
      className="treatments-services-section section-pad relative overflow-x-clip"
    >
      <div aria-hidden className="treatments-services-bg pointer-events-none absolute inset-0" />

      <div className="hero-page-gutter relative z-10">
        <PremiumSectionHeader
          badge="Our services"
          title={
            <>
              <PremiumTitleDark>Dental Treatments </PremiumTitleDark>
              <PremiumTitleBlue>We </PremiumTitleBlue>
              <PremiumTitleGold>Provide</PremiumTitleGold>
            </>
          }
          description="Experience premium dental care with our comprehensive range of services, delivered using the latest technology and techniques."
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          }}
          className="mt-8 grid list-none grid-cols-1 gap-5 p-0 sm:mt-9 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6 xl:mt-10"
        >
          {treatments.map((treatment) => (
            <motion.li
              key={treatment.slug}
              variants={fadeUp}
              className="min-h-0 overflow-visible"
            >
              <TreatmentServiceCard treatment={treatment} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
