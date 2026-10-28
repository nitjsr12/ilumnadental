"use client";

import { motion } from "motion/react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { SectionShell } from "@/components/ui/section-shell";
import { AboutIconBadge } from "@/components/sections/about/about-icon-badge";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

const steps = [
  "Complete the form with your contact details",
  "We confirm your slot by phone or WhatsApp",
  "Arrive with prior records and imaging if available",
];

export function BookingSection() {
  return (
    <SectionShell id="book" variant="surface" className="relative overflow-hidden !pt-6">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <motion.div variants={fadeUp}>
            <AboutIconBadge icon={CalendarCheck} size="lg" />
          </motion.div>
          <div className="mt-5">
            <SectionHeading
              eyebrow="Appointments"
              title="Request your consultation"
              description="Looking for root canals, implants, cosmetic dentistry, or routine checkups? Request an appointment and we'll confirm your visit."
            />
          </div>
          <motion.ul variants={fadeUp} className="mt-6 space-y-3">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-muted">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                <span>
                  <span className="font-semibold text-foreground">{i + 1}. </span>
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
          className="hero-glass-card p-6 sm:p-8 lg:-mt-2"
        >
          <AppointmentForm compact />
        </motion.div>
      </div>
    </SectionShell>
  );
}
