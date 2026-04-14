const PFP_FALLBACK_ORIGIN = 'https://smartium.nl'
const basePath = import.meta.env.BASE_URL || '/'
const resolvedOrigin =
  typeof window !== 'undefined' && window.location?.origin
    ? window.location.origin
    : PFP_FALLBACK_ORIGIN

function toAbsolutePfp(path) {
  return new URL(path, resolvedOrigin).toString()
}

export const DEFAULT_PFP_URL = toAbsolutePfp(`${basePath}pfps/pfp_1.png`)

const PREMIUM_PFP_IDS = [
  2, 3, 4, 5, 6, 7, 8,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
]

const PREMIUM_SPECIAL_PFPS = [
  `${basePath}pfps/pfp_hamza.jpeg`,
  `${basePath}pfps/pfp_lucy.jpeg`,
]

export const PREMIUM_PFP_OPTIONS = [
  ...PREMIUM_PFP_IDS.map((id) => toAbsolutePfp(`${basePath}pfps/pfp_${id}.png`)),
  ...PREMIUM_SPECIAL_PFPS,
].map((path) => toAbsolutePfp(path))

export const DEFAULT_PFP_OPTIONS = [DEFAULT_PFP_URL, ...PREMIUM_PFP_OPTIONS]
