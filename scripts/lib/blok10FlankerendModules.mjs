import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')

export const INPUT_ROOT = path.join(ROOT, 'SS1B10')
export const SUMMARY_CACHE_DIR = path.join(ROOT, '.cursor', 'flankerend-blok10-cache')
export const LM_PREFIX = /^(LME|LMO|LMV|STM)\b/i

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function discoverFlankerendModules(root = INPUT_ROOT) {
  const modules = []
  if (!fs.existsSync(root)) return modules

  for (const zipName of fs.readdirSync(root)) {
    if (!zipName.startsWith('Flankerend onderwijs casus')) continue
    const zipPath = path.join(root, zipName)
    if (!fs.statSync(zipPath).isDirectory()) continue

    const innerName = fs.readdirSync(zipPath).find((n) => n.startsWith('Flankerend onderwijs casus'))
    if (!innerName) continue

    const innerPath = path.join(zipPath, innerName)
    const casusMatch = innerName.match(/casus\s*(\d+)/i)
    if (!casusMatch) continue
    const casusNum = Number(casusMatch[1])

    for (const lmName of fs.readdirSync(innerPath)) {
      const lmPath = path.join(innerPath, lmName)
      if (!fs.statSync(lmPath).isDirectory()) continue
      if (!LM_PREFIX.test(lmName)) continue

      const slug = `casus-${casusNum}-${slugify(lmName)}`
      modules.push({
        casusNum,
        casusLabel: `Casus ${casusNum}`,
        name: lmName,
        folder: lmPath,
        slug,
        displayTitle: lmName,
      })
    }
  }

  return modules.sort((a, b) => a.casusNum - b.casusNum || a.name.localeCompare(b.name, 'nl'))
}

export function summaryDocxFileName(mod) {
  const safe = mod.name.replace(/[/\\]/g, '-')
  const num = String(mod.casusNum).padStart(2, '0')
  return `Casus ${num} – ${safe} – samenvatting.docx`
}

export function oefenvragenDocxFileName(mod) {
  const safe = mod.name.replace(/[/\\]/g, '-')
  const num = String(mod.casusNum).padStart(2, '0')
  return `Casus ${num} – ${safe} — oefenvragen.docx`
}
