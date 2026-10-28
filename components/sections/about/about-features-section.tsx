"use client";

import Image from "next/image";
import { motion } from "motion/react";
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
import { aboutFeatures } from "@/data/about-page";

const featureIcons: AnimatedIconName[] = ["tooth", "scan", "sparkle", "heart"];

export function AboutFeaturesSection() {
  return (
    <SectionShell variant="muted" className="relative overflow-hidden">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
      />

      <PremiumSectionHeader
        badge={aboutFeatures.eyebrow}
        title={
          <>
            <PremiumTitleDark>We Offer the Best </PremiumTitleDark>
            <PremiumTitleBlue>Dental </PremiumTitleBlue>
            <PremiumTitleGold>Care</PremiumTitleGold>
          </>
        }
        className="relative mx-auto"
      />

      <ul className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {aboutFeatures.items.map((item, i) => {
          const iconName = featureIcons[i] ?? "tooth";
          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group list-none"
            >
              <div className="premium-card-surface flex h-full flex-col overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_20px_50px_-28px_rgba(4,67,127,0.18)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <AnimatedSvgIcon name={iconName} size="sm" tone="dark" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  <motion.span
                    aria-hidden
                    className="mt-4 h-0.5 w-0 rounded-full bg-secondary transition-all duration-500 group-hover:w-full"
                  />
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
