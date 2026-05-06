/**
 * Zet Firestore users/{uid} op een normaal betaald abonnement (monthly/yearly + paidUntil),
 * zelfde logica als worker writeAccessToFirestore (extend vanaf max(now, bestaande paidUntil)).
 *
 * Gebruik:
 *   node scripts/grantPaidAccessByEmail.mjs yearly user@voorbeeld.nl
 *   node scripts/grantPaidAccessByEmail.mjs monthly user@voorbeeld.nl
 *   node scripts/grantPaidAccessByEmail.mjs --from-now monthly user@voorbeeld.nl
 *     (negeert bestaande paidUntil; 30/365 dagen vanaf nu — handig bij plan-correctie)
 *   node scripts/grantPaidAccessByEmail.mjs --dry-run yearly user@voorbeeld.nl
 */

import admin from 'firebase-admin'
import { initFirebaseAdmin, toMillis } from './lib/firebaseUserAccessExport.mjs'

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const fromNow = args.includes('--from-now')
const rest = args.filter((a) => a !== '--dry-run' && a !== '--from-now')

const planArg = rest.find((a) => a === 'yearly' || a === 'monthly')
const plan = planArg || 'yearly'
const emails = rest.filter((a) => a !== 'yearly' && a !== 'monthly').map((e) => e.trim().toLowerCase())

if (emails.length === 0) {
  console.error(
    'Geef plan (yearly|monthly) en minstens één e-mail.\n' +
      'Voorbeeld: node scripts/grantPaidAccessByEmail.mjs yearly persoon@voorbeeld.nl',
  )
  process.exit(1)
}

const durationMs = (plan === 'yearly' ? 365 : 30) * 24 * 60 * 60 * 1000

await initFirebaseAdmin()
const auth = admin.auth()
const db = admin.firestore()

for (const email of emails) {
  if (!email.includes('@')) {
    console.warn(`Overslaan (geen geldig e-mail): ${email}`)
    continue
  }
  try {
    const user = await auth.getUserByEmail(email)
    const uid = user.uid
    const ref = db.collection('users').doc(uid)
    const snap = await ref.get()
    const existing = snap.data() || {}
    const existingPaidUntil = toMillis(existing.paidUntil) || 0
    const now = Date.now()
    const base = fromNow ? now : Math.max(now, existingPaidUntil)
    const paidUntil = base + durationMs

    if (dryRun) {
      console.log(
        `[dry-run] Zou ${plan} zetten: ${email} → uid ${uid}, paidUntil ${new Date(paidUntil).toISOString()}`,
      )
      continue
    }

    await ref.set(
      {
        plan,
        paidUntil,
        email: user.email || email,
        subscriptionStopped: false,
        billingReminderOptOut: false,
        subscriptionStoppedAt: null,
        lastPayment: {
          sessionId: 'manual-support',
          at: now,
          plan,
        },
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    )
    console.log(`OK ${plan}: ${email} (${uid}) tot ${new Date(paidUntil).toISOString()}`)
  } catch (e) {
    console.error(`Fout voor ${email}:`, e?.message || e)
  }
}

process.exit(0)
