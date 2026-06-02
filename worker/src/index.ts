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
  FIREBASE_MAIL_COLLECTION?: string
  /** https://resend.com — optioneel: branded betaalbevestiging na checkout */
  RESEND_API_KEY?: string
  /** bv. Smartium <factuur@jouwdomein.nl> (Resend: geverifieerd afzenderdomein) */
  RESEND_FROM?: string
  /** Ontvanger voor gebruikersfeedback (standaard support-mail) */
  FEEDBACK_TO?: string
}

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const STRIPE_API = 'https://api.stripe.com/v1/checkout/sessions'
const STRIPE_SEARCH_API = 'https://api.stripe.com/v1/checkout/sessions/search'
const FREE_CHAT_PROMPT_LIMIT = 20

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

/** E-mail die de klant bij Stripe Checkout heeft opgegeven (na betaling beschikbaar). */
function checkoutSessionCustomerEmail(session: Record<string, unknown>): string | null {
  const direct = typeof session.customer_email === 'string' ? session.customer_email.trim() : ''
  if (direct) return direct
  const details = session.customer_details as { email?: string } | undefined
  const fromDetails = typeof details?.email === 'string' ? details.email.trim() : ''
  return fromDetails || null
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function sendPaymentConfirmationEmail(
  env: Env,
  opts: { to: string; plan: string; sessionId: string }
): Promise<boolean> {
  const key = env.RESEND_API_KEY?.trim()
  const from = env.RESEND_FROM?.trim()
  if (!key || !from) return false

  const planLabel = opts.plan === 'yearly' ? 'Jaarlijks' : 'Maandelijks'
  const safeEmail = escapeHtml(opts.to)
  const html = `<p>Hallo,</p>
<p>Bedankt voor je betaling bij Smartium. Je betaling is ontvangen.</p>
<p><strong>Plan:</strong> ${escapeHtml(planLabel)}<br/>
<strong>Factuur-/contactmail:</strong> ${safeEmail}</p>
<p>Je hebt nu volledige toegang tot het platform. Veel succes met studeren.</p>
<p style="color:#64748b;font-size:12px;margin-top:2rem;">Sessie: ${escapeHtml(opts.sessionId)}</p>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': `smartium-payment-${opts.sessionId}`,
    },
    body: JSON.stringify({
      from,
      to: [opts.to],
      subject: 'Bevestiging van je Smartium-betaling',
      html,
    }),
  })
  if (!res.ok) {
    const t = await res.text()
    console.error('Resend payment confirmation failed:', res.status, t)
    return false
  }
  return true
}

const FEEDBACK_CATEGORY_LABELS: Record<string, string> = {
  bug: 'Bug / fout',
  idea: 'Idee / verbetering',
  other: 'Overig',
}

async function sendFeedbackEmail(
  env: Env,
  opts: { message: string; category: string; page: string; userEmail: string }
): Promise<boolean> {
  const key = env.RESEND_API_KEY?.trim()
  const from = env.RESEND_FROM?.trim()
  const to = (env.FEEDBACK_TO || 'smartiumsupport@gmail.com').trim().toLowerCase()
  if (!key || !from) return false

  const categoryLabel = FEEDBACK_CATEGORY_LABELS[opts.category] || opts.category
  const replyLine = opts.userEmail
    ? `<p><strong>Contact:</strong> ${escapeHtml(opts.userEmail)}</p>`
    : '<p><em>Geen e-mail opgegeven.</em></p>'
  const html = `<p>Nieuwe feedback via Smartium:</p>
<p><strong>Categorie:</strong> ${escapeHtml(categoryLabel)}<br/>
<strong>Pagina:</strong> ${escapeHtml(opts.page || '/')}</p>
${replyLine}
<hr style="border:none;border-top:1px solid #e2e8f0;margin:1rem 0"/>
<p style="white-space:pre-wrap">${escapeHtml(opts.message)}</p>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: opts.userEmail || undefined,
      subject: `Smartium feedback: ${categoryLabel}`,
      html,
    }),
  })
  if (!res.ok) {
    const t = await res.text()
    console.error('Resend feedback failed:', res.status, t)
    return false
  }
  return true
}

