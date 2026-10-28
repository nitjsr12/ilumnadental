"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import type { Swiper as SwiperType } from "swiper";
import { SectionShell } from "@/components/ui/section-shell";
import { CarouselArrowControls } from "@/components/ui/carousel-arrow-controls";
import { TestimonialFeaturedCard } from "@/components/sections/testimonial-featured-card";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { cn } from "@/lib/utils";

const TestimonialCarousel = dynamic(
  () =>
    import("@/components/sections/testimonial-carousel").then(
      (m) => m.TestimonialCarousel,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-[20rem] animate-pulse rounded-2xl bg-primary/5" aria-hidden />
    ),
  },
);

function treatmentFilterKey(value: string) {
  return value.trim().toLowerCase();
}

function formatFilterLabel(value: string) {
  return value
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function TestimonialsSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState<string>("All");
  const swiperRef = useRef<SwiperType | null>(null);

  const filterOptions = useMemo(() => {
    const preferred = ["Root canal", "Wisdom tooth", "Gum infection"];
    const fromData = [
      ...new Set(
        testimonials.map((t) => t.treatment).filter((t): t is string => Boolean(t)),
      ),
    ];
    const ordered = [
      ...preferred.filter((p) =>
        fromData.some((d) => treatmentFilterKey(d) === treatmentFilterKey(p)),
      ),
      ...fromData.filter(
        (d) => !preferred.some((p) => treatmentFilterKey(p) === treatmentFilterKey(d)),
      ),
    ];
    return ["All", ...ordered];
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return testimonials;
    return testimonials.filter(
      (t) => t.treatment && treatmentFilterKey(t.treatment) === treatmentFilterKey(filter),
    );
  }, [filter]);

  const selectFilter = useCallback((option: string) => {
    setFilter(option);
    setActive(0);
    swiperRef.current?.slideTo(0, 0);
  }, []);

  const goPrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    <SectionShell className={`relative overflow-hidden ${hideHeading ? "!pt-6" : ""}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />

      {!hideHeading && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-2">
            Testimonials
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Stories of care and recovery
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-3 max-w-2xl">
            Patient experiences shared on Google — thank you to every patient who trusted
            iLUMNA Dental.
          </motion.p>
        </motion.div>
      )}

      <motion.nav
        aria-label="Filter reviews"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn("flex flex-wrap gap-2", hideHeading ? "mt-0" : "mt-6")}
      >
        {filterOptions.map((option) => {
          const isActive = filter === option;
          const label = option === "All" ? "All" : formatFilterLabel(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => selectFilter(option)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                isActive ? "text-white" : "text-primary hover:text-secondary",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="testimonial-filter-pill"
                  className="absolute inset-0 rounded-full bg-primary shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </motion.nav>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <div className="w-full shrink-0 lg:max-w-[17.5rem] xl:max-w-xs">
          <TestimonialFeaturedCard reviewCount={testimonials.length} />
        </div>

        <div className="min-w-0 flex-1">
          {filtered.length > 0 && (
            <div className="mb-5 flex justify-end">
              <CarouselArrowControls
                current={active}
                total={filtered.length}
                onPrev={goPrev}
                onNext={goNext}
              />
            </div>
          )}
          <TestimonialCarousel
            items={filtered}
            swiperRef={swiperRef}
            onSlideChange={setActive}
          />
        </div>
      </div>
    </SectionShell>
  );
}
