"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import {
  WhyChooseFeatureCard,
  type WhyChooseFeature,
} from "@/components/sections/why-choose-feature-card";
import { PremiumSectionHeader } from "@/components/ui/premium-section-header";
import { Button } from "@/components/ui/button";
import { FlyingDentalDecor } from "@/components/decor/flying-dental-decor";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import {
  ClipboardList,
  Cpu,
  Gem,
  Heart,
  Shield,
  Stethoscope,
} from "lucide-react";

const highlights = [
  "Led by Dr. Inchara Vadegadde, MDS",
  "Digital planning & precise diagnostics",
  "Comfort-first care in Jayanagar",
] as const;

const features: WhyChooseFeature[] = [
  {
    icon: Stethoscope,
    title: "Experienced Dental Care",
    text: "Thoughtful clinical expertise and a dedicated team focused on your long-term smile health.",
  },
  {
    icon: Cpu,
    title: "Advanced Digital Dentistry",
    text: "Digital diagnostics and planning for accurate, precise treatment decisions.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Treatment Plans",
    text: "Customized plans shaped around your needs, comfort, and goals.",
  },
  {
    icon: Gem,
    title: "Precision & Aesthetic Excellence",
    text: "Natural, harmonious smiles that balance health, function, and aesthetics.",
  },
  {
    icon: Heart,
    title: "Comfortable Patient Experience",
    text: "A warm, refined environment designed to make every visit reassuring.",
  },
  {
    icon: Shield,
    title: "Long-Term Oral Health",
    text: "Preventive, evidence-based care focused on lasting function and confidence.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-pad relative overflow-x-clip">
      <div className="hero-page-gutter relative z-10">
        <div className="why-choose-panel relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#021a33] via-[#04437f] to-[#0a5a9c] px-6 py-8 text-white ring-1 ring-inset ring-white/10 sm:px-10 sm:py-10 lg:rounded-[2rem] lg:px-12 lg:py-11">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:20px_20px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(5,162,164,0.28),transparent_55%),radial-gradient(ellipse_55%_50%_at_100%_100%,rgba(245,215,110,0.16),transparent_50%)]"
          />
          <FlyingDentalDecor variant="dark" density="medium" className="opacity-80" />

          <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16">
            <div className="flex max-w-xl flex-col">
              <PremiumSectionHeader
                tone="dark"
                badge="Why choose us"
                align="left"
                title={
                  <>
                    <span className="text-white">Why Choose </span>
                    <span className="bg-gradient-to-r from-[#9dd4f5] via-white to-[#f5d76e] bg-clip-text text-transparent">
                      iLUMNA Dental?
                    </span>
                  </>
                }
                description="Advanced dentistry, personalized treatment, and exceptional care designed around your long-term oral health."
                className="max-w-lg !mx-0 !text-left"
                titleClassName="!text-[clamp(1.75rem,3.2vw,2.5rem)] !leading-[1.12]"
                descriptionClassName="!text-white/78 !text-base"
              />

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/85">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-semibold backdrop-blur-sm">
                  <Star className="h-4 w-4 fill-[#f5d76e] text-[#f5d76e]" aria-hidden />
                  {siteConfig.doctor.googleRating} Google rating
                </span>
                <span className="inline-flex items-center gap-1.5 text-white/70">
                  <Sparkles className="h-4 w-4 text-[#05a2a4]" aria-hidden />
                  Jayanagar, Bengaluru
                </span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {highlights.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-sm text-white/88 sm:text-[0.9375rem]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#05a2a4]/25 text-[#9cf0f0]">
                      <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href="/about"
                  showArrow
                  className="!bg-gradient-to-r !from-[#05a2a4] !to-[#1781be] !shadow-[0_14px_36px_-14px_rgba(5,162,164,0.55)] w-full sm:w-auto"
                >
                  Meet our team
                </Button>
                <a
                  href="/book-appointment"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 sm:w-auto"
                >
                  Book a visit
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.55 }}
                className="relative mt-8 w-full max-w-md overflow-hidden rounded-2xl border border-white/15 shadow-[0_28px_56px_-28px_rgba(0,0,0,0.5)]"
              >
                <div className="relative aspect-[4/5] sm:aspect-[5/3] bg-white">
                  <Image
                    src={images.whyChooseChair}
                    alt="Gentle dental treatment at iLUMNA Dental, Jayanagar"
                    fill
                    sizes="(max-width: 1024px) 88vw, 22rem"
                    className="object-contain object-center p-2 sm:p-3"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021a33]/80 via-[#021a33]/15 to-transparent" />
                  <p className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white/95">
                    Gentle in-chair care with your comfort at the center.
                  </p>
                </div>
              </motion.div>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {features.map((f, i) => (
                <WhyChooseFeatureCard key={f.title} feature={f} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}