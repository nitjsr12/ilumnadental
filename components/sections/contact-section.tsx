"use client";

import { motion } from "motion/react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { AboutIconBadge } from "@/components/sections/about/about-icon-badge";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

const contactCards = [
  {
    icon: MapPin,
    title: "Clinic address",
    body: (
      <>
        {siteConfig.contact.address.line1}
        <br />
        {siteConfig.contact.address.line2}
      </>
    ),
    action: (
      <a
        href={siteConfig.contact.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-semibold text-secondary hover:text-primary"
      >
        Open in Google Maps
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    body: (
      <>
        <a
          href={formatPhoneHref(siteConfig.contact.phone)}
          className="block font-medium text-primary hover:text-secondary"
        >
          {siteConfig.contact.phone}
        </a>
        <a
          href={formatWhatsAppHref(siteConfig.contact.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Message on WhatsApp
        </a>
      </>
    ),
  },
  {
    icon: Clock,
    title: "Clinic hours",
    body: (
      <ul className="space-y-1.5">
        {siteConfig.contact.hours.map((h) => (
          <li key={h.days}>
            <span className="font-medium text-foreground">{h.days}:</span> {h.time}
          </li>
        ))}
      </ul>
    ),
  },
] as const;

/** Full contact details + form (contact page). Map is in ClinicMapSection. */
export function ContactSection() {
  return (
    <SectionShell className="relative overflow-hidden !pt-6">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-gold/12 blur-3xl"
      />

      <SectionHeading
        eyebrow="Contact"
        title="Visit us or get in touch"
        description="Have questions or need expert dental care? We're here to help at our Jayanagar clinic."
      />

      <div className="relative mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {contactCards.map((card) => (
            <motion.li
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="hero-glass-card list-none p-5 sm:p-6"
            >
              <AboutIconBadge icon={card.icon} />
              <p className="mt-4 text-base font-semibold text-foreground">{card.title}</p>
              <div className="mt-2 text-sm leading-relaxed text-muted">{card.body}</div>
              {"action" in card && card.action}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/10 bg-surface p-6 shadow-sm sm:p-8"
        >
          <h3 className="text-lg font-semibold text-foreground">Send a message</h3>
          <p className="mt-2 text-sm text-muted">
            For non-urgent inquiries. In an emergency, call local emergency services.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
