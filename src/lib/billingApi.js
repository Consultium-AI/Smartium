function apiBase() {
  const raw = import.meta.env.VITE_API_BASE_URL || ''
  const fallback = 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev'
  return (raw || fallback).replace(/\/$/, '')
}

function billingPageUrl(suffix) {
  const root = new URL(import.meta.env.BASE_URL || '/', window.location.origin)
  const path = `${root.pathname.replace(/\/$/, '')}/billing${suffix}`
  return `${root.origin}${path.startsWith('/') ? '' : '/'}${path}`
}

export async function createCheckoutSession(plan, opts = {}) {
  // Stripe vervangt {CHECKOUT_SESSION_ID}; zonder dit geen grant-access-call na iDEAL-redirect
  const successUrl = billingPageUrl('?session_id={CHECKOUT_SESSION_ID}&status=success')
  const cancelUrl = billingPageUrl('?status=cancel')

  const res = await fetch(`${apiBase()}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      plan,
      successUrl,
      cancelUrl,
      customerEmail: opts.email || undefined,
      customerUid: opts.uid || undefined,
      prefillCustomerEmail: opts.prefillCustomerEmail !== false,
    }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) return { error: data.error || `Serverfout (${res.status})` }
  if (!data.url) return { error: 'Geen betaallink ontvangen.' }
  return { url: data.url }
}

export async function createEmbeddedCheckoutSession(plan, opts = {}) {
  const returnUrl = billingPageUrl('?session_id={CHECKOUT_SESSION_ID}&status=success')

  const res = await fetch(`${apiBase()}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      plan,
      embedded: true,
      returnUrl,
      customerEmail: opts.email || undefined,
      customerUid: opts.uid || undefined,
      prefillCustomerEmail: opts.prefillCustomerEmail !== false,
    }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) return { error: data.error || `Serverfout (${res.status})` }
  if (!data.clientSecret) return { error: 'Geen client_secret ontvangen.' }
  return { clientSecret: data.clientSecret }
}

export async function grantAccessAfterPayment(sessionId, uid, email) {
  const res = await fetch(`${apiBase()}/api/grant-access`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, uid, email: email || undefined }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) return { error: data.error || 'Fout bij toegang verlenen' }
  return data
}

export async function recoverAccessForUser(uid, email) {
  const res = await fetch(`${apiBase()}/api/recover-access`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uid, email: email || undefined }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) return { error: data.error || 'Geen actieve toegang gevonden' }
  return data
}