async function handleFeedback(request: Request, env: Env, origin: string): Promise<Response> {
  if (!env.RESEND_API_KEY?.trim() || !env.RESEND_FROM?.trim()) {
    return json(origin, { error: 'Feedback is tijdelijk niet beschikbaar.' }, 503)
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return json(origin, { error: 'Ongeldige aanvraag.' }, 400)
  }

  const raw = body && typeof body === 'object' ? (body as Record<string, unknown>) : {}
  const message = typeof raw.message === 'string' ? raw.message.trim() : ''
  const page = typeof raw.page === 'string' ? raw.page.trim().slice(0, 500) : ''
  const userEmail = typeof raw.userEmail === 'string' ? raw.userEmail.trim().slice(0, 320) : ''
  const categoryRaw = typeof raw.category === 'string' ? raw.category.trim() : 'other'
  const category = categoryRaw in FEEDBACK_CATEGORY_LABELS ? categoryRaw : 'other'

  if (message.length < 10) {
    return json(origin, { error: 'Bericht is te kort (minimaal 10 tekens).' }, 400)
  }
  if (message.length > 2000) {
    return json(origin, { error: 'Bericht is te lang (maximaal 2000 tekens).' }, 400)
  }
  if (userEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
    return json(origin, { error: 'Ongeldig e-mailadres.' }, 400)
  }

  const sent = await sendFeedbackEmail(env, { message, category, page, userEmail })
  if (!sent) {
    return json(origin, { error: 'Versturen mislukt. Probeer het later opnieuw.' }, 502)
  }

  return json(origin, { ok: true })
}

function toFirestoreDocId(input: string): string {
  return input.trim().replace(/[^a-zA-Z0-9_-]/g, '_')
}

