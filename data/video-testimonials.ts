export type VideoTestimonial = {
  id: string;
  youtubeId: string;
  title: string;
  treatment: string;
  /** Primary embed on the left */
  featured?: boolean;
};

/** Patient story videos from https://www.youtube.com/@ILUMNADental */
export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "confidence-story",
    youtubeId: "Bpj2sWQx_lQ",
    title: "From fear of dental treatment to smiling with confidence",
    treatment: "Patient story",
    featured: true,
  },
  {
    id: "implant-story",
    youtubeId: "9iGP5pkUk-8",
    title: "A dental implant experience that made a difference",
    treatment: "Dental implants",
  },
  {
    id: "arjun-ortho",
    youtubeId: "kU72k5P1d6A",
    title: "Arjun came to us with protruding front teeth",
    treatment: "Orthodontics",
  },
];

export const videoTestimonialsContent = {
  eyebrow: "Video testimonials",
  titleLead: "Real patients.",
  titleAccent: "Real stories.",
  description:
    "Hear directly from patients who trusted iLUMNA Dental in Jayanagar — in their own words on video.",
} as const;

export function youtubeThumbnailUrl(videoId: string, quality: "hq" | "max" = "hq") {
  const file = quality === "max" ? "maxresdefault" : "hqdefault";
  return `https://i.ytimg.com/vi/${videoId}/${file}.jpg`;
}

export function youtubeEmbedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}