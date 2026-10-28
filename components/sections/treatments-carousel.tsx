"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { TreatmentCard } from "@/components/ui/treatment-card";
import type { Treatment } from "@/data/treatments";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  items: Treatment[];
  swiperRef?: React.MutableRefObject<SwiperType | null>;
  onSlideChange?: (index: number) => void;
};

export function TreatmentsCarousel({ items, swiperRef, onSlideChange }: Props) {
  const internalRef = useRef<SwiperType | null>(null);
  const ref = swiperRef ?? internalRef;

  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1.08}
      centeredSlides={false}
      grabCursor
      speed={650}
      autoplay={{
        delay: 5200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        640: { slidesPerView: 1.55, spaceBetween: 22 },
        900: { slidesPerView: 2.15, spaceBetween: 24 },
        1200: { slidesPerView: 3, spaceBetween: 26 },
      }}
      onSwiper={(s) => {
        ref.current = s;
      }}
      onSlideChange={(s) => onSlideChange?.(s.realIndex)}
      className="treatments-swiper !pb-12 !pt-2"
    >
      {items.map((treatment, index) => (
        <SwiperSlide key={treatment.slug} className="!h-auto">
          <div className="treatment-card-shell h-full pb-2">
            <TreatmentCard treatment={treatment} index={index} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
