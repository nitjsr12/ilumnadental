import { ClinicMapSection } from "@/components/sections/clinic-map-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";

/** Shared CTA + map block for inner pages (matches home ending). */
export function InnerPageFooter() {
  return (
    <>
      <CtaBannerSection />
      <ClinicMapSection />
    </>
  );
}
