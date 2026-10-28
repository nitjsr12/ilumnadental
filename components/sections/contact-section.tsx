"use client";

import { motion } from "motion/react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionShell } from "@/components/ui/section-shell";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
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
        className="mt-3 inline-block text-sm font-semibold text-[#1781be] hover:text-[#04437f]"
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
          className="block font-semibold text-[#0d1b3e] hover:text-[#1781be]"
        >
          {siteConfig.contact.phone}
        </a>
        <a
          href={formatWhatsAppHref(siteConfig.contact.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1781be]"
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
            <span className="font-semibold text-[#0d1b3e]">{h.days}:</span> {h.time}
          </li>
        ))}
      </ul>
    ),
  },
] as const;

export function ContactSection() {
  return (
    <SectionShell variant="surface" className="!pt-0">
      <PremiumSectionHeader
        badge="Contact"
        align="left"
        className="!mx-0 max-w-2xl !text-left"
        title={
          <>
            <PremiumTitleDark>Visit Us or </PremiumTitleDark>
            <PremiumTitleBlue>Get in </PremiumTitleBlue>
            <PremiumTitleGold>Touch</PremiumTitleGold>
          </>
        }
        description="Have questions or need expert dental care? We're here to help at our Jayanagar clinic."
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.li
                key={card.title}
                variants={fadeUp}
                className="premium-card-surface list-none p-5 sm:p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f4fc] text-[#1781be]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <p className="mt-4 font-heading text-base font-bold text-[#0d1b3e]">{card.title}</p>
                <div className="mt-2 text-sm leading-relaxed text-[#64748b]">{card.body}</div>
                {"action" in card && card.action}
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card-surface p-6 sm:p-8"
        >
          <h3 className="font-heading text-lg font-bold text-[#0d1b3e]">Send a message</h3>
          <p className="mt-2 text-sm text-[#64748b]">
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
