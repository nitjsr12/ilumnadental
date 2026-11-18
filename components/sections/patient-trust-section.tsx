"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";
import { FlyingDentalDecor } from "@/components/decor/flying-dental-decor";
import {
  patientTrustChannels,
  patientTrustContent,
  type PatientTrustChannel,
} from "@/data/patient-trust-social";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { cn } from "@/lib/utils";

const accentClass: Record<PatientTrustChannel["accent"], string> = {
  google: "patient-trust-card--google",
  instagram: "patient-trust-card--instagram",
  youtube: "patient-trust-card--youtube",
  whatsapp: "patient-trust-card--whatsapp",
};

function ChannelIcon({ accent }: { accent: PatientTrustChannel["accent"] }) {
  if (accent === "google") {
    return (
      <span className="patient-trust-channel-icon font-bold text-[#4285F4]" aria-hidden>
        G
      </span>
    );
  }
  if (accent === "instagram") {
    return (
      <span className="patient-trust-channel-icon font-bold text-white" aria-hidden>
        in
      </span>
    );
  }
  if (accent === "youtube") {
    return (
      <span className="patient-trust-channel-icon font-bold text-white" aria-hidden>
        ▶
      </span>
    );
  }
  return (
    <span className="patient-trust-channel-icon font-bold text-white" aria-hidden>
      W
    </span>
  );
}

export function PatientTrustSection() {
  return (
    <section id="patient-trust" className="premium-section-muted relative overflow-x-clip section-pad">
      <FlyingDentalDecor density="soft" />

      <div className="hero-page-gutter relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            <div className="patient-trust-visual relative overflow-hidden rounded-[1.5rem] border border-[#04437f]/10 shadow-[0_32px_72px_-36px_rgba(4,67,127,0.45)]">
              <div className="relative aspect-[5/4] sm:aspect-[4/3]">
                <Image
                  src={images.patientTrustHero}
                  alt="Smiling patient during a comfortable visit at iLUMNA Dental, Jayanagar"
                  fill
                  sizes="(max-width: 1024px) 92vw, 540px"
                  className="object-cover object-[center_42%]"
                  quality={92}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021a33]/55 via-transparent to-[#021a33]/15" />

                <div className="patient-trust-google-pill absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm">
                  <span className="text-xs font-bold text-[#4285F4]">Google</span>
                  <span className="flex gap-0.5" aria-hidden>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#f5d76e] text-[#f5d76e]" />
                    ))}
                  </span>
                </div>

                <p className="absolute bottom-24 right-4 text-right text-sm font-semibold text-white drop-shadow-md">
                  Google Reviews
                </p>

                <div className="patient-trust-count-chip absolute bottom-4 right-4 max-w-[14rem] rounded-2xl bg-gradient-to-br from-[#04437f] to-[#0d6eb8] px-4 py-3 text-white shadow-xl">
                  <p className="text-3xl font-extrabold leading-none tracking-tight text-white">
                    <AnimatedStat
                      value={patientTrustContent.googleReviewCount}
                      suffix="+"
                      className="!text-3xl !font-extrabold !text-white"
                    />
                  </p>
                  <p className="mt-1 text-[0.7rem] leading-snug text-white/85">
                    {patientTrustContent.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1781be]">
              {patientTrustContent.eyebrow}
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-tight tracking-tight text-[#0d1b3e]">
              {patientTrustContent.titleLead}{" "}
              <span className="bg-gradient-to-r from-[#1781be] to-[#05a2a4] bg-clip-text text-transparent">
                {patientTrustContent.titleAccent}
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-[#64748b]">
              {patientTrustContent.description}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {patientTrustChannels.map((channel, i) => (
                <motion.li
                  key={channel.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.45 }}
                  className="list-none"
                >
                  <Link
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cn(
                      "patient-trust-card group flex h-full gap-3 rounded-2xl border border-[#04437f]/8 bg-white p-4 shadow-[0_12px_32px_-22px_rgba(4,67,127,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1781be]/25 hover:shadow-[0_20px_44px_-24px_rgba(4,67,127,0.35)]",
                    )}
                  >
                    <span
                      className={cn(
                        "patient-trust-channel-badge flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        accentClass[channel.accent],
                      )}
                    >
                      <ChannelIcon accent={channel.accent} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-2">
                        <span className="text-lg font-extrabold leading-none text-[#0d1b3e]">
                          {channel.stat ? (
                            <AnimatedStat
                              value={channel.stat.value}
                              suffix={channel.stat.suffix}
                              prefix={channel.stat.prefix}
                              decimals={channel.stat.decimals ?? 0}
                              className="!text-lg !font-extrabold !text-[#0d1b3e]"
                            />
                          ) : (
                            channel.value
                          )}
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-[#1781be] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden
                        />
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-[#1781be]">
                        {channel.name}
                      </span>
                      <span className="mt-1 block text-[0.8rem] leading-snug text-[#64748b]">
                        {channel.descriptionStat ? (
                          <>
                            <AnimatedStat
                              value={channel.descriptionStat.value}
                              suffix={channel.descriptionStat.suffix}
                              decimals={channel.descriptionStat.decimals ?? 0}
                              className="!text-[0.8rem] !font-bold !text-[#0d1b3e]"
                            />{" "}
                            {channel.description}
                          </>
                        ) : (
                          channel.description
                        )}
                      </span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <Link
              href={siteConfig.contact.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#04437f] transition-colors hover:text-[#1781be]"
            >
              Read reviews on Google
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}