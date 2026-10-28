"use client";

import { useCallback, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, Calendar, MapPin, Sparkles, Star } from "lucide-react";
import dynamic from "next/dynamic";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { BrandRibbon } from "@/components/ui/brand-ribbon";
import { HeroSlideNav } from "@/components/sections/hero-slide-nav";
import { siteConfig } from "@/lib/site-config";
import { heroSlides } from "@/data/hero-slides";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

const HeroMediaSlider = dynamic(
  () => import("@/components/sections/hero-media-slider"),
  {
    ssr: false,
    loading: () => (
      <div className="hero-swiper hero-media-shell animate-pulse bg-primary/5" />
    ),
  },
);

const AUTOPLAY_MS = 5500;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const slide = heroSlides[active] ?? heroSlides[0];
  const slideIndexLabel = String(active + 1).padStart(2, "0");

  const goTo = useCallback((index: number) => {
    setActive(index);
    swiperRef.current?.slideToLoop(index);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-canvas relative overflow-hidden border-b border-primary/[0.08]"
    >
      <BrandRibbon />

      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div aria-hidden className="brand-mesh pointer-events-none absolute inset-0" />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-secondary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="section-container relative pb-6 pt-5 lg:pb-10 lg:pt-6">
        <div className="grid min-h-0 gap-8 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10 xl:gap-12">
          <motion.div
            style={{ y: contentY }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative order-2 z-10 self-start lg:order-1 lg:self-center"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-3">
              {siteConfig.hero.eyebrow}
            </motion.p>

            <div className="mb-6">
              <HeroSlideNav slides={heroSlides} active={active} onSelect={goTo} />
            </div>

            <div className="relative mb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="text-display relative text-foreground">
                    <span className="block">{slide.title}</span>
                    <span className="mt-1 block text-secondary">
                      {slide.highlight}
                    </span>
                  </h1>
                  <p className="text-lead mt-5 max-w-lg border-l-2 border-gold/40 pl-4">
                    {slide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href="/book-appointment"
                showArrow
                className="btn-shimmer w-full sm:w-auto"
              >
                Book an Appointment
              </Button>
              <Button
                href="/treatments"
                variant="secondary"
                showArrow
                className="w-full sm:w-auto"
              >
                Explore Treatments
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4"
            >
              <div className="hero-glass-card flex items-start gap-3 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/15 to-gold/10 text-secondary ring-1 ring-gold/25">
                  <Sparkles className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold">Digital precision</p>
                  <p className="text-xs leading-relaxed text-muted">
                    Advanced diagnostics & smile design
                  </p>
                </div>
              </div>
              <div className="hero-glass-card flex items-start gap-3 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/15 to-gold/10 text-secondary ring-1 ring-gold/25">
                  <Calendar className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold">Daily appointments</p>
                  <p className="text-xs leading-relaxed text-muted">9:30 AM – 10:00 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative order-1 mx-auto w-full max-w-md self-start lg:order-2 lg:max-w-none lg:justify-self-end lg:self-center">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative lg:pl-6"
            >
              <div
                aria-hidden
                className="absolute -right-4 top-8 hidden h-[88%] w-[88%] rounded-[2rem] border border-gold/30 lg:block"
              />
              <div
                aria-hidden
                className="absolute -left-2 bottom-12 hidden h-24 w-24 rounded-full border border-secondary/25 lg:block"
              />

              <HeroMediaSlider
                active={active}
                onSlideChange={setActive}
                swiperRef={swiperRef}
              />

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="absolute -right-2 top-6 z-20 hidden rounded-2xl border border-gold/30 bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-md sm:flex sm:flex-col"
              >
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-gold"
                      strokeWidth={0}
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="font-heading text-2xl font-bold leading-none text-primary">
                  {siteConfig.doctor.googleRating}
                  <span className="text-sm font-semibold text-muted"> /5</span>
                </p>
                <p className="text-[0.6rem] font-bold uppercase tracking-widest text-muted">
                  Google rating
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="absolute -bottom-4 -left-2 z-20 max-w-[11rem] rounded-2xl border border-primary/10 bg-primary px-4 py-3 text-white shadow-2xl sm:-left-5"
              >
                <p className="flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-gold">
                  <MapPin className="h-3 w-3" aria-hidden />
                  Bengaluru
                </p>
                <p className="mt-1 font-heading text-sm font-bold leading-snug">
                  Digital dentistry & smile design
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full max-w-md sm:max-w-xs">
            <div className="mb-2 flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-widest text-muted">
              <span>Story {slideIndexLabel}</span>
              <span>{heroSlides.length.toString().padStart(2, "0")} slides</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-primary/10">
              <motion.div
                key={active}
                className="h-full origin-left rounded-full bg-gradient-to-r from-secondary via-secondary to-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              />
            </div>
          </div>

          <motion.a
            href="#trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/35 bg-surface/80 transition-colors group-hover:border-secondary/40 group-hover:text-secondary">
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              >
                <ArrowDown className="h-4 w-4" aria-hidden />
              </motion.span>
            </span>
            <span>Scroll to explore</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
