import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { InnerPageFooter } from "@/components/layout/inner-page-footer";
import { PatientTrustSection } from "@/components/sections/patient-trust-section";
import { VideoTestimonialsSection } from "@/components/sections/video-testimonials-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Patient Stories",
  description: "Patient stories and Google reviews from iLUMNA Dental, Jayanagar.",
  path: "/patient-stories",
});

export default function PatientStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient stories"
        title="Real experiences from patients who trusted iLUMNA Dental."
        banner="patientStories"
      />
      <PageBreadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Patient Stories" }]}
      />
      <PatientTrustSection />
      <VideoTestimonialsSection />
      <TestimonialsSection />
      <InnerPageFooter />
    </>
  );
}
