// Registry + helpers voor de AI-gegenereerde flashcard-decks.
// Decks worden gegenereerd door scripts/generate-blok10-flashcards.mjs.
import { blok10FlashcardDecks } from './flashcards-blok10'

// Alle beschikbare decks (later uit te breiden met andere blokken).
export const allFlashcardDecks = [...blok10FlashcardDecks]

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
