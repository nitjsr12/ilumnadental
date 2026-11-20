"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";
import { invisalignGoogleReview } from "@/data/invisalign-page";
import { siteConfig } from "@/lib/site-config";

export function InvisalignGoogleReviewSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="invisalign-google-review"
      className="invisalign-review-section relative"
      aria-labelledby="invisalign-review-heading"
    >
      <span
        className="invisalign-section-tag pointer-events-none absolute right-4 top-4 hidden text-[4.5rem] font-black leading-none text-[#04437f]/[0.06] sm:right-8 sm:top-6 lg:block"
        aria-hidden
      >
        04
      </span>

      <div aria-hidden className="invisalign-review-mesh pointer-events-none absolute inset-0 rounded-[inherit]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="invisalign-review-panel relative overflow-hidden rounded-[1.75rem] border border-[#04437f]/10 bg-white shadow-[0_32px_70px_-36px_rgba(4,67,127,0.28)] lg:rounded-[2.25rem]"
      >
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative min-h-[16rem] lg:min-h-[22rem]"
          >
            <Image
              src={invisalignGoogleReview.image.src}
              alt={invisalignGoogleReview.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021a33]/55 via-[#021a33]/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#021a33]/20" />

            <div className="invisalign-review-google-pill absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm">
              <span className="text-xs font-bold text-[#4285F4]">Google</span>
              <span className="flex gap-0.5" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#f5d76e] text-[#f5d76e]" />
                ))}
              </span>
              <span className="text-xs font-bold text-[#0d1b3e]">{siteConfig.doctor.googleRating}</span>
            </div>

            <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white drop-shadow-md lg:max-w-[85%]">
              {siteConfig.doctor.name} · {siteConfig.name}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d9488]">
              {invisalignGoogleReview.eyebrow}
            </p>
            <h2
              id="invisalign-review-heading"
              className="invisalign-display-title mt-3 text-xl font-extrabold leading-tight text-[#0d1b3e] sm:text-2xl"
            >
              {invisalignGoogleReview.title}
            </h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="invisalign-review-quote relative mt-8 rounded-2xl border border-[#04437f]/10 bg-gradient-to-br from-[#f8fcff] to-[#ecfdf5] px-5 py-6 sm:px-6"
            >
              <span className="flex gap-0.5" aria-label={`${invisalignGoogleReview.rating} out of 5 stars`}>
                {Array.from({ length: invisalignGoogleReview.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#f5d76e] text-[#f5d76e]" aria-hidden />
                ))}
              </span>
              <p className="mt-4 text-base leading-relaxed text-[#334155] sm:text-[1.05rem]">
                &ldquo;{invisalignGoogleReview.quote}&rdquo;
              </p>
              <footer className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[#04437f]/10 pt-4 text-sm">
                <cite className="not-italic font-bold text-[#0d1b3e]">{invisalignGoogleReview.author}</cite>
                <span className="text-[#64748b]">· {invisalignGoogleReview.postedAgo}</span>
                <span className="w-full text-xs font-semibold uppercase tracking-wide text-[#0d9488] sm:w-auto">
                  {invisalignGoogleReview.treatment}
                </span>
              </footer>
            </motion.blockquote>

            <Link
              href={siteConfig.contact.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="invisalign-review-cta mt-8 inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#1781be]/30 bg-white px-5 py-3 text-sm font-semibold text-[#04437f] transition-colors hover:border-[#1781be] hover:bg-[#f0f8ff]"
            >
              {invisalignGoogleReview.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}