import { HeroSection } from "@/components/sections/hero-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { AboutDoctorSection } from "@/components/sections/about-doctor-section";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { PatientJourneySection } from "@/components/sections/patient-journey-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { BlogSection } from "@/components/sections/blog-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AboutDoctorSection />
      <TreatmentsSection />
      <WhyChooseSection />
      <PatientJourneySection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <CtaBannerSection />
    </>
  );
}
