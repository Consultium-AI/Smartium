#!/usr/bin/env node
import mammoth from 'mammoth'
import fs from 'fs'
import path from 'path'

const [docxPath, htmlPath, pageTitle = 'Document'] = process.argv.slice(2)
if (!docxPath || !htmlPath) {
  console.error('Usage: node scripts/generate-source-document-html.mjs <docx> <html> [title]')
  process.exit(1)
}

const { value } = await mammoth.convertToHtml({ path: docxPath })
const html = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${pageTitle}</title>
<style>
  :root { color-scheme: light dark; }
  body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height: 1.6; margin: 0; padding: 2rem 1.25rem; max-width: 52rem; margin-inline: auto; background: #f8fafc; color: #1e293b; }
  @media (prefers-color-scheme: dark) { body { background: #0f172a; color: #e2e8f0; } h1,h2,h3,strong { color: #f1f5f9; } }
  h1,h2,h3 { line-height: 1.25; margin-top: 1.75rem; margin-bottom: 0.75rem; }
  h1 { font-size: 1.5rem; margin-top: 0; }
  p { margin: 0.75rem 0; }
  ul,ol { margin: 0.75rem 0; padding-left: 1.5rem; }
  table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem; }
  th,td { border: 1px solid #cbd5e1; padding: 0.5rem 0.75rem; text-align: left; vertical-align: top; }
  @media (prefers-color-scheme: dark) { th,td { border-color: #475569; } }
</style>
</head>
<body>${value}</body>
</html>`

fs.mkdirSync(path.dirname(htmlPath), { recursive: true })
fs.writeFileSync(htmlPath, html, 'utf8')
console.log('Wrote', htmlPath)
