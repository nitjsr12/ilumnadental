"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  HelpCircle,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

const faqIcons: Record<string, LucideIcon> = {
  treatments: Stethoscope,
  visits: Sparkles,
  comfort: ShieldCheck,
  book: Phone,
  location: MapPin,
};

function FaqItem({
  id,
  question,
  answer,
  open,
  onToggle,
  index,
}: {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const Icon = faqIcons[id] ?? HelpCircle;
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      layout
      className={cn(
        "premium-card-surface overflow-hidden transition-shadow duration-300",
        open && "ring-1 ring-[#1781be]/20 shadow-[0_28px_64px_-32px_rgba(4,67,127,0.18)]",
      )}
    >
      <h3>
        <button
          type="button"
          id={`faq-${id}`}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          onClick={onToggle}
          className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
        >
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
              open ? "bg-[#1781be] text-white shadow-md" : "bg-[#e8f4fc] text-[#1781be]",
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
          </span>
          <span className="min-w-0 flex-1 pt-0.5">
            <span className="text-xs tabular-nums text-[#64748b]">{indexLabel}</span>
            <span className="mt-0.5 block text-base font-bold leading-snug text-[#0d1b3e] sm:text-lg">
              {question}
            </span>
          </span>
          <span
            className={cn(
              "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              open
                ? "border-[#1781be]/30 bg-[#e8f4fc] text-[#1781be]"
                : "border-[#04437f]/10 bg-white text-[#64748b]",
            )}
          >
            <ChevronDown
              className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
              strokeWidth={2}
              aria-hidden
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#04437f]/8 px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
              <p className="border-l-2 border-[#d4af37]/50 pl-4 text-sm leading-relaxed text-[#64748b] sm:text-[0.9375rem]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="premium-section-muted relative overflow-x-clip section-pad">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_0%_50%,rgba(255,255,255,0.9),transparent_60%)]"
      />

      <div className="hero-page-gutter relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
          <div className="lg:sticky lg:top-28">
            <PremiumSectionHeader
              badge="FAQ"
              align="left"
              className="!mx-0 max-w-xl !text-left"
              title={
                <>
                  <PremiumTitleDark>Common Questions, </PremiumTitleDark>
                  <PremiumTitleBlue>Clear </PremiumTitleBlue>
                  <PremiumTitleGold>Answers</PremiumTitleGold>
                </>
              }
              description="Find answers about treatments, comfort, booking, and visiting our Jayanagar clinic."
            />

            <div className="premium-card-surface mt-8 p-5 sm:p-6">
              <p className="text-sm font-bold text-[#0d1b3e]">Still need help?</p>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                Our team is happy to guide you by phone, WhatsApp, or in person.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Button
                  href="/book-appointment"
                  showArrow
                  className="hero-cta-primary w-full sm:w-auto"
                >
                  Book appointment
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#1781be]/30 bg-white px-5 py-3 text-sm font-semibold text-[#04437f] transition-colors hover:border-[#1781be] hover:bg-[#f0f8ff] sm:w-auto"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.id}
                {...faq}
                index={i}
                open={openId === faq.id}
                onToggle={() => setOpenId((cur) => (cur === faq.id ? null : faq.id))}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
