/**
 * SSInterne (Interne Geneeskunde) — e-module samenvattingen.
 *
 * Elke submap in "SSInterne-.../SSInterne/week N/<module>" is één e-module met
 * screenshots (en soms een PDF). Deze helper ontdekt alle modules en levert
 * stabiele slugs, component-namen en lme-ids voor de generator/registry.
 *
 * Zelfde patroon als scripts/lib/sskindgynModules.mjs (zie memory:
 * sskindgyn-samenvattingen-pipeline voor de volledige pijplijn-uitleg).
 */
import fs from 'fs'
import path from 'path'

export const INPUT_ROOT_NAME = 'SSInterne-20260724T145544Z-1-001'
export const BLOK_LABEL = 'Interne Geneeskunde'

// Sommige modulemappen komen in meerdere weken exact hetzelfde voor
// (zelfde screenshots, 1-op-1 gecontroleerd met diff). Om dubbele API-kosten
// en dubbele samenvattingen te voorkomen wordt alleen de eerste (laagste week)
// verwerkt; latere weken slaan dezelfde module over.
const SEEN_CONTENT_SLUGS = new Set()

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function pascalFromSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
}

export function findInputDir(ROOT) {
  const outer = path.join(ROOT, INPUT_ROOT_NAME)
  const inner = path.join(outer, 'SSInterne')
  if (fs.existsSync(inner)) return inner
  if (fs.existsSync(outer)) return outer
  return inner
}

export function moduleBasePascal(mod) {
  return `SsinterneWeek${mod.weekNum}${pascalFromSlug(mod.slug)}`
}

export function moduleCompName(mod) {
  return `${moduleBasePascal(mod)}Summary`
}

export function lmeIdForModule(mod) {
  return `ssinterne-week${mod.weekNum}-${mod.slug}`
}

export function outDirForModule(ROOT, mod) {
  return path.join(
    ROOT,
    'src',
    'summaries',
    'samenvattingen-ssinterne',
    `week-${mod.weekNum}`,
    mod.slug
  )
}

export function cacheRawMdPath(ROOT, mod) {
  return path.join(ROOT, '.cursor', 'ssinterne-cache', `week-${mod.weekNum}`, mod.slug, 'raw.md')
}

export function cacheFlashcardsDraftPath(ROOT, mod) {
  return path.join(ROOT, '.cursor', 'ssinterne-cache', `week-${mod.weekNum}`, mod.slug, 'flashcards-draft.json')
}

/** Skip webpage-save asset dumps (browser "Save As" _files folders: css/js only, no echte screenshots). */
function isAssetDumpFolder(folderPath) {
  if (/_files$/i.test(path.basename(folderPath))) return true
  return false
}

/** Ontdek alle e-modules (week/module) met beeld- of documentmateriaal. */
export function discoverModules(ROOT) {
  const inputDir = findInputDir(ROOT)
  const modules = []
  if (!fs.existsSync(inputDir)) return modules

  SEEN_CONTENT_SLUGS.clear()

  const weekNames = fs.readdirSync(inputDir).sort((a, b) => {
    const na = Number(a.match(/(\d+)/)?.[1] ?? 0)
    const nb = Number(b.match(/(\d+)/)?.[1] ?? 0)
    return na - nb
  })

  for (const weekName of weekNames) {
    const weekPath = path.join(inputDir, weekName)
    if (!fs.statSync(weekPath).isDirectory()) continue
    const weekMatch = weekName.match(/(\d+)/)
    if (!weekMatch) continue
    const weekNum = Number(weekMatch[1])

    for (const moduleName of fs.readdirSync(weekPath)) {
      const folder = path.join(weekPath, moduleName)
      if (!fs.statSync(folder).isDirectory()) continue
      if (isAssetDumpFolder(folder)) continue

      const slug = slugify(moduleName)
      if (SEEN_CONTENT_SLUGS.has(slug)) continue
      SEEN_CONTENT_SLUGS.add(slug)

      modules.push({
        weekNum,
        weekLabel: `Week ${weekNum}`,
        name: moduleName,
        displayTitle: moduleName,
        folder,
        slug,
        caseLabel: `Week ${weekNum} · ${moduleName}`,
      })
    }
  }

  return modules
}

