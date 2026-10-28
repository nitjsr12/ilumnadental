import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Cpu,
  HandHeart,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { images } from "@/lib/images";

const CDN = "https://ilumnadental.in/wp-content/uploads/2026/08";

export type AboutHomeFeature = {
  title: string;
  detail: string;
  icon: LucideIcon;
  tone: "blue" | "teal" | "violet" | "rose" | "amber" | "navy";
  image: string;
  imageAlt: string;
};

export const aboutHomeFeatures: AboutHomeFeature[] = [
  {
    title: "Advanced digital diagnostics",
    detail: "Digital scans and precision planning for accurate, confident treatment decisions.",
    icon: Microscope,
    tone: "blue",
    image: images.consultation,
    imageAlt: "Digital dental consultation at iLUMNA Dental",
  },
  {
    title: "Implant & aesthetic expertise",
    detail: "Implants, smile design, and aesthetic dentistry tailored to your goals.",
    icon: Sparkles,
    tone: "rose",
    image: `${CDN}/Smile-Design-Aesthetics.png`,
    imageAlt: "Smile design and aesthetic dentistry",
  },
  {
    title: "Minimally invasive care",
    detail: "Gentle techniques focused on preserving natural teeth whenever possible.",
    icon: ShieldCheck,
    tone: "teal",
    image: `${CDN}/Root-Canal-Tooth-Preservation.png`,
    imageAlt: "Tooth preservation and restorative care",
  },
  {
    title: "Modern clinical technology",
    detail: "Contemporary equipment for safer procedures and predictable outcomes.",
    icon: Cpu,
    tone: "violet",
    image: images.clinicInterior,
    imageAlt: "Modern iLUMNA Dental clinic interior",
  },
  {
    title: "Patient-first experience",
    detail: "Warm communication and a comfortable environment at every visit.",
    icon: HandHeart,
    tone: "amber",
    image: images.aboutClinic,
    imageAlt: "Patient-friendly care at iLUMNA Dental",
  },
  {
    title: "Evidence-based dentistry",
    detail: "Clinical decisions guided by proven standards and thoughtful planning.",
    icon: BadgeCheck,
    tone: "navy",
    image: `${CDN}/Advanced-Implant-Dentistry.jpeg`,
    imageAlt: "Advanced implant dentistry",
  },
];

export const aboutHomeChecklist = [
  "Comprehensive dental care for all ages",
  "Personalized treatment plans for every smile",
  "Digital dentistry at a Jayanagar clinic you can trust",
  "Long-term oral health—not quick fixes",
] as const;

export const aboutHomeGallery = {
  primary: images.doctorPortrait,
  primaryAlt: "Dr. Inchara Vadegadde, iLUMNA Dental",
  secondary: images.aboutClinic,
  secondaryAlt: "iLUMNA Advanced Dental Centre, Jayanagar",
} as const;
