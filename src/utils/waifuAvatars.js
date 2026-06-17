const WAIFU_AVATAR_COUNT = 4

export const WAIFU_AVATAR_URLS = Array.from({ length: WAIFU_AVATAR_COUNT }, (_, i) =>
  `${import.meta.env.BASE_URL}waifu/avatars/waifu-${i + 1}.png`,
)

export function pickRandomWaifuAvatar() {
  const index = Math.floor(Math.random() * WAIFU_AVATAR_URLS.length)
  return WAIFU_AVATAR_URLS[index]
}
