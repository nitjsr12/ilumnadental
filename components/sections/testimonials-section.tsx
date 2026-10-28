"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import type { Swiper as SwiperType } from "swiper";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site-config";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";

const TestimonialCarousel = dynamic(
  () =>
    import("@/components/sections/testimonial-carousel").then(
      (m) => m.TestimonialCarousel,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="testimonials-premium-card mx-auto h-[22rem] max-w-3xl animate-pulse bg-white/80"
        aria-hidden
      />
    ),
  },
);

export function TestimonialsSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      className="premium-section-muted section-pad relative overflow-x-clip"
    >
      <div aria-hidden className="testimonials-premium-bg pointer-events-none absolute inset-0" />

      <div className="hero-page-gutter relative z-10">
        {!hideHeading && (
          <>
            <PremiumSectionHeader
              badge="Patient stories"
              title={
                <>
                  <PremiumTitleDark>What Our </PremiumTitleDark>
                  <PremiumTitleBlue>Patients </PremiumTitleBlue>
                  <PremiumTitleGold>Say</PremiumTitleGold>
                </>
              }
              description={`Don't just take our word for it. Here's what our patients have to say about their experience at ${siteConfig.name}, Jayanagar.`}
            />
            <motion.p
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mx-auto mt-5 max-w-3xl text-center"
            >
              <Link
                href={siteConfig.contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-base font-semibold text-[#1781be] transition-colors hover:text-[#04437f]"
              >
                View all Google Reviews
                <span aria-hidden>→</span>
              </Link>
            </motion.p>
          </>
        )}

        <div className={hideHeading ? "mt-0" : "mt-8 sm:mt-9"}>
          <TestimonialCarousel
            items={testimonials}
            swiperRef={swiperRef}
            onSlideChange={setActive}
          />
        </div>
      </div>
    </section>
  );
}
