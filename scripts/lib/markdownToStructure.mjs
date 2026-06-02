/**
 * Convert GPT casusbijeenkomst markdown → blocks[] for gen_structure_sections.py
 */

function parseTable(lines, startIdx) {
  const rows = []
  let i = startIdx
  while (i < lines.length && lines[i].includes('|')) {
    const row = lines[i]
      .split('|')
      .map((c) => c.trim())
      .filter((_, idx, arr) => !(idx === 0 && arr[0] === '') && !(idx === arr.length - 1 && arr[arr.length - 1] === ''))
    if (!/^\s*-+:?\s*(\|\s*-+:?\s*)+$/.test(lines[i])) {
      if (row.length) rows.push(row)
    }
    i++
  }
  return { rows, next: i }
}

function isHeadingLine(line) {
  const t = line.trim()
  if (!t) return false
  if (/^#{1,3}\s+/.test(t)) return true
  if (t === 'Leerdoelen' || t === 'Samenvatting') return true
  if (/^Tabel\s+\d+\./i.test(t)) return true
  if (t.length <= 90 && !/[.!?]$/.test(t) && /^[A-ZÀ-ÖØ-Þ]/.test(t)) return true
  return false
}

function cleanHeading(line) {
  return line.replace(/^#{1,3}\s+/, '').trim()
}

export function markdownToStructure(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const blocks = []
  let i = 0
  let bulletBuf = []

  const flushBullets = () => {
    for (const b of bulletBuf) {
      blocks.push({ type: 'p', text: b })
    }
    bulletBuf = []
  }

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) {
      i++
      continue
    }

    if (trimmed.includes('|') && trimmed.startsWith('|')) {
      flushBullets()
      const { rows, next } = parseTable(lines, i)
      if (rows.length >= 2) {
        blocks.push({ type: 'table', rows })
      }
      i = next
      continue
    }

    if (/^[-*•]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const text = trimmed
        .replace(/^[-*•]\s+/, '')
        .replace(/^\d+\.\s+/, '')
      bulletBuf.push(text)
      i++
      continue
    }

    flushBullets()

    if (isHeadingLine(trimmed)) {
      blocks.push({ type: 'p', text: cleanHeading(trimmed) })
      i++
      continue
    }

    const para = []
    while (i < lines.length) {
      const t = lines[i].trim()
      if (!t) break
      if (t.includes('|') && t.startsWith('|')) break
      if (/^[-*•]\s+/.test(t) || /^\d+\.\s+/.test(t)) break
      if (isHeadingLine(t)) break
      para.push(t)
      i++
    }
    if (para.length) {
      blocks.push({ type: 'p', text: para.join('\n') })
    }
  }

  flushBullets()
  return blocks.filter((b) => {
    if (b.type === 'p') return b.text.trim().length > 0
    if (b.type === 'table') return b.rows?.length >= 2
    return true
  })
}
