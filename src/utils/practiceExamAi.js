import lmeIndex, { lmeMap } from '../data/lmeIndex'
import { isRandomMode } from '../pages/PracticeQuestionsRegistry'

/**
 * Zet oefenvragen-URL (evt. ...-image12) om naar de bijbehorende samenvatting-LME.
 */
export function resolveSummaryLmeId(lmeParam) {
  if (!lmeParam || isRandomMode(lmeParam)) return null
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
2. Sluit af met exact één verwijzing in dit formaat: [[lme-id|LME Naam]] (wordt als klikbare link onder je tekst getoond; schrijf geen "Zie" ervoor in de zin).
3. Antwoord altijd in het Nederlands.

=== CONTEXT: MEERKEUZE-OEFENVRAAG ===
Vraag: ${ctx.question}

Antwoordopties:
${optLines}

Juiste antwoord: ${ctx.correctLetter} — ${ctx.correctText}
Gekozen door de leerling (fout): ${ctx.userLetter} — ${ctx.userText}
${ctx.category ? `Categorie: ${ctx.category}\n` : ''}${primaryHint}
=== EINDE OEFENCONTEXT ===

Geef maximaal 2-3 zeer korte zinnen waarom het juiste antwoord klopt en wat er mis is met de gekozen optie. Eindig met alleen [[lme-id|LME Naam]] (zonder woord "Zie" ervoor).`
}

/**
 * Zelfde systeemprompt als ChatPage voor doorvragen na oefenvraag.
 */
export function buildPracticeChatSystemPrompt(answerMode, practiceContext) {
  const lengthRule =
    answerMode === 'short'
      ? '1. Geef KORTE, directe antwoorden (max 3-4 zinnen per punt). Wees beknopt en to-the-point.'
      : '1. Geef UITGEBREIDE antwoorden met meer uitleg, context en voorbeelden waar relevant.'
  let base = `Je bent Smartium AI, een studieassistent voor geneeskundestudenten. Beschikbare samenvattingen (LME's):

${LME_LIST}

REGELS:
${lengthRule}
2. Voeg waar passend één verwijzing toe in exact dit formaat: [[lme-id|LME Naam]] — die wordt als link onder je antwoord getoond. Schrijf het woord "Zie" niet voor de link in de lopende tekst.
3. Antwoord in het Nederlands.
4. Geef per bericht precies ÉÉN kort antwoord. Herhaal hetzelfde punt niet in een tweede alinea. Geen duplicaat of herformulering van dezelfde uitleg.`

  if (practiceContext) {
    const c = practiceContext
    const optLines = (c.options || []).map((o) => `${o.letter}) ${o.text}`).join('\n')
    const primaryHint = c.summaryLmeId
      ? `De oefenset hoort bij: ${c.summaryLmeId} (${getSummaryNameForLmeId(c.summaryLmeId)}). Verwijs naar [[${c.summaryLmeId}|${getSummaryNameForLmeId(c.summaryLmeId)}]] als dat past.`
      : 'Kies de best passende LME uit de lijst en gebruik [[lme-id|Naam]].'

    base += `

=== OEFENCONTEXT (gebruik dit bij alle berichten) ===
Vraag: ${c.question}
Opties:
${optLines}
Juiste antwoord: ${c.correctLetter} — ${c.correctText}
Jouw (foute) keuze: ${c.userLetter} — ${c.userText}
${c.category ? `Categorie: ${c.category}\n` : ''}${primaryHint}
=== EINDE ===

De leerling stelt vervolgvragen; één beknopt antwoord per keer, met LME-verwijzingen waar nuttig.`
  }

  return base
}

/**
 * API-call voor doorvragen (eerste assistant-bericht = korte uitleg hierboven al getoond).
 */
export async function fetchPracticeChatCompletion(practiceContext, threadMessages, initialAssistantContent) {
  const apiBase = (import.meta.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '')
  const messages = [
    { role: 'system', content: buildPracticeChatSystemPrompt('short', practiceContext) },
    { role: 'assistant', content: initialAssistantContent },
    ...threadMessages,
  ]
  const res = await fetch(`${apiBase}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-5.4-mini',
      messages,
      temperature: 0.35,
      max_completion_tokens: 450,
    }),
  })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || 'API fout')
  const raw = data.choices?.[0]?.message?.content || 'Geen antwoord ontvangen.'
  return collapseDuplicateAssistantReply(raw)
}

/** Als het model twee vrijwel identieke blokken geeft, hou alleen het eerste. */
function collapseDuplicateAssistantReply(text) {
  if (!text || typeof text !== 'string') return text
  const paras = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
  if (paras.length < 2) return text
  const [a, b] = paras
  if (a.length < 25 || b.length < 25) return text
  const n = Math.min(120, a.length, b.length)
  if (a.slice(0, n) === b.slice(0, n)) return a
  return text
}

/**
 * API-call voor inline chat over samenvattingen.
 */
export async function fetchSummaryChatCompletion(lmeId, lmeName, threadMessages) {
  const apiBase = (import.meta.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '')
  const systemPrompt = `Je bent Smartium AI, een studieassistent voor geneeskundestudenten. Beschikbare samenvattingen (LME's):

${LME_LIST}

REGELS:
1. Geef KORTE, directe antwoorden (max 3-4 zinnen per punt). Wees beknopt en to-the-point.
2. De student leest de samenvatting: [[${lmeId}|${lmeName}]]. Verwijs in je antwoord naar deze samenvatting tenzij een andere duidelijk beter past.
3. Antwoord in het Nederlands.
4. Gebruik bullet points waar relevant.
5. Geef per bericht precies ÉÉN kort antwoord. Geen duplicaat of herformulering.`

  const messages = [
    { role: 'system', content: systemPrompt },
    ...threadMessages,
  ]
  const res = await fetch(`${apiBase}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-5.4-mini',
      messages,
      temperature: 0.35,
      max_completion_tokens: 600,
    }),
  })
  const data = await res.json()
  if (data.error) throw new Error(data.error?.message || 'API fout')
  const raw = data.choices?.[0]?.message?.content || 'Geen antwoord ontvangen.'
  return collapseDuplicateAssistantReply(raw)
}

/**
 * Spaties rond Zie/[[ en na ]] (AI plakt soms tekst vast).
 */
export function normalizeAiDisplayText(text) {
  if (!text || typeof text !== 'string') return text
  let s = text
  s = s.replace(/\]\](?=[A-Za-zÀ-ÿ])/g, ']] ')
  s = s.replace(/ {2,}/g, ' ')
  return s.trim()
}

/**
 * Haalt AI-uitleg op via de chat-API.
 */
export async function fetchPracticeExplanation(context) {
  const apiBase = (import.meta.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '')
  const messages = [
    { role: 'system', content: getPracticeSystemPrompt(context) },
    { role: 'user', content: 'Leg kort uit waarom het juiste antwoord klopt en waarom mijn keuze fout is. Sluit af met alleen [[lme-id|Naam]] (geen "Zie" ervoor).' },
  ]
  const res = await fetch(`${apiBase}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'gpt-5.4-mini', messages, temperature: 0.35, max_completion_tokens: 400 }),
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
