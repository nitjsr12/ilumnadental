const CDN = "https://ilumnadental.in/wp-content/uploads/2026/08";

export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  /** Illustration shown on service cards (default state) */
  iconImage: string;
  /** Premium 3D art revealed on card hover */
  hoverImage: string;
  image: string;
  imageAlt: string;
  category: string;
};

/** Clinic services — slugs preserved where routes already exist */
export const treatments: Treatment[] = [
  {
    slug: "hip-joint-treatment",
    title: "Invisalign Clear Aligners",
    shortDescription:
      "Straighten your smile discreetly with clear aligners and digital orthodontic planning.",
    description:
      "Discreet orthodontic care with Invisalign clear aligners and digital treatment planning tailored to your smile goals.",
    icon: "align",
    iconImage: "/treatment-icons/invisalign.png",
    hoverImage: "/treatment-hover/invisalign.jpg",
    image: `${CDN}/Invisalign-Orthodontics.jpg`,
    imageAlt: "Invisalign clear aligners at iLUMNA Dental",
    category: "Orthodontics",
  },
  {
    slug: "braces-treatment",
    title: "Braces",
    shortDescription:
      "Traditional and modern braces for precise tooth alignment and lasting results.",
    description:
      "Comprehensive orthodontic treatment with braces tailored to your bite, alignment, and aesthetic goals.",
    icon: "braces",
    iconImage: "/treatment-icons/braces.png",
    hoverImage: "/treatment-hover/braces.jpg",
    image: `${CDN}/Invisalign-Orthodontics.jpg`,
    imageAlt: "Orthodontic braces treatment",
    category: "Orthodontics",
  },
  {
    slug: "knee-pain-joint-care",
    title: "Dental Implants",
    shortDescription:
      "Replace missing teeth with precise, natural-looking implants and personalized restoration.",
    description:
      "Comprehensive implant dentistry including precise, natural-looking dental implants and personalized implant solutions designed to restore function and confidence.",
    icon: "implant",
    iconImage: "/treatment-icons/dental-implants.png",
    hoverImage: "/treatment-hover/dental-implants.jpg",
    image: `${CDN}/Advanced-Implant-Dentistry.jpeg`,
    imageAlt: "Dental implants at iLUMNA Dental",
    category: "Implants",
  },
  {
    slug: "sports-injury-management",
    title: "Cosmetic & Laser Dentistry",
    shortDescription:
      "Enhance your smile with aesthetic treatments, whitening, and advanced laser-assisted care.",
    description:
      "Aesthetic dentistry including veneers, professional whitening, aesthetic crowns, and personalized smile makeovers.",
    icon: "sparkles",
    iconImage: "/treatment-icons/cosmetic-dentistry.png",
    hoverImage: "/treatment-hover/cosmetic-laser.jpg",
    image: `${CDN}/Smile-Design-Aesthetics.png`,
    imageAlt: "Cosmetic and laser dentistry",
    category: "Cosmetic",
  },
  {
    slug: "arthroscopy",
    title: "Painless Root Canal Treatment",
    shortDescription:
      "Relieve pain and preserve natural teeth with advanced, comfort-focused endodontic care.",
    description:
      "Advanced root canal treatment and restorative care focused on relieving discomfort and preserving natural teeth whenever possible.",
    icon: "shield",
    iconImage: "/treatment-icons/root-canal.png",
    hoverImage: "/treatment-hover/root-canal.jpg",
    image: `${CDN}/Root-Canal-Tooth-Preservation.png`,
    imageAlt: "Root canal treatment",
    category: "Restorative",
  },
  {
    slug: "porcelain-veneers",
    title: "Porcelain Veneers & Laminates",
    shortDescription:
      "Transform your smile with custom veneers designed for natural shape, shade, and symmetry.",
    description:
      "Custom porcelain veneers and laminates for refined smile aesthetics with natural-looking results.",
    icon: "sparkles",
    iconImage: "/treatment-icons/veneers.png",
    hoverImage: "/treatment-hover/veneers.jpg",
    image: `${CDN}/Smile-Design-Aesthetics.png`,
    imageAlt: "Porcelain veneers and laminates",
    category: "Cosmetic",
  },
  {
    slug: "kids-dentistry",
    title: "Kids Dentistry",
    shortDescription:
      "Gentle, friendly dental care for children in a calm, supportive environment.",
    description:
      "Pediatric-focused dental visits with gentle techniques and preventive care for growing smiles.",
    icon: "heart",
    iconImage: "/treatment-icons/kids-dentistry.png",
    hoverImage: "/treatment-hover/kids-dentistry.jpg",
    image: "https://ilumnadental.in/wp-content/uploads/2026/08/d1.jpeg",
    imageAlt: "Kids dentistry at iLUMNA Dental",
    category: "Pediatric",
  },
  {
    slug: "wisdom-tooth-removal",
    title: "Painless Wisdom Tooth Removal",
    shortDescription:
      "Safe, comfort-first extraction when wisdom teeth affect alignment or oral health.",
    description:
      "Wisdom tooth evaluation and removal with a focus on comfort, clarity, and smooth recovery.",
    icon: "shield",
    iconImage: "/treatment-icons/wisdom-tooth.png",
    hoverImage: "/treatment-hover/wisdom-tooth.jpg",
    image: `${CDN}/Root-Canal-Tooth-Preservation.png`,
    imageAlt: "Wisdom tooth removal",
    category: "Oral Surgery",
  },
  {
    slug: "joint-replacement",
    title: "Dentures, Crowns & Bridges",
    shortDescription:
      "Restore function and appearance with durable crowns, bridges, and prosthetic solutions.",
    description:
      "Full mouth rehabilitation integrating implants, restorative dentistry, and aesthetic planning for functional, confident smiles.",
    icon: "layers",
    iconImage: "/treatment-icons/dentures-crowns.png",
    hoverImage: "/treatment-hover/dentures-crowns.jpg",
    image: "https://ilumnadental.in/wp-content/uploads/2026/08/d4.jpeg",
    imageAlt: "Dentures, crowns and bridges",
    category: "Restorative",
  },
  {
    slug: "gum-treatment",
    title: "Gum Treatment / Deep Cleaning",
    shortDescription:
      "Protect gum health with deep cleaning, periodontal care, and preventive maintenance.",
    description:
      "Periodontal and gum care including deep cleaning to support long-term oral health.",
    icon: "heart-pulse",
    iconImage: "/treatment-icons/gum-treatment.png",
    hoverImage: "/treatment-hover/gum-treatment.jpg",
    image: "https://ilumnadental.in/wp-content/uploads/2026/08/d6.jpg",
    imageAlt: "Gum treatment and deep cleaning",
    category: "Periodontics",
  },
  {
    slug: "fracture-trauma-care",
    title: "General Dentistry",
    shortDescription:
      "Routine exams, fillings, and everyday dental care for the whole family.",
    description:
      "Restorative treatments using modern techniques and digital planning to rebuild damaged teeth with durable, natural-looking results.",
    icon: "activity",
    iconImage: "/treatment-icons/general-dentistry.png",
    hoverImage: "/treatment-hover/general-dentistry.jpg",
    image: "https://ilumnadental.in/wp-content/uploads/2026/08/d6.jpg",
    imageAlt: "General dentistry",
    category: "General",
  },
  {
    slug: "tmj-treatment",
    title: "TMJ / Joint Disorder Treatment",
    shortDescription:
      "Evaluation and care for jaw discomfort, bite issues, and TMJ-related symptoms.",
    description:
      "Assessment and management options for TMJ and jaw joint concerns with a patient-centered approach.",
    icon: "activity",
    iconImage: "/treatment-icons/tmj.png",
    hoverImage: "/treatment-hover/tmj.jpg",
    image: `${CDN}/Advanced-Implant-Dentistry.jpeg`,
    imageAlt: "TMJ and joint disorder treatment",
    category: "Specialized",
  },
];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
