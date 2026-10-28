"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Calendar, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

type CtaBannerSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  showAddress?: boolean;
};

export function CtaBannerSection({
  id = "contact",
  eyebrow = "Jayanagar · Bengaluru",
  title = "Ready for confident, healthy smiles?",
  description = "Book a consultation at iLUMNA Dental — daily appointments from 9:30 AM to 10:00 PM. Call, WhatsApp, or schedule online.",
  showAddress = true,
}: CtaBannerSectionProps = {}) {
  return (
    <section id={id} className="section-container section-pad">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="cta-banner relative overflow-hidden rounded-[1.75rem] px-6 py-8 sm:px-10 sm:py-10 lg:rounded-[2rem] lg:px-12 lg:py-11"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-secondary/25 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          <div>
            <motion.p variants={fadeUp} className="eyebrow mb-3 !text-gold">
              {eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(1.5rem,2.75vw,2rem)] font-semibold leading-snug text-white"
            >
              {title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              {description}
            </motion.p>
            {showAddress && (
              <motion.p variants={fadeUp} className="mt-3 text-sm text-white/55">
                {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
              </motion.p>
            )}
          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              href="/book-appointment"
              showArrow
              className="btn-shimmer w-full justify-center bg-white text-primary hover:bg-accent"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book an appointment
            </Button>
            <Link
              href={formatPhoneHref(siteConfig.contact.phone)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-white/15"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.contact.phone}
            </Link>
            <Link
              href={formatWhatsAppHref(siteConfig.contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp us
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
