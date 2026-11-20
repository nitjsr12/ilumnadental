"use client";

import { AlignHorizontalJustifyCenter, Layers, Smile, Sparkles, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { InvisalignMediaSlot } from "@/components/sections/invisalign/invisalign-media-slot";
import { InvisalignCompareTreatmentIcon } from "@/components/sections/invisalign/invisalign-compare-treatment-icon";
import { invisalignComparison, invisalignMediaAssets } from "@/data/invisalign-page";
import { cn } from "@/lib/utils";

const ROW_ICONS = [Wrench, Layers, AlignHorizontalJustifyCenter, Sparkles] as const;

function CompareBenefitList({
  items,
  tone,
}: {
  items: string[];
  tone: "braces" | "aligners";
}) {
  const isAligners = tone === "aligners";

  return (
    <ul className="m-0 mt-5 list-none space-y-3.5 p-0">
      {items.map((label, i) => {
        const Icon = ROW_ICONS[i] ?? Sparkles;
        return (
          <motion.li
            key={label}
            initial={{ opacity: 0, x: isAligners ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 + i * 0.06 }}
            className="flex items-start gap-3 text-left"
          >
            <span
              className={cn(
                "invisalign-split-benefit-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                isAligners
                  ? "border-[#0d9488]/35 bg-white/95 text-[#0d9488]"
                  : "border-[#1781be]/30 bg-white/95 text-[#1781be]",
              )}
              aria-hidden
            >
              <Icon className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <span
              className={cn(
                "pt-1.5 text-sm font-semibold leading-snug sm:text-[0.9375rem]",
                isAligners ? "text-[#0d3d4a]" : "text-[#1e3a5f]",
              )}
            >
              {label}
            </span>
          </motion.li>
        );
      })}
    </ul>
  );
}

export function InvisalignCompareSplit() {
  const reduceMotion = useReducedMotion();
  const { split, rows, columns } = invisalignComparison;
  const bracesBullets = rows.map((r) => r.braces);
  const alignerBullets = rows.map((r) => r.invisalign);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className="invisalign-split-card relative z-[1] mx-auto mt-10 w-full max-w-none"
    >
      <div
        className="invisalign-split-card__frame overflow-hidden rounded-[1.5rem] border border-[#04437f]/10 bg-white shadow-[0_32px_70px_-36px_rgba(4,67,127,0.35)] sm:rounded-[2rem] lg:rounded-[2.25rem]"
        role="group"
        aria-label="Braces versus clear aligners comparison"
      >
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="invisalign-split-headline grid grid-cols-1 gap-4 border-b border-[#04437f]/10 bg-white px-5 py-6 text-center sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 sm:px-10 sm:py-7 lg:gap-10 lg:px-14 lg:py-8"
        >
          <p className="invisalign-split-title invisalign-split-title--braces text-[clamp(1.75rem,4.5vw,3rem)] font-black uppercase tracking-tight text-[#021a33]">
            {split.headline.left}
          </p>
          <p className="invisalign-split-headline-mid mx-auto flex max-w-[14rem] flex-wrap items-center justify-center gap-x-1.5 gap-y-0 text-sm font-bold text-[#475569] sm:max-w-none sm:text-base">
            <span>{split.headline.centerLead}</span>
            <span className="invisalign-split-vs-badge inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#04437f] to-[#0d9488] px-2 text-xs font-black text-white shadow-md">
              {split.headline.vs}
            </span>
            <span>{split.headline.centerTail}</span>
          </p>
          <p className="invisalign-split-title invisalign-split-title--aligners text-[clamp(1.75rem,4.5vw,3rem)] font-black uppercase tracking-tight text-[#0d9488]">
            {split.headline.right}
          </p>
        </motion.div>

        <div className="invisalign-split-body relative grid min-h-0 md:grid-cols-2 lg:min-h-[28rem]">
          <div className="invisalign-split-diagonal pointer-events-none absolute z-[2] hidden md:block" aria-hidden />

          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="invisalign-split-side invisalign-split-side--braces relative flex flex-col px-6 pb-9 pt-7 sm:px-10 sm:pb-10 sm:pt-8 lg:px-14 lg:pb-12 lg:pt-10"
          >
            <InvisalignMediaSlot
              id="invisalign-compare-braces"
              src={invisalignMediaAssets["invisalign-compare-braces"].src}
              alt={invisalignMediaAssets["invisalign-compare-braces"].alt}
              label={invisalignMediaAssets["invisalign-compare-braces"].label}
              aspect="wide"
              className="invisalign-split-media mb-6 w-full"
            />

            <div className="flex flex-col items-center text-center lg:px-4">
              <InvisalignCompareTreatmentIcon
                src={invisalignComparison.icons.braces.src}
                alt={invisalignComparison.icons.braces.alt}
                tone="braces"
              />
              <span className="invisalign-split-pill invisalign-split-pill--braces mt-3 inline-flex rounded-full px-5 py-1.5 text-xs font-black uppercase tracking-wider text-white">
                {split.sidePills.braces}
              </span>
              <p className="mt-2 text-sm font-bold text-[#1e3a5f]">{columns.braces}</p>
            </div>

            <div className="mx-auto w-full max-w-xl lg:max-w-none">
              <CompareBenefitList items={bracesBullets} tone="braces" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="invisalign-split-vs-mobile flex items-center justify-center gap-3 border-y border-[#04437f]/10 bg-white/80 py-3 md:hidden"
            aria-hidden
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#05a2a4]/30" />
            <span className="invisalign-split-vs-badge flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#04437f] to-[#0d9488] text-sm font-black text-white shadow-lg">
              VS
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#05a2a4]/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="invisalign-split-side invisalign-split-side--aligners relative flex flex-col px-6 pb-9 pt-7 sm:px-10 sm:pb-10 sm:pt-8 lg:px-14 lg:pb-12 lg:pt-10"
          >
            <InvisalignMediaSlot
              id="invisalign-compare-invisalign"
              src={invisalignMediaAssets["invisalign-compare-invisalign"].src}
              alt={invisalignMediaAssets["invisalign-compare-invisalign"].alt}
              label={invisalignMediaAssets["invisalign-compare-invisalign"].label}
              aspect="wide"
              className="invisalign-split-media mb-6 w-full"
            />

            <div className="flex flex-col items-center text-center lg:px-4">
              <InvisalignCompareTreatmentIcon
                src={invisalignComparison.icons.aligners.src}
                alt={invisalignComparison.icons.aligners.alt}
                tone="aligners"
              />
              <span className="invisalign-split-pill invisalign-split-pill--aligners mt-3 inline-flex rounded-full px-5 py-1.5 text-xs font-black uppercase tracking-wider text-white">
                {split.sidePills.aligners}
              </span>
              <p className="mt-2 text-sm font-bold text-[#0d5c4a]">{columns.invisalign}</p>
            </div>

            <div className="mx-auto w-full max-w-xl lg:max-w-none">
              <CompareBenefitList items={alignerBullets} tone="aligners" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="invisalign-split-vs-desktop pointer-events-none absolute left-1/2 top-[42%] z-[3] hidden -translate-x-1/2 -translate-y-1/2 md:block"
            aria-hidden
          >
            <span className="invisalign-compare-vs-ring flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full text-lg font-black text-white">
              VS
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="invisalign-split-footer flex flex-wrap items-center justify-center gap-2.5 px-6 py-4 text-center sm:gap-3 sm:py-5"
        >
          <Smile className="h-5 w-5 shrink-0 text-[#f5d76e]" strokeWidth={2.25} aria-hidden />
          <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden />
          <p className="text-sm font-bold tracking-wide text-white sm:text-base">{split.footerTagline}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}