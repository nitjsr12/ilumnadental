const CDN = "https://ilumnadental.in/wp-content/uploads/2026/08";

export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  category: string;
};

/** Slugs preserved for existing routes; content from ilumnadental.in */
export const treatments: Treatment[] = [
  {
    slug: "knee-pain-joint-care",
    title: "Advanced Implant Dentistry",
    shortDescription:
      "Replace missing teeth with precise, natural-looking dental implants and personalized implant solutions.",
    description:
      "Comprehensive implant dentistry including precise, natural-looking dental implants and personalized implant solutions designed to restore function and confidence.",
    icon: "implant",
    image: `${CDN}/Advanced-Implant-Dentistry.jpeg`,
    imageAlt: "Advanced implant dentistry at iLUMNA Dental",
    category: "Implants",
  },
  {
    slug: "hip-joint-treatment",
    title: "Invisalign & Orthodontics",
    shortDescription:
      "Straighten your smile discreetly with Invisalign clear aligners and personalized digital orthodontic care.",
    description:
      "Discreet orthodontic care with Invisalign clear aligners and digital treatment planning tailored to your smile goals.",
    icon: "align",
    image: `${CDN}/Invisalign-Orthodontics.jpg`,
    imageAlt: "Invisalign and orthodontic care",
    category: "Orthodontics",
  },
  {
    slug: "sports-injury-management",
    title: "Smile Design & Aesthetics",
    shortDescription:
      "Enhance your smile with veneers, professional teeth whitening, aesthetic crowns, and smile makeovers.",
    description:
      "Aesthetic dentistry including veneers, professional whitening, aesthetic crowns, and personalized smile makeovers.",
    icon: "sparkles",
    image: `${CDN}/Smile-Design-Aesthetics.png`,
    imageAlt: "Smile design and aesthetic dentistry",
    category: "Cosmetic",
  },
  {
    slug: "arthroscopy",
    title: "Root Canal & Tooth Preservation",
    shortDescription:
      "Relieve pain and preserve your natural teeth with advanced root canal treatment and restorative care.",
    description:
      "Advanced root canal treatment and restorative care focused on relieving discomfort and preserving natural teeth whenever possible.",
    icon: "shield",
    image: `${CDN}/Root-Canal-Tooth-Preservation.png`,
    imageAlt: "Root canal and tooth preservation treatment",
    category: "Restorative",
  },
  {
    slug: "joint-replacement",
    title: "Full Mouth Rehabilitation",
    shortDescription:
      "Comprehensive rehabilitation combining implants, restorative, and aesthetic care for complete smile restoration.",
    description:
      "Full mouth rehabilitation integrating implants, restorative dentistry, and aesthetic planning for functional, confident smiles.",
    icon: "layers",
    image: "https://ilumnadental.in/wp-content/uploads/2026/08/d4.jpeg",
    imageAlt: "Full mouth dental rehabilitation",
    category: "Rehabilitation",
  },
  {
    slug: "fracture-trauma-care",
    title: "Restorative Dentistry",
    shortDescription:
      "Restore damaged teeth with modern restorative techniques for strength, comfort, and natural appearance.",
    description:
      "Restorative treatments using modern techniques and digital planning to rebuild damaged teeth with durable, natural-looking results.",
    icon: "heart-pulse",
    image: "https://ilumnadental.in/wp-content/uploads/2026/08/d6.jpg",
    imageAlt: "Restorative dental treatment",
    category: "Restorative",
  },
];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
