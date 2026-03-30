/**
 * Zet VITE_* waarden uit .env als GitHub Actions repository secrets + optioneel VITE_API_BASE_URL als variable.
 * Vereist: gh CLI + `gh auth login` in deze repo.
 * Geen secrets naar stdout (alleen namen / status).
 */
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const envPath = join(root, '.env')

const SECRET_KEYS = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
  'VITE_GOOGLE_OAUTH_CLIENT_ID',
]

function parseDotEnv(filePath) {
  const out = {}
  if (!existsSync(filePath)) return out
  let raw = readFileSync(filePath, 'utf8')
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1)
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i === -1) continue
    const k = t.slice(0, i).trim()
    let v = t.slice(i + 1).trim()
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1)
    }
    out[k] = v
  }
  return out
}

function gh(args, stdin) {
  const r = spawnSync('gh', args, {
    cwd: root,
    input: stdin ?? undefined,
    encoding: 'utf8',
    stdio: stdin != null ? ['pipe', 'pipe', 'pipe'] : ['inherit', 'pipe', 'pipe'],
  })
  if (r.status !== 0) {
    const err = (r.stderr || r.stdout || '').trim()
    console.error(err || `gh ${args.join(' ')} failed (${r.status})`)
    process.exit(r.status ?? 1)
  }
}

const check = spawnSync('gh', ['auth', 'status'], { cwd: root, encoding: 'utf8' })
if (check.status !== 0) {
  console.error('Je bent niet ingelogd bij GitHub CLI. Voer uit: gh auth login')
  process.exit(1)
}

const env = parseDotEnv(envPath)
if (!Object.keys(env).length) {
  console.error('Geen .env gevonden of leeg:', envPath)
  process.exit(1)
}

const missing = SECRET_KEYS.filter((k) => !env[k] || !String(env[k]).trim())
if (missing.length) {
  console.error('Ontbrekend of leeg in .env:', missing.join(', '))
  process.exit(1)
}

for (const key of SECRET_KEYS) {
  const val = String(env[key]).trim()
  gh(['secret', 'set', key], val)
  console.log('OK secret:', key)
}

const api = env.VITE_API_BASE_URL?.trim()
if (api) {
  gh(['variable', 'set', 'VITE_API_BASE_URL', '-b', api])
  console.log('OK variable: VITE_API_BASE_URL')
} else {
  console.log('(Geen VITE_API_BASE_URL in .env — sla over; zet desnoods handmatig onder Settings → Variables)')
}

console.log('\nKlaar. Start Actions "Deploy to GitHub Pages" opnieuw (of push naar main).')
