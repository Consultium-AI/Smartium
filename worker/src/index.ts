export interface Env {
  OPENAI_API_KEY: string
  /** Comma-separated origins */
  ALLOWED_ORIGINS: string
  /** wrangler secret put STRIPE_SECRET_KEY — nooit in git */
  STRIPE_SECRET_KEY?: string
  /** Stripe Dashboard → Producten → prijs-ID (recurring) */
  STRIPE_PRICE_MONTHLY?: string
  STRIPE_PRICE_YEARLY?: string
  /**
   * Komma-gescheiden: card, paypal, ideal. Voor subscriptions vereist iDEAL SEPA-incasso in Stripe.
   * Standaard (leeg): card,paypal — zodat checkout werkt zonder SEPA.
   */
  STRIPE_PAYMENT_METHOD_TYPES?: string
}

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const STRIPE_API = 'https://api.stripe.com/v1/checkout/sessions'

function parseAllowedOrigins(raw: string): string[] {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function corsHeaders(origin: string): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }
}

function json(origin: string, data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  })
}

async function handleCreateCheckoutSession(
  request: Request,
  env: Env,
  origin: string
): Promise<Response> {
  const secret = env.STRIPE_SECRET_KEY?.trim()
  const priceMonthly = env.STRIPE_PRICE_MONTHLY?.trim()
  const priceYearly = env.STRIPE_PRICE_YEARLY?.trim()

  if (!secret) {
    return json(
      origin,
      { error: 'Stripe is niet geconfigureerd (STRIPE_SECRET_KEY ontbreekt op de Worker).' },
      503
    )
  }

  let body: {
    plan?: string
    successUrl?: string
    cancelUrl?: string
    customerEmail?: string
  }
  try {
    body = await request.json()
  } catch {
    return json(origin, { error: 'Invalid JSON' }, 400)
  }

  const plan = body.plan === 'yearly' ? 'yearly' : 'monthly'
  const priceId = plan === 'yearly' ? priceYearly : priceMonthly
  if (!priceId) {
    return json(
      origin,
      {
        error:
          plan === 'yearly'
            ? 'STRIPE_PRICE_YEARLY ontbreekt op de Worker.'
            : 'STRIPE_PRICE_MONTHLY ontbreekt op de Worker.',
      },
      503
    )
  }

  const successUrl = typeof body.successUrl === 'string' ? body.successUrl : ''
  const cancelUrl = typeof body.cancelUrl === 'string' ? body.cancelUrl : ''
  if (!successUrl || !cancelUrl) {
    return json(origin, { error: 'successUrl en cancelUrl zijn verplicht.' }, 400)
  }

  const params = new URLSearchParams()
  params.set('mode', 'subscription')
  params.set('success_url', successUrl)
  params.set('cancel_url', cancelUrl)
  params.set('line_items[0][price]', priceId)
  params.set('line_items[0][quantity]', '1')

  const rawPm = env.STRIPE_PAYMENT_METHOD_TYPES?.trim()
  const methods = rawPm
    ? rawPm
        .split(',')
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean)
    : ['card', 'paypal']
  for (const pm of methods) {
    params.append('payment_method_types[]', pm)
  }
  const email = body.customerEmail?.trim()
  if (email) params.set('customer_email', email)

  const stripeRes = await fetch(STRIPE_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  })

  const stripeData = (await stripeRes.json()) as {
    url?: string
    error?: { message?: string }
  }

  if (!stripeRes.ok) {
    return json(
      origin,
      { error: stripeData.error?.message || 'Stripe Checkout mislukt.' },
      502
    )
  }

  if (!stripeData.url) {
    return json(origin, { error: 'Geen Checkout-URL van Stripe.' }, 502)
  }

  return json(origin, { url: stripeData.url })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const origin = request.headers.get('Origin')
    const allowed = parseAllowedOrigins(env.ALLOWED_ORIGINS)

    if (request.method === 'OPTIONS') {
      if (!origin || !allowed.includes(origin)) {
        return new Response(null, { status: 403 })
      }
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin),
      })
    }

    if (!origin || !allowed.includes(origin)) {
      return new Response('Forbidden', { status: 403 })
    }

    if (url.pathname === '/api/create-checkout-session' && request.method === 'POST') {
      return handleCreateCheckoutSession(request, env, origin)
    }

    if (url.pathname !== '/api/chat' || request.method !== 'POST') {
      return new Response('Not found', { status: 404 })
    }

    if (!env.OPENAI_API_KEY) {
      return json(origin, { error: { message: 'Server misconfigured' } }, 500)
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return json(origin, { error: { message: 'Invalid JSON' } }, 400)
    }

    if (!body || typeof body !== 'object' || !Array.isArray((body as { messages?: unknown }).messages)) {
      return json(origin, { error: { message: 'Expected { messages: [...] }' } }, 400)
    }

    const { messages, model, temperature, max_tokens } = body as {
      messages: unknown[]
      model?: string
      temperature?: number
      max_tokens?: number
    }

    const payload = {
      model: typeof model === 'string' && model ? model : 'gpt-4o',
      messages,
      ...(typeof temperature === 'number' ? { temperature } : {}),
      ...(typeof max_tokens === 'number' ? { max_tokens } : {}),
    }

    const r = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    return new Response(await r.text(), {
      status: r.status,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders(origin),
      },
    })
  },
}
