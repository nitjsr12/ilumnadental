import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ClinicMapSection() {
  return (
    <section id="map" className="border-t border-primary/[0.08] bg-surface" aria-label="Clinic location">
      <div className="section-container flex flex-wrap items-center justify-between gap-3 py-4">
        <div className="flex items-start gap-2 text-sm text-muted">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
          <span>
            <span className="font-semibold text-foreground">{siteConfig.name}</span>
            {" · "}
            {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
          </span>
        </div>
        <Link
          href={siteConfig.contact.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-secondary hover:text-primary"
        >
          Open in Google Maps
        </Link>
      </div>
      <iframe
        title="iLUMNA Dental clinic location"
        src={siteConfig.contact.mapEmbedUrl}
        className="h-[min(28rem,55vh)] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
