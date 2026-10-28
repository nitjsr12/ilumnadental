/**
 * iLUMNA Dental — content sourced from https://ilumnadental.in/
 */

const ILUMNA_CDN = "https://ilumnadental.in/wp-content/uploads";

export const siteConfig = {
  name: "iLUMNA Dental",
  shortName: "iLUMNA Dental",
  tagline: "Advanced Dentistry · Jayanagar, Bengaluru",
  description:
    "Advanced digital dentistry, clinical precision, and personalized care for healthy, functional, and confident smiles at iLUMNA Dental, Jayanagar.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilumnadental.in",
  locale: "en_IN",
  copyrightYear: 2026,

  logo: {
    src: "/ilumna-logo.webp",
    alt: "ILUMNA+ Advanced Dental Centre",
    width: 651,
    height: 383,
  },

  hero: {
    eyebrow: "Best Dental Clinic in Jayanagar",
    headlineLines: [
      "Exceptional Care.",
      "Advanced Precision.",
      "Confident Smiles.",
    ],
    subtext:
      "Advanced dental care designed to restore your oral health, enhance your smile, and give you confidence in every smile.",
    accentLineIndex: 2,
  },

  contact: {
    phone: "+91 74114 11069",
    whatsapp: "+91 74114 11069",
    instagram: "@iLUMNADental",
    instagramUrl: "https://www.instagram.com/iLUMNADental",
    email: "info@ilumnadental.in",
    address: {
      line1: "40, 32nd Cross Rd, 7th Block, Jayanagar",
      line2: "Bengaluru, Karnataka 560070",
      country: "India",
    },
    mapLink:
      "https://maps.google.com/?q=40+32nd+Cross+Rd+7th+Block+Jayanagar+Bengaluru+560070",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.152!2d77.573!3d12.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSmF5YW5hZ2Fy!5e0!3m2!1sen!2sin!4v1",
    hours: [{ days: "Opens daily", time: "9:30 AM – 10:00 PM" }],
  },

  doctor: {
    name: "Dr. Inchara Vadegadde",
    title: "Dentist & Oral Health Expert",
    qualifications: "BDS, MDS (Periodontics & Implantology)",
    experienceYears: null as number | null,
    googleRating: 4.9,
    introduction:
      "At iLUMNA Dental, we believe exceptional dentistry is built on precision, trust, and personalised care. Every treatment begins with understanding your needs and creating a plan designed around your long-term oral health.",
    philosophy:
      "Our approach is centered on preserving natural teeth whenever possible while delivering highly aesthetic and functional outcomes. We emphasize minimally invasive techniques, evidence-based dentistry, and long-term preventive care.",
    highlights: [
      "Advanced dental implants and full-mouth implant rehabilitation",
      "Digital dentistry and aesthetic-focused treatment planning",
      "Comfortable, patient-friendly care in a refined clinical environment",
    ],
    portrait: {
      src: `${ILUMNA_CDN}/2026/10/Dentist-Portrait-in-a-Glossy-Tooth-Frame.png`,
      alt: "Dr. Inchara Vadegadde, iLUMNA Dental",
    },
  },

  social: {
    facebook: "https://ilumnadental.in/",
    instagram: "https://www.instagram.com/iLUMNADental",
    linkedin: "#",
  },

  booking: {
    apiEnabled: process.env.APPOINTMENT_API_ENABLED === "true",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/treatments",
    children: [
      { label: "All Services", href: "/treatments" },
      {
        label: "Advanced Implant Dentistry",
        href: "/treatments/knee-pain-joint-care",
      },
      {
        label: "Invisalign & Orthodontics",
        href: "/treatments/hip-joint-treatment",
      },
      {
        label: "Smile Design & Aesthetics",
        href: "/treatments/sports-injury-management",
      },
      {
        label: "Root Canal & Tooth Preservation",
        href: "/treatments/arthroscopy",
      },
    ],
  },
  { label: "Our Team", href: "/about" },
  { label: "Testimonials", href: "/patient-stories" },
  { label: "Contact", href: "/contact" },
];

export type TrustStat = {
  id: string;
  label: string;
  value: string | number;
  suffix?: string;
  icon: "calendar" | "users" | "star" | "activity";
  verified: boolean;
};

const allTrustStats: TrustStat[] = [
  {
    id: "services",
    label: "Comprehensive dental services",
    value: 6,
    icon: "activity",
    verified: true,
  },
  {
    id: "rating",
    label: "Google patient rating",
    value: siteConfig.doctor.googleRating,
    suffix: "/5",
    icon: "star",
    verified: true,
  },
  {
    id: "experience",
    label: "Years of experience",
    value: siteConfig.doctor.experienceYears ?? "",
    suffix: "+",
    icon: "calendar",
    verified: siteConfig.doctor.experienceYears !== null,
  },
];

export const trustStats = allTrustStats.filter((s) => s.verified);
