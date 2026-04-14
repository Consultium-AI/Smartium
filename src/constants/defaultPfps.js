export const DEFAULT_PFP_URL = `${import.meta.env.BASE_URL}pfps/pfp_1.png`

const PREMIUM_PFP_IDS = [
  2, 3, 4, 5, 6, 7, 8,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27,
]

const PREMIUM_SPECIAL_PFPS = [
  `${import.meta.env.BASE_URL}pfps/pfp_hamza.jpeg`,
]

export const PREMIUM_PFP_OPTIONS = [
  ...PREMIUM_PFP_IDS.map((id) => `${import.meta.env.BASE_URL}pfps/pfp_${id}.png`),
  ...PREMIUM_SPECIAL_PFPS,
]

export const DEFAULT_PFP_OPTIONS = [DEFAULT_PFP_URL, ...PREMIUM_PFP_OPTIONS]
