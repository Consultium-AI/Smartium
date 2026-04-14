/**
 * Reset profielfoto naar default voor alle niet-VIP gebruikers.
 *
 * VIP-gebruikers behouden hun bestaande profielfoto.
 *
 * Gebruik:
 *   node scripts/resetDefaultPfpExceptVip.mjs
 *   node scripts/resetDefaultPfpExceptVip.mjs --dry-run
 */

import admin from 'firebase-admin'
import { initFirebaseAdmin } from './lib/firebaseUserAccessExport.mjs'

const DEFAULT_PFP_URL = process.env.DEFAULT_PFP_URL?.trim() || 'https://smartium.nl/pfp-assets/pfp_1.png'
const dryRun = process.argv.slice(2).includes('--dry-run')

function normalizePlan(value) {
  return (value || '').toString().trim().toLowerCase()
}

await initFirebaseAdmin()

const auth = admin.auth()
const db = admin.firestore()

let updated = 0
let skippedVip = 0
let alreadyDefault = 0
let failed = 0

let pageToken
do {
  const page = await auth.listUsers(1000, pageToken)
  pageToken = page.pageToken

  for (const authUser of page.users) {
    const uid = authUser.uid
    const email = authUser.email || '(geen e-mail)'
    const currentPhoto = (authUser.photoURL || '').trim()

    try {
      const userDoc = await db.collection('users').doc(uid).get()
      const plan = normalizePlan(userDoc.exists ? userDoc.data()?.plan : null)

      if (plan === 'vip') {
        skippedVip += 1
        continue
      }

      if (currentPhoto === DEFAULT_PFP_URL) {
        alreadyDefault += 1
        continue
      }

      if (dryRun) {
        console.log(`[dry-run] reset pfp: ${email} (${uid})`)
        updated += 1
        continue
      }

      await auth.updateUser(uid, { photoURL: DEFAULT_PFP_URL })
      await db.collection('users').doc(uid).set(
        {
          photoURL: DEFAULT_PFP_URL,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      )

      updated += 1
      console.log(`reset pfp: ${email} (${uid})`)
    } catch (error) {
      failed += 1
      console.error(`fout bij ${email} (${uid}):`, error?.message || error)
    }
  }
} while (pageToken)

console.log('\nKlaar.')
console.log(`Bijgewerkt: ${updated}`)
console.log(`Overgeslagen VIP: ${skippedVip}`)
console.log(`Al default: ${alreadyDefault}`)
console.log(`Mislukt: ${failed}`)
