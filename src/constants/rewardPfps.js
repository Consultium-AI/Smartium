/**
 * Unlockable reward profile pictures (coin shop).
 * Images live in public/pfp-assets/.
 */

const PFP_FALLBACK_ORIGIN = 'https://smartium.nl'
const basePath = import.meta.env.BASE_URL || '/'
const PFP_ASSETS_DIR = 'pfp-assets'
const resolvedOrigin =
  typeof window !== 'undefined' && window.location?.origin
    ? window.location.origin
    : PFP_FALLBACK_ORIGIN

function toAbsolutePfp(path) {
  return new URL(path, resolvedOrigin).toString()
}

function rewardPfpUrl(filename) {
  return toAbsolutePfp(`${basePath}${PFP_ASSETS_DIR}/${filename}`)
}

export const REWARD_PFPS = [
  { id: 'reward_pfp_28', label: 'PFP 28', image: rewardPfpUrl('pfp_28.png'), cost: 620 },
  { id: 'reward_pfp_29', label: 'PFP 29', image: rewardPfpUrl('pfp_29.png'), cost: 650 },
  { id: 'reward_pfp_30', label: 'PFP 30', image: rewardPfpUrl('pfp_30.png'), cost: 680 },
  { id: 'reward_pfp_31', label: 'PFP 31', image: rewardPfpUrl('pfp_31.png'), cost: 710 },
  { id: 'reward_pfp_32', label: 'PFP 32', image: rewardPfpUrl('pfp_32.png'), cost: 640 },
  { id: 'reward_pfp_33', label: 'PFP 33', image: rewardPfpUrl('pfp_33.png'), cost: 760 },
  { id: 'reward_pfp_34', label: 'PFP 34', image: rewardPfpUrl('pfp_34.png'), cost: 600 },
  { id: 'reward_pfp_35', label: 'PFP 35', image: rewardPfpUrl('pfp_35.png'), cost: 730 },
  { id: 'reward_pfp_36', label: 'PFP 36', image: rewardPfpUrl('pfp_36.png'), cost: 670 },
  { id: 'reward_pfp_37', label: 'PFP 37', image: rewardPfpUrl('pfp_37.png'), cost: 790 },
  { id: 'reward_pfp_39', label: 'PFP 39', image: rewardPfpUrl('pfp_39.png'), cost: 780 },
  { id: 'reward_pfp_hamza', label: 'Hamza', image: rewardPfpUrl('pfp_hamza.jpeg'), cost: 1_000_000 },
]

export function getRewardPfpById(id) {
  return REWARD_PFPS.find((p) => p.id === id) || null
}
