"use client";

import { motion } from "motion/react";
import { Sparkles, Star } from "lucide-react";
import { trustStats } from "@/lib/site-config";
import type { TrustStat } from "@/lib/site-config";
import { AnimatedStat } from "@/components/ui/animated-stat";
import {
  AnimatedSvgIcon,
  type AnimatedIconName,
} from "@/components/icons/animated-svg-icon";
import { cn } from "@/lib/utils";

const icons: Record<TrustStat["icon"], AnimatedIconName> = {
  calendar: "calendar",
  users: "users",
  star: "star",
  activity: "pulse",
};

export function TrustStrip() {
  if (trustStats.length === 0) return null;

  return (
    <section id="trust" className="premium-section-muted relative overflow-x-clip border-y border-[#04437f]/8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1781be]/40 to-transparent"
      />

      <div className="hero-page-gutter relative py-5 sm:py-6">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f4fc] px-4 py-2 text-sm font-semibold text-[#1781be]">
            <Sparkles className="h-4 w-4 text-[#d4af37]" aria-hidden />
            Trusted care in Jayanagar
          </span>
        </motion.div>

        <ul className="flex flex-row flex-wrap items-stretch justify-center gap-4 sm:gap-5">
          {trustStats.map((stat, i) => {
            const iconName = icons[stat.icon ?? "activity"];
            const num = typeof stat.value === "number" ? stat.value : null;
            const indexLabel = String(i + 1).padStart(2, "0");

            return (
              <motion.li
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "premium-card-surface group relative flex min-w-[min(100%,16rem)] flex-1 flex-col gap-4 p-5 sm:min-w-[14rem] sm:flex-row sm:items-center sm:p-6",
                  stat.id === "rating" && "ring-1 ring-[#d4af37]/25",
                )}
              >
                <div className="flex items-start justify-between gap-3 sm:flex-col sm:items-start">
                  <span className="font-heading text-[0.65rem] font-bold tabular-nums tracking-[0.2em] text-[#1781be]/80">
                    {indexLabel}
                  </span>
                  <AnimatedSvgIcon name={iconName} size="sm" className="shadow-none" />
                </div>

                <div className="min-w-0 flex-1">
                  {stat.id === "rating" && (
                    <div className="mb-1.5 flex items-center gap-0.5 text-star">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          className="h-3 w-3 fill-star opacity-90"
                          strokeWidth={0}
                          aria-hidden
                        />
                      ))}
                    </div>
                  )}

                  {num !== null ? (
                    <AnimatedStat
                      value={num}
                      suffix={stat.suffix ?? ""}
                      decimals={stat.id === "rating" ? 1 : 0}
                      className="!text-[clamp(1.75rem,3vw,2.25rem)] !text-[#04437f]"
                    />
                  ) : (
                    <p className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-bold tabular-nums text-[#04437f]">
                      {stat.value}
                      {stat.suffix ?? ""}
                    </p>
                  )}

                  <p className="mt-1 text-sm font-medium leading-snug text-[#64748b]">{stat.label}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
