"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  HeartHandshake,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { AboutIconBadge } from "@/components/sections/about/about-icon-badge";
import { aboutFeatures } from "@/data/about-page";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

const featureIcons: LucideIcon[] = [
  Stethoscope,
  Sparkles,
  UserRoundCheck,
  HeartHandshake,
];

export function AboutFeaturesSection() {
  return (
    <SectionShell variant="muted" className="relative overflow-hidden">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-2">
          {aboutFeatures.eyebrow}
        </motion.p>
        <motion.h2 variants={fadeUp} className="section-title">
          {aboutFeatures.title}
        </motion.h2>
      </motion.div>

      <ul className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {aboutFeatures.items.map((item, i) => {
          const Icon = featureIcons[i] ?? Stethoscope;
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
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-surface shadow-sm transition-shadow duration-300 group-hover:border-gold/35 group-hover:shadow-[0_20px_50px_-28px_rgba(18,36,47,0.22)]">
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
                    <AboutIconBadge icon={Icon} tone="dark" />
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
