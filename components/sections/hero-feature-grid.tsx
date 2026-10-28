"use client";

import { motion, useReducedMotion } from "motion/react";
import { Award, Heart, Shield, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}[] = [
  {
    icon: Shield,
    title: "Painless Care",
    description: "Comfort-focused, gentle treatment",
    delay: 0.15,
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Specialist-led dental care",
    delay: 0.25,
  },
  {
    icon: Sparkles,
    title: "Modern Tech",
    description: "Digital diagnostics & equipment",
    delay: 0.35,
  },
  {
    icon: Heart,
    title: "Patient First",
    description: "Your comfort matters",
    delay: 0.45,
  },
];

export function HeroFeatureGrid({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6",
        className,
      )}
    >
      <div
        aria-hidden
        className="hero-feature-glow pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      {features.map((item) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.35 + item.delay,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -12,
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 420, damping: 22 },
                  }
            }
            className="hero-feature-card group relative flex flex-col p-5 sm:p-6"
          >
            <div className="hero-feature-icon-wrap relative mb-5 inline-flex h-14 w-14 shrink-0 sm:h-16 sm:w-16">
              <span className="hero-feature-icon-ring" aria-hidden />
              <span className="hero-feature-icon-ring hero-feature-icon-ring--delay" aria-hidden />
              <span className="hero-feature-icon relative z-10 inline-flex h-full w-full items-center justify-center">
                <Icon
                  className="hero-feature-icon-svg h-7 w-7 text-white sm:h-8 sm:w-8"
                  strokeWidth={2}
                  aria-hidden
                />
              </span>
            </div>
            <h3 className="font-heading text-base font-bold text-[#0d1b3e] transition-colors duration-300 group-hover:text-[#1781be] sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-[0.9375rem]">
              {item.description}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}