async function queueFirebasePaymentConfirmationEmail(
  env: Env,
  opts: { to: string; plan: string; sessionId: string }
): Promise<boolean> {
  const projectId = env.FIREBASE_PROJECT_ID?.trim()
  const email = opts.to.trim()
  if (!projectId || !email) return false

  const token = await getFirebaseAccessToken(env)
  const collection = (env.FIREBASE_MAIL_COLLECTION || 'mail').trim() || 'mail'
  const planLabel = opts.plan === 'yearly' ? 'Jaarlijks' : 'Maandelijks'
  const docId = `payment_confirmation_${toFirestoreDocId(opts.sessionId)}`
  const url =
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/` +
    `${encodeURIComponent(collection)}/${encodeURIComponent(docId)}?currentDocument.exists=false`

  const safeEmail = escapeHtml(email)
  const html = `<p>Hallo,</p>
<p>Bedankt voor je betaling bij Smartium. Je betaling is ontvangen.</p>
<p><strong>Plan:</strong> ${escapeHtml(planLabel)}<br/>
<strong>Factuur-/contactmail:</strong> ${safeEmail}</p>
<p>Je hebt nu volledige toegang tot het platform. Veel succes met studeren.</p>
<p style="color:#64748b;font-size:12px;margin-top:2rem;">Sessie: ${escapeHtml(opts.sessionId)}</p>`
  const text =
    `Bedankt voor je betaling bij Smartium.\n` +
    `Plan: ${planLabel}\n` +
    `Factuur-/contactmail: ${email}\n` +
    `Sessie: ${opts.sessionId}`

  const payload = {
    fields: {
      to: { arrayValue: { values: [{ stringValue: email }] } },
      message: {
        mapValue: {
          fields: {
            subject: { stringValue: 'Bevestiging van je Smartium-betaling' },
            text: { stringValue: text },
            html: { stringValue: html },
          },
        },
      },
      meta: {
        mapValue: {
          fields: {
            sessionId: { stringValue: opts.sessionId },
            plan: { stringValue: opts.plan },
            source: { stringValue: 'worker-payment-confirmation' },
          },
        },
      },
    },
  }

  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  // 409 = document bestond al (idempotent), dus prima.
  if (res.status === 409) return true
  if (!res.ok) {
    const t = await res.text()
    console.error('Firebase payment confirmation queue failed:', res.status, t)
    return false
  }
  return true
}

async function sendPaymentConfirmation(
  env: Env,
  opts: { plan: string; sessionId: string; email: string }
): Promise<{ firebaseQueued: boolean; resendSent: boolean }> {
  const email = opts.email.trim()
  if (!email) return { firebaseQueued: false, resendSent: false }

  const [firebaseResult, resendResult] = await Promise.allSettled([
    queueFirebasePaymentConfirmationEmail(env, { to: email, plan: opts.plan, sessionId: opts.sessionId }),
    // Optionele fallback als Firebase Trigger Email nog niet actief is.
    sendPaymentConfirmationEmail(env, { to: email, plan: opts.plan, sessionId: opts.sessionId }),
  ])
  return {
    firebaseQueued: firebaseResult.status === 'fulfilled' ? firebaseResult.value : false,
    resendSent: resendResult.status === 'fulfilled' ? resendResult.value : false,
  }
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
    /** false = geen customer_email op de sessie; Stripe laat de klant e-mail invullen bij checkout */
    prefillCustomerEmail?: boolean
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
  // Forceer factuur/paid-receipt flow voor betaalmethodes zoals iDEAL.
  params.set('invoice_creation[enabled]', 'true')
  params.set('invoice_creation[invoice_data][description]', `Smartium ${plan} toegang`)

  params.set('metadata[plan]', plan)
  if (body.customerUid) {
    params.set('metadata[uid]', body.customerUid)
  }

  const rawPm = env.STRIPE_PAYMENT_METHOD_TYPES?.trim()
  const methods = rawPm ? rawPm.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean) : ['ideal']
  for (const pm of methods) {
    params.append('payment_method_types[]', pm)
  }

  const prefillEmail = body.prefillCustomerEmail !== false
  const email = body.customerEmail?.trim()
  if (prefillEmail && email) {
    params.set('customer_email', email)
    // Stripe stuurt een betaalbewijs/receipt naar dit adres (Dashboard: e-mails voor klanten aan).
    params.set('payment_intent_data[receipt_email]', email)
  }

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
  email: string | null,
  opts?: { mode?: 'extend' | 'sync'; paidUntilMs?: number }
): Promise<number | null> {
  const projectId = env.FIREBASE_PROJECT_ID?.trim()
  if (!projectId) {
    console.log('FIREBASE_PROJECT_ID not set, skipping Firestore write. Falling back to client-side access grant.')
    return null
  }

  const token = await getFirebaseAccessToken(env)
  const docUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${uid}`
  const now = Date.now()
  const durationMs = (plan === 'yearly' ? 365 : 30) * 24 * 60 * 60 * 1000
  const mode = opts?.mode || 'extend'

  const existing = await fetchFirestoreUserDoc(docUrl, token)
  const existingPaidUntil = readIntegerField(existing?.fields?.paidUntil)
  const existingLastSessionId = readNestedStringField(existing?.fields, ['lastPayment', 'sessionId'])

  let paidUntil: number
  if (mode === 'sync') {
    const target = Number(opts?.paidUntilMs) || 0
    paidUntil = Math.max(existingPaidUntil, target)
  } else {
    // Idempotency for Stripe webhook retries or repeated grant-access calls.
    if (sessionId && existingLastSessionId && existingLastSessionId === sessionId) {
      return existingPaidUntil || null
    }
    const base = Math.max(now, existingPaidUntil)
    paidUntil = base + durationMs
  }

  const url = `${docUrl}?updateMask.fieldPaths=paidUntil&updateMask.fieldPaths=plan&updateMask.fieldPaths=lastPayment&updateMask.fieldPaths=email&updateMask.fieldPaths=subscriptionStopped&updateMask.fieldPaths=billingReminderOptOut&updateMask.fieldPaths=subscriptionStoppedAt`

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
      subscriptionStopped: { booleanValue: false },
      billingReminderOptOut: { booleanValue: false },
      subscriptionStoppedAt: { nullValue: null },
    },
  }

  const firestoreRes = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(docData),
  })

  if (!firestoreRes.ok) {
    const errText = await firestoreRes.text()
    console.error('Firestore write failed:', firestoreRes.status, errText)
    return null
  }
  return paidUntil
}

function readIntegerField(field: unknown): number {
  if (!field || typeof field !== 'object') return 0
  const v = (field as { integerValue?: string }).integerValue
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
}

function readStringField(field: unknown): string {
  if (!field || typeof field !== 'object') return ''
  return ((field as { stringValue?: string }).stringValue || '').trim()
}

function readNestedStringField(
  fields: Record<string, unknown> | undefined,
  path: string[]
): string {
  if (!fields) return ''
  let cursor: unknown = fields
  for (let i = 0; i < path.length; i++) {
    const key = path[i]
    if (!cursor || typeof cursor !== 'object') return ''
    const typed = cursor as Record<string, unknown>
    if (i === 0) {
      cursor = typed[key]
      continue
    }
    cursor = (typed.mapValue as { fields?: Record<string, unknown> } | undefined)?.fields?.[key]
  }
  if (!cursor || typeof cursor !== 'object') return ''
  return ((cursor as { stringValue?: string }).stringValue || '').trim()
}

