const CDN = "https://ilumnadental.in/wp-content/uploads";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  publishedLabel: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  isPlaceholder: boolean;
  externalUrl?: string;
};

/** Editorial cards — link to ilumnadental.in/blog for full articles when live */
export const blogPosts: BlogPost[] = [
  {
    slug: "digital-dentistry-jayanagar",
    title: "Advanced Digital Dentistry at iLUMNA Dental",
    excerpt:
      "How digital diagnostics and personalized planning support precise, comfortable care at our Jayanagar clinic.",
    category: "Clinic News",
    publishedAt: "2026-01-01",
    publishedLabel: "iLUMNA Dental",
    image: `${CDN}/2026/10/DSC03224-scaled.jpg`,
    imageAlt: "iLUMNA Dental clinic",
    featured: true,
    isPlaceholder: false,
    externalUrl: "https://ilumnadental.in/blog/",
  },
  {
    slug: "implant-dentistry",
    title: "Understanding Advanced Implant Dentistry",
    excerpt:
      "An overview of implant solutions offered at iLUMNA Dental, focused on function, aesthetics, and long-term oral health.",
    category: "Treatments",
    publishedAt: "2026-01-01",
    publishedLabel: "iLUMNA Dental",
    image: `${CDN}/2026/08/Advanced-Implant-Dentistry.jpeg`,
    imageAlt: "Advanced implant dentistry",
    isPlaceholder: false,
    externalUrl: "https://ilumnadental.in/blog/",
  },
  {
    slug: "invisalign-care",
    title: "Invisalign & Digital Orthodontics",
    excerpt:
      "Discreet aligner therapy and digital orthodontic planning for a straighter, confident smile.",
    category: "Orthodontics",
    publishedAt: "2026-01-01",
    publishedLabel: "iLUMNA Dental",
    image: `${CDN}/2026/08/Invisalign-Orthodontics.jpg`,
    imageAlt: "Invisalign orthodontic care",
    isPlaceholder: false,
    externalUrl: "https://ilumnadental.in/blog/",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
