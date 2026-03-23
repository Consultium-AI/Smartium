import lmeIndex, { lmeMap } from '../data/lmeIndex'

/**
 * Zet oefenvragen-URL (evt. ...-image12) om naar de bijbehorende samenvatting-LME.
 */
export function resolveSummaryLmeId(lmeParam) {
  if (!lmeParam || lmeParam === 'alle-random') return null
  return lmeParam.replace(/-image\d+$/i, '')
}

export function getSummaryNameForLmeId(id) {
  if (!id) return null
  return lmeMap[id]?.name ?? id
}

/**
 * Bouwt de practice context voor AI-uitleg.
 */
export function buildPracticeContext(question, userLetter, lmeParam) {
  const correctLetter = question.correctAnswer
  const userOpt = question.options.find((o) => o.letter === userLetter)
  const correctOpt = question.options.find((o) => o.letter === correctLetter)
  return {
    question: question.question,
    options: question.options,
    correctLetter,
    correctText: correctOpt?.text ?? '',
    userLetter,
    userText: userOpt?.text ?? '',
    category: question.category,
    summaryLmeId: resolveSummaryLmeId(lmeParam),
    lmeParam: lmeParam ?? '',
  }
}

const LME_LIST = lmeIndex.map((l) => `- ${l.name} (id: ${l.id}) [${l.blok}, ${l.week}, ${l.casus}] – Onderwerpen: ${l.topics}`).join('\n')

function getPracticeSystemPrompt(ctx) {
  const primaryHint = ctx.summaryLmeId
    ? `De oefenset hoort bij de samenvatting: ${ctx.summaryLmeId} (${getSummaryNameForLmeId(ctx.summaryLmeId)}). Verwijs in je antwoord naar [[${ctx.summaryLmeId}|${getSummaryNameForLmeId(ctx.summaryLmeId)}]] tenzij een andere LME uit de lijst duidelijk beter past.`
    : 'Kies uit bovenstaande LME-lijst de best passende samenvatting en gebruik [[lme-id|Naam]].'
  const optLines = (ctx.options || []).map((o) => `${o.letter}) ${o.text}`).join('\n')
  return `Je bent Smartium AI, een slimme studieassistent voor geneeskundestudenten. Je hebt toegang tot de volgende samenvattingen:

${LME_LIST}

REGELS:
1. Geef KORTE antwoorden (max 3-4 zinnen).
2. Verwijs ALTIJD naar een LME met exact dit formaat: [[lme-id|LME Naam]].
3. Antwoord altijd in het Nederlands.

=== CONTEXT: MEERKEUZE-OEFENVRAAG ===
Vraag: ${ctx.question}

Antwoordopties:
${optLines}

Juiste antwoord: ${ctx.correctLetter} — ${ctx.correctText}
Gekozen door de leerling (fout): ${ctx.userLetter} — ${ctx.userText}
${ctx.category ? `Categorie: ${ctx.category}\n` : ''}${primaryHint}
=== EINDE OEFENCONTEXT ===

Geef maximaal 2-3 zeer korte zinnen waarom het juiste antwoord klopt en wat er mis is met de gekozen optie. Sluit af met [[lme-id|Naam]].`
}

/**
 * Haalt AI-uitleg op via de chat-API.
 */
export async function fetchPracticeExplanation(context) {
  const apiBase = (import.meta.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '')
  const messages = [
    { role: 'system', content: getPracticeSystemPrompt(context) },
    { role: 'user', content: 'Leg kort uit waarom het juiste antwoord klopt en waarom mijn keuze fout is. Sluit af met [[lme-id|Naam]].' },
  ]
  const res = await fetch(`${apiBase}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'gpt-4o', messages, temperature: 0.35, max_tokens: 400 }),
  })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || 'API fout')
  return data.choices?.[0]?.message?.content || 'Geen antwoord ontvangen.'
}

/**
 * Parseert [[lme-id|Naam]] referenties in tekst.
 */
export function parseReferences(text) {
  const refs = []
  let displayText = ''
  let lastIndex = 0
  const regex = /\[\[([^|]+)\|([^\]]+)\]\]/g
  let match
  while ((match = regex.exec(text)) !== null) {
    displayText += text.slice(lastIndex, match.index)
    refs.push({ id: match[1], name: match[2] })
    lastIndex = regex.lastIndex
  }
  displayText += text.slice(lastIndex)
  return { displayText: displayText.trim(), refs }
}
