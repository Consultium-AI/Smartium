/**
 * Maakt in Stripe een product + 2 subscription-prijzen (EUR):
 *   - Maandelijks: EUR 9,99/maand
 *   - Jaarlijks: EUR 106,68/jaar (EUR 8,89/maand equivalent)
 *
 * Vereist STRIPE_SECRET_KEY in worker/.dev.vars of als env var.
 */
import { readFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const workerRoot = join(__dirname, '..')

function loadStripeKeyFromDevVars() {
  const p = join(workerRoot, '.dev.vars')
  if (!existsSync(p)) return
  const raw = readFileSync(p, 'utf8')
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i === -1) continue
    const k = t.slice(0, i).trim()
    let v = t.slice(i + 1).trim()
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    if (k === 'STRIPE_SECRET_KEY' && v && !process.env.STRIPE_SECRET_KEY) {
      process.env.STRIPE_SECRET_KEY = v
    }
  }
}

async function stripeForm(path, secretKey, params) {
  const body = new URLSearchParams(params)
  const res = await fetch(`https://api.stripe.com/v1${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${secretKey}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error?.message || JSON.stringify(data))
  return data
}

loadStripeKeyFromDevVars()

const secret = process.env.STRIPE_SECRET_KEY?.trim()
if (!secret || !secret.startsWith('sk_')) {
  console.error('Geen STRIPE_SECRET_KEY gevonden.')
  process.exit(1)
}

try {
  const product = await stripeForm('/products', secret, {
    name: 'Smartium',
    description: 'Volledige toegang tot Smartium',
  })
  console.log('Product:', product.id)

  const monthly = await stripeForm('/prices', secret, {
    product: product.id,
    currency: 'eur',
    unit_amount: '999',
    'recurring[interval]': 'month',
    nickname: 'Maandelijks',
  })

  const yearly = await stripeForm('/prices', secret, {
    product: product.id,
    currency: 'eur',
    unit_amount: '10668',
    'recurring[interval]': 'year',
    nickname: 'Jaarlijks',
  })

  console.log('\n--- Zet dit in Cloudflare Worker Variables of wrangler.toml ---\n')
  console.log(`STRIPE_PRICE_MONTHLY = "${monthly.id}"`)
  console.log(`STRIPE_PRICE_YEARLY = "${yearly.id}"`)
  console.log('\nDaarna: cd worker && npx wrangler deploy\n')
} catch (e) {
  console.error('Stripe fout:', e.message || e)
  process.exit(1)
}
