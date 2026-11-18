"use client";

import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type WhyChooseFeature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const iconTones = [
  "about-feature-icon--teal",
  "about-feature-icon--blue",
  "about-feature-icon--amber",
  "about-feature-icon--violet",
  "about-feature-icon--rose",
  "about-feature-icon--navy",
] as const;

export function WhyChooseFeatureCard({
  feature,
  index,
}: {
  feature: WhyChooseFeature;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = feature.icon;
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.li
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="list-none"
    >
      <motion.article
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
        className="why-choose-feature-card group flex h-full min-h-[8.5rem] flex-col gap-3 rounded-2xl border border-white/12 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md sm:min-h-[9rem] sm:p-5"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="font-heading text-[0.65rem] font-bold tabular-nums tracking-[0.22em] text-[#f5d76e]/95">
            {indexLabel}
          </span>
          <span
            className={cn(
              "about-feature-icon inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-lg sm:h-12 sm:w-12",
              iconTones[index % iconTones.length],
            )}
          >
            <Icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={2} aria-hidden />
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="font-heading text-[0.95rem] font-bold leading-snug text-white sm:text-base">
            {feature.title}
          </h3>
          <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-white/72 sm:text-sm">
            {feature.text}
          </p>
        </div>
      </motion.article>
    </motion.li>
  );
}