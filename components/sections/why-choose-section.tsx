"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ClipboardList,
  Cpu,
  Gem,
  Heart,
  Play,
  Shield,
  Stethoscope,
} from "lucide-react";
import {
  WhyChooseFeatureCard,
  type WhyChooseFeature,
} from "@/components/sections/why-choose-feature-card";
import {
  PremiumSectionHeader,
} from "@/components/ui/premium-section-header";
import { images } from "@/lib/images";

const CDN = "https://ilumnadental.in/wp-content/uploads/2026/08";

const features: WhyChooseFeature[] = [
  {
    icon: Stethoscope,
    title: "Experienced Dental Care",
    text: "Thoughtful clinical expertise led by Dr. Inchara Vadegadde and a dedicated care team.",
    hoverImage: images.consultation,
    hoverImageAlt: "Dental consultation at iLUMNA Dental",
  },
  {
    icon: Cpu,
    title: "Advanced Digital Dentistry",
    text: "Digital diagnostics and planning for accurate, precise treatment decisions.",
    hoverImage: images.heroSecondary,
    hoverImageAlt: "Digital dentistry at iLUMNA Dental",
  },
  {
    icon: ClipboardList,
    title: "Personalized Treatment Plans",
    text: "Customized plans shaped around your dental needs, comfort, and long-term goals.",
    hoverImage: images.aboutClinic,
    hoverImageAlt: "Personalized dental care planning",
  },
  {
    icon: Gem,
    title: "Precision & Aesthetic Excellence",
    text: "Natural, harmonious smiles that balance health, function, and aesthetics.",
    hoverImage: images.smile,
    hoverImageAlt: "Smile design and aesthetics",
  },
  {
    icon: Heart,
    title: "Comfortable Patient Experience",
    text: "A warm, refined environment designed to make every visit reassuring.",
    hoverImage: images.clinicInterior,
    hoverImageAlt: "Comfortable iLUMNA Dental clinic interior",
  },
  {
    icon: Shield,
    title: "Long-Term Oral Health",
    text: "Preventive, evidence-based care focused on lasting function and confidence.",
    hoverImage: `${CDN}/Advanced-Implant-Dentistry.jpeg`,
    hoverImageAlt: "Long-term oral health and implant care",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-pad relative overflow-x-clip">
      <div className="hero-page-gutter relative z-10">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#021a33] via-[#04437f] to-[#0d6eb8] px-6 py-7 text-white shadow-[0_36px_88px_-40px_rgba(4,67,127,0.45)] ring-1 ring-inset ring-white/10 sm:px-10 sm:py-8 lg:rounded-[2rem] lg:px-12 lg:py-9">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:22px_22px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_30%,rgba(5,162,164,0.22),transparent_55%),radial-gradient(ellipse_50%_45%_at_95%_70%,rgba(245,215,110,0.14),transparent_50%)]"
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="flex flex-col justify-center lg:pe-4 xl:pe-8">
              <PremiumSectionHeader
                tone="dark"
                badge="Why choose us"
                align="left"
                title={
                  <>
                    <span className="text-white">Why Choose </span>
                    <span className="text-[#9dd4f5]">iLUMNA</span>
                    <span className="text-[#f5d76e]"> Dental?</span>
                  </>
                }
                description="Advanced dentistry, personalized treatment, and exceptional care designed around your long-term oral health."
                className="max-w-lg !mx-0 !text-left"
              />

              <div className="mt-6 space-y-5 lg:mt-7">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5d76e]"
                >
                  <span className="relative flex h-14 w-14 items-center justify-center">
                    <motion.span
                      aria-hidden
                      animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full border border-[#05a2a4]/50"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
                    />
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#05a2a4] text-white shadow-lg shadow-[#05a2a4]/40 transition-transform group-hover:scale-105">
                      <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
                    </span>
                  </span>
                  <span className="font-heading text-sm font-bold tracking-wide text-white group-hover:text-[#f5d76e] sm:text-base">
                    About our clinic
                  </span>
                </Link>

                <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/20 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={images.consultation}
                      alt="Dental care at iLUMNA Dental, Jayanagar"
                      fill
                      sizes="(max-width: 1024px) 80vw, 20rem"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021a33]/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center lg:justify-end">
              <ul className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:max-w-none">
                {features.map((f, i) => (
                  <WhyChooseFeatureCard key={f.title} feature={f} index={i} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
