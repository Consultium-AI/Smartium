export interface Env {
  OPENAI_API_KEY: string
  ALLOWED_ORIGINS: string
  STRIPE_SECRET_KEY?: string
  STRIPE_PRICE_MONTHLY?: string
  STRIPE_PRICE_YEARLY?: string
  STRIPE_PAYMENT_METHOD_TYPES?: string
  STRIPE_WEBHOOK_SECRET?: string
  FIREBASE_PROJECT_ID?: string
  FIREBASE_CLIENT_EMAIL?: string
  FIREBASE_PRIVATE_KEY?: string
}

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const STRIPE_API = 'https://api.stripe.com/v1/checkout/sessions'
const STRIPE_SEARCH_API = 'https://api.stripe.com/v1/checkout/sessions/search'

function parseAllowedOrigins(raw: string): string[] {
  return raw.split(',').map((s) => s.trim()).filter(Boolean)
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
    return json(origin, { error: 'Stripe is niet geconfigureerd.' }, 503)
  }

  let body: {
    plan?: string
    successUrl?: string
    cancelUrl?: string
    customerEmail?: string
    customerUid?: string
    embedded?: boolean
    returnUrl?: string
  }
  try {
    body = await request.json()
  } catch {
    return json(origin, { error: 'Invalid JSON' }, 400)
  }

  const plan = body.plan === 'yearly' ? 'yearly' : 'monthly'
  const priceId = plan === 'yearly' ? priceYearly : priceMonthly
  if (!priceId) {
    return json(origin, { error: `Stripe prijs voor ${plan} ontbreekt.` }, 503)
  }

  const embedded = body.embedded === true
  const params = new URLSearchParams()
  params.set('mode', 'payment')

  if (embedded) {
    const returnUrl = typeof body.returnUrl === 'string' ? body.returnUrl.trim() : ''
    if (!returnUrl || !returnUrl.includes('{CHECKOUT_SESSION_ID}')) {
      return json(origin, { error: 'returnUrl met {CHECKOUT_SESSION_ID} is verplicht voor embedded checkout.' }, 400)
    }
    params.set('ui_mode', 'embedded')
    params.set('return_url', returnUrl)
  } else {
    const successUrl = typeof body.successUrl === 'string' ? body.successUrl : ''
    const cancelUrl = typeof body.cancelUrl === 'string' ? body.cancelUrl : ''
    if (!successUrl || !cancelUrl) {
      return json(origin, { error: 'successUrl en cancelUrl zijn verplicht.' }, 400)
    }
    params.set('success_url', successUrl)
    params.set('cancel_url', cancelUrl)
  }

  params.set('line_items[0][price]', priceId)
  params.set('line_items[0][quantity]', '1')

  params.set('metadata[plan]', plan)
  if (body.customerUid) {
    params.set('metadata[uid]', body.customerUid)
  }

  const rawPm = env.STRIPE_PAYMENT_METHOD_TYPES?.trim()
  const methods = rawPm ? rawPm.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean) : ['ideal']
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

  const text = await stripeRes.text()
  let stripeJson: Record<string, unknown>
  try {
    stripeJson = JSON.parse(text)
  } catch {
    return json(origin, { error: 'Stripe gaf een ongeldig antwoord.' }, 502)
  }

  if (!stripeRes.ok) {
    const msg =
      typeof stripeJson.error === 'object' && stripeJson.error !== null
        ? (stripeJson.error as { message?: string }).message || 'Stripe fout'
        : 'Stripe fout'
    return json(origin, { error: msg }, stripeRes.status)
  }

  if (embedded) {
    return json(origin, { clientSecret: stripeJson.client_secret })
  }
  return json(origin, { url: stripeJson.url })
}

// ─── Stripe Webhook ────────────────────────────────────────────
async function verifyStripeSignature(
  payload: string,
  sigHeader: string,
  secret: string
): Promise<boolean> {
  const parts = sigHeader.split(',')
  let timestamp = ''
  const signatures: string[] = []
  for (const part of parts) {
    const [k, v] = part.split('=')
    if (k === 't') timestamp = v
    if (k === 'v1') signatures.push(v)
  }
  if (!timestamp || signatures.length === 0) return false

  const signedPayload = `${timestamp}.${payload}`
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signedPayload))
  const expected = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('')
  return signatures.some((s) => s === expected)
}

