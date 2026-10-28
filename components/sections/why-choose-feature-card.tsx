"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative list-none pt-6 sm:pt-7"
    >
      <motion.div
        className="group relative cursor-default"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              scale: 0.82,
              y: 12,
              rotate: -8,
            },
            hover: {
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: -4,
            },
          }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
          className="pointer-events-none absolute -left-1 top-0 z-20 w-[4.75rem] sm:w-[5.5rem]"
        >
          <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-white/90 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.55)] ring-2 ring-gold/40">
            <Image
              src={feature.hoverImage}
              alt={feature.hoverImageAlt}
              fill
              sizes="88px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          variants={{
            rest: { scale: 1, y: 0 },
            hover: { scale: 1.02, y: -2 },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className={cn(
            "why-choose-glass relative flex min-h-[4.25rem] items-center gap-3 overflow-hidden px-3 py-3.5 sm:gap-3.5 sm:px-4 sm:py-4",
            "transition-[background,border-color,box-shadow] duration-400",
            "group-hover:why-choose-glass--active",
          )}
        >
          <span
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(22, 54, 86, 0.98) 0%, rgba(31, 122, 111, 0.35) 100%)",
            }}
          />

          <motion.span
            variants={{
              rest: { opacity: 1, scale: 1 },
              hover: { opacity: 0, scale: 0.6 },
            }}
            transition={{ duration: 0.25 }}
            className="why-choose-icon relative z-10 flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12"
          >
            <Icon className="h-[1.35rem] w-[1.35rem] text-primary" strokeWidth={1.65} aria-hidden />
          </motion.span>

          <div className="relative z-10 min-w-0 flex-1">
            <p className="font-heading text-[0.62rem] font-bold tabular-nums tracking-[0.2em] text-gold/80 opacity-80 transition-opacity group-hover:opacity-100">
              {indexLabel}
            </p>
            <p className="font-heading text-[0.82rem] font-bold leading-snug text-white sm:text-sm">
              {feature.title}
            </p>
            <motion.p
              variants={{
                rest: { opacity: 0, y: 4 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.28 }}
              className="mt-1 text-[0.65rem] leading-relaxed text-white/70 sm:text-xs"
            >
              {feature.text}
            </motion.p>
          </div>

          <motion.span
            variants={{
              rest: { opacity: 0, x: -4 },
              hover: { opacity: 1, x: 0 },
            }}
            className="relative z-10 hidden h-2 w-2 shrink-0 rounded-full bg-gold shadow-[0_0_12px_rgba(184,149,90,0.8)] sm:block"
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </motion.li>
  );
}
