import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docxPath = process.argv[2]
if (!docxPath) {
  console.error('Usage: node extract-docx-paragraphs.mjs <path-to.docx>')
  process.exit(1)
}

const tmp = path.join(process.env.TEMP || '/tmp', 'docx-extract-' + Date.now())
fs.mkdirSync(tmp, { recursive: true })
const zipPath = path.join(tmp, 'doc.zip')
fs.copyFileSync(docxPath, zipPath)

if (process.platform === 'win32') {
  const ps = `Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${tmp.replace(/'/g, "''")}' -Force`
  execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: 'pipe' })
} else {
  execSync(`unzip -q -o "${zipPath}" -d "${tmp}"`, { stdio: 'pipe' })
}

const xmlPath = path.join(tmp, 'word', 'document.xml')
const xml = fs.readFileSync(xmlPath, 'utf8')
const paras = xml.split(/<w:p[\s>]/)
const lines = []
for (const p of paras) {
  const re = /<w:t[^>]*>([^<]*)<\/w:t>/g
  const parts = []
  let m
  while ((m = re.exec(p)) !== null) parts.push(m[1])
  if (parts.length) lines.push(parts.join(''))
}
console.log(lines.join('\n'))