function readNestedIntegerField(
  fields: Record<string, unknown> | undefined,
  path: string[]
): number {
  if (!fields) return 0
  let cursor: unknown = fields
  for (let i = 0; i < path.length; i++) {
    const key = path[i]
    if (!cursor || typeof cursor !== 'object') return 0
    const typed = cursor as Record<string, unknown>
    if (i === 0) {
      cursor = typed[key]
      continue
    }
    cursor = (typed.mapValue as { fields?: Record<string, unknown> } | undefined)?.fields?.[key]
  }
  return readIntegerField(cursor)
}

function currentMonthKeyUtc(nowMs = Date.now()): string {
  const d = new Date(nowMs)
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  return `${y}-${m}`
}

function hasUnlimitedChatAccess(plan: string, paidUntilMs: number): boolean {
  if (plan === 'admin' || plan === 'vip') return true
  if ((plan === 'monthly' || plan === 'yearly') && paidUntilMs > Date.now()) return true
  return false
}

async function consumeChatPromptQuota(
  env: Env,
  opts: { uid: string; email?: string; firebaseIdToken?: string }
): Promise<{
  allowed: boolean
  limit: number
  used: number
  remaining: number
  monthKey: string
  reason?: string
}> {
  const uid = opts.uid.trim()
  if (!uid) {
    return {
      allowed: false,
      limit: FREE_CHAT_PROMPT_LIMIT,
      used: 0,
      remaining: 0,
      monthKey: currentMonthKeyUtc(),
      reason: 'auth_required',
    }
  }

  const projectId = env.FIREBASE_PROJECT_ID?.trim()
  if (!projectId) {
    // Hard fail: quota must be enforced server-side via Firebase.
    return {
      allowed: false,
      limit: FREE_CHAT_PROMPT_LIMIT,
      used: 0,
      remaining: 0,
      monthKey: currentMonthKeyUtc(),
      reason: 'firebase_not_configured',
    }
  }

  let token = ''
  const userToken = (opts.firebaseIdToken || '').trim()
  const hasServiceAccountCreds =
    Boolean(env.FIREBASE_CLIENT_EMAIL?.trim()) && Boolean(env.FIREBASE_PRIVATE_KEY?.trim())

  // Preferred: use end-user Firebase ID token (SDK/ADC-style auth path, no service-account secret needed).
  // Fallback: service-account token when configured.
  const userAuthHeader = userToken ? `Bearer ${userToken}` : ''

  if (!userAuthHeader && !hasServiceAccountCreds) {
    return {
      allowed: false,
      limit: FREE_CHAT_PROMPT_LIMIT,
      used: 0,
      remaining: 0,
      monthKey: currentMonthKeyUtc(),
      reason: 'firebase_auth_failed',
    }
  }

  try {
    if (!userToken) {
      token = await getFirebaseAccessToken(env)
    }
  } catch (e) {
    console.error('Failed to get Firebase token for chat quota:', e)
    return {
      allowed: false,
      limit: FREE_CHAT_PROMPT_LIMIT,
      used: 0,
      remaining: 0,
      monthKey: currentMonthKeyUtc(),
      reason: 'firebase_auth_failed',
    }
  }
  const docUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${uid}`
  const doc = userToken
    ? await (async () => {
        const res = await fetch(docUrl, { headers: { Authorization: userAuthHeader } })
        if (res.status === 404) return null
        if (!res.ok) {
          const errText = await res.text()
          console.error('Firestore read failed (user token):', res.status, errText)
          return null
        }
        return (await res.json()) as { fields?: Record<string, unknown> }
      })()
    : await fetchFirestoreUserDoc(docUrl, token)
  const fields = doc?.fields
  const plan = readStringField(fields?.plan).toLowerCase()
  const paidUntilMs = readIntegerField(fields?.paidUntil)

  // Premium users are not rate-limited.
  if (hasUnlimitedChatAccess(plan, paidUntilMs)) {
    return {
      allowed: true,
      limit: FREE_CHAT_PROMPT_LIMIT,
      used: 0,
      remaining: FREE_CHAT_PROMPT_LIMIT,
      monthKey: currentMonthKeyUtc(),
      reason: 'premium',
    }
  }

  const now = Date.now()
  const monthKey = currentMonthKeyUtc(now)
  const storedMonth = readNestedStringField(fields, ['chatUsage', 'monthKey'])
  const storedCount = readNestedIntegerField(fields, ['chatUsage', 'promptCount'])
  const used = storedMonth === monthKey ? Math.max(0, storedCount) : 0

  if (used >= FREE_CHAT_PROMPT_LIMIT) {
    return {
      allowed: false,
      limit: FREE_CHAT_PROMPT_LIMIT,
      used,
      remaining: 0,
      monthKey,
      reason: 'free_limit_reached',
    }
  }

  const nextUsed = used + 1
  const writeUrl = `${docUrl}?updateMask.fieldPaths=chatUsage&updateMask.fieldPaths=email`
  const payload = {
    fields: {
      chatUsage: {
        mapValue: {
          fields: {
            monthKey: { stringValue: monthKey },
            promptCount: { integerValue: String(nextUsed) },
            limit: { integerValue: String(FREE_CHAT_PROMPT_LIMIT) },
            updatedAt: { integerValue: String(now) },
          },
        },
      },
      ...(opts.email ? { email: { stringValue: opts.email.trim().toLowerCase() } } : {}),
    },
  }

  const writeRes = await fetch(writeUrl, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: userToken ? userAuthHeader : `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
  if (!writeRes.ok) {
    const errText = await writeRes.text()
    console.error('Failed to update chatUsage quota:', writeRes.status, errText)
    return {
      allowed: false,
      limit: FREE_CHAT_PROMPT_LIMIT,
      used,
      remaining: Math.max(0, FREE_CHAT_PROMPT_LIMIT - used),
      monthKey,
      reason: 'quota_write_failed',
    }
  }

  return {
    allowed: true,
    limit: FREE_CHAT_PROMPT_LIMIT,
    used: nextUsed,
    remaining: Math.max(0, FREE_CHAT_PROMPT_LIMIT - nextUsed),
    monthKey,
    reason: 'free_consumed',
  }
}

