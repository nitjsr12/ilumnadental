"use client";

import { motion } from "motion/react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { SectionShell } from "@/components/ui/section-shell";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

const steps = [
  "Complete the form with your contact details",
  "We confirm your slot by phone or WhatsApp",
  "Arrive with prior records and imaging if available",
];

export function BookingSection() {
  return (
    <SectionShell id="book" variant="surface" className="!pt-0">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f4fc] text-[#1781be]">
            <CalendarCheck className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </span>
          <PremiumSectionHeader
            badge="Appointments"
            align="left"
            className="!mx-0 max-w-xl !text-left"
            title={
              <>
                <PremiumTitleDark>Request Your </PremiumTitleDark>
                <PremiumTitleBlue>Consultation</PremiumTitleBlue>
                <PremiumTitleGold> Today</PremiumTitleGold>
              </>
            }
            description="Looking for root canals, implants, cosmetic dentistry, or routine checkups? Request an appointment and we'll confirm your visit."
          />
          <motion.ul variants={fadeUp} className="mt-6 space-y-3">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-[#64748b]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1781be]" aria-hidden />
                <span>
                  <span className="font-semibold text-[#0d1b3e]">{i + 1}. </span>
                  {step}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="premium-card-surface p-6 sm:p-8"
        >
          <AppointmentForm compact />
        </motion.div>
      </div>
    </SectionShell>
  );
}
