import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { InnerPageFooter } from "@/components/layout/inner-page-footer";
import { BookingSection } from "@/components/sections/booking-section";
import { createPageMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Book an Appointment",
  description: "Request a dental consultation at iLUMNA Dental, Jayanagar.",
  path: "/book-appointment",
});

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Book your visit — we'll confirm by phone or WhatsApp."
        imageSrc={images.clinicInterior}
        priority
      />
      <PageBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Book an Appointment" },
        ]}
      />
      <BookingSection />
      <InnerPageFooter />
    </>
  );
}