async function fetchFirestoreUserDoc(
  docUrl: string,
  token: string
): Promise<{ fields?: Record<string, unknown> } | null> {
  const res = await fetch(docUrl, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (res.status === 404) return null
  if (!res.ok) {
    const errText = await res.text()
    console.error('Firestore read failed:', res.status, errText)
    return null
  }
  const doc = (await res.json()) as { fields?: Record<string, unknown> }
  return doc
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

  if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
    const session = event.data?.object as Record<string, unknown> | undefined
    if (session) {
      const paymentStatus = typeof session.payment_status === 'string' ? session.payment_status : ''
      if (paymentStatus !== 'paid') {
        return new Response('ok', { status: 200 })
      }

      const metadata = (session.metadata || {}) as Record<string, string>
      const uid = metadata.uid
      const plan = metadata.plan || 'monthly'
      const sessionId = (session.id as string) || ''
      const email = checkoutSessionCustomerEmail(session)

      if (uid) {
        try {
          await writeAccessToFirestore(env, uid, plan, sessionId, email)
        } catch (e) {
          console.error('Failed to grant access:', e)
        }
      }

      if (email) {
        const mailStatus = await sendPaymentConfirmation(env, { plan, sessionId, email })
        if (!mailStatus.firebaseQueued && !mailStatus.resendSent) {
          console.error('Payment confirmation mail was not queued/sent (webhook):', { sessionId, uid, email })
        }
      }
    }
  }

  return new Response('ok', { status: 200 })
}

