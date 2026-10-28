"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Cpu,
  Eye,
  Heart,
  ScanLine,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { AboutIconBadge } from "@/components/sections/about/about-icon-badge";
import { aboutPhilosophy } from "@/data/about-page";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { cn } from "@/lib/utils";

const pillarIcons: LucideIcon[] = [
  Target,
  ScanLine,
  Sparkles,
  Eye,
  Heart,
  Cpu,
];

export function AboutPhilosophySection() {
  return (
    <SectionShell variant="muted" className="relative overflow-hidden">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/12 blur-3xl"
      />

      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:sticky lg:top-28"
        >
          <PremiumSectionHeader
            badge={aboutPhilosophy.eyebrow}
            align="left"
            className="!mx-0 mb-8 max-w-xl !text-left lg:mb-0"
            description={aboutPhilosophy.intro}
            title={
              <>
                <PremiumTitleDark>Our Philosophy of </PremiumTitleDark>
                <PremiumTitleBlue>Modern </PremiumTitleBlue>
                <PremiumTitleGold>Dentistry</PremiumTitleGold>
              </>
            }
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {aboutPhilosophy.gallery.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-primary/10 shadow-md",
                  i === 0 && "col-span-2 aspect-[16/10]",
                  i === 1 && "aspect-square",
                  i === 2 && "aspect-square -mt-6 sm:-mt-8",
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent opacity-80" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm font-semibold text-foreground sm:text-base lg:text-left"
          >
            {aboutPhilosophy.commitmentHeading}
          </motion.p>

          <ul className="relative mt-6 grid gap-4 sm:grid-cols-2">
            {aboutPhilosophy.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? Target;
              const indexLabel = String(i + 1).padStart(2, "0");
              return (
                <motion.li
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="group list-none"
                >
                  <div className="hero-glass-card relative h-full overflow-hidden p-5 transition-[border-color,box-shadow] duration-300 group-hover:border-secondary/30 group-hover:shadow-lg sm:p-6">
                    <span className="absolute right-4 top-4 text-xs tabular-nums text-gold/70">
                      {indexLabel}
                    </span>
                    <AboutIconBadge icon={Icon} className="group-hover:ring-secondary/40" />
                    <h3 className="mt-4 pr-8 text-base font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
