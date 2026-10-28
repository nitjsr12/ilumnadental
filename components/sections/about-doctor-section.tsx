"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/lib/site-config";
import { fadeUp, staggerContainer } from "@/components/animations/variants";

export function AboutDoctorSection() {
  const { doctor } = siteConfig;

  return (
    <SectionShell id="about-doctor" className="relative overflow-hidden">
      <div aria-hidden className="hero-noise pointer-events-none absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -right-6 top-10 hidden h-[85%] w-[85%] rounded-[2rem] border border-gold/35 lg:block"
          />
          <div
            aria-hidden
            className="absolute -left-4 bottom-16 h-20 w-20 rounded-full border border-secondary/30"
          />

          <div className="doctor-portrait-shell relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-secondary/20 via-gold/10 to-transparent blur-2xl"
            />
            <div className="doctor-portrait-frame relative overflow-hidden">
              <Image
                src={doctor.portrait.src}
                alt={doctor.portrait.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-contain object-bottom p-2 sm:p-4"
                priority={false}
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
              <span className="text-[0.62rem] font-bold uppercase tracking-widest">
                MDS · Implantology
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="absolute -bottom-3 right-2 z-10 rounded-2xl border border-gold/30 bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-md sm:right-4"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold" strokeWidth={0} aria-hidden />
                ))}
              </div>
              <p className="font-heading text-xl font-bold leading-none text-primary">
                {doctor.googleRating}
                <span className="text-sm text-muted"> /5</span>
              </p>
              <p className="text-[0.6rem] font-bold uppercase tracking-widest text-muted">
                Patient rating
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-2">
            Meet your dental care team
          </motion.p>

          <motion.h2 variants={fadeUp} className="section-title text-primary">
            {doctor.name}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-sm font-semibold leading-relaxed text-secondary sm:text-base"
          >
            {doctor.title}
            <span className="font-normal text-muted"> · </span>
            <span className="font-medium text-foreground">{doctor.qualifications}</span>
          </motion.p>

          <motion.div variants={fadeUp} className="hero-glass-card mt-7 p-5 sm:p-6">
            <p className="text-base leading-relaxed text-foreground">{doctor.introduction}</p>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-muted">
            {doctor.philosophy}
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-row flex-wrap gap-3"
          >
            {doctor.highlights.map((item, i) => (
              <li
                key={item}
                className="hero-glass-card group flex min-w-[9rem] flex-1 flex-col gap-2 p-4 transition-shadow duration-300 hover:shadow-[0_16px_40px_-24px_rgba(18,36,47,0.2)] sm:min-w-[10.5rem]"
              >
                <span className="font-heading text-xs font-bold tabular-nums tracking-wider text-secondary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium leading-snug text-foreground">{item}</p>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/about" showArrow className="btn-shimmer">
              About iLUMNA Dental
            </Button>
            <a
              href="/book-appointment"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-primary"
            >
              Book with Dr. Inchara
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
