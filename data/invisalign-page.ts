/** Slug preserved for existing routes / nav links */
export const INVISALIGN_TREATMENT_SLUG = "hip-joint-treatment" as const;

export const invisalignPageMeta = {
  description:
    "Explore the differences between traditional braces and Invisalign clear aligners. Find the right orthodontic treatment for your smile goals.",
} as const;

export type InvisalignHighlight = {
  id: string;
  label: string;
};

export const invisalignWhyChoose = {
  sectionLabel: "Why Choose Invisalign?",
  h1: "Invisalign Clear Aligners – A Discreet Way to Straighten Your Smile",
  subheading:
    "Achieve a straighter smile with clear, removable aligners and personalised digital treatment planning.",
  highlights: [
    { id: "invisible", label: "Nearly invisible aligners" },
    { id: "removable", label: "Removable and convenient" },
    { id: "custom", label: "Customised to your smile" },
    { id: "digital", label: "Digital treatment planning" },
  ] as InvisalignHighlight[],
  cta: "Book Your Invisalign Consultation",
  /** Invisalign Hero Image Placeholder */
  mediaLabel: "Invisalign hero image or treatment animation (GIF)",
} as const;

export type InvisalignCompareRow = {
  braces: string;
  invisalign: string;
};

export const invisalignComparison = {
  h2: "Traditional Braces vs Invisalign – Which Is Right for You?",
  columns: {
    braces: "Traditional Braces",
    invisalign: "Invisalign",
  },
  rows: [
    { braces: "Metal brackets and wires", invisalign: "Clear, transparent trays" },
    { braces: "Fixed throughout treatment", invisalign: "Removable for eating and cleaning" },
    { braces: "More noticeable", invisalign: "Discreet appearance" },
    {
      braces: "Requires bracket and wire maintenance",
      invisalign: "Requires consistent aligner wear",
    },
  ] as InvisalignCompareRow[],
  closingHeading: "Two Treatment Options. One Goal – A Healthier, Straighter Smile.",
  cta: "Find Your Best Fit",
  split: {
    headline: {
      left: "Braces",
      centerLead: "Which is",
      vs: "VS",
      centerTail: "for You?",
      right: "Aligners",
    },
    sidePills: {
      braces: "Braces",
      aligners: "Aligners",
    },
    footerTagline: "Straight teeth. Confident you.",
  },
  icons: {
    braces: {
      src: "/invisalign/icon-braces.png",
      alt: "Traditional braces icon",
    },
    aligners: {
      src: "/invisalign/icon-aligners.png",
      alt: "Clear aligner icon",
    },
  },
} as const;

export type InvisalignProcessStep = {
  step: string;
  heading: string;
  description: string;
  iconSlotId: string;
};

export const invisalignProcess = {
  h2: "Your Invisalign Journey Starts Here",
  subheading:
    "From your first consultation to your new smile, experience personalised orthodontic care with digital treatment planning.",
  /** Treatment Process GIF Placeholder */
  mediaLabel: "Treatment process overview (GIF or video)",
  steps: [
    {
      step: "01",
      heading: "Consultation",
      description: "Discuss your smile goals.",
      iconSlotId: "step-01-consult",
    },
    {
      step: "02",
      heading: "Digital Scanning",
      description: "Get a detailed scan of your teeth.",
      iconSlotId: "step-02-scan",
    },
    {
      step: "03",
      heading: "Treatment Planning",
      description: "Get a personalised aligner plan.",
      iconSlotId: "step-03-plan",
    },
    {
      step: "04",
      heading: "Custom Aligners",
      description: "Receive your customised aligners.",
      iconSlotId: "step-04-aligners",
    },
    {
      step: "05",
      heading: "Progress Tracking",
      description: "Attend regular reviews and scans.",
      iconSlotId: "step-05-progress",
    },
    {
      step: "06",
      heading: "Smile Transformation",
      description: "Complete your planned treatment.",
      iconSlotId: "step-06-smile",
    },
  ] as InvisalignProcessStep[],
  closingHeading: "Ready to Begin Your Smile Transformation?",
} as const;

export const invisalignGoogleReview = {
  eyebrow: "Google review",
  title: "What Invisalign patients say on Google",
  /** Swap `src` when you add a dedicated doctor–patient photo */
  image: {
    src: "https://ilumnadental.in/wp-content/uploads/2026/10/DSC03437-scaled.jpg",
    alt: "Dr. Inchara with a patient during consultation at iLUMNA Dental, Jayanagar",
    label: "Doctor with patient photo",
  },
  rating: 5,
  quote:
    "Dr. Inchara walked me through every step of my clear aligner treatment. The scans, planning, and aligner changes were smooth — I always felt informed and comfortable at the Jayanagar clinic.",
  author: "Ananya R.",
  treatment: "Invisalign · Clear aligners",
  postedAgo: "1 month ago",
  cta: "Read more on Google",
} as const;

export type InvisalignMediaKey =
  | "invisalign-hero"
  | "invisalign-compare-braces"
  | "invisalign-compare-invisalign";

export type InvisalignMediaAsset = {
  /** Drop your file in `/public/invisalign/…` and set this path when ready */
  src?: string;
  alt: string;
  kind?: "image" | "gif";
  label: string;
};

/** Central map for hero, compare, and GIF slots — leave `src` empty until assets are added */
export const invisalignMediaAssets: Record<InvisalignMediaKey, InvisalignMediaAsset> = {
  "invisalign-hero": {
    src: "/invisalign/clear-aligner-hero.gif",
    alt: "Clear Invisalign aligner tray rotating — discreet orthodontic treatment",
    kind: "gif",
    label: "Invisalign hero image or treatment animation (GIF)",
  },
  "invisalign-compare-braces": {
    src: "/invisalign/compare-braces.jpg",
    alt: "Young patient smiling with traditional metal braces at the dental clinic",
    kind: "image",
    label: "Traditional braces photo placeholder",
  },
  "invisalign-compare-invisalign": {
    src: "/invisalign/compare-invisalign.jpg",
    alt: "Smile with clear Invisalign aligners — discreet orthodontic treatment",
    kind: "image",
    label: "Clear aligner close-up placeholder",
  },
};