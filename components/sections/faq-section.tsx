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
import { faqs } from "@/data/faqs";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
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
        "faq-item overflow-hidden rounded-2xl border transition-[border-color,box-shadow,background] duration-300",
        open
          ? "border-secondary/35 bg-surface shadow-[0_16px_48px_-28px_rgba(18,36,47,0.18)]"
          : "border-primary/10 bg-surface/80 hover:border-gold/30 hover:bg-surface",
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
              open
                ? "bg-secondary text-white shadow-md shadow-secondary/25"
                : "bg-accent/80 text-secondary ring-1 ring-gold/20",
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
          </span>
          <span className="min-w-0 flex-1 pt-0.5">
            <span className="text-xs tabular-nums text-muted">
              {indexLabel}
            </span>
            <span className="mt-0.5 block text-base font-semibold leading-snug text-foreground sm:text-lg">
              {question}
            </span>
          </span>
          <span
            className={cn(
              "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              open
                ? "border-secondary/30 bg-secondary/10 text-secondary"
                : "border-primary/10 bg-background text-muted",
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
            <div className="border-t border-primary/[0.06] px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
              <p className="border-l-2 border-gold/40 pl-4 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
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
    <section id="faq" className="relative overflow-hidden section-pad">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-secondary/8 blur-3xl"
      />

      <div className="section-container relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:sticky lg:top-28"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-2">
              FAQ
            </motion.p>

            <motion.h2 variants={fadeUp} className="section-title">
              Common questions, clear answers
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lead mt-3 max-w-md">
              Find answers about treatments, comfort, booking, and visiting our
              Jayanagar clinic.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="hero-glass-card mt-8 p-5 sm:p-6"
            >
              <p className="text-sm font-semibold text-foreground">
                Still need help?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Our team is happy to guide you by phone, WhatsApp, or in person.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Button href="/book-appointment" showArrow className="btn-shimmer w-full sm:w-auto">
                  Book appointment
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-primary/12 bg-surface px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-secondary/30 sm:w-auto"
                >
                  Contact us
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
