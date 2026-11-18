import { siteConfig } from "@/lib/site-config";
import { testimonials } from "@/data/testimonials";

export type PatientTrustChannel = {
  id: string;
  name: string;
  value: string;
  description: string;
  href: string;
  accent: "google" | "instagram" | "youtube" | "whatsapp";
};

const reviewCount = testimonials.filter((t) => !t.isPlaceholder).length;

export const patientTrustContent = {
  eyebrow: "What our patients say",
  titleLead: "Hear it from",
  titleAccent: "our patients",
  description: "Where trust in Jayanagar turns into confident, lasting smiles.",
  imageCaption: "Rated by patients after visiting our clinic.",
  googleBadge: `${siteConfig.doctor.googleRating}`,
  googleCountLabel: "50+",
} as const;

export const patientTrustChannels: PatientTrustChannel[] = [
  {
    id: "google",
    name: "Google",
    value: `${siteConfig.doctor.googleRating}★`,
    description: `${reviewCount}+ verified patient stories on Google`,
    href: siteConfig.contact.googleReviewsUrl,
    accent: "google",
  },
  {
    id: "instagram",
    name: "Instagram",
    value: siteConfig.contact.instagram,
    description: "Smile journeys & clinic updates on Instagram",
    href: siteConfig.social.instagram,
    accent: "instagram",
  },
  {
    id: "youtube",
    name: "YouTube",
    value: "iLUMNA",
    description: "Care tips and patient education on YouTube",
    href: siteConfig.social.youtube,
    accent: "youtube",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    value: "24/7",
    description: "Quick appointment & care support on WhatsApp",
    href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`,
    accent: "whatsapp",
  },
];