"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { aboutPageIntro } from "@/data/about-page";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

export function AboutIntroSection() {
  const { doctor } = siteConfig;

  return (
    <SectionShell variant="surface" className="relative overflow-hidden !pt-0">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-20" />
      <div aria-hidden className="brand-mesh pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-secondary/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-1/3 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -right-4 top-8 hidden h-[88%] w-[88%] rounded-[2rem] border border-gold/35 lg:block"
          />

          <div className="doctor-portrait-shell relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-secondary/25 via-gold/15 to-transparent blur-2xl"
            />
            <div className="doctor-portrait-frame relative overflow-hidden">
              <Image
                src={doctor.portrait.src}
                alt={doctor.portrait.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-contain object-bottom p-2 sm:p-4"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="absolute left-3 top-4 z-10 flex items-center gap-2 rounded-full border border-white/30 bg-primary/85 px-3 py-1.5 text-white shadow-lg backdrop-blur-md sm:left-5"
            >
              <Award className="h-3.5 w-3.5 text-gold" aria-hidden />
              <span className="text-xs font-semibold">MDS · Implantology</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="absolute -bottom-2 right-0 z-10 rounded-2xl border border-gold/30 bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-md sm:right-2"
            >
              <div className="flex items-center gap-1 text-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-star" strokeWidth={0} aria-hidden />
                ))}
              </div>
              <p className="text-xl font-semibold leading-none text-primary">
                {doctor.googleRating}
                <span className="text-sm text-muted"> /5</span>
              </p>
              <p className="text-xs text-muted">Google rating</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-2">
            {aboutPageIntro.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            {aboutPageIntro.title}
          </motion.h2>

          <div className="mt-5 space-y-4">
            {aboutPageIntro.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 48)}
                variants={fadeUp}
                className="text-base leading-relaxed text-muted"
              >
                {paragraph.startsWith("Led by Dr.") ? (
                  <>
                    Led by{" "}
                    <strong className="font-semibold text-foreground">
                      Dr. Inchara Vadegadde, BDS, MDS (Periodontics & Implantology)
                    </strong>
                    , our clinic specializes in advanced dental implants and full-mouth implant
                    rehabilitation, combining clinical expertise with modern dental techniques to
                    restore smiles with precision and confidence.
                  </>
                ) : (
                  paragraph
                )}
              </motion.p>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button href="/book-appointment" showArrow className="btn-shimmer">
              Book an Appointment
            </Button>
            <Button href="/treatments" variant="secondary" showArrow>
              Explore treatments
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
