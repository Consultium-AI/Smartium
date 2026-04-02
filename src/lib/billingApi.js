/**
 * Stripe Checkout — eenmalige betaling via de Cloudflare Worker.
 */
function apiBase() {
  const raw = import.meta.env.VITE_API_BASE_URL || ''
  const fallback = 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev'
  return (raw || fallback).replace(/\/$/, '')
}

/**
 * @param {{ email?: string | null }} [opts]
 * @returns {Promise<{ url: string } | { error: string }>}
 */
export async function createCheckoutSession(opts = {}) {
  const baseHref = new URL(import.meta.env.BASE_URL || '/', window.location.origin).href
  const successUrl = new URL('billing?status=success', baseHref).href
  const cancelUrl = new URL('billing?status=cancel', baseHref).href
  const body = {
    successUrl,
    cancelUrl,
    customerEmail: opts.email || undefined,
  }

  const res = await fetch(`${apiBase()}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    return { error: data.error || data.message || `Serverfout (${res.status})` }
  }
  if (!data.url) {
    return { error: 'Geen betaallink ontvangen. Controleer Stripe-config op de Worker.' }
  }
  return { url: data.url }
}

/**
 * Embedded Stripe Checkout (client_secret) — eenmalige betaling.
 * @param {{ email?: string | null }} [opts]
 * @returns {Promise<{ clientSecret: string } | { error: string }>}
 */
export async function createEmbeddedCheckoutSession(opts = {}) {
  const baseHref = new URL(import.meta.env.BASE_URL || '/', window.location.origin).href
  const returnUrl = new URL('billing?session_id={CHECKOUT_SESSION_ID}', baseHref).href
  const body = {
    embedded: true,
    returnUrl,
    customerEmail: opts.email || undefined,
  }

  const res = await fetch(`${apiBase()}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    return { error: data.error || data.message || `Serverfout (${res.status})` }
  }
  if (!data.clientSecret) {
    return {
      error:
        'Geen client_secret ontvangen. Controleer Stripe-config op de Worker (embedded ui_mode).',
    }
  }
  return { clientSecret: data.clientSecret }
}
