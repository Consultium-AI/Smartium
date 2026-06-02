/**
 * Parse GPT JSON output for casusbijeenkomst oefenvragen.
 */

export function extractJsonFromResponse(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fenced) {
    try {
      return JSON.parse(fenced[1].trim())
    } catch {
      /* fall through */
    }
  }
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start >= 0 && end > start) {
    return JSON.parse(text.slice(start, end + 1))
  }
  throw new Error('Geen JSON gevonden in API-antwoord')
}

export function normalizeQuestionsPayload(data) {
  const mc = data.multipleChoice || data.mc || data.meerkeuze || []
  const open = data.open || data.openQuestions || data.open_vragen || []
  if (!Array.isArray(mc) || !Array.isArray(open)) {
    throw new Error('JSON mist multipleChoice/open arrays')
  }
  return { mc, open }
}

export function toAppQuestions({ mc, open }) {
  const items = []
  let id = 1
  for (const q of mc) {
    const correct = String(q.correct || q.correctAnswer || '').toUpperCase()
    const opts = ['A', 'B', 'C', 'D'].map((letter) => ({
      letter,
      text: String(q[letter] || q.options?.[letter] || '').trim(),
    }))
    if (opts.some((o) => !o.text) || !['A', 'B', 'C', 'D'].includes(correct)) {
      throw new Error(`Ongeldige MC-vraag id ${id}`)
    }
    const entry = {
      id,
      question: String(q.question || '').trim(),
      options: opts,
      correctAnswer: correct,
    }
    if (q.category) entry.category = String(q.category)
    items.push(entry)
    id++
  }
  for (const q of open) {
    const entry = {
      id,
      category: 'Open vraag',
      question: String(q.question || '').trim(),
      options: [{ letter: 'A', text: 'Ik vergelijk mijn antwoord met het modelantwoord.' }],
      correctAnswer: 'A',
      modelAnswer: String(q.modelAnswer || q.model || '').trim(),
    }
    items.push(entry)
    id++
  }
  return items
}
