"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export type WhyChooseFeature = {
  icon: LucideIcon;
  title: string;
  text: string;
  hoverImage: string;
  hoverImageAlt: string;
};

export function WhyChooseFeatureCard({
  feature,
  index,
}: {
  feature: WhyChooseFeature;
  index: number;
}) {
  const Icon = feature.icon;
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.li
      initial={{ opacity: 1, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="list-none h-full"
    >
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="flex h-full min-h-[5rem] items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:min-h-[5.25rem] sm:gap-3.5 sm:px-4 sm:py-3.5"
      >
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-white/40 sm:h-12 sm:w-12">
          <Image
            src={feature.hoverImage}
            alt={feature.hoverImageAlt}
            fill
            sizes="48px"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#04437f]/35">
            <Icon className="h-5 w-5 text-white drop-shadow-sm" strokeWidth={1.75} aria-hidden />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-heading text-[0.62rem] font-bold tabular-nums tracking-[0.18em] text-[#f5d76e]">
            {indexLabel}
          </p>
          <p className="font-heading text-[0.82rem] font-bold leading-snug text-white sm:text-sm">
            {feature.title}
          </p>
          <p className="mt-0.5 line-clamp-2 text-[0.65rem] leading-relaxed text-white/80 sm:text-xs">
            {feature.text}
          </p>
        </div>
      </motion.div>
    </motion.li>
  );
}
