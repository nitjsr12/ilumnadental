"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FlyingDentalDecor } from "@/components/decor/flying-dental-decor";
import {
  PremiumSectionHeader,
  PremiumTitleBlue,
  PremiumTitleDark,
  PremiumTitleGold,
} from "@/components/ui/premium-section-header";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/button";

const points = [
  "Digital smile planning before treatment begins",
  "Cosmetic and restorative options tailored to you",
  "Natural-looking outcomes you can preview and discuss",
] as const;

export function SmileTransformSection() {
  return (
    <section id="smile-transform" className="premium-section-surface relative overflow-x-clip section-pad">
      <FlyingDentalDecor density="soft" />

      <div className="hero-page-gutter relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="order-2 lg:order-1">
            <BeforeAfterSlider
              beforeSrc={images.smileTransformBefore}
              afterSrc={images.smileTransformAfter}
              beforeAlt="Before smile treatment"
              afterAlt="After smile treatment at iLUMNA Dental"
              className="mx-auto w-full max-w-xl lg:mx-0"
            />
            <p className="mt-3 text-center text-xs text-[#64748b] lg:text-left">
              Drag the handle to compare — illustrative patient result.
            </p>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <PremiumSectionHeader
              badge="Smile transformations"
              align="left"
              className="!mx-0 max-w-xl !text-left"
              title={
                <>
                  <PremiumTitleDark>See the </PremiumTitleDark>
                  <PremiumTitleBlue>difference </PremiumTitleBlue>
                  <PremiumTitleGold>you can expect</PremiumTitleGold>
                </>
              }
              description="From whitening and veneers to full smile design — explore how thoughtful dentistry can restore confidence. Drag the slider to compare before and after."
            />

            <ul className="mt-6 space-y-2.5">
              {points.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-[#0d1b3e] sm:text-[0.9375rem]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#05a2a4]" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/book-appointment" showArrow className="w-full sm:w-auto">
                Book a smile consult
              </Button>
              <Link
                href="/treatments"
                className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-[#1781be] transition-colors hover:text-[#04437f] sm:w-auto"
              >
                View cosmetic treatments
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}