"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { images, pageBanners, type PageBannerKey } from "@/lib/images";

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  imageSrc?: string;
  banner?: PageBannerKey;
  priority?: boolean;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  imageSrc,
  banner = "default",
  priority = false,
  className,
}: PageHeroProps) {
  const src = imageSrc ?? pageBanners[banner] ?? images.heroPrimary;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      ref={ref}
      className={cn(
        "page-hero-banner relative min-h-[min(34vh,22rem)] overflow-hidden border-b border-primary/10 sm:min-h-[min(38vh,24rem)]",
        className,
      )}
    >
      <div className="absolute inset-0" aria-hidden>
        <motion.div style={{ scale }} className="page-hero-media absolute inset-0">
          <Image
            src={src}
            alt=""
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover object-[center_28%]"
          />
        </motion.div>
        <div className="page-hero-overlay absolute inset-0 bg-gradient-to-r from-[#021a33]/94 via-[#04437f]/72 to-[#0d6eb8]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021a33]/55 via-transparent to-[#021a33]/25" />
      </div>

      <div className="hero-page-gutter relative z-10 flex min-h-[min(34vh,22rem)] flex-col justify-end py-8 sm:min-h-[min(38vh,24rem)] sm:py-9 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#f5d76e]" strokeWidth={2} aria-hidden />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="max-w-3xl text-[clamp(1.75rem,3.5vw,2.625rem)] font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_24px_rgba(2,26,51,0.45)]"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-[#f5d76e] via-[#05a2a4] to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}