import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  Check,
  CreditCard,
  Loader2,
  Sparkles,
  Building2,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { createCheckoutSession } from '../lib/billingApi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'

const ease = [0.25, 0.1, 0.25, 1]

const MONTHLY = 9.99
const YEARLY_MONTHLY_EQ = 8.89
const YEARLY_TOTAL = 106.68 // 12 × €8,89 — jaarlijks gefactureerd
const YEARLY_VS_MONTHLY = MONTHLY * 12
const DISCOUNT_PCT = Math.round((1 - YEARLY_TOTAL / YEARLY_VS_MONTHLY) * 100)

const eur = (n) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n)

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

export default function BillingPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const reduceMotion = useReducedMotion()
  const { user, loading } = useAuth()

  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState(null)

  const status = searchParams.get('status')

  useEffect(() => {
    if (loading || !user) return
    try {
      const p = sessionStorage.getItem('smartium_billing_plan')
      if (p === 'monthly' || p === 'yearly') {
        setPlan(p)
        setStep(2)
        sessionStorage.removeItem('smartium_billing_plan')
      }
    } catch {
      /* ignore */
    }
  }, [loading, user])

  const startCheckout = async () => {
    if (!plan) return
    if (!user) {
      try {
        sessionStorage.setItem('smartium_billing_plan', plan)
      } catch {
        /* ignore */
      }
      navigate(`/login?redirect=${encodeURIComponent('/billing')}`)
      return
    }
    setCheckoutError(null)
    setCheckoutLoading(true)
    try {
      const result = await createCheckoutSession(plan, { email: user?.email })
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

  if (status === 'success') {
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
              Je betaling is ontvangen. Je abonnement wordt zo actief (controleer ook je e-mail).
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
          className="relative w-full max-w-lg"
        >
          <AmbientOrbs reduced={reduceMotion} />

          <Link
            to={user ? '/summary' : '/'}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-navy-600 transition hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {user ? 'Overslaan — later betalen' : 'Terug naar home'}
          </Link>

          {status === 'cancel' && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-500/35 dark:bg-amber-950/40 dark:text-amber-100"
            >
              Betaling geannuleerd. Je kunt hieronder opnieuw een plan kiezen.
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
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md">
                  <Sparkles className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h1 className="font-display text-xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-2xl">
                    Kies je abonnement
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Volledige toegang tot Smartium
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="plans"
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? false : { opacity: 0, x: -16 }}
                    transition={{ duration: 0.35, ease }}
                    className="space-y-4"
                  >
                    <motion.button
                      type="button"
                      onClick={() => {
                        setPlan('monthly')
                        setStep(2)
                      }}
                      whileHover={reduceMotion ? {} : { scale: 1.01 }}
                      whileTap={reduceMotion ? {} : { scale: 0.99 }}
                      className="group relative w-full rounded-2xl border-2 border-slate-200 bg-white p-5 text-left transition hover:border-primary-400 hover:shadow-md dark:border-slate-600 dark:bg-slate-950/40 dark:hover:border-primary-500"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Maandelijks
                          </p>
                          <p className="mt-1 font-display text-3xl font-bold text-navy-900 dark:text-white">
                            {eur(MONTHLY)}
                            <span className="text-base font-semibold text-slate-500">/maand</span>
                          </p>
                          <p className="mt-2 text-xs text-slate-500">Opzeggen wanneer je wilt.</p>
                        </div>
                        <CreditCard className="h-8 w-8 shrink-0 text-slate-300 transition group-hover:text-primary-500 dark:text-slate-600" />
                      </div>
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={() => {
                        setPlan('yearly')
                        setStep(2)
                      }}
                      whileHover={reduceMotion ? {} : { scale: 1.01 }}
                      whileTap={reduceMotion ? {} : { scale: 0.99 }}
                      className="group relative w-full overflow-hidden rounded-2xl border-2 border-primary-400/80 bg-gradient-to-br from-primary-50/90 to-white p-5 text-left shadow-md transition hover:shadow-lg dark:border-primary-500/50 dark:from-primary-950/50 dark:to-slate-950/60"
                    >
                      <span className="absolute right-4 top-4 rounded-full bg-primary-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        {DISCOUNT_PCT}% korting
                      </span>
                      <div className="flex items-start justify-between gap-3 pr-16">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                            Jaarlijks
                          </p>
                          <p className="mt-1 font-display text-3xl font-bold text-navy-900 dark:text-white">
                            {eur(YEARLY_MONTHLY_EQ)}
                            <span className="text-base font-semibold text-slate-500">/maand</span>
                          </p>
                          <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                            {eur(YEARLY_TOTAL)} per jaar gefactureerd
                          </p>
                          <p className="mt-2 text-xs text-slate-500 line-through dark:text-slate-500">
                            Was {eur(YEARLY_VS_MONTHLY)}/jaar bij maandprijs
                          </p>
                        </div>
                        <Building2 className="h-8 w-8 shrink-0 text-primary-400" />
                      </div>
                    </motion.button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="pay"
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? false : { opacity: 0, x: 16 }}
                    transition={{ duration: 0.35, ease }}
                    className="space-y-5"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1)
                        setCheckoutError(null)
                      }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:underline dark:text-primary-400"
                    >
                      <ArrowLeft className="h-3 w-3" /> Ander plan
                    </button>

                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Je gekozen plan:{' '}
                      <strong className="text-navy-900 dark:text-white">
                        {plan === 'yearly'
                          ? `Jaarlijks (${eur(YEARLY_TOTAL)}/jaar)`
                          : `Maandelijks (${eur(MONTHLY)}/maand)`}
                      </strong>
                    </p>

                    {!user && (
                      <p className="rounded-lg border border-amber-200/90 bg-amber-50/90 px-3 py-2 text-sm text-amber-950 dark:border-amber-500/35 dark:bg-amber-950/35 dark:text-amber-100/95">
                        Om af te rekenen moet je{' '}
                        <Link
                          to={`/login?redirect=${encodeURIComponent('/billing')}`}
                          className="font-semibold underline decoration-amber-700/50 underline-offset-2 dark:decoration-amber-300/50"
                        >
                          inloggen of een account aanmaken
                        </Link>
                        . Je gekozen plan wordt bewaard.
                      </p>
                    )}

                    <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-600 dark:bg-slate-950/50">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Betaalmethodes (via Stripe)
                      </p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        Op de volgende pagina kun je veilig betalen met{' '}
                        <strong>iDEAL</strong>, <strong>PayPal</strong> of{' '}
                        <strong>kaart</strong> — afhankelijk van wat Stripe voor jouw regio
                        aanbiedt.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['iDEAL', 'PayPal', 'Kaart'].map((label) => (
                          <span
                            key={label}
                            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {checkoutError && (
                      <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800 dark:border-rose-500/40 dark:bg-rose-950/40 dark:text-rose-200">
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
                          Doorgaan naar betaling
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
