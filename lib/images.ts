const CDN = "https://ilumnadental.in/wp-content/uploads";

/** Official iLUMNA Dental media from ilumnadental.in */
export const images = {
  logo: "/ilumna-logo.webp",
  heroPrimary: `${CDN}/2026/10/DSC03251-scaled.jpg`,
  heroSecondary: `${CDN}/2026/10/DSC03437-scaled.jpg`,
  clinicInterior: `${CDN}/2026/10/DSC03385-scaled.jpg`,
  doctorPortrait: "/dr-inchara-portrait.jpg",
  /** Consultation / reception — not the team photo (DSC03224) */
  consultation: `${CDN}/2026/10/DSC03437-scaled.jpg`,
  /** Clinical care illustration (sharp — replaces low-res chair photo) */
  aboutClinic: "/clinic-care-illustration.jpg",
  smile: `${CDN}/2026/08/d1.jpeg`,
  /** In-chair care (section cards — not wide hero banners) */
  whyChooseCollage: "/why-choose-care-collage.jpg",
  whyChooseChair: "/why-choose-care-illustration.jpg",
  /** Homepage About section — in-clinic operatory */
  aboutHomePrimary: "/about-home-operatory.jpg",
  smileTransformBefore: "/smile-transform/before.jpg",
  smileTransformAfter: "/smile-transform/after.jpg",
  /** Patient trust section — clinical visit photo */
  patientTrustHero: "/patient-trust-hero.jpg",
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