"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialReviewCard } from "@/components/sections/testimonial-review-card";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  items: Testimonial[];
  swiperRef?: React.MutableRefObject<SwiperType | null>;
  onSlideChange?: (index: number) => void;
};

export function TestimonialCarousel({ items, swiperRef, onSlideChange }: Props) {
  const internalRef = useRef<SwiperType | null>(null);
  const ref = swiperRef ?? internalRef;

  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-primary/10 bg-surface p-8 text-center text-sm text-muted">
        No stories in this category yet.
      </p>
    );
  }

  return (
    <Swiper
      key={items.map((i) => i.id).join("-")}
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={16}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={650}
      breakpoints={{
        640: { slidesPerView: 1.15, spaceBetween: 18 },
        900: { slidesPerView: 1.35, spaceBetween: 20 },
        1280: { slidesPerView: 2, spaceBetween: 22 },
      }}
      onSwiper={(s) => {
        ref.current = s;
      }}
      onSlideChange={(s) => onSlideChange?.(s.realIndex)}
      className="testimonials-swiper !pb-10"
    >
      {items.map((t) => (
        <SwiperSlide key={t.id} className="!h-auto">
          <TestimonialReviewCard item={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
