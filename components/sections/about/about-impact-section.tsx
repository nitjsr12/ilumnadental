"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="about-impact-closing relative mt-8 overflow-hidden rounded-3xl border border-primary/10 shadow-[0_32px_64px_-36px_rgba(4,67,127,0.35)] lg:mt-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,rgba(5,162,164,0.18),transparent_55%)]"
        />
        <div className="relative grid lg:grid-cols-12 lg:items-stretch">
          <div className="relative z-10 flex flex-col justify-center bg-gradient-to-br from-[#021a33] via-[#04437f] to-[#0a5c9e] px-6 py-8 sm:px-8 sm:py-9 lg:col-span-7 lg:px-10 lg:py-10 xl:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:18px_18px]"
            />
            <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#f5d76e]" aria-hidden />
              Our promise
            </span>
            <h3 className="relative mt-4 text-[clamp(1.5rem,3.2vw,2.125rem)] font-extrabold leading-snug tracking-tight text-white">
              Advanced dentistry,{" "}
              <span className="bg-gradient-to-r from-[#9dd4f5] to-[#05a2a4] bg-clip-text text-transparent">
                thoughtful care
              </span>
            </h3>
            <p className="relative mt-3 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              Smiles built to last — with precision, trust, and care you&apos;ll feel at every visit
              in Jayanagar.
            </p>
            <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/book-appointment"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#04437f] shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
              >
                Contact the clinic
              </Link>
            </div>
          </div>

          <div className="relative min-h-[13rem] sm:min-h-[15rem] lg:col-span-5 lg:min-h-[18rem]">
            <Image
              src={images.clinicInterior}
              alt="Modern, comfortable treatment room at iLUMNA Dental"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[#04437f]/95 via-[#04437f]/35 to-transparent lg:from-[#04437f]/85 lg:via-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#021a33]/40 via-transparent to-transparent lg:from-transparent"
            />
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
