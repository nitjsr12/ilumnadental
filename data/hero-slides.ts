import { images } from "@/lib/images";

export type HeroSlide = {
  id: string;
  tab: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
};

/** Hero messaging from ilumnadental.in */
export const heroSlides: HeroSlide[] = [
  {
    id: "care",
    tab: "01 · Care",
    title: "Exceptional",
    highlight: "Care.",
    description:
      "Advanced dental care designed to restore your oral health, enhance your smile, and give you confidence in every smile.",
    image: images.heroPrimary,
    imageAlt: "Smile and dental care at iLUMNA Dental",
  },
  {
    id: "expertise",
    tab: "02 · Expertise",
    title: "Our",
    highlight: "Expertise.",
    description:
      "From dental implants and Invisalign to smile design and restorative dentistry, experience personalized care with digital precision.",
    image: images.consultation,
    imageAlt: "Advanced dental treatment at iLUMNA Dental",
  },
  {
    id: "precision",
    tab: "03 · Precision",
    title: "Made With",
    highlight: "Precision.",
    description:
      "Discover personalized dental treatments that combine advanced technology, clinical expertise, and exceptional patient care.",
    image: images.clinicInterior,
    imageAlt: "iLUMNA Dental clinic interior",
  },
];
