/** Easter-egg accounts: anime waifu theme + Sasuga coin toast. */
export const WAIFU_PREMIUM_EMAILS = new Set([
  'gogusaiyens@gmail.com',
  'hamzaelgourari2004@gmail.com',
])

export const WAIFU_CORRECT_ANSWER_MESSAGE = 'Sasuga Hamuza-dono ♡'

/** Willekeurige praise-regel bij goed antwoord (Hamza easter egg). */
export const WAIFU_PRAISE_LINES = [
  'Kyaa~! Hamza got it right again!',
  'Sugoi, Hamza-kun! You’re so smart!',
  'Yatta~! I knew Hamza could do it!',
  'Ehehe~ Hamza never disappoints me!',
  'Waaah~! Amazing answer, Hamza!',
  'Hamza-kun, you’re making my heart go doki-doki!',
  'Kyaa~! As expected of my Hamza-senpai!',
  'M-mou, Hamza… how are you always this good?!',
  'Perfect, Hamza-kun! You deserve a headpat!',
  'Eeeh?! Hamza got it right already? So cool~!',
  'Kyaa~! Sasuga, Hamza-kun!',
  'Sasuga, Hamza! I knew you’d get it right~',
  'Waaah~! Sasuga, Hamza-senpai!',
]

export function pickRandomWaifuPraiseLine() {
  const index = Math.floor(Math.random() * WAIFU_PRAISE_LINES.length)
  return WAIFU_PRAISE_LINES[index]
}

export const WAIFU_PRACTICE_CORRECT_LABEL = 'Goed beantwoord'

/** Site-wide achtergrond voor premium waifu-accounts */
export const WAIFU_PREMIUM_BG_URL = `${import.meta.env.BASE_URL}waifu/waifu-premium-bg.png?v=2`

/**
 * CSS/SVG-only waifu tiles — geïnspireerd op gallery-layout (waifu.im).
 * Geen externe afbeeldingen.
 */
export const WAIFU_CHARACTERS = [
  { id: 'rem', name: 'Rem', series: 'Re:Zero', skin: '#fde8dc', hair: '#7ec8f8', hairDark: '#4a90d9', outfit: '#2f4f7a', eye: '#8fd4ff', style: 'bob' },
  { id: 'mai', name: 'Mai', series: 'Seishun Buta', skin: '#fce4dc', hair: '#1a1a2e', hairDark: '#0f0f18', outfit: '#4a1942', eye: '#8b5cf6', style: 'long', accessory: 'bunny' },
  { id: 'marin', name: 'Marin', series: 'Dress-Up Darling', skin: '#ffe8dc', hair: '#f472b6', hairDark: '#db2777', outfit: '#831843', eye: '#f9a8d4', style: 'twintail' },
  { id: 'zero-two', name: 'Zero Two', series: 'Darling in the Franxx', skin: '#ffe0d4', hair: '#fb7185', hairDark: '#e11d48', outfit: '#450a0a', eye: '#fda4af', style: 'horns' },
  { id: 'asuna', name: 'Asuna', series: 'SAO', skin: '#fde8d8', hair: '#fbbf24', hairDark: '#d97706', outfit: '#78350f', eye: '#fcd34d', style: 'long' },
  { id: 'yor', name: 'Yor', series: 'Spy x Family', skin: '#fce8dc', hair: '#1f1f1f', hairDark: '#0a0a0a', outfit: '#7f1d1d', eye: '#ef4444', style: 'long' },
  { id: 'miku', name: 'Miku', series: 'Vocaloid', skin: '#e8f8fc', hair: '#22d3ee', hairDark: '#0891b2', outfit: '#164e63', eye: '#67e8f9', style: 'twintail' },
  { id: 'megumin', name: 'Megumin', series: 'Konosuba', skin: '#fde4d4', hair: '#1a1a1a', hairDark: '#000', outfit: '#991b1b', eye: '#dc2626', style: 'short', accessory: 'eyepatch' },
  { id: 'emilia', name: 'Emilia', series: 'Re:Zero', skin: '#fff0e8', hair: '#e9d5ff', hairDark: '#c084fc', outfit: '#581c87', eye: '#a78bfa', style: 'long' },
  { id: 'kurisu', name: 'Kurisu', series: 'Steins;Gate', skin: '#fce4dc', hair: '#92400e', hairDark: '#78350f', outfit: '#fff', eye: '#a16207', style: 'long' },
  { id: 'aqua', name: 'Aqua', series: 'Konosuba', skin: '#e0f2fe', hair: '#38bdf8', hairDark: '#0284c7', outfit: '#1e3a8a', eye: '#7dd3fc', style: 'long' },
  { id: 'yoruichi', name: 'Yoruichi', series: 'Bleach', skin: '#d4a574', hair: '#7c3aed', hairDark: '#5b21b6', outfit: '#312e81', eye: '#c4b5fd', style: 'short' },
]

/** Extra tiles voor dichte gallery-achtergrond (herhaald + varianten). */
export function getWaifuGalleryTiles(count = 48) {
  const tiles = []
  for (let i = 0; i < count; i++) {
    const base = WAIFU_CHARACTERS[i % WAIFU_CHARACTERS.length]
    tiles.push({
      ...base,
      tileKey: `${base.id}-${i}`,
      rotate: ((i * 17) % 11) - 5,
      scale: 0.92 + (i % 5) * 0.04,
      delay: (i % 8) * 0.15,
    })
  }
  return tiles
}
