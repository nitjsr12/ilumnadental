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
import { images } from "@/lib/images";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

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
    <section className="section-container section-pad">
      <div className="why-choose-panel relative overflow-hidden rounded-[1.75rem] lg:rounded-[2rem]">
        <Image
          src={images.consultation}
          alt=""
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[2s] ease-out hover:scale-105"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-primary/92 via-[#0f2835]/88 to-primary/80"
        />
        <div
          aria-hidden
          className="why-choose-cubes pointer-events-none absolute bottom-8 left-6 h-28 w-28 opacity-70 lg:bottom-12 lg:left-10 lg:h-36 lg:w-36"
        />

        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 lg:p-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative z-10 text-white"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-2 !text-white/85">
              Why choose us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(1.5rem,2.75vw,2rem)] font-semibold leading-snug text-white"
            >
              Why Choose iLUMNA Dental?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-md text-base leading-relaxed text-white/75"
            >
              Advanced dentistry, personalized treatment, and exceptional care designed
              around your long-term oral health.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <span className="relative flex h-14 w-14 items-center justify-center">
                  <motion.span
                    aria-hidden
                    animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full border border-secondary/50"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
                  />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/40 transition-transform group-hover:scale-105">
                    <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
                  </span>
                </span>
                <span className="font-heading text-sm font-bold tracking-wide text-white group-hover:text-gold sm:text-base">
                  About our clinic
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-x-3.5 sm:gap-y-0">
            {features.map((f, i) => (
              <WhyChooseFeatureCard key={f.title} feature={f} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
