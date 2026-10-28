"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  ArrowUpRight,
  Calendar,
  ClipboardList,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { cn } from "@/lib/utils";

const steps: {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
}[] = [
  {
    icon: Calendar,
    title: "Book Your Visit",
    text: "Schedule online, by phone (+91 74114 11069), or WhatsApp.",
    href: "/book-appointment",
  },
  {
    icon: MessageCircle,
    title: "Share Your Concerns",
    text: "Discuss symptoms, goals, and expectations in a focused consultation.",
  },
  {
    icon: ClipboardList,
    title: "Receive Your Plan",
    text: "Review a customized treatment plan built around your oral health.",
  },
  {
    icon: Sparkles,
    title: "Follow Your Care Journey",
    text: "Complete treatment with ongoing support for long-term smile health.",
  },
];

export function PatientJourneySection() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  return (
    <section className="journey-section relative overflow-hidden section-pad">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-20" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[120%] -translate-x-1/2 bg-gradient-to-b from-secondary/8 to-transparent"
      />

      <div ref={trackRef} className="section-container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-2">
            Your journey · 4 steps
          </motion.p>

          <motion.h2 variants={fadeUp} className="section-title">
            From first visit to confident smiles
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mx-auto mt-3 max-w-xl">
            A clear, comfortable path through consultation, planning, and personalized
            dental care.
          </motion.p>
        </motion.div>

        <div className="relative mt-8 hidden lg:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-[2.75rem] h-1 overflow-hidden rounded-full bg-primary/10">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full w-full origin-left rounded-full bg-gradient-to-r from-secondary via-secondary to-gold"
            />
          </div>

          <ol className="grid grid-cols-4 gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              const indexLabel = String(i + 1).padStart(2, "0");

              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                  >
                    <div className="relative flex flex-col items-center pb-2 pt-0">
                      <motion.span
                        animate={
                          isActive
                            ? { scale: 1.08, boxShadow: "0 0 0 4px rgba(31,122,111,0.2)" }
                            : { scale: 1, boxShadow: "0 0 0 0px rgba(31,122,111,0)" }
                        }
                        className={cn(
                          "journey-step-icon relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300",
                          isActive
                            ? "bg-secondary text-white"
                            : "bg-surface text-secondary ring-1 ring-gold/25 group-hover:bg-secondary/10",
                        )}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.65} aria-hidden />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[0.55rem] font-bold text-primary">
                          {indexLabel}
                        </span>
                      </motion.span>
                    </div>

                    <motion.div
                      layout
                      className={cn(
                        "journey-step-card mt-5 rounded-2xl border p-5 transition-shadow duration-300",
                        isActive
                          ? "border-secondary/35 bg-surface shadow-[0_20px_50px_-24px_rgba(18,36,47,0.2)]"
                          : "border-primary/10 bg-surface/80 group-hover:border-gold/30 group-hover:shadow-lg",
                      )}
                    >
                      <p className="mb-1 text-xs text-secondary">Step {i + 1}</p>
                      <h3 className="text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 overflow-hidden text-sm leading-relaxed text-muted"
                          >
                            {step.text}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      {!isActive && (
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted/80">
                          {step.text}
                        </p>
                      )}
                      {step.href && isActive && (
                        <Link
                          href={step.href}
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary"
                        >
                          Book now
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      )}
                    </motion.div>
                  </button>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <ol className="relative mt-10 space-y-4 lg:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            return (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  className={cn(
                    "journey-step-card flex w-full gap-4 rounded-2xl border p-4 text-left transition-all",
                    isActive
                      ? "border-secondary/35 bg-surface shadow-md"
                      : "border-primary/10 bg-surface/90",
                  )}
                >
                  <span
                    className={cn(
                      "journey-step-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                      isActive ? "bg-secondary text-white" : "bg-accent text-secondary",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs text-secondary">Step {i + 1}</p>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <motion.p
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.75 }}
                      className="mt-1 text-sm text-muted"
                    >
                      {step.text}
                    </motion.p>
                    {step.href && isActive && (
                      <Link
                        href={step.href}
                        className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-secondary"
                      >
                        Book now
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <Button href="/book-appointment" showArrow className="btn-shimmer">
            Start your journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
