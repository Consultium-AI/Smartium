import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const docxPath = path.join(
  root,
  'SVdocs/Samenvattingen B9/Week 3/Casus 6 - Volwassene met pijn op de borst/LME 28 – CVRM.docx',
)

const tmp = path.join(process.env.TEMP || '/tmp', 'lme28cvrm-utf8')
fs.mkdirSync(tmp, { recursive: true })
const zipPath = path.join(tmp, 'doc.zip')
fs.copyFileSync(docxPath, zipPath)
const ps = `Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${tmp.replace(/'/g, "''")}' -Force`
execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: 'pipe' })

const xmlPath = path.join(tmp, 'word', 'document.xml')
const xml = fs.readFileSync(xmlPath, 'utf8')
const paras = xml.split(/<w:p[\s>]/)
const lines = []
for (const para of paras) {
  let s = ''
  const re = /<w:t[^>]*xml:space="preserve">([^<]*)<\/w:t>|<w:t[^>]*>([^<]*)<\/w:t>/g
  let m
  while ((m = re.exec(para)) !== null) s += m[1] ?? m[2] ?? ''
  if (s) {
    lines.push(
      s
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"'),
    )
  }
}
const out = path.join(root, '.lme28_extract.txt')
fs.writeFileSync(out, lines.join('\n'), 'utf8')
console.log('Wrote', out, lines.length, 'paragraphs')
