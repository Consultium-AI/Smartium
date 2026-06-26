/**
 * Spaced-repetition voor flashcards (Anki/Brainscape-stijl).
 *
 * - Beoordeling 1-5 bepaalt zowel hoe snel een kaart terugkomt binnen de sessie
 *   (sessionGap) als de volgende vervaldatum over sessies heen (intervalDays).
 * - Per kaart bewaren we box/ease/interval/due in localStorage, gescoped per user.
 */

import { storageKeyFlashcardSrs } from './accountProgressStorage'

const DAY_MS = 24 * 60 * 60 * 1000

// Beoordelingslabels (1 = slecht onthouden, 5 = perfect).
export const RATINGS = [
  { value: 1, label: 'Opnieuw', hint: 'Niet geweten', color: 'red' },
  { value: 2, label: 'Moeilijk', hint: 'Met moeite', color: 'orange' },
  { value: 3, label: 'Oké', hint: 'Redelijk', color: 'amber' },
  { value: 4, label: 'Goed', hint: 'Vlot', color: 'lime' },
  { value: 5, label: 'Makkelijk', hint: 'Perfect', color: 'emerald' },
]

// Coins per beoordeling — ongeacht de score.
export const COINS_PER_RATING = 5

// Basisinterval (dagen) per score; bij herhaald hoog scoren groeit het interval.
const BASE_INTERVAL_DAYS = { 1: 0, 2: 1, 3: 2, 4: 4, 5: 7 }
const GROWTH = { 3: 1.4, 4: 2.0, 5: 2.6 }

// Hoeveel kaarten later een kaart terugkomt binnen dezelfde sessie.
// 4 en 5 = klaar voor deze sessie (null).
const SESSION_GAP = { 1: 3, 2: 8, 3: 16, 4: null, 5: null }

export function cardKey(deckId, cardId) {
  return `${deckId}::${cardId}`
}

function defaultCardState() {
  return { box: 0, ease: 2.5, intervalDays: 0, due: 0, reps: 0, lastRating: 0, reviewedAt: 0 }
}

export function loadSrs(userId) {
  if (!userId) return {}
  try {
    const raw = localStorage.getItem(storageKeyFlashcardSrs(userId))
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveSrs(userId, state) {
  if (!userId) return
  try {
    localStorage.setItem(storageKeyFlashcardSrs(userId), JSON.stringify(state))
  } catch {
    /* quota / private mode — negeer */
  }
  if (userId !== 'guest') {
    import('../lib/cloudUserProgress')
      .then((m) => m.scheduleCloudProgressSync(userId))
      .catch(() => {})
  }
}

export function getCardState(srs, key) {
  return srs[key] ? { ...defaultCardState(), ...srs[key] } : defaultCardState()
}

export function isDue(srs, key, now = Date.now()) {
  const st = srs[key]
  if (!st || !st.due) return true // nooit gezien = leren
  return st.due <= now
}

/**
 * Pas een beoordeling toe. Muteert en retourneert de bijgewerkte SRS-map plus
 * de sessionGap (aantal kaarten tot herhaling in deze sessie, of null = klaar).
 */
export function applyRating(srs, key, rating, now = Date.now()) {
  const prev = getCardState(srs, key)
  let { ease, intervalDays, reps } = prev

  if (rating <= 2) {
    reps = 0
    intervalDays = BASE_INTERVAL_DAYS[rating]
    ease = Math.max(1.3, ease - (rating === 1 ? 0.2 : 0.15))
  } else {
    reps += 1
    const base = BASE_INTERVAL_DAYS[rating]
    intervalDays = reps <= 1 ? base : Math.round(Math.max(base, intervalDays * GROWTH[rating]))
    ease = Math.min(3.2, ease + (rating === 5 ? 0.15 : rating === 4 ? 0.05 : 0))
  }

  const next = {
    box: Math.max(0, Math.min(5, rating === 1 ? 0 : prev.box + (rating >= 4 ? 2 : 1))),
    ease,
    intervalDays,
    due: now + intervalDays * DAY_MS,
    reps,
    lastRating: rating,
    reviewedAt: now,
  }

  const updated = { ...srs, [key]: next }
  return { srs: updated, sessionGap: SESSION_GAP[rating] }
}

/** Korte, leesbare omschrijving van wanneer een kaart weer verschijnt. */
export function formatNextDue(intervalDays) {
  if (!intervalDays || intervalDays <= 0) return 'vandaag nog'
  if (intervalDays === 1) return 'over 1 dag'
  if (intervalDays < 30) return `over ${intervalDays} dagen`
  const months = Math.round(intervalDays / 30)
  return months <= 1 ? 'over ~1 maand' : `over ~${months} maanden`
}
