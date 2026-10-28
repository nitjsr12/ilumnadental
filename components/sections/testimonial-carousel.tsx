"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialReviewCard } from "@/components/sections/testimonial-review-card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type Props = {
  items: Testimonial[];
  swiperRef?: React.MutableRefObject<SwiperType | null>;
  onSlideChange?: (index: number) => void;
};

export function TestimonialCarousel({ items, swiperRef, onSlideChange }: Props) {
  const internalRef = useRef<SwiperType | null>(null);
  const ref = swiperRef ?? internalRef;
  const paginationRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-primary/10 bg-white p-8 text-center text-sm text-muted">
        No patient stories to show yet.
      </p>
    );
  }

  return (
    <div className="testimonials-premium-card relative mx-auto w-full max-w-3xl">
      <div aria-hidden className="testimonials-premium-quote-mark">
        &ldquo;
      </div>

      <Swiper
        key={items.map((i) => i.id).join("-")}
        modules={[Autoplay, Pagination, A11y, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: paginationRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.pagination === "object" && swiper.params.pagination) {
            swiper.params.pagination.el = paginationRef.current;
          }
        }}
        autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={700}
        onSwiper={(s) => {
          ref.current = s;
        }}
        onSlideChange={(s) => onSlideChange?.(s.realIndex)}
        className="testimonials-premium-swiper"
      >
        {items.map((t) => (
          <SwiperSlide key={t.id}>
            <TestimonialReviewCard item={t} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={paginationRef}
        className="testimonials-premium-dots swiper-pagination !static flex justify-center gap-2 px-6 pb-8 pt-4"
      />
    </div>
  );
}
