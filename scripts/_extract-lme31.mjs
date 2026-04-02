import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const docx = path.join(
  process.cwd(),
  'SVdocs/Samenvattingen B9/Week 4/Casus 7 - Patiënt met een pneumonie/LME 31 – Klinisch redeneren bij respiratoire insufficiëntie.docx',
)
const tmp = path.join(process.env.TEMP, 'lme31ri')
fs.mkdirSync(tmp, { recursive: true })
const zip = path.join(tmp, 'z.zip')
fs.copyFileSync(docx, zip)
const ps = `Expand-Archive -LiteralPath '${zip.replace(/'/g, "''")}' -DestinationPath '${tmp.replace(/'/g, "''")}' -Force`
execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: 'pipe' })

const xml = fs.readFileSync(path.join(tmp, 'word', 'document.xml'), 'utf8')
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
const out = path.join(process.cwd(), '.lme31_extract.txt')
fs.writeFileSync(out, lines.join('\n'), 'utf8')
console.log(lines.length)
