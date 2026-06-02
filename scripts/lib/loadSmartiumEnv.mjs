import fs from 'fs'
import path from 'path'

export function loadSmartiumEnv(root) {
  const candidates = [
    path.join(root, '.env'),
    path.join(root, 'SS2B9', '.env'),
    path.join(root, '.env.local'),
  ]
  const env = { ...process.env }
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue
    const text = fs.readFileSync(file, 'utf8')
    for (const line of text.split(/\r?\n/)) {
      const t = line.trim()
      if (!t || t.startsWith('#')) continue
      const eq = t.indexOf('=')
      if (eq === -1) continue
      const key = t.slice(0, eq).trim()
      let val = t.slice(eq + 1).trim()
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1)
      }
      env[key] = val
    }
  }
  return env
}
