"use client";

import { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import type { Swiper as SwiperType } from "swiper";
import { SectionShell } from "@/components/ui/section-shell";
import { Button } from "@/components/ui/button";
import { treatments } from "@/data/treatments";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { cn } from "@/lib/utils";
import { CarouselArrowControls } from "@/components/ui/carousel-arrow-controls";

const TreatmentsCarousel = dynamic(
  () =>
    import("@/components/sections/treatments-carousel").then(
      (m) => m.TreatmentsCarousel,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((t) => (
          <div
            key={t.slug}
            className="h-[22rem] animate-pulse rounded-2xl bg-primary/5 ring-1 ring-gold/10"
          />
        ))}
      </div>
    ),
  },
);

export function TreatmentsSection() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const activeTreatment = treatments[active] ?? treatments[0];

  const goTo = useCallback((index: number) => {
    setActive(index);
    swiperRef.current?.slideTo(index);
  }, []);

  const goPrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const goNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <SectionShell
      id="treatments"
      variant="muted"
      className="relative overflow-hidden"
    >
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full bg-secondary/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-2">
            Treatments & services
          </motion.p>

          <motion.h2 variants={fadeUp} className="section-title">
            Advanced dental care for healthy, confident smiles
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-3 max-w-xl">
            From dental implants and Invisalign to smile design and root canal care —
            personalized treatments with digital precision.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="shrink-0"
        >
          <Button href="/treatments" variant="secondary" className="btn-shimmer" showArrow>
            View all treatments
          </Button>
        </motion.div>
      </div>

      <motion.nav
        aria-label="Browse treatments"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mt-8 flex flex-row flex-wrap gap-2"
      >
        {treatments.map((t, i) => {
          const isActive = active === i;
          return (
            <button
              key={t.slug}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "relative overflow-hidden rounded-full border px-3.5 py-2 text-left text-sm font-medium transition-colors duration-300",
                isActive
                  ? "border-secondary text-white"
                  : "border-primary/12 bg-surface/80 text-muted hover:border-secondary/35 hover:text-primary",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="treatment-pill"
                  className="absolute inset-0 bg-secondary shadow-md shadow-secondary/25"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t.category}</span>
            </button>
          );
        })}
      </motion.nav>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.p
          key={activeTreatment.slug}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-medium text-muted"
        >
          Now viewing:{" "}
          <span className="font-semibold text-secondary">{activeTreatment.title}</span>
        </motion.p>

        <CarouselArrowControls
          current={active}
          total={treatments.length}
          onPrev={goPrev}
          onNext={goNext}
          className="sm:ml-auto"
        />
      </div>

      <div className="relative mt-6 overflow-hidden sm:mt-8 sm:px-2 lg:px-4">
        <TreatmentsCarousel
          items={treatments}
          swiperRef={swiperRef}
          onSlideChange={setActive}
        />
      </div>
    </SectionShell>
  );
}
