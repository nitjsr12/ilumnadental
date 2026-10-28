/**
 * About page copy from https://ilumnadental.in/about-us/
 */

import { images } from "@/lib/images";

const CDN = "https://ilumnadental.in/wp-content/uploads/2026/08";

export const aboutPageIntro = {
  eyebrow: "About Us",
  title: "About iLUMNA Dental",
  paragraphs: [
    "At iLUMNA Dental, we believe exceptional dentistry is built on precision, trust, and personalized care.",
    "Our clinic was created to provide advanced dental treatment in a refined and comfortable environment, where every patient receives thoughtful attention and clinically excellent care.",
    "Led by Dr. Inchara Vadegadde, BDS, MDS (Periodontics & Implantology), our clinic specializes in advanced dental implants and full-mouth implant rehabilitation, combining clinical expertise with modern dental techniques to restore smiles with precision and confidence.",
    "As a trusted dental clinic in Jayanagar, we combine advanced technology, digital dentistry, and aesthetic expertise to deliver long-term oral health solutions rather than temporary fixes.",
    "Every treatment begins with understanding your concerns, goals, and expectations before creating a customized treatment plan tailored to your individual needs.",
  ],
};

export const aboutFeatures = {
  eyebrow: "Features",
  title: "We Offer the Best Dental Care",
  items: [
    {
      title: "Comprehensive Dental Care",
      text: "From routine check-ups to advanced dental treatments, we provide complete care for your oral health.",
      image: images.consultation,
      imageAlt: "Dental consultation at iLUMNA Dental",
    },
    {
      title: "Advanced Dental Treatments",
      text: "Modern techniques and advanced technology for safe, precise, and effective dental treatments.",
      image: images.heroSecondary,
      imageAlt: "Advanced dental technology at iLUMNA Dental",
    },
    {
      title: "Personalized Treatment Plans",
      text: "Every smile is unique. We create customized treatment plans based on your individual dental needs.",
      image: images.smile,
      imageAlt: "Smile design and aesthetic dentistry",
    },
    {
      title: "Comfortable & Patient-Friendly Care",
      text: "A warm, comfortable environment designed to make every dental visit a positive experience.",
      image: images.clinicInterior,
      imageAlt: "Comfortable iLUMNA Dental clinic interior",
    },
  ],
};

export const aboutPhilosophy = {
  eyebrow: "Philosophy",
  title: "Our Philosophy",
  intro:
    "Our approach is centered on preserving natural teeth whenever possible while delivering highly aesthetic and functional outcomes. We emphasize minimally invasive techniques, evidence-based dentistry, and long-term preventive care.",
  commitmentHeading: "We are committed to",
  gallery: [
    { src: images.consultation, alt: "Patient consultation at iLUMNA Dental" },
    { src: images.clinicInterior, alt: "Modern dental clinic interior" },
    { src: `${CDN}/Advanced-Implant-Dentistry.jpeg`, alt: "Advanced implant dentistry" },
  ],
  pillars: [
    {
      title: "Personalized Treatment Planning",
      text: "Customized treatment plans are carefully designed around your unique dental needs and goals.",
    },
    {
      title: "Advanced Digital Diagnostics",
      text: "Advanced digital technology enables accurate diagnosis, detailed planning, and precise treatment decisions.",
    },
    {
      title: "Aesthetic-Focused Dentistry",
      text: "We combine dental health with aesthetics to create natural, harmonious smiles.",
    },
    {
      title: "Precision & Attention to Detail",
      text: "Every treatment is performed with meticulous precision to achieve reliable, refined results.",
    },
    {
      title: "Comfortable Patient Experience",
      text: "We prioritize patient comfort with gentle care and a reassuring treatment environment.",
    },
    {
      title: "Long-Term Oral Health & Function",
      text: "Our approach focuses on lasting oral health, function, comfort, and confidence.",
    },
  ],
};

export type AboutImpactStat = {
  id: string;
  label: string;
  /** Shown when no numeric value is published on the live site */
  highlight: string;
  value?: number;
  suffix?: string;
  decimals?: number;
};

export const aboutImpact = {
  eyebrow: "Your smile. Our commitment",
  title: "Your Smile. Our Commitment",
  description:
    "At iLUMNA Dental, we are dedicated to helping every patient achieve a healthy, functional, and confident smile through advanced dentistry and exceptional care.",
  stats: [
    {
      id: "smiles",
      label: "Smiles restored",
      highlight: "Precision care for lasting results",
    },
    {
      id: "experience",
      label: "Years of experience",
      highlight: "Advanced implant & periodontal expertise",
    },
    {
      id: "patients",
      label: "Patients helped",
      highlight: "Trusted by families in Jayanagar",
    },
    {
      id: "satisfaction",
      label: "Patient satisfaction",
      highlight: "Rated on Google",
      value: 4.9,
      suffix: "/5",
      decimals: 1,
    },
  ] satisfies AboutImpactStat[],
};

export const aboutCta = {
  eyebrow: "Let's get in touch",
  title: "Healthy Smile, Confident Life",
  description:
    "At iLUMNA Dental, we combine advanced digital dentistry, clinical precision, and personalized care to create healthy, functional, and confident smiles. Every treatment is thoughtfully planned around your individual needs, comfort, and long-term oral health.",
};
