import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  Check,
  CreditCard,
  Loader2,
  Sparkles,
  BookOpen,
  GraduationCap,
  MessageSquare,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import {
  createCheckoutSession,
  createEmbeddedCheckoutSession,
} from '../lib/billingApi'
import { hasStripePublishableKey } from '../lib/stripeClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import StripeEmbeddedFrame from '../components/StripeEmbeddedFrame'

const ease = [0.25, 0.1, 0.25, 1]
const PRICE = 14.99

const eur = (n) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n)

const FEATURES = [
  { icon: BookOpen, text: 'Alle samenvattingen' },
  { icon: GraduationCap, text: 'Alle oefententamens' },
  { icon: MessageSquare, text: 'Smartium Chat' },
]

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
    </div>
  )
}

export default function BillingPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const reduceMotion = useReducedMotion()
  const { user, loading } = useAuth()

  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState(null)
  const [embedClientSecret, setEmbedClientSecret] = useState(null)
  const [showEmbed, setShowEmbed] = useState(false)

  const status = searchParams.get('status')
  const sessionId = searchParams.get('session_id')
  const embedAvailable = hasStripePublishableKey()

  const startCheckout = async () => {
    if (!user) {
      navigate(`/login?redirect=${encodeURIComponent('/billing')}`)
      return
    }
    setCheckoutError(null)
    setCheckoutLoading(true)
    try {
      if (embedAvailable) {
        const result = await createEmbeddedCheckoutSession({ email: user?.email })
        if (result.error) {
          setCheckoutError(result.error)
          return
        }
        setEmbedClientSecret(result.clientSecret)
        setShowEmbed(true)
        return
      }
      const result = await createCheckoutSession({ email: user?.email })
      if (result.error) {
        setCheckoutError(result.error)
        return
      }
      window.location.href = result.url
    } finally {
      setCheckoutLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 flex min-h-[50vh] items-center justify-center pt-24">
          <Loader2 className="h-10 w-10 animate-spin text-primary-500" strokeWidth={2} />
        </main>
        <Footer />
      </>
    )
  }

  if (status === 'success' || sessionId) {
    return (
      <>
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10 flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 pb-20 pt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative w-full max-w-md rounded-2xl border border-emerald-200/90 bg-white/95 p-8 text-center shadow-soft-lg backdrop-blur-sm dark:border-emerald-500/30 dark:bg-slate-900/90"
          >
            <motion.div
              initial={reduceMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.1, stiffness: 400, damping: 22 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
            >
              <Check className="h-8 w-8" strokeWidth={2.5} />
            </motion.div>
            <h1 className="font-display text-2xl font-bold text-navy-900 dark:text-white">
              Bedankt!
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Je betaling is ontvangen. Je hebt nu volledige toegang tot Smartium.
            </p>
            <Link
              to="/summary"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-primary-600"
            >
              Naar de app
            </Link>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 pb-20 pt-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className={`relative w-full ${showEmbed ? 'max-w-2xl' : 'max-w-lg'}`}
        >
          <AmbientOrbs reduced={reduceMotion} />

          <Link
            to={user ? '/summary' : '/'}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-navy-600 transition hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug
          </Link>

          {status === 'cancel' && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-500/35 dark:bg-amber-950/40 dark:text-amber-100"
            >
              Betaling geannuleerd. Je kunt hieronder opnieuw afrekenen.
            </motion.p>
          )}

          <motion.div
            whileHover={reduceMotion ? {} : { y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-soft-lg backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-black/40"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary-400/15 blur-3xl dark:bg-primary-500/10"
              aria-hidden
            />
            <div className="relative">
              {!showEmbed ? (
                <>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md">
                      <Sparkles className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h1 className="font-display text-xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-2xl">
                        Smartium Pro
                      </h1>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Volledige toegang — eenmalige betaling
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <p className="font-display text-4xl font-bold text-navy-900 dark:text-white">
                      {eur(PRICE)}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Eenmalig · geen abonnement
                    </p>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {FEATURES.map((f) => (
                      <li key={f.text} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-500/15">
                          <f.icon className="h-4 w-4 text-primary-600 dark:text-primary-400" strokeWidth={2} />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{f.text}</span>
                        <Check className="ml-auto h-4 w-4 text-emerald-500" strokeWidth={2.5} />
                      </li>
                    ))}
                  </ul>

                  {!user && (
                    <p className="mb-4 rounded-lg border border-amber-200/90 bg-amber-50/90 px-3 py-2 text-sm text-amber-950 dark:border-amber-500/35 dark:bg-amber-950/35 dark:text-amber-100/95">
                      Om af te rekenen moet je{' '}
                      <Link
                        to={`/login?redirect=${encodeURIComponent('/billing')}`}
                        className="font-semibold underline decoration-amber-700/50 underline-offset-2 dark:decoration-amber-300/50"
                      >
                        inloggen of een account aanmaken
                      </Link>
                      .
                    </p>
                  )}

                  {checkoutError && (
                    <p className="mb-4 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800 dark:border-rose-500/40 dark:bg-rose-950/40 dark:text-rose-200">
                      {checkoutError}
                    </p>
                  )}

                  <motion.button
                    type="button"
                    disabled={checkoutLoading}
                    onClick={() => void startCheckout()}
                    whileHover={reduceMotion || checkoutLoading ? {} : { scale: 1.02 }}
                    whileTap={reduceMotion || checkoutLoading ? {} : { scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition hover:from-primary-600 hover:to-primary-700 disabled:opacity-60"
                  >
                    {checkoutLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Bezig…
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-5 w-5" />
                        Afrekenen — {eur(PRICE)}
                      </>
                    )}
                  </motion.button>

                  <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                    Veilige betaling via Stripe · iDEAL
                  </p>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setEmbedClientSecret(null)
                      setCheckoutError(null)
                      setShowEmbed(false)
                    }}
                    className="mb-4 inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:underline dark:text-primary-400"
                  >
                    <ArrowLeft className="h-3 w-3" /> Terug
                  </button>
                  <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                    Smartium Pro — <strong className="text-navy-900 dark:text-white">{eur(PRICE)}</strong> (eenmalig)
                  </p>
                  {embedClientSecret && (
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: reduceMotion ? 0 : 0.08, duration: 0.35 }}
                    >
                      <StripeEmbeddedFrame clientSecret={embedClientSecret} />
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
