"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { FlyingDentalDecor } from "@/components/decor/flying-dental-decor";
import { YoutubeEmbed } from "@/components/ui/youtube-embed";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import {
  videoTestimonials,
  videoTestimonialsContent,
  youtubeThumbnailUrl,
} from "@/data/video-testimonials";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

export function VideoTestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const featured =
    videoTestimonials.find((v) => v.featured) ?? videoTestimonials[0] ?? null;

  const [activeId, setActiveId] = useState(featured?.id ?? videoTestimonials[0]?.id ?? "");
  const [userStarted, setUserStarted] = useState(false);
  const active =
    videoTestimonials.find((v) => v.id === activeId) ?? featured ?? videoTestimonials[0];

  if (!active) return null;

  return (
    <section
      id="video-testimonials"
      className="video-testimonials-section premium-section-muted relative overflow-x-clip section-pad"
    >
      <div aria-hidden className="video-testimonials-bg pointer-events-none absolute inset-0" />
      <FlyingDentalDecor density="soft" />

      <div className="hero-page-gutter relative z-10">
        <PremiumSectionHeader
          badge={videoTestimonialsContent.eyebrow}
          badgeVariant="plain"
          title={
            <>
              <PremiumTitleDark>{videoTestimonialsContent.titleLead} </PremiumTitleDark>
              <PremiumTitleBlue>{videoTestimonialsContent.titleAccent}</PremiumTitleBlue>
            </>
          }
          description={videoTestimonialsContent.description}
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: easeSmooth }}
          className="video-testimonials-panel mt-10 rounded-[1.5rem] border border-[#04437f]/10 bg-white p-4 shadow-[0_32px_72px_-40px_rgba(4,67,127,0.35)] sm:p-6 lg:mt-12 lg:rounded-[1.75rem] lg:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start lg:gap-8">
            <motion.div layout className="min-w-0">
              <motion.div
                layout
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                <YoutubeEmbed
                  key={active.youtubeId}
                  videoId={active.youtubeId}
                  title={active.title}
                  startActive={userStarted}
                  className="shadow-[0_20px_48px_-28px_rgba(4,67,127,0.45)]"
                />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: easeSmooth }}
                  className="mt-4 flex flex-wrap items-start justify-between gap-3 border-t border-[#04437f]/8 pt-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1781be]">
                      {active.treatment}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold leading-snug text-[#0d1b3e] sm:text-xl">
                      {active.title}
                    </h3>
                  </div>
                  <Link
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#1781be]/25 bg-[#f0f8ff] px-4 py-2 text-sm font-semibold text-[#04437f] transition-all hover:border-[#1781be]/45 hover:bg-[#e8f4fc] hover:text-[#1781be]"
                  >
                    More on YouTube
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <ul className="flex flex-col gap-3" aria-label="Choose a patient story">
              {videoTestimonials.map((item, i) => {
                const isSelected = item.id === active.id;
                return (
                  <motion.li
                    key={item.id}
                    layout="position"
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: easeSmooth }}
                    className="list-none"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setUserStarted(true);
                        setActiveId(item.id);
                      }}
                      className={cn(
                        "video-testimonial-pick group relative flex w-full gap-3 overflow-hidden rounded-2xl border p-3 text-left transition-[border-color,box-shadow,transform] duration-300 ease-out sm:p-3.5",
                        isSelected
                          ? "border-[#1781be]/40 bg-gradient-to-br from-[#f0f8ff] to-white shadow-[0_14px_36px_-22px_rgba(4,67,127,0.35)]"
                          : "border-[#04437f]/10 bg-[#fafcff] hover:-translate-y-0.5 hover:border-[#1781be]/25 hover:shadow-[0_12px_28px_-20px_rgba(4,67,127,0.28)]",
                      )}
                    >
                      {isSelected ? (
                        <motion.span
                          layoutId="video-testimonial-active-ring"
                          className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-[#05a2a4]/45 ring-offset-2 ring-offset-white"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}

                      <motion.span
                        className="relative h-[4.75rem] w-32 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36"
                        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <Image
                          src={youtubeThumbnailUrl(item.youtubeId)}
                          alt=""
                          fill
                          sizes="144px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-[#021a33]/50 via-transparent to-transparent" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span
                            className={cn(
                              "flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-110",
                              isSelected
                                ? "bg-[#04437f] text-white"
                                : "bg-white/95 text-[#04437f]",
                            )}
                          >
                            <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
                          </span>
                        </span>
                      </motion.span>

                      <span className="relative min-w-0 flex-1 py-0.5">
                        <span className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#1781be]">
                          {isSelected ? (
                            <Sparkles className="h-3 w-3 text-[#d4af37]" aria-hidden />
                          ) : null}
                          {item.treatment}
                        </span>
                        <span className="mt-1 block text-sm font-bold leading-snug text-[#0d1b3e] sm:text-[0.9375rem]">
                          {item.title}
                        </span>
                        <span
                          className={cn(
                            "mt-2 block text-xs font-medium",
                            isSelected ? "text-[#05a2a4]" : "text-[#64748b]",
                          )}
                        >
                          {isSelected ? "Now playing" : "Tap to watch"}
                        </span>
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}