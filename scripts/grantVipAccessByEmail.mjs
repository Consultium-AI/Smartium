/**
 * Zet Firestore users/{uid}: plan "vip", onbeperkte toegang (zie useAccess.js).
 *
 * Vereist dezelfde admin-credentials als andere scripts (zie .env / firebaseUserAccessExport.mjs).
 *
 * Gebruik:
 *   node scripts/grantVipAccessByEmail.mjs user1@domein.nl user2@domein.nl
 *   node scripts/grantVipAccessByEmail.mjs --dry-run user@domein.nl
 */

import admin from 'firebase-admin'
import { initFirebaseAdmin } from './lib/firebaseUserAccessExport.mjs'

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const emails = args.filter((a) => a !== '--dry-run').map((e) => e.trim().toLowerCase())

if (emails.length === 0) {
  console.error(
    'Geef minstens één e-mailadres.\n' +
      'Voorbeeld: node scripts/grantVipAccessByEmail.mjs persoon@voorbeeld.nl\n' +
      'Dry-run:  node scripts/grantVipAccessByEmail.mjs --dry-run persoon@voorbeeld.nl',
  )
  process.exit(1)
}

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
    if (dryRun) {
      console.log(`[dry-run] Zou VIP zetten: ${email} → uid ${uid}`)
      continue
    }
    await db
      .collection('users')
      .doc(uid)
      .set(
        {
          plan: 'vip',
          email: user.email || email,
          subscriptionStopped: false,
          billingReminderOptOut: false,
          subscriptionStoppedAt: null,
          paidUntil: admin.firestore.FieldValue.delete(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      )
    console.log(`OK VIP: ${email} (${uid})`)
  } catch (e) {
    console.error(`Fout voor ${email}:`, e?.message || e)
  }
}

process.exit(0)