async function writeAccessToFirestore(
  env: Env,
  uid: string,
  plan: string,
  sessionId: string,
  email: string | null
): Promise<void> {
  const projectId = env.FIREBASE_PROJECT_ID?.trim()
  if (!projectId) {
    console.log('FIREBASE_PROJECT_ID not set, skipping Firestore write. Falling back to client-side access grant.')
    return
  }

  const now = Date.now()
  const daysToAdd = plan === 'yearly' ? 365 : 30
  const paidUntil = now + daysToAdd * 24 * 60 * 60 * 1000

  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${uid}?updateMask.fieldPaths=paidUntil&updateMask.fieldPaths=plan&updateMask.fieldPaths=lastPayment&updateMask.fieldPaths=email`

  const docData = {
    fields: {
      paidUntil: { integerValue: String(paidUntil) },
      plan: { stringValue: plan },
      lastPayment: {
        mapValue: {
          fields: {
            sessionId: { stringValue: sessionId },
            at: { integerValue: String(now) },
            plan: { stringValue: plan },
          },
        },
      },
      ...(email ? { email: { stringValue: email } } : {}),
    },
  }

  const firestoreRes = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${await getFirebaseAccessToken(env)}` },
    body: JSON.stringify(docData),
  })

  if (!firestoreRes.ok) {
    const errText = await firestoreRes.text()
    console.error('Firestore write failed:', firestoreRes.status, errText)
  }
}

async function getFirebaseAccessToken(env: Env): Promise<string> {
  const email = env.FIREBASE_CLIENT_EMAIL?.trim()
  const keyRaw = env.FIREBASE_PRIVATE_KEY?.trim()

  if (!email || !keyRaw) {
    throw new Error('FIREBASE_CLIENT_EMAIL or FIREBASE_PRIVATE_KEY not set')
  }

  const key = keyRaw.replace(/\\n/g, '\n')
  const now = Math.floor(Date.now() / 1000)
  const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).replace(/=/g, '')
  const claim = btoa(
    JSON.stringify({
      iss: email,
      scope: 'https://www.googleapis.com/auth/datastore',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  ).replace(/=/g, '')

  const signInput = `${header}.${claim}`
  const pemBody = key.replace(/-----BEGIN PRIVATE KEY-----/, '').replace(/-----END PRIVATE KEY-----/, '').replace(/\s/g, '')
  const binaryKey = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0))
  const cryptoKey = await crypto.subtle.importKey('pkcs8', binaryKey, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign'])
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, new TextEncoder().encode(signInput))
  const sig = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
  const jwt = `${signInput}.${sig}`

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  })
  const tokenData = (await tokenRes.json()) as { access_token?: string }
  if (!tokenData.access_token) throw new Error('Failed to get Firebase access token')
  return tokenData.access_token
}

async function handleStripeWebhook(request: Request, env: Env): Promise<Response> {
  const webhookSecret = env.STRIPE_WEBHOOK_SECRET?.trim()
  const payload = await request.text()

  if (webhookSecret) {
    const sig = request.headers.get('stripe-signature') || ''
    const valid = await verifyStripeSignature(payload, sig, webhookSecret)
    if (!valid) {
      return new Response('Invalid signature', { status: 400 })
    }
  }

  let event: { type?: string; data?: { object?: Record<string, unknown> } }
  try {
    event = JSON.parse(payload)
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data?.object
    if (session) {
      const metadata = (session.metadata || {}) as Record<string, string>
      const uid = metadata.uid
      const plan = metadata.plan || 'monthly'
      const sessionId = (session.id as string) || ''
      const email = (session.customer_email as string) || null

      if (uid) {
        try {
          await writeAccessToFirestore(env, uid, plan, sessionId, email)
        } catch (e) {
          console.error('Failed to grant access:', e)
        }
      }
    }
  }

  return new Response('ok', { status: 200 })
}

