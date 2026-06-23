import { WAIFU_PREMIUM_EMAILS } from '../constants/waifuPremiumUsers'

export function normalizeWaifuEmail(email) {
  return typeof email === 'string' ? email.trim().toLowerCase() : ''
}

/** Waifu easter-egg (achtergrond, Sasuga, oefenvragen-styling) — alleen 2 Gmail-accounts. */
export function isWaifuPremiumUser(user) {
  const email = normalizeWaifuEmail(user?.email)
  return email.length > 0 && WAIFU_PREMIUM_EMAILS.has(email)
}

/** Flashcards voor elk account met actieve premium/VIP (zelfde als hasPaidAccess). */
export function hasFlashcardsAccess(hasAccess, plan) {
  return Boolean(hasAccess && plan && plan !== 'free')
}
