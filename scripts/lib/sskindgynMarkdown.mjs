/**
 * Markdown -> blocks[] voor de SSKindgyn sectie-generator.
 *
 * Verschilt van de gedeelde markdownToStructure doordat koppen-niveaus
 * (## vs ### vs ####) bewaard blijven, zodat er alleen op hoofdkoppen (##)
 * in secties wordt gesplitst en subkoppen binnen een sectie blijven staan.
 *
 * Bloktypes:
 *   { type: 'heading', level: 1..4, text }
 *   { type: 'p', text }        // meerdere regels samengevoegd met \n
 *   { type: 'li', text }
 *   { type: 'table', rows }
 */

function parseTable(lines, startIdx) {
  const rows = []
  let i = startIdx
  while (i < lines.length && lines[i].includes('|')) {
    const raw = lines[i]
    if (/^\s*\|?\s*-+:?\s*(\|\s*-+:?\s*)+\|?\s*$/.test(raw)) {
      i++
      continue
    }
    const row = raw
      .split('|')
      .map((c) => c.trim())
      .filter((_, idx, arr) => !(idx === 0 && arr[0] === '') && !(idx === arr.length - 1 && arr[arr.length - 1] === ''))
    if (row.length) rows.push(row)
    i++
  }
  return { rows, next: i }
}

function headingLevel(trimmed) {
  const m = trimmed.match(/^(#{1,6})\s+/)
  if (m) return Math.min(m[1].length, 4)
  // kale kopjes zonder #-markering (voor de zekerheid)
  if (trimmed === 'Leerdoelen') return 1
  if (trimmed === 'Samenvatting') return 2
  if (/^Tabel\s+\d+\./i.test(trimmed)) return 3
  return 0
}

export function markdownToBlocks(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const blocks = []
  let i = 0

  while (i < lines.length) {
    const trimmed = lines[i].trim()

    if (!trimmed) {
      i++
      continue
    }

    if (trimmed.startsWith('|') && trimmed.includes('|')) {
      const { rows, next } = parseTable(lines, i)
      if (rows.length >= 2) blocks.push({ type: 'table', rows })
      i = next
      continue
    }

    const lvl = headingLevel(trimmed)
    if (lvl) {
      blocks.push({ type: 'heading', level: lvl, text: trimmed.replace(/^#{1,6}\s+/, '').trim() })
      i++
      continue
    }

    if (/^[-*•]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      blocks.push({
        type: 'li',
        text: trimmed.replace(/^[-*•]\s+/, '').replace(/^\d+\.\s+/, '').trim(),
      })
      i++
      continue
    }

    // paragraaf: opeenvolgende gewone regels samenvoegen (bewaart \n voor
    // Vraagje/Kortom-boxen die uit twee regels bestaan)
    const para = []
    while (i < lines.length) {
      const t = lines[i].trim()
      if (!t) break
      if (t.startsWith('|')) break
      if (headingLevel(t)) break
      if (/^[-*•]\s+/.test(t) || /^\d+\.\s+/.test(t)) break
      para.push(t)
      i++
    }
    if (para.length) blocks.push({ type: 'p', text: para.join('\n') })
  }

  return blocks.filter((b) => {
    if (b.type === 'p' || b.type === 'li') return b.text.trim().length > 0
    if (b.type === 'table') return b.rows?.length >= 2
    return true
  })
}
