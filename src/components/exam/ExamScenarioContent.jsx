import { useMemo } from 'react'

function splitTableRow(line) {
  return line.split('|').map((s) => s.trim())
}

function isTableRow(line) {
  const t = line.trim()
  if (!t || !t.includes('|')) return false
  const parts = splitTableRow(t)
  return parts.length >= 2 && parts.every((p) => p.length > 0)
}

function rowColumnCount(line) {
  if (!isTableRow(line)) return null
  return splitTableRow(line.trim()).length
}

/** Twee opeenvolgende regels met gelijk aantal |‑kolommen = start van een lab-/waardentabel. */
function isTableStart(lines, i) {
  if (i >= lines.length - 1) return false
  const n0 = rowColumnCount(lines[i])
  const n1 = rowColumnCount(lines[i + 1])
  return n0 != null && n1 != null && n0 === n1
}

function parseScenarioSegments(scenario) {
  if (!scenario || typeof scenario !== 'string') return [{ type: 'text', text: '' }]
  const lines = scenario.split(/\r?\n/)
  const segments = []
  let i = 0
  while (i < lines.length) {
    if (isTableStart(lines, i)) {
      const expectedCols = rowColumnCount(lines[i])
      const rows = []
      let j = i
      while (j < lines.length) {
        const line = lines[j]
        if (!line.trim()) break
        if (!isTableRow(line)) break
        const parts = splitTableRow(line.trim())
        if (parts.length !== expectedCols) break
        rows.push(parts)
        j += 1
      }
      if (rows.length >= 2) {
        segments.push({ type: 'table', rows })
        i = j
        continue
      }
    }
    const start = i
    while (i < lines.length && !isTableStart(lines, i)) {
      i += 1
    }
    const raw = lines.slice(start, i).join('\n').trim()
    if (raw) {
      segments.push({ type: 'text', text: raw })
    }
  }
  return segments.length ? segments : [{ type: 'text', text: scenario.trim() }]
}

function normalizeLabTableRows(rows) {
  if (!rows?.length) return rows
  const first = rows[0]
  const h0 = (first[0] || '').trim().toLowerCase()
  const h1 = (first[1] || '').trim().toLowerCase()
  const looksLikeExplicitHeader =
    h0 === 'parameter' ||
    h0 === 'bevinding' ||
    (h0 === 'parameter' && h1 === 'uitslag')
  if (looksLikeExplicitHeader) {
    return rows
  }
  if (first.length === 3) {
    return [['Parameter', 'Uitslag', 'Referentie'], ...rows]
  }
  if (first.length === 2) {
    return [['Parameter', 'Uitslag'], ...rows]
  }
  return rows
}

function ExamLabTable({ rows }) {
  const normalized = normalizeLabTableRows(rows)
  if (!normalized?.length || normalized.length < 2) return null
  const [header, ...body] = normalized
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200/90 dark:border-slate-600/90 ring-1 ring-slate-900/[0.03] dark:ring-white/[0.04]">
      <table className="w-full min-w-[280px] text-sm border-collapse">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-800/90">
            {header.map((cell, k) => (
              <th
                key={k}
                className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-bold text-slate-800 dark:text-slate-100"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="bg-white dark:bg-slate-900/35">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-slate-700 dark:text-slate-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/**
 * Rendert casustekst: opeenvolgende pipe‑regels (zoals uit Word‑tabellen) als HTML‑tabel,
 * vergelijkbaar met tabellen in SummaryBlok4*-pagina's.
 */
export function ExamScenarioContent({ text }) {
  const segments = useMemo(() => parseScenarioSegments(text), [text])
  return (
    <div className="mt-2 space-y-3 text-sm leading-relaxed text-navy-700 dark:text-slate-300">
      {segments.map((seg, idx) =>
        seg.type === 'table' ? (
          <ExamLabTable key={idx} rows={seg.rows} />
        ) : (
          <p key={idx} className="whitespace-pre-wrap">
            {seg.text}
          </p>
        )
      )}
    </div>
  )
}
