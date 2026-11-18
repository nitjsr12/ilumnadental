const CDN = "https://ilumnadental.in/wp-content/uploads";

/** Official iLUMNA Dental media from ilumnadental.in */
export const images = {
  logo: "/ilumna-logo.webp",
  heroPrimary: `${CDN}/2026/10/DSC03251-scaled.jpg`,
  heroSecondary: `${CDN}/2026/10/DSC03437-scaled.jpg`,
  clinicInterior: `${CDN}/2026/10/DSC03385-scaled.jpg`,
  doctorPortrait: "/dr-inchara-portrait.jpg",
  /** Treatment room — not the legacy three-person team photo (DSC03224) */
  consultation: `${CDN}/2026/10/DSC03385-scaled.jpg`,
  /** Clinical care — replaces legacy team group photo */
  aboutClinic: "/why-choose-care-chair.webp",
  smile: `${CDN}/2026/08/d1.jpeg`,
  /** In-chair care (section cards — not wide hero banners) */
  whyChooseCollage: "/why-choose-care-collage.jpg",
  whyChooseChair: "/why-choose-care-chair.webp",
  smileTransformBefore: "/smile-transform/before.jpg",
  smileTransformAfter: "/smile-transform/after.jpg",
} as const;

/** Inner page hero banners — clinical photography only (landscape) */
export const pageBanners = {
  default: images.heroPrimary,
  about: images.consultation,
  treatments: images.heroSecondary,
  treatment: images.consultation,
  blog: images.clinicInterior,
  blogPost: images.heroPrimary,
  contact: images.clinicInterior,
  bookAppointment: images.consultation,
  patientStories: images.smile,
} as const;

export type PageBannerKey = keyof typeof pageBanners;