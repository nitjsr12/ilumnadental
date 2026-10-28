"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check, Medal, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutFeatureItem } from "@/components/sections/about-feature-item";
import {
  aboutHomeChecklist,
  aboutHomeFeatures,
  aboutHomeGallery,
} from "@/data/about-home-section";
import { siteConfig } from "@/lib/site-config";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

const floatY = (reduceMotion: boolean | null, y: number[], duration: number, delay = 0) =>
  reduceMotion
    ? undefined
    : {
        y,
        transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
      };

const floatRotate = (reduceMotion: boolean | null, duration: number, delay = 0) =>
  reduceMotion
    ? undefined
    : {
        y: [0, -8, 0],
        rotate: [-3, 3, -3],
        transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
      };

export function AboutDoctorSection() {
  const { doctor } = siteConfig;
  const reduceMotion = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [32, -32]);

  const statValue = doctor.experienceYears != null ? `${doctor.experienceYears}+` : `${doctor.googleRating}`;
  const statLabel =
    doctor.experienceYears != null ? "Years of Excellence" : "Google Rated Excellence";

  return (
    <section
      id="about"
      className="about-premium-section about-clinic-section relative overflow-x-clip"
    >
      <div aria-hidden className="about-premium-bg pointer-events-none absolute inset-0" />
      <div aria-hidden className="about-premium-orb about-premium-orb--a" />
      <div aria-hidden className="about-premium-orb about-premium-orb--b" />

      <div className="hero-page-gutter relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <motion.div
            ref={portraitRef}
            initial={{ opacity: 0, x: reduceMotion ? 0 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            <div className="about-clinic-portrait relative px-2 sm:px-4">
              <div aria-hidden className="about-clinic-portrait-glow" />

              <motion.div
                style={reduceMotion ? undefined : { y: portraitY }}
                className="about-clinic-portrait-frame relative z-[1] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]"
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={aboutHomeGallery.primary}
                    alt={aboutHomeGallery.primaryAlt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 42vw"
                    className="object-contain object-bottom"
                    priority={false}
                  />
                </motion.div>
              </motion.div>

              {!reduceMotion && (
                <>
                  <motion.span
                    animate={floatY(reduceMotion, [0, -14, 0], 4.2)}
                    className="about-premium-particle left-[12%] top-[18%] h-2 w-2 opacity-60"
                  />
                  <motion.span
                    animate={floatY(reduceMotion, [0, 10, 0], 5, 0.8)}
                    className="about-premium-particle right-[18%] top-[28%] h-1.5 w-1.5 opacity-50"
                  />
                  <motion.span
                    animate={floatY(reduceMotion, [0, -8, 0], 3.6, 1.2)}
                    className="about-premium-particle bottom-[32%] left-[6%] h-2.5 w-2.5 opacity-40"
                  />
                </>
              )}

              <motion.div
                animate={floatRotate(reduceMotion, 4.5)}
                className="about-clinic-float-badge absolute -left-1 top-8 z-20 flex h-14 w-14 items-center justify-center rounded-2xl sm:-left-3 sm:top-10 sm:h-16 sm:w-16"
              >
                <Medal className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.65} aria-hidden />
                <Star
                  className="absolute -right-0.5 -top-0.5 h-4 w-4 fill-[#d4af37] text-[#d4af37]"
                  aria-hidden
                />
              </motion.div>

              <motion.div
                animate={floatY(reduceMotion, [0, 9, 0], 3.8, 0.6)}
                className="about-premium-float-star absolute -right-2 top-[40%] z-20 flex h-12 w-12 items-center justify-center rounded-full sm:-right-4 sm:h-14 sm:w-14"
              >
                <Star className="h-6 w-6 fill-[#d4af37] text-[#d4af37]" aria-hidden />
              </motion.div>

              <motion.div
                animate={floatY(reduceMotion, [0, -6, 0], 4.8, 0.3)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.55 }}
                className="about-premium-stat-card absolute -bottom-5 right-0 z-20 rounded-2xl bg-white px-5 py-4 sm:-bottom-6 sm:right-2"
              >
                <p className="about-premium-stat-value">{statValue}</p>
                <p className="mt-1 text-sm font-semibold text-[#0d1b3e]">{statLabel}</p>
                <div className="about-premium-stat-dots" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      className={i < 4 ? "is-active" : ""}
                      animate={
                        reduceMotion
                          ? undefined
                          : { opacity: [0.35, 1, 0.35], scale: [1, 1.2, 1] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e8f4fc] px-4 py-2 text-sm font-semibold text-[#1781be]"
            >
              <Sparkles className="h-4 w-4 text-[#d4af37]" strokeWidth={2} aria-hidden />
              About Our Clinic
            </motion.div>

            <motion.h2 variants={fadeUp} className="about-clinic-title">
              <span className="text-[#0d1b3e]">Welcome to </span>
              <span className="about-clinic-title-accent">iLUMNA</span>
              <span className="block text-[#0d1b3e]">Advanced Dental Centre</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-[#64748b] sm:text-lg"
            >
              At iLUMNA Dental, exceptional care is built on{" "}
              <strong className="font-semibold text-[#0d1b3e]">cutting-edge technology</strong>, clinical
              precision, and the{" "}
              <strong className="font-semibold text-[#0d1b3e]">highest standard</strong> of personalized
              dentistry in Jayanagar.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-[#64748b]">
              {doctor.introduction}
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="about-feature-grid mt-8 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4"
            >
              {aboutHomeFeatures.map((feature, index) => (
                <AboutFeatureItem key={feature.title} feature={feature} index={index} />
              ))}
            </motion.ul>

            <motion.ul variants={fadeUp} className="mt-8 space-y-3">
              {aboutHomeChecklist.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-[#0d1b3e] sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f4fc] text-[#1781be]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  {line}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="/about"
                showArrow
                className="hero-cta-primary !px-8 !py-3.5 !text-base w-full sm:w-auto"
              >
                Meet Our Team
              </Button>
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#1781be]/35 bg-white px-8 py-3.5 text-base font-semibold text-[#04437f] transition-colors hover:border-[#1781be] hover:bg-[#f0f8ff] sm:w-auto"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
