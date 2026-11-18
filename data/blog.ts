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
  readTimeMinutes: number;
  /** Full article body — paragraphs for the post page */
  content: string[];
  externalUrl?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "digital-dentistry-jayanagar",
    title: "Advanced Digital Dentistry at iLUMNA Dental",
    excerpt:
      "How digital diagnostics and personalized planning support precise, comfortable care at our Jayanagar clinic.",
    category: "Clinic News",
    publishedAt: "2026-02-12",
    publishedLabel: "Feb 12, 2026",
    image: `${CDN}/2026/10/DSC03385-scaled.jpg`,
    imageAlt: "iLUMNA Dental clinic consultation",
    featured: true,
    readTimeMinutes: 4,
    content: [
      "Modern dentistry is no longer only about treating problems when they appear. At iLUMNA Dental in Jayanagar, digital workflows help us plan care with greater accuracy, explain options clearly, and deliver treatments that fit your goals and lifestyle.",
      "Digital scans, imaging, and treatment planning reduce guesswork. Whether you are considering implants, aligners, or smile enhancements, we use technology to map your oral health before we begin — so you know what to expect at each step.",
      "For patients, this means fewer surprises, more comfortable visits, and outcomes designed around long-term function as well as aesthetics. Our team takes time to walk you through findings and answer questions in plain language.",
      "If you are exploring advanced dental care in Bengaluru, book a consultation to see how digital dentistry can support a plan built specifically for you.",
    ],
  },
  {
    slug: "implant-dentistry",
    title: "Understanding Advanced Implant Dentistry",
    excerpt:
      "An overview of implant solutions at iLUMNA Dental — focused on function, aesthetics, and long-term oral health.",
    category: "Treatments",
    publishedAt: "2026-01-28",
    publishedLabel: "Jan 28, 2026",
    image: `${CDN}/2026/08/Advanced-Implant-Dentistry.jpeg`,
    imageAlt: "Advanced implant dentistry",
    readTimeMinutes: 5,
    content: [
      "Dental implants are designed to replace missing teeth with stable, natural-feeling solutions. When planned well, they support chewing, speech, and confidence — while helping preserve bone and facial structure over time.",
      "At iLUMNA Dental, implant care begins with a thorough assessment of bone quality, bite, and overall oral health. Treatment may include single-tooth implants, multiple implants, or full-arch rehabilitation, depending on your needs.",
      "We prioritize biologically sound planning and aesthetically thoughtful restorations. Dr. Inchara Vadegadde and the clinical team focus on precision placement and prosthetic design so your smile looks and feels coherent.",
      "Every implant journey is different. A consultation helps clarify timelines, comfort options, and maintenance so you can make an informed decision.",
    ],
  },
  {
    slug: "invisalign-care",
    title: "Invisalign & Digital Orthodontics",
    excerpt:
      "Discreet aligner therapy and digital orthodontic planning for a straighter, confident smile.",
    category: "Orthodontics",
    publishedAt: "2026-01-15",
    publishedLabel: "Jan 15, 2026",
    image: `${CDN}/2026/08/Invisalign-Orthodontics.jpg`,
    imageAlt: "Invisalign orthodontic care",
    readTimeMinutes: 4,
    content: [
      "Clear aligners offer a discreet way to improve tooth alignment for many teens and adults. Digital orthodontic planning lets you preview tooth movement and understand the stages of treatment before you commit.",
      "Invisalign and similar systems rely on custom-made aligner trays worn in sequence. Regular check-ins at the clinic ensure progress stays on track and refinements are made when needed.",
      "Orthodontic care is not only cosmetic — aligned teeth can be easier to clean and may reduce uneven wear. We evaluate bite, spacing, and gum health as part of every orthodontic consultation.",
      "Wondering if aligners are right for you? Visit iLUMNA Dental in Jayanagar for a smile assessment and a personalized recommendation.",
    ],
  },
  {
    slug: "preventive-care-routine",
    title: "Building a Preventive Care Routine",
    excerpt:
      "Simple habits and professional check-ups that protect your smile between visits.",
    category: "Oral Health",
    publishedAt: "2026-01-08",
    publishedLabel: "Jan 8, 2026",
    image: `${CDN}/2026/10/DSC03385-scaled.jpg`,
    imageAlt: "Comfortable dental clinic environment",
    readTimeMinutes: 3,
    content: [
      "Prevention is the foundation of lasting oral health. Daily brushing, flossing, and mindful diet choices reduce the risk of decay and gum issues — but professional care catches problems early, when they are simpler to treat.",
      "We recommend regular check-ups and professional cleaning intervals based on your individual risk, not a one-size-fits-all calendar. Patients with gum concerns or restorative work may benefit from more frequent monitoring.",
      "At iLUMNA Dental, preventive visits include clear explanations of your oral health status and practical tips you can use at home. Our goal is to help you keep natural teeth healthy for as long as possible.",
    ],
  },
  {
    slug: "smile-design-aesthetics",
    title: "Smile Design & Aesthetic Dentistry",
    excerpt:
      "How thoughtful planning creates natural-looking improvements in colour, shape, and harmony.",
    category: "Cosmetic",
    publishedAt: "2025-12-20",
    publishedLabel: "Dec 20, 2025",
    image: `${CDN}/2026/08/d1.jpeg`,
    imageAlt: "Smile design and aesthetic dentistry",
    readTimeMinutes: 4,
    content: [
      "Aesthetic dentistry is most successful when it respects your facial features, skin tone, and the way you speak and smile. Smile design is the process of planning changes — from whitening to veneers or bonding — so results look authentic, not overdone.",
      "Digital previews and shade matching help you participate in decisions before treatment begins. We discuss durability, maintenance, and how new restorations will blend with existing teeth.",
      "Whether you want subtle refinement or a fuller transformation, iLUMNA Dental approaches cosmetic care with the same clinical rigour as implant and restorative treatments.",
    ],
  },
  {
    slug: "first-visit-guide",
    title: "Your First Visit to iLUMNA Dental",
    excerpt:
      "What to expect when you book a new patient consultation in Jayanagar.",
    category: "Patient Guide",
    publishedAt: "2025-12-05",
    publishedLabel: "Dec 5, 2025",
    image: "/clinic-care-illustration.jpg",
    imageAlt: "iLUMNA Advanced Dental Centre",
    readTimeMinutes: 3,
    content: [
      "We know dental visits can feel unfamiliar — especially at a new clinic. Your first appointment focuses on listening to your concerns, reviewing your history, and conducting an exam appropriate to your needs.",
      "Please bring any recent X-rays or reports if you have them. Our team will explain findings, discuss options, and outline next steps without pressure. You will have time to ask questions before any treatment is scheduled.",
      "iLUMNA Dental is located in Jayanagar, Bengaluru, with daily hours for your convenience. Book online, call, or message us on WhatsApp to schedule your visit.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function blogPostHref(post: BlogPost) {
  return post.externalUrl ?? `/blog/${post.slug}`;
}

export function getRelatedPosts(slug: string, limit = 2) {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
}