// ─── Grant access client-side (fallback when no webhook) ───────
async function handleGrantAccess(request: Request, env: Env, origin: string): Promise<Response> {
  let body: { sessionId?: string; uid?: string }
  try {
    body = await request.json()
  } catch {
    return json(origin, { error: 'Invalid JSON' }, 400)
  }

  const secret = env.STRIPE_SECRET_KEY?.trim()
  if (!secret) return json(origin, { error: 'Not configured' }, 503)

  const sid = body.sessionId?.trim()
  const uid = body.uid?.trim()
  if (!sid || !uid) return json(origin, { error: 'sessionId and uid required' }, 400)

  const stripeRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sid}`, {
    headers: { Authorization: `Bearer ${secret}` },
  })
  if (!stripeRes.ok) return json(origin, { error: 'Invalid session' }, 400)

  const session = (await stripeRes.json()) as Record<string, unknown>
  if (session.payment_status !== 'paid') {
    return json(origin, { error: 'Not paid' }, 400)
  }

  const metadata = (session.metadata || {}) as Record<string, string>
  if (metadata.uid && metadata.uid !== uid) {
    return json(origin, { error: 'UID mismatch' }, 403)
  }

  const plan = metadata.plan || 'monthly'
  const now = Date.now()
  const daysToAdd = plan === 'yearly' ? 365 : 30
  const paidUntil = now + daysToAdd * 24 * 60 * 60 * 1000

  const projectId = env.FIREBASE_PROJECT_ID?.trim()
  if (projectId) {
    try {
      await writeAccessToFirestore(env, uid, plan, sid, (session.customer_email as string) || null)
      return json(origin, { granted: true, paidUntil, plan })
    } catch (e) {
      console.error('Firestore write in grant-access failed:', e)
    }
  }

  return json(origin, { granted: true, paidUntil, plan })
}

function escapeStripeSearchValue(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function paidUntilFromSession(createdSeconds: number, plan: string): number {
  const daysToAdd = plan === 'yearly' ? 365 : 30
  return createdSeconds * 1000 + daysToAdd * 24 * 60 * 60 * 1000
}

async function findLatestPaidSession(
  secret: string,
  query: string
): Promise<Record<string, unknown> | null> {
  const url = `${STRIPE_SEARCH_API}?${new URLSearchParams({ limit: '20', query }).toString()}`
  const stripeRes = await fetch(url, {
    headers: { Authorization: `Bearer ${secret}` },
  })
  if (!stripeRes.ok) return null
  const result = (await stripeRes.json()) as { data?: Record<string, unknown>[] }
  return Array.isArray(result.data) && result.data.length > 0 ? result.data[0] : null
}

// ─── Recover access by account (cross-device/incognito) ───────
async function handleRecoverAccess(request: Request, env: Env, origin: string): Promise<Response> {
  let body: { uid?: string; email?: string }
  try {
    body = await request.json()
  } catch {
    return json(origin, { error: 'Invalid JSON' }, 400)
  }

  const secret = env.STRIPE_SECRET_KEY?.trim()
  if (!secret) return json(origin, { error: 'Not configured' }, 503)

  const uid = body.uid?.trim()
  const email = body.email?.trim().toLowerCase()
  if (!uid) return json(origin, { error: 'uid required' }, 400)

  const byUidQuery =
    `payment_status:'paid' AND status:'complete' AND metadata['uid']:'${escapeStripeSearchValue(uid)}'`
  let session = await findLatestPaidSession(secret, byUidQuery)

  if (!session && email) {
    const byEmailQuery =
      `payment_status:'paid' AND status:'complete' AND customer_email:'${escapeStripeSearchValue(email)}'`
    session = await findLatestPaidSession(secret, byEmailQuery)
  }

  if (!session) return json(origin, { error: 'No paid session found' }, 404)

  const metadata = (session.metadata || {}) as Record<string, string>
  const plan = metadata.plan === 'yearly' ? 'yearly' : 'monthly'
  const created = Number(session.created) || 0
  if (!created) return json(origin, { error: 'Invalid paid session data' }, 500)

  const paidUntil = paidUntilFromSession(created, plan)
  if (paidUntil <= Date.now()) return json(origin, { error: 'Access expired' }, 410)

  const sessionId = String(session.id || '')
  const customerEmail = String(session.customer_email || email || '')
  const projectId = env.FIREBASE_PROJECT_ID?.trim()
  if (projectId) {
    try {
      await writeAccessToFirestore(env, uid, plan, sessionId, customerEmail)
    } catch (e) {
      console.error('Firestore write in recover-access failed:', e)
    }
  }

  return json(origin, { granted: true, paidUntil, plan, recovered: true })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const origin = request.headers.get('Origin') ?? '*'
    const allowed = parseAllowedOrigins(env.ALLOWED_ORIGINS || '')
    const isAllowed = allowed.length === 0 || allowed.includes(origin)

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) })
    }

    if (url.pathname === '/api/stripe-webhook' && request.method === 'POST') {
      return handleStripeWebhook(request, env)
    }

    if (!isAllowed) {
      return new Response('CORS: origin not allowed', { status: 403 })
    }

    if (url.pathname === '/api/create-checkout-session' && request.method === 'POST') {
      return handleCreateCheckoutSession(request, env, origin)
    }

    if (url.pathname === '/api/grant-access' && request.method === 'POST') {
      return handleGrantAccess(request, env, origin)
    }

    if (url.pathname === '/api/recover-access' && request.method === 'POST') {
      return handleRecoverAccess(request, env, origin)
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
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    })
  },
}
