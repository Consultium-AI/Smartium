/**
 * Grading and follow-up for open/beeldvragen on blok-tentamens.
 */

const EXAM_GRADING_MODEL = 'gpt-5.4-mini'

export function parseExamOpenScore(feedbackText, maxPoints) {
  if (!feedbackText || typeof feedbackText !== 'string') return null
  const m = feedbackText.match(/Score:\s*([0-9]+(?:[.,][0-9]+)?)\s*\/\s*([0-9]+(?:[.,][0-9]+)?)/i)
  if (!m) return null
  const earned = parseFloat(m[1].replace(',', '.'))
  const cap = parseFloat(m[2].replace(',', '.'))
  if (Number.isNaN(earned) || Number.isNaN(cap)) return null
  const clamped = Math.min(Math.max(0, earned), maxPoints ?? cap)
  return { earned: clamped, max: maxPoints ?? cap }
}

export function buildOpenExamGradingPrompt({
  question,
  wordLimit,
  rubric,
  modelAnswer,
  points,
  userAnswer,
}) {
  return `Je bent een strenge maar eerlijke examinator geneeskunde.
Beoordeel het antwoord STRIKT volgens de rubric.

VRAAG: ${question}
WOORDLIMIET: ${wordLimit ?? 'n.v.t.'}
RUBRIC: ${rubric}
MODELANTWOORD: ${modelAnswer}
MAX PUNTEN: ${points}

STUDENTANTWOORD: ${userAnswer}

Geef per rubric-onderdeel aan:
✓ (behaald) of ✗ (niet behaald) met 1 zin toelichting.
Eindig ALTIJD met exact: "Score: X.X/${points}"

Nederlands, max 150 woorden.`
}

export async function fetchExamOpenGrading(content) {
  const apiBase = (import.meta.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '')
  const messages = [
    { role: 'system', content: 'Je volgt exact de instructies in het gebruikersbericht.' },
    { role: 'user', content },
  ]
  const res = await fetch(`${apiBase}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: EXAM_GRADING_MODEL,
      messages,
      temperature: 0.2,
      max_completion_tokens: 600,
    }),
  })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || 'API fout')
  return data.choices?.[0]?.message?.content || 'Geen antwoord ontvangen.'
}

export async function fetchExamFollowUp(question, aiFeedback, threadMessages) {
  const apiBase = (import.meta.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '')
  const systemPrompt = `Je bent Smartium, een studieassistent geneeskunde. De student heeft zojuist een tentamenvraag beantwoord en stelt een vervolgvraag.

=== CONTEXT ===
VRAAG: ${question.question}
${question.rubric ? `RUBRIC: ${question.rubric}` : ''}
${question.modelAnswer ? `MODELANTWOORD: ${question.modelAnswer}` : ''}
${question.explanation ? `UITLEG: ${question.explanation}` : ''}
${aiFeedback ? `EERDERE BEOORDELING: ${aiFeedback}` : ''}
=== EINDE ===

REGELS:
1. Antwoord kort (max 3-4 zinnen), helder en in het Nederlands.
2. Verwijs naar de rubric of het modelantwoord als dat relevant is.
3. Wees behulpzaam maar accuraat.`

  const messages = [
    { role: 'system', content: systemPrompt },
    ...threadMessages,
  ]
  const res = await fetch(`${apiBase}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: EXAM_GRADING_MODEL,
      messages,
      temperature: 0.35,
      max_completion_tokens: 450,
    }),
  })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || 'API fout')
  return data.choices?.[0]?.message?.content || 'Geen antwoord ontvangen.'
}

export async function fetchExamCorrectExplanation({ question, maxPoints }) {
  const apiBase = (import.meta.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '')
  const prompt = `Je bent Smartium, een studieassistent geneeskunde.
De student heeft deze tentamenvraag volledig goed beantwoord (${maxPoints}/${maxPoints} punten).
Leg kort uit waarom dit antwoord inhoudelijk klopt.

VRAAGTYPE: ${question?.type ?? 'onbekend'}
VRAAG: ${question?.question ?? ''}
${question?.rubric ? `RUBRIC: ${question.rubric}` : ''}
${question?.modelAnswer ? `MODELANTWOORD: ${question.modelAnswer}` : ''}
${question?.explanation ? `BASISUITLEG: ${question.explanation}` : ''}

REGELS:
1. Antwoord in het Nederlands.
2. Max 3-4 zinnen.
3. Focus op de kern (waarom juist), geen lange uitweiding.`

  const messages = [
    { role: 'system', content: 'Je volgt exact de instructies in het gebruikersbericht.' },
    { role: 'user', content: prompt },
  ]

  const res = await fetch(`${apiBase}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: EXAM_GRADING_MODEL,
      messages,
      temperature: 0.35,
      max_completion_tokens: 350,
    }),
  })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || 'API fout')
  return data.choices?.[0]?.message?.content || 'Geen antwoord ontvangen.'
}
