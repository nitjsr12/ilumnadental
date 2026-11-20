"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { invisalignProcess } from "@/data/invisalign-page";
import { InvisalignIconSlot } from "@/components/sections/invisalign/invisalign-icon-slot";
import { cn } from "@/lib/utils";

/** Teal → blue → indigo → purple (reference flow) */
const JOURNEY_THEME = [
  { id: "journey-01", border: "#14b8a6", badge: "linear-gradient(135deg, #0d9488, #2dd4bf)" },
  { id: "journey-02", border: "#38bdf8", badge: "linear-gradient(135deg, #0284c7, #38bdf8)" },
  { id: "journey-03", border: "#3b82f6", badge: "linear-gradient(135deg, #2563eb, #60a5fa)" },
  { id: "journey-04", border: "#6366f1", badge: "linear-gradient(135deg, #4f46e5, #818cf8)" },
  { id: "journey-05", border: "#a855f7", badge: "linear-gradient(135deg, #7c3aed, #c084fc)" },
  { id: "journey-06", border: "#d946ef", badge: "linear-gradient(135deg, #c026d3, #e879f9)" },
] as const;

const CARD_TILT = [-3.5, 3, -2.5, 2, -3, 3.5] as const;
const CARD_LIFT = [0, 14, 0, 14, 0, 14] as const;

function JourneyArrow({ color, delay }: { color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.2 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="invisalign-journey-arrow hidden shrink-0 lg:flex"
      aria-hidden
    >
      <span
        className="invisalign-journey-arrow-dot invisalign-journey-arrow-dot--pulse"
        style={{ borderColor: color, color }}
      />
      <svg className="invisalign-journey-arrow-svg" viewBox="0 0 48 24" fill="none">
        <path
          d="M4 12h34M34 12l-8-7M34 12l-8 7"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

function JourneyStepCard({
  step,
  index,
  reduceMotion,
  lift,
}: {
  step: (typeof invisalignProcess.steps)[number];
  index: number;
  reduceMotion: boolean | null;
  lift: number;
}) {
  const theme = JOURNEY_THEME[index] ?? JOURNEY_THEME[0];
  const tilt = CARD_TILT[index] ?? 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 + lift, rotate: reduceMotion ? 0 : tilt - 8 }}
      whileInView={{ opacity: 1, y: lift, rotate: tilt }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
        delay: index * 0.09,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: lift - 8,
              rotate: tilt + (tilt > 0 ? 0.8 : -0.8),
              boxShadow: "0 32px 56px -20px rgba(15, 23, 42, 0.35)",
            }
      }
      className="invisalign-journey-card group relative flex min-h-[12.5rem] flex-col items-center rounded-2xl border-2 bg-white px-3.5 pb-6 pt-9 text-center shadow-[0_18px_40px_-22px_rgba(15,23,42,0.35)]"
      style={{ borderColor: theme.border }}
    >
      <motion.span
        className="invisalign-journey-badge absolute -left-2 -top-2 flex h-11 w-11 items-center justify-center rounded-full text-xs font-black text-white shadow-lg"
        style={{ background: theme.badge }}
        whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      >
        {step.step}
      </motion.span>

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
      >
        <InvisalignIconSlot
          id={step.iconSlotId}
          className="!h-12 !w-12 !rounded-xl"
          style={{ borderColor: `${theme.border}55` }}
        />
      </motion.div>

      <h3 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-[#1e293b] xl:text-[0.8125rem]">
        {step.heading}
      </h3>
      <p className="mt-2 max-w-[11rem] text-[0.7rem] leading-relaxed text-[#64748b] xl:text-xs">
        {step.description}
      </p>
    </motion.article>
  );
}

export function InvisalignFlowchart() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
  const steps = invisalignProcess.steps;

  return (
    <div
      ref={wrapRef}
      className="invisalign-journey-flow-wrap relative w-full px-0 lg:px-2"
      role="list"
      aria-label="Invisalign treatment steps"
    >
      <motion.div
        style={reduceMotion ? undefined : { scaleX: railScale }}
        className="invisalign-journey-flow-rail pointer-events-none absolute left-[3%] right-[3%] top-[6.25rem] hidden h-1 origin-left rounded-full lg:block"
        aria-hidden
      />

      <ol className="invisalign-journey-flow m-0 hidden list-none items-end gap-0 p-0 pb-2 pt-6 lg:flex">
        {steps.map((step, i) => {
          const theme = JOURNEY_THEME[i] ?? JOURNEY_THEME[0];
          const lift = CARD_LIFT[i] ?? 0;
          return (
            <li
              key={step.step}
              role="listitem"
              className={cn("relative flex min-w-0 flex-1 items-end justify-center")}
            >
              {i > 0 ? <JourneyArrow color={theme.border} delay={0.15 + i * 0.08} /> : null}
              <div className="w-full max-w-[11.5rem] px-0.5 xl:max-w-none xl:px-1">
                <JourneyStepCard
                  step={step}
                  index={i}
                  reduceMotion={reduceMotion}
                  lift={lift}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function InvisalignFlowchartScroll() {
  const reduceMotion = useReducedMotion();
  const steps = invisalignProcess.steps;

  return (
    <div className="invisalign-journey-flow-scroll mt-6 overflow-x-auto pb-3 pt-2 lg:hidden">
      <p className="mb-3 text-center text-[0.65rem] font-bold uppercase tracking-widest text-[#64748b]">
        Swipe the journey →
      </p>
      <ol className="m-0 flex w-max min-w-full list-none gap-4 px-1">
        {steps.map((step, i) => (
          <li key={step.step} className="w-[10.25rem] shrink-0 sm:w-[11rem]">
            <JourneyStepCard step={step} index={i} reduceMotion={reduceMotion} lift={0} />
          </li>
        ))}
      </ol>
    </div>
  );
}