"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  imageSrc?: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  imageSrc = images.heroPrimary,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-primary/10">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/88 via-primary/72 to-primary/55" />
        <div aria-hidden className="hero-noise absolute inset-0 opacity-25 mix-blend-overlay" />
      </div>

      <div className="section-container relative py-10 sm:py-12 lg:py-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="eyebrow !text-white/85"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-2 max-w-3xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-snug text-white"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-gold via-secondary to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}
