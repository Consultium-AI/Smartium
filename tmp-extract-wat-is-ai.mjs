import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import os from 'os'

const root = process.cwd()
const docx = path.join(
  root,
  'SVdocs/SS1B5-smartium/Week 7/Casus 14 - AI in de zorg/LMO Wat is Ai_ samenvatting.docx'
)
const zip = path.join(os.tmpdir(), 'wat-is-ai.zip')
const tmp = path.join(os.tmpdir(), 'wat-is-ai-unzip')
fs.copyFileSync(docx, zip)
fs.rmSync(tmp, { recursive: true, force: true })
fs.mkdirSync(tmp, { recursive: true })
execSync(
  `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zip.replace(/'/g, "''")}' -DestinationPath '${tmp.replace(/'/g, "''")}' -Force"`
)
let xml = fs.readFileSync(path.join(tmp, 'word/document.xml'), 'utf8')
xml = xml.replace(/<w:tab[^>]*\/>/g, '\t')
const paras = []
for (const block of xml.split('</w:p>')) {
  if (!block.includes('<w:p')) continue
  let inner = block.slice(block.indexOf('<w:p'))
  inner = inner.replace(/<w:br[^>]*>/g, '\n')
  const texts = [...inner.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map((m) =>
    m[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
  )
  const t = (texts.length > 1 ? texts.join('\n') : texts[0] || '').replace(/\r/g, '')
  if (t.trim()) paras.push(t)
}
fs.writeFileSync(path.join(root, 'wat-is-ai-paras.json'), JSON.stringify(paras, null, 2), 'utf8')
console.log('count', paras.length)
paras.forEach((p, i) => console.log(String(i).padStart(3, '0'), p.slice(0, 120)))
