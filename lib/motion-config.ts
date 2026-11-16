/** Shared motion tokens — cute, smooth, modern (dental brand). */
export const easeSoft = [0.22, 1, 0.36, 1] as const;
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export const motionDuration = {
  fast: 0.35,
  base: 0.55,
  slow: 0.75,
} as const;

export const viewportReveal = {
  once: true,
  amount: 0.2,
  margin: "-48px 0px -48px 0px",
} as const;

export const viewportTight = {
  once: true,
  amount: 0.35,
  margin: "-32px 0px",
} as const;