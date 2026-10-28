"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { ArrowDown, Shield, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroFeatureGrid } from "@/components/sections/hero-feature-grid";
import { HeroDotNav } from "@/components/sections/hero-dot-nav";
import { siteConfig } from "@/lib/site-config";
import { heroSlides } from "@/data/hero-slides";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

const AUTOPLAY_MS = 6500;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const slide = heroSlides[active] ?? heroSlides[0];

  const goTo = useCallback((index: number) => {
    setActive(index % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion || heroSlides.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="hero-premium relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div aria-hidden className="hero-premium-bg" />
      <div aria-hidden className="hero-premium-orb hero-premium-orb--a" />
      <div aria-hidden className="hero-premium-orb hero-premium-orb--b" />
      <div aria-hidden className="hero-premium-particles" />

      <svg
        className="hero-premium-wave pointer-events-none absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="rgba(227, 242, 253, 0.85)"
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </svg>

      <div className="hero-page-gutter relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center py-8 sm:py-10 lg:py-12">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20 2xl:gap-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl lg:max-w-none"
          >
            <motion.div
              variants={fadeUp}
              className="hero-trust-badge mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/45 bg-white/90 px-5 py-2.5 shadow-sm backdrop-blur-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4fc] text-[#1781be]">
                <Shield className="h-4 w-4" strokeWidth={2} aria-hidden />
              </span>
              <span className="text-[0.9375rem] font-semibold text-[#04437f] sm:text-base">
                Trusted dental care in Jayanagar
              </span>
              <Sparkles className="h-4 w-4 text-[#d4af37]" strokeWidth={2} aria-hidden />
              <Sparkles className="-ml-2 h-3 w-3 text-[#c9a962]" strokeWidth={2} aria-hidden />
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-premium-title">
              <span className="block text-[#0d1b3e]">Transform Your</span>
              <span className="mt-1 block hero-premium-headline-accent">
                Smile with Confidence
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="hero-premium-sub mt-5 max-w-lg text-[#5c6f82] sm:mt-6"
            >
              Expert Dental Care for Your Perfect Smile
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-3 max-w-lg text-base leading-relaxed text-[#1781be]/90 sm:text-lg"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href="/book-appointment"
                showArrow
                className="hero-cta-primary !px-8 !py-3.5 !text-base w-full sm:w-auto"
              >
                Book Appointment
              </Button>
              <Button
                href="/treatments"
                variant="secondary"
                showArrow
                className="hero-cta-secondary !px-8 !py-3.5 !text-base w-full border-[#1781be]/35 !text-[#04437f] sm:w-auto"
              >
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <HeroDotNav
                count={heroSlides.length}
                active={active}
                onSelect={goTo}
              />
              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-base shadow-sm ring-1 ring-primary/8">
                <span className="flex gap-0.5 text-star">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-star" strokeWidth={0} aria-hidden />
                  ))}
                </span>
                <span className="font-semibold text-[#0d1b3e]">
                  {siteConfig.doctor.googleRating}
                  <span className="font-medium text-[#64748b]"> Google rating</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:max-w-xl lg:justify-self-end xl:max-w-2xl"
          >
            <HeroFeatureGrid />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 flex justify-center pb-2 sm:mt-10"
        >
          <Link
            href="#trust"
            className="group inline-flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cta"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white/80 shadow-sm transition-colors group-hover:border-brand-cta/30">
              <motion.span
                animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowDown className="h-4 w-4" aria-hidden />
              </motion.span>
            </span>
            Scroll to explore
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
