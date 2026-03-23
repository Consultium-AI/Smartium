export interface Env {
  OPENAI_API_KEY: string
  /** Comma-separated origins, e.g. https://smartium.nl,https://www.smartium.nl */
  ALLOWED_ORIGINS: string
}

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'

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

    if (url.pathname !== '/api/chat' || request.method !== 'POST') {
      return new Response('Not found', { status: 404 })
    }

    if (!origin || !allowed.includes(origin)) {
      return new Response('Forbidden', { status: 403 })
    }

    if (!env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: { message: 'Server misconfigured' } }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      })
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return new Response(JSON.stringify({ error: { message: 'Invalid JSON' } }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      })
    }

    if (!body || typeof body !== 'object' || !Array.isArray((body as { messages?: unknown }).messages)) {
      return new Response(JSON.stringify({ error: { message: 'Expected { messages: [...] }' } }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      })
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
