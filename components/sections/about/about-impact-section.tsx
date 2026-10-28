"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import {
  AnimatedSvgIcon,
  type AnimatedIconName,
} from "@/components/icons/animated-svg-icon";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { aboutImpact } from "@/data/about-page";
import { images } from "@/lib/images";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { cn } from "@/lib/utils";

const statIcons: Record<string, AnimatedIconName> = {
  smiles: "tooth",
  experience: "calendar",
  patients: "users",
  satisfaction: "star",
};

export function AboutImpactSection() {
  return (
    <SectionShell variant="surface" className="relative overflow-hidden !pb-8">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={images.heroPrimary}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/95 to-surface" />
      </div>
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-20" />

      <PremiumSectionHeader
        badge={aboutImpact.eyebrow}
        description={aboutImpact.description}
        className="relative mx-auto"
        title={
          <>
            <PremiumTitleDark>Your Smile. </PremiumTitleDark>
            <PremiumTitleBlue>Our </PremiumTitleBlue>
            <PremiumTitleGold>Commitment</PremiumTitleGold>
          </>
        }
      />

      <ul className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutImpact.stats.map((stat, i) => {
          const iconName = statIcons[stat.id] ?? "sparkle";
          const isRating = stat.id === "satisfaction";

          return (
            <motion.li
              key={stat.id}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group list-none"
            >
              <div
                className={cn(
                  "trust-stat-card relative flex h-full flex-col gap-3 overflow-hidden p-5 transition-shadow duration-300 sm:p-6",
                  isRating && "trust-stat-card--accent",
                  "group-hover:shadow-[0_24px_56px_-32px_rgba(18,36,47,0.25)]",
                )}
              >
                <div
                  aria-hidden
                  className="trust-stat-shine pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <AnimatedSvgIcon name={iconName} size="lg" />

                {isRating && (
                  <div className="flex items-center gap-0.5 text-star">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star
                        key={star}
                        className="h-3.5 w-3.5 fill-star opacity-90"
                        strokeWidth={0}
                        aria-hidden
                      />
                    ))}
                  </div>
                )}

                {stat.value !== undefined ? (
                  <AnimatedStat
                    value={stat.value}
                    suffix={stat.suffix ?? ""}
                    decimals={stat.decimals ?? 0}
                    className="!text-[clamp(1.75rem,3vw,2.25rem)] !font-semibold"
                  />
                ) : (
                  <p className="text-lg font-semibold leading-snug text-primary">{stat.highlight}</p>
                )}

                <p className="text-sm font-medium text-muted">{stat.label}</p>
                {stat.value !== undefined && (
                  <p className="text-xs text-muted">{stat.highlight}</p>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative mt-8 overflow-hidden rounded-2xl border border-primary/10 shadow-md lg:mt-10"
      >
        <div className="relative aspect-[3/1] min-h-[8rem] sm:min-h-[10rem]">
          <Image
            src={images.smile}
            alt="Healthy confident smile"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/20" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <p className="max-w-2xl text-base font-medium text-white sm:text-lg">
              Advanced dentistry, thoughtful care, and smiles built to last.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
