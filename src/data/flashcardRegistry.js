// Registry + helpers voor de AI-gegenereerde flashcard-decks.
// Decks worden gegenereerd door scripts/generate-blok10-flashcards.mjs.
import { blok3FlashcardDecks } from './flashcards-blok3'
import { blok4FlashcardDecks } from './flashcards-blok4'
import { blok5FlashcardDecks } from './flashcards-blok5'
import { blok9FlashcardDecks } from './flashcards-blok9'
import { blok10FlashcardDecks } from './flashcards-blok10'

// Alle beschikbare decks, in blokvolgorde (getFlashcardBlocks groepeert op deck.block).
export const allFlashcardDecks = [
  ...blok3FlashcardDecks,
  ...blok4FlashcardDecks,
  ...blok5FlashcardDecks,
  ...blok9FlashcardDecks,
  ...blok10FlashcardDecks,
]

// Groepeer decks per blok → week → casus, in bronvolgorde.
export function getFlashcardBlocks() {
  const blocks = []
  const blockIndex = new Map()

  for (const deck of allFlashcardDecks) {
    const blockName = deck.block || 'Overig'
    if (!blockIndex.has(blockName)) {
      blockIndex.set(blockName, { name: blockName, weeks: [], _weekIndex: new Map() })
      blocks.push(blockIndex.get(blockName))
    }
    const block = blockIndex.get(blockName)

    const weekName = deck.week || 'Overig'
    if (!block._weekIndex.has(weekName)) {
      block._weekIndex.set(weekName, { name: weekName, cases: [], _caseIndex: new Map() })
      block.weeks.push(block._weekIndex.get(weekName))
    }
    const week = block._weekIndex.get(weekName)

    const caseName = deck.case || 'Overig'
    if (!week._caseIndex.has(caseName)) {
      week._caseIndex.set(caseName, { name: caseName, decks: [] })
      week.cases.push(week._caseIndex.get(caseName))
    }
    week._caseIndex.get(caseName).decks.push(deck)
  }

  return blocks
}

export function getDeckById(lmeId) {
  return allFlashcardDecks.find((d) => d.lmeId === lmeId) || null
}

export const FLASHCARD_BLOK_KEYS = ['blok4', 'blok5', 'blok9', 'blok10']

/** Metadata voor het blok-overzicht (/flashcards). */
export const FLASHCARD_BLOK_INDEX = [
  {
    key: 'blok4',
    label: 'Blok 4',
    subtitle: 'Afweer en Aanpak van Infecties',
    route: '/flashcards-blok4',
    ba: 'Ba1',
  },
  {
    key: 'blok5',
    label: 'Blok 5',
    subtitle: 'Bedreigingen van Binnen & Buiten',
    route: '/flashcards-blok5',
    ba: 'Ba1',
  },
  {
    key: 'blok9',
    label: 'Blok 9',
    subtitle: 'Homeostase II',
    route: '/flashcards-blok9',
    ba: 'Ba2',
  },
  {
    key: 'blok10',
    label: 'Blok 10',
    subtitle: 'Maag-Darm-Lever',
    route: '/flashcards-blok10',
    ba: 'Ba2',
  },
]

/** Leidt blok-key af uit lmeId (blok4-…, blok10-…) of uit deck.block. */
export function deckBlokKey(deck) {
  if (!deck) return null
  const id = deck.lmeId || ''
  const fromId = id.match(/^(blok\d+)-/)
  if (fromId) return fromId[1]
  const block = (deck.block || '').toLowerCase()
  for (const n of [4, 5, 9, 10]) {
    if (block.includes(`blok ${n}`)) return `blok${n}`
  }
  return null
}

export function getDecksForBlok(blokKey) {
  if (!blokKey) return allFlashcardDecks
  return allFlashcardDecks.filter((d) => deckBlokKey(d) === blokKey)
}

export function getFlashcardBlocksForBlok(blokKey) {
  const decks = getDecksForBlok(blokKey)
  if (!decks.length) return []
  const allowed = new Set(decks.map((d) => d.lmeId))
  return getFlashcardBlocks()
    .map((block) => ({
      ...block,
      weeks: block.weeks
        .map((week) => ({
          ...week,
          cases: week.cases
            .map((c) => ({
              ...c,
              decks: c.decks.filter((d) => allowed.has(d.lmeId)),
            }))
            .filter((c) => c.decks.length > 0),
        }))
        .filter((w) => w.cases.length > 0),
    }))
    .filter((b) => b.weeks.length > 0)
}

export function getBlokFlashcardStats(blokKey) {
  const decks = getDecksForBlok(blokKey)
  return {
    deckCount: decks.length,
    cardCount: decks.reduce((n, d) => n + (d.cards?.length || 0), 0),
  }
}

export function allDeckSessionId(blokKey) {
  return blokKey ? `__all__:${blokKey}` : '__all__'
}

const CLOZE_RE = /\{\{c\d+::(.*?)\}\}/gs

// Splits "antwoord::hint" binnen een cloze.
function splitClozeValue(value) {
  const idx = value.indexOf('::')
  if (idx === -1) return { answer: value, hint: '' }
  return { answer: value.slice(0, idx), hint: value.slice(idx + 2) }
}

// Geeft de cloze-tekst als segmenten terug zodat de UI de gaten kan tonen/onthullen.
// -> [{ type: 'text', value } | { type: 'cloze', answer, hint }]
export function parseCloze(text) {
  const segments = []
  let last = 0
  let m
  CLOZE_RE.lastIndex = 0
  while ((m = CLOZE_RE.exec(text)) !== null) {
    if (m.index > last) segments.push({ type: 'text', value: text.slice(last, m.index) })
    segments.push({ type: 'cloze', ...splitClozeValue(m[1]) })
    last = m.index + m[0].length
  }
  if (last < text.length) segments.push({ type: 'text', value: text.slice(last) })
  return segments
}

// Normaliseer een kaart naar een vorm die de viewer kan tonen.
export function normalizeCard(card) {
  if (card.card_type === 'front_back' || (!card.cloze_text && card.front)) {
    return {
      id: card.card_id,
      kind: 'front_back',
      front: card.front || '',
      back: card.back || '',
      extra: card.extra || card.optional_clarification || '',
      meta: card,
    }
  }
  return {
    id: card.card_id,
    kind: 'cloze',
    segments: parseCloze(card.cloze_text || ''),
    extra: card.extra || card.optional_clarification || '',
    meta: card,
  }
}
