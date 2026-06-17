import { WAIFU_PREMIUM_EMAILS } from '../constants/waifuPremiumUsers'

export function normalizeWaifuEmail(email) {
  return typeof email === 'string' ? email.trim().toLowerCase() : ''
}

export function isWaifuPremiumUser(user) {
  const email = normalizeWaifuEmail(user?.email)
  return email.length > 0 && WAIFU_PREMIUM_EMAILS.has(email)
}
