import { useState, useEffect } from 'react'
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from 'framer-motion'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Mail, Lock, User, ArrowLeft, Loader2, Sparkles } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { googleOAuthClientId } from '../lib/firebase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import GoogleSignInButton from '../components/GoogleSignInButton'

const ease = [0.25, 0.1, 0.25, 1]

const tabSpring = { type: 'spring', stiffness: 420, damping: 32 }

/**
 * Loginvelden gebruiken géén globale `.input-field` (index.css): die zet `padding: 0.75rem 1rem`
 * en overschrijft Tailwinds `pl-*`, waardoor placeholder/tekst onder de iconen schuift.
 */
const loginInputClass =
  'block w-full min-h-[3rem] rounded-xl border-2 border-slate-200 bg-white py-2.5 pl-[3.25rem] pr-4 text-[0.9375rem] leading-snug text-navy-900 shadow-sm ' +
  'placeholder:text-slate-400 ' +
  'transition-[border-color,box-shadow] duration-200 ' +
  'hover:border-slate-300 ' +
  'focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/12 ' +
  'dark:border-slate-600 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500 ' +
  'dark:hover:border-slate-500 ' +
  'dark:focus:border-primary-400 dark:focus:ring-primary-400/18'

const loginFieldIconWrap =
  'pointer-events-none absolute inset-y-0 left-0 flex w-[3.25rem] shrink-0 items-center justify-center text-slate-500 dark:text-slate-400'

/** Exacte origins voor Google Cloud → OAuth Web client (fix error 400 origin_mismatch). */
function GoogleOAuthOriginHint() {
  const [primary, setPrimary] = useState('')
  const [alternate, setAlternate] = useState(null)

  useEffect(() => {
    const o = window.location.origin
    setPrimary(o)
    try {
      const u = new URL(o)
      if (u.hostname === 'localhost') {
        setAlternate(o.replace('://localhost', '://127.0.0.1'))
      } else if (u.hostname === '127.0.0.1') {
        setAlternate(o.replace('://127.0.0.1', '://localhost'))
      } else {
        setAlternate(null)
      }
    } catch {
      setAlternate(null)
    }
  }, [])

  if (!primary) return null

  return (
    <div className="mt-3 rounded-xl border border-amber-200/90 bg-amber-50/90 px-3 py-2.5 text-left text-[11px] leading-relaxed text-amber-950 dark:border-amber-500/35 dark:bg-amber-950/40 dark:text-amber-100/95">
      <p className="font-semibold text-amber-900 dark:text-amber-50">
        Google <code className="rounded bg-amber-100/80 px-1 dark:bg-amber-900/80">origin_mismatch</code>?
      </p>
      <p className="mt-1 text-amber-900/90 dark:text-amber-100/85">
        In{' '}
        <a
          href="https://console.cloud.google.com/apis/credentials"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline decoration-amber-600/60 underline-offset-2 hover:text-amber-950 dark:hover:text-white"
        >
          Google Cloud → APIs &amp; Services → Credentials
        </a>
        : open je <strong>OAuth 2.0 Client ID</strong> (type <em>Web application</em>). Voeg <strong>exact</strong> toe onder{' '}
        <strong>Authorized JavaScript origins</strong> (zelfde regels vaak onder <strong>Authorized redirect URIs</strong>):
      </p>
      <ul className="mt-1.5 list-inside list-disc space-y-0.5 font-mono text-[10px] text-amber-950 dark:text-amber-50/95">
        <li>
          <span className="select-all">{primary}</span>
          <span className="ml-1 font-sans text-amber-800 dark:text-amber-200/80">(huidige tab)</span>
        </li>
        {alternate && (
          <li>
            <span className="select-all">{alternate}</span>
            <span className="ml-1 font-sans text-amber-800 dark:text-amber-200/80">(andere hostnaam, zelfde machine)</span>
          </li>
        )}
      </ul>
      <p className="mt-1.5 text-amber-900/85 dark:text-amber-100/75">
        Geen pad, geen <code className="rounded px-0.5">/</code> aan het eind. Opslaan → enkele minuten wachten → pagina verversen.
      </p>
    </div>
  )
}