// ─── Grant access client-side (fallback when no webhook) ───────
async function handleGrantAccess(request: Request, env: Env, origin: string): Promise<Response> {
  let body: { sessionId?: string; uid?: string; email?: string }
  try {
    body = await request.json()
  } catch {
    return json(origin, { error: 'Invalid JSON' }, 400)
  }

  const secret = env.STRIPE_SECRET_KEY?.trim()
  if (!secret) return json(origin, { error: 'Not configured' }, 503)

  const sid = body.sessionId?.trim()
  const uid = body.uid?.trim()
  const claimedEmail = body.email?.trim().toLowerCase() || ''
  if (!sid || !uid) return json(origin, { error: 'sessionId and uid required' }, 400)

  const stripeRes = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sid)}`,
    { headers: { Authorization: `Bearer ${secret}` } }
  )
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
  const customerEmail = checkoutSessionCustomerEmail(session) || claimedEmail || ''
  const now = Date.now()
  const daysToAdd = plan === 'yearly' ? 365 : 30
  const paidUntilFallback = now + daysToAdd * 24 * 60 * 60 * 1000

  const projectId = env.FIREBASE_PROJECT_ID?.trim()
  if (projectId) {
    try {
      const paidUntilStored = await writeAccessToFirestore(env, uid, plan, sid, customerEmail)
      const mailStatus = customerEmail
        ? await sendPaymentConfirmation(env, { plan, sessionId: sid, email: customerEmail })
        : { firebaseQueued: false, resendSent: false }
      if (customerEmail && !mailStatus.firebaseQueued && !mailStatus.resendSent) {
        console.error('Payment confirmation mail was not queued/sent (grant-access):', { sid, uid, email: customerEmail })
      }
      return json(origin, {
        granted: true,
        paidUntil: paidUntilStored || paidUntilFallback,
        plan,
        customerEmail: customerEmail || undefined,
        paymentConfirmation: mailStatus,
      })
    } catch (e) {
      console.error('Firestore write in grant-access failed:', e)
    }
  }

  const mailStatus = customerEmail
    ? await sendPaymentConfirmation(env, { plan, sessionId: sid, email: customerEmail })
    : { firebaseQueued: false, resendSent: false }
  if (customerEmail && !mailStatus.firebaseQueued && !mailStatus.resendSent) {
    console.error('Payment confirmation mail was not queued/sent (fallback grant-access):', { sid, uid, email: customerEmail })
  }
  return json(origin, {
    granted: true,
    paidUntil: paidUntilFallback,
    plan,
    customerEmail: customerEmail || undefined,
    paymentConfirmation: mailStatus,
  })
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
  const customerEmail = checkoutSessionCustomerEmail(session) || email || ''
  const projectId = env.FIREBASE_PROJECT_ID?.trim()
  let finalPaidUntil = paidUntil
  if (projectId) {
    try {
      const synced = await writeAccessToFirestore(env, uid, plan, sessionId, customerEmail, {
        mode: 'sync',
        paidUntilMs: paidUntil,
      })
      if (synced && synced > finalPaidUntil) finalPaidUntil = synced
    } catch (e) {
      console.error('Firestore write in recover-access failed:', e)
    }
  }

  return json(origin, { granted: true, paidUntil: finalPaidUntil, plan, recovered: true })
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

    if (url.pathname === '/api/feedback' && request.method === 'POST') {
      return handleFeedback(request, env, origin)
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

    const {
      messages,
      model,
      temperature,
      max_tokens,
      max_completion_tokens,
      usageScope,
      uid,
      email,
      firebaseIdToken,
    } = body as {
      messages: unknown[]
      model?: string
      temperature?: number
      max_tokens?: number
      max_completion_tokens?: number
      usageScope?: string
      uid?: string
      email?: string
      firebaseIdToken?: string
    }

    const normalizedMaxCompletionTokens =
      typeof max_completion_tokens === 'number'
        ? max_completion_tokens
        : typeof max_tokens === 'number'
          ? max_tokens
          : undefined

    if (usageScope === 'chat') {
      const quota = await consumeChatPromptQuota(env, {
        uid: typeof uid === 'string' ? uid : '',
        email: typeof email === 'string' ? email : undefined,
        firebaseIdToken: typeof firebaseIdToken === 'string' ? firebaseIdToken : undefined,
      })

      if (!quota.allowed) {
        if (quota.reason === 'auth_required') {
          return json(origin, { error: { message: 'Log in om AI Chat te gebruiken.' } }, 401)
        }
        if (quota.reason === 'free_limit_reached') {
          return json(
            origin,
            {
              error: {
                message: `Je gratis AI-limiet (${quota.limit} prompts per maand) is bereikt. Upgrade naar premium voor onbeperkte AI Chat.`,
                limit: quota.limit,
                used: quota.used,
                remaining: quota.remaining,
                monthKey: quota.monthKey,
              },
            },
            429
          )
        }
        if (quota.reason === 'firebase_not_configured' || quota.reason === 'firebase_auth_failed') {
          return json(
            origin,
            {
              error: {
                message:
                  'AI Chat-limiet is nog niet geactiveerd op de server (Firebase config ontbreekt). Neem contact op met support.',
              },
            },
            503
          )
        }
        return json(
          origin,
          { error: { message: 'AI Chat-limiet kon niet worden gecontroleerd. Probeer opnieuw.' } },
          503
        )
      }
    }

    const payload = {
      model: typeof model === 'string' && model ? model : 'gpt-5.4-mini',
      messages,
      ...(typeof temperature === 'number' ? { temperature } : {}),
      ...(typeof normalizedMaxCompletionTokens === 'number'
        ? { max_completion_tokens: normalizedMaxCompletionTokens }
        : {}),
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
