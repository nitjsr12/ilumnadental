"use client";

import { motion, useReducedMotion } from "motion/react";
import type { AboutHomeFeature } from "@/data/about-home-section";
import { cn } from "@/lib/utils";

const toneClass: Record<AboutHomeFeature["tone"], string> = {
  blue: "about-feature-icon--blue",
  teal: "about-feature-icon--teal",
  violet: "about-feature-icon--violet",
  rose: "about-feature-icon--rose",
  amber: "about-feature-icon--amber",
  navy: "about-feature-icon--navy",
};

type AboutFeatureItemProps = {
  feature: AboutHomeFeature;
  index: number;
};

export function AboutFeatureItem({ feature, index }: AboutFeatureItemProps) {
  const reduceMotion = useReducedMotion();
  const Icon = feature.icon;

  return (
    <motion.li
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="about-feature-item group relative list-none"
    >
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <span
            className={cn(
              "about-feature-icon inline-flex h-11 w-11 items-center justify-center rounded-xl text-white sm:h-12 sm:w-12",
              toneClass[feature.tone],
            )}
          >
            <Icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={2} aria-hidden />
          </span>
          <div className="about-feature-popup pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-20 w-[min(16rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-primary/8 bg-white px-3 py-2.5 text-left opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 group-focus-within:opacity-100">
            <p className="text-xs leading-relaxed text-[#64748b] sm:text-sm">{feature.detail}</p>
          </div>
        </div>
        <p className="pt-2 text-sm font-semibold leading-snug text-[#0d1b3e] sm:text-[0.9375rem]">
          {feature.title}
        </p>
      </div>
    </motion.li>
  );
}
