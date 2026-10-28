"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { heroSlides } from "@/data/hero-slides";
import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  active: number;
  onSlideChange: (index: number) => void;
  swiperRef: React.MutableRefObject<SwiperType | null>;
};

export default function HeroMediaSlider({
  active,
  onSlideChange,
  swiperRef,
}: Props) {
  const slide = heroSlides[active] ?? heroSlides[0];
  const shortLabel = slide.tab.replace(/^\d+\s·\s*/, "");

  return (
    <div className="hero-media-shell hero-swiper relative">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-secondary/25 via-gold/15 to-transparent blur-2xl"
      />

      <div className="hero-media-frame relative overflow-hidden shadow-[0_40px_100px_-36px_rgba(18,36,47,0.55)] ring-1 ring-gold/25">
        <Swiper
          modules={[Autoplay, EffectFade, A11y]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          onSlideChange={(s) => onSlideChange(s.realIndex)}
          className="!absolute inset-0 h-full w-full"
        >
          {heroSlides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="relative h-full w-full">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  priority={s.id === "care"}
                  sizes="(max-width: 1024px) 88vw, 42vw"
                  className="object-cover scale-105 transition-transform duration-[900ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-primary/5 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-white/10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent" />

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="absolute left-4 top-4 z-10 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md"
          >
            {shortLabel}
          </motion.div>
        </AnimatePresence>

        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-gold to-transparent opacity-80"
        />
      </div>
    </div>
  );
}
