"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { Clock, Phone, Sparkles, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneHref } from "@/lib/utils";
import { staggerContainer } from "@/components/animations/variants";

const CTA_BADGE_SRC = "/cta-dental-badge.png";

const BADGE_SPARKLES = [
  { className: "left-[6%] top-[32%]", delay: 0 },
  { className: "left-[4%] top-[52%]", delay: 0.6 },
  { className: "right-[8%] top-[28%]", delay: 1.1 },
  { className: "right-[5%] top-[48%]", delay: 0.35 },
] as const;

const ctaReveal: Variants = {
  hidden: { opacity: 1, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

type CtaBannerSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  showAddress?: boolean;
};

function renderTitle(title: string, highlight: string) {
  const idx = title.indexOf(highlight);
  if (idx === -1) return <span>{title}</span>;
  return (
    <>
      {title.slice(0, idx)}
      <span className="bg-gradient-to-r from-[#ffe082] via-[#f5d76e] to-[#d4af37] bg-clip-text text-transparent">
        {highlight}
      </span>
      {title.slice(idx + highlight.length)}
    </>
  );
}

function CtaDentalBadge({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="relative mx-auto w-[min(100%,15rem)] sm:w-[17rem] lg:mx-0 lg:w-[19rem]">
      <motion.div
        aria-hidden
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.1, 1], opacity: [0.35, 0.6, 0.35] }
        }
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[2%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,rgba(5,162,164,0.25)_40%,transparent_72%)] blur-md"
      />

      {!reduceMotion && (
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="aspect-square h-[94%] w-[94%] rounded-full border border-dashed border-white/30" />
        </motion.div>
      )}

      {!reduceMotion &&
        BADGE_SPARKLES.map(({ className, delay }, i) => (
          <motion.span
            key={i}
            aria-hidden
            className={`pointer-events-none absolute ${className}`}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.85, 1.15, 0.85],
              rotate: [0, 18, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <Sparkles className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={2} />
          </motion.span>
        ))}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -14, 0],
                rotate: [-1.5, 1.5, -1.5],
              }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          animate={reduceMotion ? undefined : { scale: [1, 1.03, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <Image
            src={CTA_BADGE_SRC}
            alt="Dental aligners and smile care at iLUMNA Dental"
            width={640}
            height={640}
            sizes="(max-width: 1024px) 45vw, 19rem"
            className="relative h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            priority={false}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function CtaBannerSection({
  id = "contact",
  eyebrow = "Transform Your Smile Today",
  title = "Unlock Your Beautiful Smile",
  titleHighlight = "Smile",
  description = "Take the first step towards your perfect smile. Schedule a consultation and discover how we can transform your dental health.",
  showAddress = false,
}: CtaBannerSectionProps = {}) {
  const reduceMotion = useReducedMotion();
  const highlightInDescription = "perfect smile";
  const descriptionParts = description.split(new RegExp(`(${highlightInDescription})`, "i"));
  const useDescriptionHighlight = descriptionParts.length > 1;
  const { doctor, contact } = siteConfig;

  return (
    <section id={id} className="relative w-full overflow-x-clip">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative overflow-hidden bg-gradient-to-br from-[#021a33] via-[#04437f] to-[#0d6eb8] py-8 text-white sm:py-9 lg:py-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_30%,rgba(5,162,164,0.22),transparent_55%),radial-gradient(ellipse_50%_45%_at_95%_70%,rgba(245,215,110,0.14),transparent_50%)]"
        />

        <div className="hero-page-gutter relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.div
                variants={ctaReveal}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#f5d76e]" aria-hidden />
                {eyebrow}
                <Sparkles className="h-3.5 w-3.5 text-[#f5d76e]" aria-hidden />
              </motion.div>

              <motion.h2
                variants={ctaReveal}
                className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white"
              >
                {renderTitle(title, titleHighlight)}
              </motion.h2>

              <motion.p
                variants={ctaReveal}
                className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg"
              >
                {useDescriptionHighlight
                  ? descriptionParts.map((part, i) =>
                      part.toLowerCase() === highlightInDescription.toLowerCase() ? (
                        <strong key={i} className="font-semibold text-[#ffe082]">
                          {part}
                        </strong>
                      ) : (
                        <span key={i}>{part}</span>
                      ),
                    )
                  : description}
              </motion.p>

              {showAddress && (
                <motion.p variants={ctaReveal} className="mt-3 text-sm text-white/70">
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
                </motion.p>
              )}

              <motion.div variants={ctaReveal} className="mt-5 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold sm:text-sm">
                  <Star className="h-3.5 w-3.5 fill-[#f5d76e] text-[#f5d76e]" aria-hidden />
                  {doctor.googleRating} Google rating
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 sm:text-sm">
                  <Clock className="h-3.5 w-3.5 text-[#05a2a4]" aria-hidden />
                  {contact.hours[0]?.time}
                </span>
              </motion.div>

              <motion.div
                variants={ctaReveal}
                className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Link
                  href="/book-appointment"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-[#04437f] shadow-[0_16px_40px_-14px_rgba(255,255,255,0.5)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <Sparkles className="h-4 w-4 text-[#1781be]" aria-hidden />
                  Book Your Consultation
                  <span aria-hidden>→</span>
                </Link>

                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="hidden h-9 w-px bg-white/30 sm:block" aria-hidden />
                  <span className="text-sm text-white/65">or</span>
                  <Link
                    href={formatPhoneHref(siteConfig.contact.phone)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#ffe082] sm:text-base"
                  >
                    <Phone className="h-4 w-4 text-[#f5d76e]" aria-hidden />
                    Call {siteConfig.contact.phone}
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div variants={ctaReveal} className="flex justify-center lg:justify-end">
              <CtaDentalBadge reduceMotion={reduceMotion} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
