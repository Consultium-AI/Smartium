import { useMemo } from 'react'

function splitTableRow(line) {
  return line.split('|').map((s) => s.trim())
}

function looksLikeTableRow(line) {
  const t = (line || '').trim()
  if (!t || !t.includes('|')) return false
  const parts = splitTableRow(t)
  return parts.length >= 2 && parts.filter((p) => p.length > 0).length >= 2
}

function colCount(line) {
  if (!looksLikeTableRow(line)) return 0
  return splitTableRow(line.trim()).length
}

function parseSegments(text) {
  if (!text || typeof text !== 'string') return [{ type: 'text', text: '' }]
  const lines = text.split(/\r?\n/)
  const segments = []
  let i = 0

  while (i < lines.length) {
    const cc = colCount(lines[i])
    if (cc >= 2 && i + 1 < lines.length && colCount(lines[i + 1]) === cc) {
      const rows = []
      while (i < lines.length && colCount(lines[i]) === cc) {
        rows.push(splitTableRow(lines[i].trim()))
        i++
      }
      if (rows.length >= 2) {
        segments.push({ type: 'table', rows })
        continue
      }
      segments.push({ type: 'text', text: rows.map((r) => r.join(' | ')).join('\n') })
      continue
    }
    const start = i
    while (i < lines.length) {
      const nextCc = colCount(lines[i])
      if (nextCc >= 2 && i + 1 < lines.length && colCount(lines[i + 1]) === nextCc) break
      i++
    }
    const raw = lines.slice(start, i).join('\n').trim()
    if (raw) segments.push({ type: 'text', text: raw })
  }

  return segments.length ? segments : [{ type: 'text', text: text.trim() }]
}

function addHeaderIfNeeded(rows) {
  if (!rows?.length) return rows
  const first = rows[0]
  const h0 = (first[0] || '').toLowerCase()
  if (h0 === 'parameter' || h0 === 'bevinding' || h0 === 'klasse') return rows
  if (first.length === 3) return [['Parameter', 'Uitslag', 'Referentie'], ...rows]
  if (first.length === 2) return [['Parameter', 'Uitslag'], ...rows]
  return rows
}

function LabTable({ rows }) {
  const normalized = addHeaderIfNeeded(rows)
  if (!normalized?.length || normalized.length < 2) return null
  const [header, ...body] = normalized
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200/90 dark:border-slate-600/90 ring-1 ring-slate-900/[0.03] dark:ring-white/[0.04]">
      <table className="w-full min-w-[260px] text-sm border-collapse">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-800/90">
            {header.map((cell, k) => (
              <th key={k} className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-bold text-slate-800 dark:text-slate-100">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="bg-white dark:bg-slate-900/35">
              {row.map((cell, ci) => (
                <td key={ci} className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-slate-700 dark:text-slate-300">
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
 * Renders any text that may contain pipe-delimited tables.
 * Pipe rows with the same column count on consecutive lines → HTML table.
 * Used for scenario text, question text, rubric, etc.
 */
export function ExamRichText({ text, className = '' }) {
  const segments = useMemo(() => parseSegments(text), [text])
  return (
    <div className={`space-y-3 ${className}`}>
      {segments.map((seg, idx) =>
        seg.type === 'table' ? (
          <LabTable key={idx} rows={seg.rows} />
        ) : (
          <p key={idx} className="whitespace-pre-wrap">{seg.text}</p>
        )
      )}
    </div>
  )
}

/** Alias kept for backward compat — same as ExamRichText with default scenario styling */
export function ExamScenarioContent({ text }) {
  return <ExamRichText text={text} className="mt-2 text-sm leading-relaxed text-navy-700 dark:text-slate-300" />
}