/** Volledige, gedeelde sectiecomponenten (identiek aan blok 5/10/sskindgyn look). */
export const SECTION_SHARED = `import { Fragment } from 'react'
import { HelpCircle, Lightbulb } from 'lucide-react'

export function Inline({ children }) {
  const s = String(children)
  const out = []
  let rest = s
  let k = 0
  while (rest) {
    const a = rest.indexOf('**')
    if (a === -1) {
      out.push(rest)
      break
    }
    if (a > 0) out.push(rest.slice(0, a))
    const b = rest.indexOf('**', a + 2)
    if (b === -1) {
      out.push(rest.slice(a))
      break
    }
    out.push(
      <strong key={k++} className="text-slate-900 dark:text-slate-100 font-semibold">
        {rest.slice(a + 2, b)}
      </strong>
    )
    rest = rest.slice(b + 2)
  }
  return (
    <>
      {out.map((n, i) => (
        <Fragment key={i}>{typeof n === 'string' ? n : n}</Fragment>
      ))}
    </>
  )
}

export function VraagjeBox({ text }) {
  const lines = text.split('\\n')
  const question = lines[0] || ''
  const answer = lines.slice(1).join('\\n').trim()
  return (
    <div className="rounded-xl border border-primary-200 dark:border-primary-500/30 bg-primary-50/90 dark:bg-primary-500/10 p-5 space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 shrink-0 rounded-lg bg-primary-100 dark:bg-primary-500/25 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="space-y-2 min-w-0">
          <p className="text-primary-900 dark:text-primary-100 font-semibold m-0">
            <Inline>{question}</Inline>
          </p>
          {answer ? (
            <p className="text-primary-800 dark:text-primary-200 text-sm leading-relaxed m-0">
              <Inline>{answer}</Inline>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export function KortomBox({ text }) {
  return (
    <div className="rounded-xl border-l-4 border-accent-400 bg-accent-50/90 dark:bg-accent-500/10 p-4">
      <p className="text-accent-900 dark:text-accent-100 m-0 leading-relaxed">
        <Inline>{text}</Inline>
      </p>
    </div>
  )
}

export function PBody({ text }) {
  const trimmed = text.trim()
  if (trimmed.startsWith('**Kortom:**')) {
    return <KortomBox text={trimmed} />
  }
  if (/^\\*\\*[^*]+\\*\\*/.test(trimmed) && trimmed.includes('\\n')) {
    return <VraagjeBox text={trimmed} />
  }
  const lines = text.split('\\n')
  return (
    <>
      {lines.map((line, i) => (
        <p key={i} className="leading-relaxed">
          <Inline>{line}</Inline>
        </p>
      ))}
    </>
  )
}

export function DataTable({ rows }) {
  const dataRows = rows.filter((row) => !row.every((c) => /^-+$/.test(String(c).trim())))
  if (!dataRows.length) return null
  const [header, ...body] = dataRows
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 my-2">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-slate-100 dark:bg-slate-800/90">
          <tr>
            {header.map((h, hi) => (
              <th
                key={hi}
                className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600"
              >
                <Inline>{h}</Inline>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
          {body.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? 'bg-white dark:bg-slate-900/40' : 'bg-slate-50/80 dark:bg-slate-800/30'}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={\`px-4 py-3 align-top text-slate-700 dark:text-slate-300 \${
                    ci === 0 ? 'font-semibold text-slate-900 dark:text-slate-100' : ''
                  }\`}
                >
                  <Inline>{cell}</Inline>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function SubHeading({ children, level = 3 }) {
  const cls =
    level === 2
      ? 'text-lg font-bold text-slate-900 dark:text-slate-100 pt-2'
      : 'text-base font-semibold text-slate-900 dark:text-slate-100'
  if (level === 2) {
    return <h3 className={cls}>{children}</h3>
  }
  return <h4 className={cls}>{children}</h4>
}

export function TipBox({ children }) {
  return (
    <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50/90 dark:bg-amber-500/10 p-4 flex gap-3">
      <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
      <div className="text-amber-900 dark:text-amber-100 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}
`
