import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { InnerPageFooter } from "@/components/layout/inner-page-footer";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { createPageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

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
        imageSrc={images.smile}
      />
      <PageBreadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Patient Stories" }]}
      />
      <TestimonialsSection />
      <InnerPageFooter />
    </>
  );
}
