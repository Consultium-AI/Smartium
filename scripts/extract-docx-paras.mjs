import fs from 'fs'
import path from 'path'
import os from 'os'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'

const docxPath = process.argv[2]
if (!docxPath) {
  console.error('Usage: node extract-docx-paras.mjs <path-to.docx>')
  process.exit(1)
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'docxpar_'))
const zipPath = path.join(tmp, 'doc.zip')
try {
  fs.copyFileSync(docxPath, zipPath)
  execFileSync(
    'powershell',
    ['-NoProfile', '-Command', `Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${tmp.replace(/'/g, "''")}' -Force`],
    { stdio: 'inherit' }
  )
  const xml = fs.readFileSync(path.join(tmp, 'word', 'document.xml'), 'utf8')
  const paras = []
  const re = /<w:p[\s>][\s\S]*?<\/w:p>/g
  let m
  while ((m = re.exec(xml))) {
    const p = m[0]
    const texts = []
    const tr = /<w:t[^>]*xml:space="preserve"[^>]*>([\s\S]*?)<\/w:t>|<w:t[^>]*>([\s\S]*?)<\/w:t>/g
    let t
    while ((t = tr.exec(p))) {
      const chunk = (t[1] || t[2] || '')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
      texts.push(chunk)
    }
    const line = texts.join('')
    if (line.trim()) paras.push(line)
  }
  const out = process.argv[3]
  const text = paras.join('\n')
  if (out) fs.writeFileSync(out, text, 'utf8')
  else process.stdout.write(text)
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}