/** Zwevende kleurvlekken achter het formulier */
function AmbientOrbs({ reduced }) {
  if (reduced) return null
  return (
    <div
      className="pointer-events-none absolute -inset-[min(40%,12rem)] -z-10 overflow-visible"
      aria-hidden
    >
      <motion.div
        className="absolute left-0 top-0 h-56 w-56 rounded-full bg-primary-400/25 blur-3xl dark:bg-primary-500/20"
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/15"
        animate={{ x: [0, -20, 0], y: [0, 22, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-2xl dark:bg-cyan-500/10"
        animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function safeLoginRedirect(raw) {
  if (!raw || typeof raw !== 'string') return '/summary'
  if (!raw.startsWith('/') || raw.startsWith('//')) return '/summary'
  return raw
}

const LoginPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const postLoginPath = safeLoginRedirect(searchParams.get('redirect'))
  const reduceMotion = useReducedMotion()
  const {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    error,
    clearError,
    isFirebaseConfigured,
  } = useAuth()

  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const fadeUp = reduceMotion
    ? { initial: false, animate: {} }
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } }

  if (loading) {
    return (
      <>
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center pt-24">
          <motion.div
            className="relative flex flex-col items-center gap-4"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease }}
          >
            {!reduceMotion && (
              <motion.div
                className="absolute inset-0 -m-8 rounded-full bg-primary-400/20 blur-2xl dark:bg-primary-500/15"
                animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <Loader2
              className="relative h-11 w-11 text-primary-500 dark:text-primary-400"
              strokeWidth={2}
            />
            {!reduceMotion && (
              <motion.div
                className="absolute h-14 w-14 rounded-full border-2 border-primary-400/40 border-t-primary-500 dark:border-primary-500/30 dark:border-t-primary-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
              />
            )}
            <motion.p
              className="relative text-sm font-medium text-navy-500 dark:text-slate-400"
              animate={reduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Even geduld…
            </motion.p>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

  if (user) {
    return (
      <>
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-4 pb-16 pt-24">
          <AmbientOrbs reduced={reduceMotion} />
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="relative w-full max-w-md rounded-2xl border border-slate-200/90 bg-white/90 p-8 text-center shadow-soft-lg backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-black/40"
          >
            {!reduceMotion && (
              <motion.div
                className="pointer-events-none absolute -right-3 -top-3 text-primary-500 dark:text-primary-400"
                initial={{ opacity: 0, scale: 0, rotate: -40 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
              >
                <Sparkles className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
            )}
            <motion.p
              className="mb-1 text-sm text-navy-500 dark:text-slate-400"
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Ingelogd als
            </motion.p>
            <motion.p
              className="break-words text-lg font-semibold text-navy-900 dark:text-slate-100"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              {user.displayName?.trim() || user.email}
            </motion.p>
            {user.displayName?.trim() && user.email && (
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-1 break-all text-sm text-navy-600 dark:text-slate-400"
              >
                {user.email}
              </motion.p>
            )}
            <motion.div
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, staggerChildren: reduceMotion ? 0 : 0.08 }}
            >
              {[
                { to: '/summary', label: 'Naar samenvattingen', primary: true },
                { to: '/', label: 'Home', primary: false },
              ].map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.06 }}
                >
                  <motion.div whileHover={reduceMotion ? {} : { y: -2 }} whileTap={reduceMotion ? {} : { scale: 0.98 }}>
                    <Link
                      to={item.to}
                      className={
                        item.primary
                          ? 'inline-flex w-full items-center justify-center rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-800 dark:bg-primary-600 dark:hover:bg-primary-500 sm:w-auto'
                          : 'inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-navy-800 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto'
                      }
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="sm:w-full sm:max-w-none"
              >
                <motion.button
                  type="button"
                  onClick={() => signOut()}
                  whileHover={reduceMotion ? {} : { scale: 1.02 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  className="w-full rounded-xl border border-rose-200 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50 dark:border-rose-500/40 dark:text-rose-300 dark:hover:bg-rose-950/40 sm:w-auto"
                >
                  Uitloggen
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    clearError()
    setSubmitting(true)
    try {
      if (mode === 'login') {
        await signIn(email, password)
        navigate(postLoginPath, { replace: true })
      } else {
        await signUp(email, password, name)
        navigate('/billing', { replace: true })
      }
    } catch {
      /* error state from context */
    } finally {
      setSubmitting(false)
    }
  }

  const switchMode = (next) => {
    setMode(next)
    clearError()
  }

  const fieldVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { delay: 0.06 * i, duration: 0.35, ease },
    }),
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 pb-20 pt-24">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease }}
          className="relative w-full max-w-[420px]"
        >
          <AmbientOrbs reduced={reduceMotion} />

          <motion.div
            whileHover={reduceMotion ? {} : { y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-navy-600 dark:text-slate-400"
            >
              <motion.span
                whileHover={reduceMotion ? {} : { x: -4 }}
                whileTap={reduceMotion ? {} : { scale: 0.95 }}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                Terug naar home
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24, delay: reduceMotion ? 0 : 0.06 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/92 p-8 shadow-soft-xl backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/88 dark:shadow-black/50 dark:ring-1 dark:ring-white/[0.06]"
            style={{
              boxShadow: reduceMotion
                ? undefined
                : '0 25px 50px -12px rgba(0, 195, 255, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.04)',
            }}
          >
            {!reduceMotion && (
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
                style={{
                  background:
                    'linear-gradient(115deg, transparent 40%, rgba(0,195,255,0.12) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            )}

            <div className="relative mb-8 text-center">
              <motion.div
                className="relative mx-auto h-12 w-12"
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, -6, 0], rotate: [0, 2, -2, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.img
                  src={`${import.meta.env.BASE_URL}smartium-logo.png`}
                  alt=""
                  className="h-12 w-12 object-contain opacity-90 dark:opacity-85"
                  width={48}
                  height={48}
                  initial={reduceMotion ? false : { scale: 0, rotate: -25 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                />
                {!reduceMotion && (
                  <>
                    <motion.span
                      className="absolute -right-1 -top-1 inline-block h-2.5 w-2.5 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(0,195,255,0.7)] dark:bg-primary-400"
                      animate={{ scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.span
                      className="absolute -bottom-0.5 -left-1 inline-block h-1.5 w-1.5 rounded-full bg-accent-400/90"
                      animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </>
                )}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease }}
                >
                  <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy-900 dark:text-slate-50">
                    {mode === 'login' ? 'Welkom terug' : 'Account aanmaken'}
                  </h1>
                  <p className="mt-2 text-sm text-navy-500 dark:text-slate-400">
                    {mode === 'login'
                      ? 'Log in om verder te gaan met Smartium.'
                      : 'Maak een account om je voortgang te bewaren.'}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <LayoutGroup>
              <div
                className="relative mb-6 flex rounded-xl border border-slate-200/90 bg-slate-100/95 p-1 shadow-inner dark:border-slate-700/70 dark:bg-slate-800/90 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                role="tablist"
                aria-label="Inloggen of registreren"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'login'}
                  onClick={() => switchMode('login')}
                  className={`relative flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                    mode === 'login'
                      ? 'text-navy-900 dark:text-white'
                      : 'text-navy-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {mode === 'login' && (
                    <motion.div
                      layoutId="authTabPill"
                      className="absolute inset-0 z-0 rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-700 dark:shadow-md dark:ring-white/10"
                      transition={tabSpring}
                    />
                  )}
                  <span className="relative z-10">Inloggen</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'register'}
                  onClick={() => switchMode('register')}
                  className={`relative flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                    mode === 'register'
                      ? 'text-navy-900 dark:text-white'
                      : 'text-navy-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {mode === 'register' && (
                    <motion.div
                      layoutId="authTabPill"
                      className="absolute inset-0 z-0 rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-700 dark:shadow-md dark:ring-white/10"
                      transition={tabSpring}
                    />
                  )}
                  <span className="relative z-10">Registreren</span>
                </button>
              </div>
            </LayoutGroup>

            <form onSubmit={handleSubmit} className="relative space-y-4">
              <AnimatePresence initial={false}>
                {mode === 'register' && (
                  <motion.label
                    key="name-field"
                    layout
                    initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease }}
                    className="block overflow-hidden"
                  >
                    <span className="mb-1.5 block text-xs font-medium text-navy-600 dark:text-slate-400">
                      Naam <span className="text-rose-600 dark:text-rose-400">*</span>
                    </span>
                    <div className="relative">
                      <span className={loginFieldIconWrap} aria-hidden>
                        <User className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <input
                        type="text"
                        required
                        minLength={2}
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={loginInputClass}
                        placeholder="Voor- en achternaam"
                      />
                    </div>
                  </motion.label>
                )}
              </AnimatePresence>

              <motion.label
                custom={mode === 'register' ? 1 : 0}
                variants={fieldVariants}
                initial="hidden"
                animate="show"
                className="block"
              >
                <span className="mb-1.5 block text-xs font-medium text-navy-600 dark:text-slate-400">
                  E-mailadres
                </span>
                <div className="relative">
                  <span className={loginFieldIconWrap} aria-hidden>
                    <Mail className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={loginInputClass}
                    placeholder="naam@student.ru.nl"
                  />
                </div>
              </motion.label>

              <motion.label
                custom={mode === 'register' ? 2 : 1}
                variants={fieldVariants}
                initial="hidden"
                animate="show"
                className="block"
              >
                <span className="mb-1.5 block text-xs font-medium text-navy-600 dark:text-slate-400">
                  Wachtwoord
                </span>
                <div className="relative">
                  <span className={loginFieldIconWrap} aria-hidden>
                    <Lock className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <input
                    type="password"
                    required
                    minLength={6}
                    autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={loginInputClass}
                    placeholder="Minimaal 6 tekens"
                  />
                </div>
              </motion.label>

              <AnimatePresence>
                {error && (
                  <motion.p
                    key={error}
                    role="alert"
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, scale: 1, x: [0, -5, 5, -4, 4, 0] }
                    }
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { x: { duration: 0.45 }, opacity: { duration: 0.2 } }
                    }
                    className="rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-800 dark:bg-rose-950/40 dark:text-rose-200"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.div
                custom={mode === 'register' ? 3 : 2}
                variants={fieldVariants}
                initial="hidden"
                animate="show"
              >
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={reduceMotion || submitting ? {} : { scale: 1.02, y: -1 }}
                  whileTap={reduceMotion || submitting ? {} : { scale: 0.98 }}
                  className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 py-3.5 text-sm font-bold text-white shadow-md transition hover:from-primary-600 hover:to-primary-700 disabled:opacity-60 dark:from-primary-600 dark:to-primary-700 dark:hover:from-primary-500 dark:hover:to-primary-600"
                >
                  {!reduceMotion && !submitting && (
                    <motion.span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                    />
                  )}
                  {submitting ? (
                    <Loader2 className="relative h-5 w-5 animate-spin" strokeWidth={2} />
                  ) : mode === 'login' ? (
                    'Inloggen'
                  ) : (
                    'Account aanmaken'
                  )}
                </motion.button>
              </motion.div>
            </form>

            <>
              <motion.div
                className="relative my-8"
                initial={reduceMotion ? false : { opacity: 0, scaleX: 0.85 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.35, duration: 0.4, ease }}
              >
                <div className="absolute inset-0 flex items-center" aria-hidden>
                  <motion.div
                    className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-600"
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: reduceMotion ? 0 : 0.4, duration: 0.5, ease }}
                  />
                </div>
                <div className="relative flex justify-center text-xs font-medium uppercase tracking-wider">
                  <motion.span
                    className="bg-white px-3 text-navy-400 dark:bg-slate-900 dark:text-slate-500"
                    initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.55 }}
                  >
                    Of ga verder met
                  </motion.span>
                </div>
              </motion.div>

              {googleOAuthClientId || isFirebaseConfigured ? (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.45, duration: 0.4, ease }}
                  className="w-full"
                >
                  <GoogleSignInButton
                    disabled={submitting}
                    redirectPath={mode === 'register' ? '/billing' : postLoginPath}
                  />
                  {import.meta.env.DEV && !isFirebaseConfigured ? <GoogleOAuthOriginHint /> : null}
                </motion.div>
              ) : (
                <p className="text-center text-sm text-amber-800 dark:text-amber-200/90">
                  Zet <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">VITE_GOOGLE_OAUTH_CLIENT_ID</code> in{' '}
                  <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">.env</code>.
                </p>
              )}
            </>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}

export default LoginPage
