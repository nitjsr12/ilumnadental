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
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
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
    <section
      id="journey"
      className="premium-section-surface relative overflow-x-clip section-pad"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(227,242,253,0.8),transparent_55%)]"
      />

      <div ref={trackRef} className="hero-page-gutter relative z-10">
        <PremiumSectionHeader
          badge="Your journey · 4 steps"
          title={
            <>
              <PremiumTitleDark>From First Visit to </PremiumTitleDark>
              <PremiumTitleBlue>Confident </PremiumTitleBlue>
              <PremiumTitleGold>Smiles</PremiumTitleGold>
            </>
          }
          description="A clear, comfortable path through consultation, planning, and personalized dental care."
        />

        <div className="relative mt-8 hidden lg:block xl:mt-9">
          <div className="absolute left-[12.5%] right-[12.5%] top-[2.75rem] h-1 overflow-hidden rounded-full bg-[#04437f]/10">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full w-full origin-left rounded-full bg-gradient-to-r from-[#05a2a4] via-[#1781be] to-[#d4af37]"
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
                    className="group w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1781be]"
                  >
                    <div className="relative flex flex-col items-center pb-2 pt-0">
                      <motion.span
                        animate={
                          isActive
                            ? { scale: 1.08, boxShadow: "0 0 0 4px rgba(23,129,190,0.2)" }
                            : { scale: 1, boxShadow: "0 0 0 0px rgba(23,129,190,0)" }
                        }
                        className={cn(
                          "relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300",
                          isActive
                            ? "bg-[#1781be] text-white shadow-lg shadow-[#1781be]/30"
                            : "bg-white text-[#1781be] ring-1 ring-[#04437f]/10 group-hover:bg-[#e8f4fc]",
                        )}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.65} aria-hidden />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37] text-[0.55rem] font-bold text-[#04437f]">
                          {indexLabel}
                        </span>
                      </motion.span>
                    </div>

                    <motion.div
                      layout
                      className={cn(
                        "premium-card-surface mt-5 p-5 transition-shadow duration-300",
                        isActive && "ring-1 ring-[#1781be]/25 shadow-[0_28px_64px_-32px_rgba(4,67,127,0.2)]",
                      )}
                    >
                      <p className="mb-1 text-xs font-semibold text-[#1781be]">Step {i + 1}</p>
                      <h3 className="text-base font-bold text-[#0d1b3e]">{step.title}</h3>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 overflow-hidden text-sm leading-relaxed text-[#64748b]"
                          >
                            {step.text}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      {!isActive && (
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#64748b]/90">
                          {step.text}
                        </p>
                      )}
                      {step.href && isActive && (
                        <Link
                          href={step.href}
                          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1781be] hover:text-[#04437f]"
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

        <ol className="relative mt-8 space-y-4 lg:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            return (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  className={cn(
                    "premium-card-surface flex w-full gap-4 p-4 text-left transition-all",
                    isActive && "ring-1 ring-[#1781be]/25",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                      isActive ? "bg-[#1781be] text-white" : "bg-[#e8f4fc] text-[#1781be]",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-semibold text-[#1781be]">Step {i + 1}</p>
                    <h3 className="text-base font-bold text-[#0d1b3e]">{step.title}</h3>
                    <motion.p
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.75 }}
                      className="mt-1 text-sm text-[#64748b]"
                    >
                      {step.text}
                    </motion.p>
                    {step.href && isActive && (
                      <Link
                        href={step.href}
                        className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#1781be]"
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
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <Button href="/book-appointment" showArrow className="hero-cta-primary !px-8 !py-3.5">
            Start your journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
