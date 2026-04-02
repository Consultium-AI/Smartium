function apiBase() {
  const raw = import.meta.env.VITE_API_BASE_URL || ''
  const fallback = 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev'
  return (raw || fallback).replace(/\/$/, '')
}

export async function createCheckoutSession(plan, opts = {}) {
  const baseHref = new URL(import.meta.env.BASE_URL || '/', window.location.origin).href
  const successUrl = new URL('billing?status=success', baseHref).href
  const cancelUrl = new URL('billing?status=cancel', baseHref).href

  const res = await fetch(`${apiBase()}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan, successUrl, cancelUrl, customerEmail: opts.email || undefined }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) return { error: data.error || `Serverfout (${res.status})` }
  if (!data.url) return { error: 'Geen betaallink ontvangen.' }
  return { url: data.url }
}

export async function createEmbeddedCheckoutSession(plan, opts = {}) {
  const baseHref = new URL(import.meta.env.BASE_URL || '/', window.location.origin).href
  const returnUrl = new URL('billing?session_id={CHECKOUT_SESSION_ID}', baseHref).href

  const res = await fetch(`${apiBase()}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan, embedded: true, returnUrl, customerEmail: opts.email || undefined }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) return { error: data.error || `Serverfout (${res.status})` }
  if (!data.clientSecret) return { error: 'Geen client_secret ontvangen.' }
  return { clientSecret: data.clientSecret }
}
