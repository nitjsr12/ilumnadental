import Link from "next/link";
import { MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ClinicMapSection() {
  return (
    <section id="map" className="bg-white" aria-label="Clinic location">
      <div className="border-b border-[#04437f]/8 bg-gradient-to-r from-[#f8fcff] via-white to-[#f8fcff]">
        <div className="hero-page-gutter flex flex-wrap items-center justify-between gap-4 py-5 sm:py-6">
          <div className="flex min-w-0 items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f4fc] text-[#1781be]">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#1781be]">
                <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden />
                Visit us
              </p>
              <p className="mt-1 text-sm text-[#64748b] sm:text-base">
                <span className="font-bold text-[#0d1b3e]">{siteConfig.name}</span>
                {" · "}
                {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
              </p>
            </div>
          </div>
          <Link
            href={siteConfig.contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#1781be]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#04437f] transition-colors hover:border-[#1781be] hover:bg-[#f0f8ff]"
          >
            Open in Google Maps
          </Link>
        </div>
      </div>
      <iframe
        title="iLUMNA Dental clinic location"
        src={siteConfig.contact.mapEmbedUrl}
        className="h-[min(24rem,50vh)] w-full border-0 sm:h-[min(28rem,55vh)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
