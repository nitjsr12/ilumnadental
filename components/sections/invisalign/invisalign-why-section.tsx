"use client";

import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import { invisalignWhyChoose, invisalignMediaAssets } from "@/data/invisalign-page";
import { Button } from "@/components/ui/button";
import { InvisalignIconSlot } from "@/components/sections/invisalign/invisalign-icon-slot";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { cn } from "@/lib/utils";

const highlightTone = ["teal", "gold", "sky", "violet"] as const;

const hoverLift = {
  scale: 1.02,
  y: -4,
  transition: { type: "spring" as const, stiffness: 380, damping: 22 },
};

const HERO_GIF = invisalignMediaAssets["invisalign-hero"];

export function InvisalignWhySection() {
  const reduceMotion = useReducedMotion();
  const gifSrc = HERO_GIF.src;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="invisalign-why-panel relative overflow-hidden rounded-[1.75rem] px-5 py-10 sm:px-8 sm:py-12 lg:rounded-[2.25rem] lg:px-10 lg:py-14 xl:px-12"
    >
      <span
        className="invisalign-section-tag pointer-events-none absolute right-6 top-6 hidden text-[4.5rem] font-black leading-none text-white/[0.06] sm:block lg:right-10 lg:top-8 lg:text-[5.5rem]"
        aria-hidden
      >
        01
      </span>
      <div aria-hidden className="invisalign-why-panel-mesh pointer-events-none absolute inset-0" />
      <div aria-hidden className="invisalign-why-panel-grid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="invisalign-why-panel-orb invisalign-why-panel-orb--a" />
      <div aria-hidden className="invisalign-why-panel-orb invisalign-why-panel-orb--b" />

      <div className="relative z-[1] grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 xl:col-span-5"
        >
          <motion.p
            variants={fadeUp}
            className="invisalign-why-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7ee8c6] backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {invisalignWhyChoose.sectionLabel}
          </motion.p>

          <motion.div variants={fadeUp} className="invisalign-why-subcopy">
            <p className="text-base leading-relaxed text-white/90 sm:text-lg sm:leading-relaxed">
              {invisalignWhyChoose.subheading}
            </p>
            <span className="invisalign-why-accent-line mt-5 block h-1 w-20 rounded-full" aria-hidden />
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            className="mt-8 grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-3.5"
          >
            {invisalignWhyChoose.highlights.map((item, i) => (
              <motion.li
                key={item.id}
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : hoverLift}
                className={cn(
                  "invisalign-highlight-card invisalign-highlight-card--modern relative flex flex-col gap-3 rounded-2xl border p-4 sm:min-h-[8.25rem] sm:p-4",
                  `invisalign-highlight-card--${highlightTone[i]}`,
                )}
              >
                <span
                  className="invisalign-highlight-num absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg text-[0.65rem] font-black"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <InvisalignIconSlot id={item.id} tone="dark" className="!h-10 !w-10" />
                <p className="pr-7 text-sm font-semibold leading-snug text-white">{item.label}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 sm:mt-9">
            <Button href="/book-appointment" showArrow className="hero-cta-primary w-full !px-8 sm:w-auto">
              {invisalignWhyChoose.cta}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:col-span-7 lg:justify-end xl:col-span-7"
        >
          <div className="invisalign-hero-media relative w-full max-w-[min(100%,32rem)]">
            <motion.div
              aria-hidden
              className="invisalign-hero-media-ring pointer-events-none absolute -inset-[3px] rounded-[1.35rem]"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [0, 360] }
              }
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            <div className="invisalign-hero-media-frame relative overflow-hidden rounded-[1.25rem] border border-white/25 bg-[#dff4ec] p-2 shadow-[0_32px_64px_-28px_rgba(0,0,0,0.45)] sm:p-3">
              <div className="invisalign-hero-media-inner overflow-hidden rounded-xl bg-[#dff4ec]">
                {gifSrc ? (
                  // Native-size GIF — avoids upscale blur (507×507 source)
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={gifSrc}
                    alt={HERO_GIF.alt}
                    width={507}
                    height={507}
                    className="invisalign-hero-gif mx-auto block h-auto w-full max-w-[507px]"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                  />
                ) : (
                  <div className="flex aspect-square min-h-[16rem] items-center justify-center p-6 text-center text-sm font-semibold text-[#475569]">
                    {invisalignWhyChoose.mediaLabel}
                  </div>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}