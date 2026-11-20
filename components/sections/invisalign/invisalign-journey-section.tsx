"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { invisalignProcess } from "@/data/invisalign-page";
import { PremiumSectionHeader } from "@/components/ui/premium-section-header";
import { InvisalignMediaSlot } from "@/components/sections/invisalign/invisalign-media-slot";
import { InvisalignFlowchart, InvisalignFlowchartScroll } from "@/components/sections/invisalign/invisalign-flowchart";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

export function InvisalignJourneySection() {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 0.75", "end 0.35"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const stageScale = useTransform(scrollYProgress, [0, 0.45], [0.98, 1]);

  return (
    <div ref={stageRef} className="invisalign-journey-stage relative">
      <span
        className="invisalign-section-tag pointer-events-none absolute right-4 top-4 hidden text-[4.5rem] font-black leading-none text-[#04437f]/[0.06] sm:right-8 sm:top-6 lg:block"
        aria-hidden
      >
        03
      </span>

      <div aria-hidden className="invisalign-journey-stage-mesh pointer-events-none absolute inset-0 rounded-[inherit]" />
      <motion.div
        aria-hidden
        className="invisalign-journey-stage-glow pointer-events-none absolute inset-y-8 left-[8%] w-1/3 rounded-full blur-3xl"
        style={reduceMotion ? undefined : { x: glowX }}
      />

      <motion.div
        style={reduceMotion ? undefined : { scale: stageScale }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="invisalign-journey-stage__inner relative overflow-hidden rounded-[1.75rem] border border-[#04437f]/10 bg-gradient-to-b from-[#f8fcff] via-white to-[#f0fdfa] px-5 py-10 shadow-[0_32px_72px_-40px_rgba(4,67,127,0.22)] sm:px-8 sm:py-12 lg:rounded-[2.25rem] lg:px-10 lg:py-14 xl:px-12"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative z-[1] mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0d9488]/25 bg-[#ecfdf5]/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0d5c4a]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#0d9488]" aria-hidden />
            6 steps
          </motion.p>
          <PremiumSectionHeader
            align="center"
            title={invisalignProcess.h2}
            titleClassName="invisalign-display-title !text-[clamp(1.5rem,2.8vw,2.35rem)]"
            description={invisalignProcess.subheading}
            className="!mx-0"
            descriptionClassName="!text-[#475569]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.55 }}
          className="relative z-[1] mx-auto mt-8 w-full max-w-2xl lg:mt-10"
        >
          <InvisalignMediaSlot
            id="invisalign-journey-graphic"
            label={invisalignProcess.mediaLabel}
            kind="gif"
            aspect="video"
            className="invisalign-journey-media"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="invisalign-journey-section relative z-[1] mt-10 w-full lg:mt-12"
        >
          <InvisalignFlowchart />
          <InvisalignFlowchartScroll />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="invisalign-process-close relative z-[1] mx-auto mt-12 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#021a33] via-[#04437f] to-[#0d9488] px-6 py-10 text-center text-white sm:mt-14 sm:px-10 sm:py-12"
        >
          <div aria-hidden className="invisalign-process-close-bg absolute inset-0" />
          <motion.div
            aria-hidden
            className="invisalign-process-close-shine pointer-events-none absolute inset-0"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["-120%", "120%"],
                    transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 },
                  }
            }
          />
          <h2 className="relative mx-auto max-w-xl text-lg font-extrabold text-white sm:text-xl">
            {invisalignProcess.closingHeading}
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
}