import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const s = fs.readFileSync(path.join(__dirname, '.lme42_unzip/word/document.xml'), 'utf8')
const paras = []
const re = /<w:p[^>]*>([\s\S]*?)<\/w:p>/g
let m
while ((m = re.exec(s))) {
  const block = m[1]
  let style = ''
  const sm = block.match(/<w:pStyle w:val="([^"]+)"\/>/)
  if (sm) style = sm[1]
  const texts = []
  const rt = /<w:t[^>]*>([\s\S]*?)<\/w:t>/g
  let tm
  while ((tm = rt.exec(block))) {
    texts.push(tm[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'))
  }
  const line = texts.join('')
  if (line.trim()) paras.push({ style, line })
}
paras.forEach((p, i) => console.log(String(i + 1).padStart(3) + '\t' + p.style.padEnd(22) + '\t' + p.line))
