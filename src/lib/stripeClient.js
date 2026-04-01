import { loadStripe } from '@stripe/stripe-js'

let stripePromise

export function getStripePublishableKey() {
  return String(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? '').trim()
}

export function hasStripePublishableKey() {
  return Boolean(getStripePublishableKey())
}

/** @returns {import('@stripe/stripe-js').Stripe | Promise<import('@stripe/stripe-js').Stripe | null> | null} */
export function getStripePromise() {
  const key = getStripePublishableKey()
  if (!key) return null
  if (!stripePromise) stripePromise = loadStripe(key)
  return stripePromise
}
