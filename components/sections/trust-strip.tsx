"use client";

import { motion } from "motion/react";
import { Activity, Calendar, Star, Users, type LucideIcon } from "lucide-react";
import { trustStats } from "@/lib/site-config";
import type { TrustStat } from "@/lib/site-config";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { cn } from "@/lib/utils";

const icons: Record<TrustStat["icon"], LucideIcon> = {
  calendar: Calendar,
  users: Users,
  star: Star,
  activity: Activity,
};

export function TrustStrip() {
  if (trustStats.length === 0) return null;

  return (
    <section id="trust" className="trust-strip relative overflow-hidden border-y border-gold/20">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-20" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent"
      />

      <div className="section-container relative py-5 sm:py-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-4 text-center"
        >
          Trusted care in Jayanagar
        </motion.p>

        <ul className="flex flex-row flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {trustStats.map((stat, i) => {
            const Icon = icons[stat.icon ?? "activity"];
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
                  "trust-stat-card group flex min-w-[min(100%,16rem)] flex-1 flex-col gap-4 p-5 sm:min-w-[14rem] sm:flex-row sm:items-center sm:p-6",
                  stat.id === "rating" && "trust-stat-card--accent",
                )}
              >
                <div className="flex items-start justify-between gap-3 sm:flex-col sm:items-start">
                  <span className="font-heading text-[0.65rem] font-bold tabular-nums tracking-[0.2em] text-gold/90">
                    {indexLabel}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/15 to-gold/10 text-secondary ring-1 ring-gold/25 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  {stat.id === "rating" && (
                    <div className="mb-1.5 flex items-center gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          className="h-3 w-3 fill-gold/90"
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
                      className="!text-[clamp(1.75rem,3vw,2.25rem)]"
                    />
                  ) : (
                    <p className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-bold tabular-nums text-primary">
                      {stat.value}
                      {stat.suffix ?? ""}
                    </p>
                  )}

                  <p className="mt-1 text-sm font-medium leading-snug text-muted">{stat.label}</p>
                </div>

                <div
                  aria-hidden
                  className="trust-stat-shine pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
