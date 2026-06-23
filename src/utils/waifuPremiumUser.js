import { WAIFU_PREMIUM_EMAILS, FLASHCARDS_VIP_EMAILS } from '../constants/waifuPremiumUsers'

export function normalizeWaifuEmail(email) {
  return typeof email === 'string' ? email.trim().toLowerCase() : ''
}

/** Waifu easter-egg (achtergrond, Sasuga, oefenvragen-styling) — alleen 2 Gmail-accounts. */
export function isWaifuPremiumUser(user) {
  const email = normalizeWaifuEmail(user?.email)
  return email.length > 0 && WAIFU_PREMIUM_EMAILS.has(email)
}

/** Flashcards-tab/routes — waifu-accounts + gewone VIP (zonder waifu-theme). */
export function isFlashcardsVipUser(user) {
  const email = normalizeWaifuEmail(user?.email)
  return email.length > 0 && FLASHCARDS_VIP_EMAILS.has(email)
}
