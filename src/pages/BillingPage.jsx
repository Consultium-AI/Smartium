import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Check, CreditCard, Loader2, Sparkles } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { createCheckoutSession, createEmbeddedCheckoutSession, grantAccessAfterPayment } from '../lib/billingApi'
import { writeLocalAccess } from '../hooks/useAccess'
import { hasStripePublishableKey } from '../lib/stripeClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import StripeEmbeddedFrame from '../components/StripeEmbeddedFrame'

const ease = [0.25, 0.1, 0.25, 1]
const MONTHLY = 9.99
const YEARLY_PER_MONTH = 8.89
const YEARLY_TOTAL = 106.68
const DISCOUNT = Math.round((1 - YEARLY_TOTAL / (MONTHLY * 12)) * 100)

const eur = (n) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n)

export default function BillingPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const reduceMotion = useReducedMotion()
  const { user, loading } = useAuth()

  const [plan, setPlan] = useState(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState(null)
  const [embedClientSecret, setEmbedClientSecret] = useState(null)
  const [step, setStep] = useState(1)

  const status = searchParams.get('status')
  const sessionId = searchParams.get('session_id')
  const urlPlan = searchParams.get('plan')
  const embedAvailable = hasStripePublishableKey()

  useEffect(() => {
    if (loading || !user) return
    const stored = sessionStorage.getItem('smartium_billing_plan')
    const p = stored || urlPlan
    if (p === 'monthly' || p === 'yearly') {
      setPlan(p)
      setStep(2)
      if (stored) sessionStorage.removeItem('smartium_billing_plan')
    }
  }, [loading, user, urlPlan])

  useEffect(() => {
    if (!user && urlPlan) {
      setPlan(urlPlan === 'yearly' ? 'yearly' : 'monthly')
      setStep(2)
    }
  }, [urlPlan, user])

  const startCheckout = async () => {
    if (!plan) return
    if (!user) {
      try { sessionStorage.setItem('smartium_billing_plan', plan) } catch {}
      navigate(`/login?redirect=${encodeURIComponent('/billing')}`)
      return
    }
    setCheckoutError(null)
    setCheckoutLoading(true)
    try {
      if (embedAvailable) {
        const result = await createEmbeddedCheckoutSession(plan, { email: user?.email, uid: user?.uid })
        if (result.error) { setCheckoutError(result.error); return }
        setEmbedClientSecret(result.clientSecret)
        setStep(3)
        return
      }
      const result = await createCheckoutSession(plan, { email: user?.email, uid: user?.uid })
      if (result.error) { setCheckoutError(result.error); return }
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

  useEffect(() => {
    if ((status === 'success' || sessionId) && user?.uid) {
      const sid = sessionId || new URLSearchParams(window.location.search).get('session_id')
      if (sid) {
        grantAccessAfterPayment(sid, user.uid).then((res) => {
          if (res.paidUntil) {
            writeLocalAccess(user.uid, { paidUntil: res.paidUntil, plan: res.plan })
          }
        }).catch(() => {})
      }
    }
  }, [status, sessionId, user?.uid])

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
            <h1 className="font-display text-2xl font-bold text-navy-900 dark:text-white">Welkom bij Smartium</h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Je betaling is gelukt. Je hebt nu volledige toegang.
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
          className={`relative w-full ${step === 3 ? 'max-w-2xl' : 'max-w-lg'}`}
        >
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
              Betaling geannuleerd. Je kunt hieronder opnieuw een plan kiezen.
            </motion.p>
          )}

          <motion.div
            className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-soft-lg backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-black/40"
          >
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md">
                  <Sparkles className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h1 className="font-display text-xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-2xl">
                    {step === 3 ? 'Afronden' : step === 2 ? 'Bevestig je plan' : 'Kies je plan'}
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
                    <button
                      type="button"
                      onClick={() => { setPlan('monthly'); setStep(2) }}
                      className="group relative w-full rounded-2xl border-2 border-slate-200 bg-white p-5 text-left transition hover:border-primary-400 hover:shadow-md dark:border-slate-600 dark:bg-slate-950/40 dark:hover:border-primary-500"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Maandelijks</p>
                      <p className="mt-1 font-display text-3xl font-bold text-navy-900 dark:text-white">
                        {eur(MONTHLY)}<span className="text-base font-semibold text-slate-500">/maand</span>
                      </p>
                      <p className="mt-2 text-xs text-slate-500">Maandelijks opzegbaar</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setPlan('yearly'); setStep(2) }}
                      className="group relative w-full overflow-hidden rounded-2xl border-2 border-primary-400/80 bg-gradient-to-br from-primary-50/90 to-white p-5 text-left shadow-md transition hover:shadow-lg dark:border-primary-500/50 dark:from-primary-950/50 dark:to-slate-950/60"
                    >
                      <span className="absolute right-4 top-4 rounded-full bg-primary-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        {DISCOUNT}% korting
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">Jaarlijks</p>
                      <p className="mt-1 font-display text-3xl font-bold text-navy-900 dark:text-white">
                        {eur(YEARLY_PER_MONTH)}<span className="text-base font-semibold text-slate-500">/maand</span>
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{eur(YEARLY_TOTAL)} per jaar</p>
                      <p className="mt-1 text-xs text-slate-400 line-through">Was {eur(MONTHLY * 12)}/jaar</p>
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="confirm"
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? false : { opacity: 0, x: 16 }}
                    transition={{ duration: 0.35, ease }}
                    className="space-y-5"
                  >
                    <button
                      type="button"
                      onClick={() => { setStep(1); setCheckoutError(null); setEmbedClientSecret(null) }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:underline dark:text-primary-400"
                    >
                      <ArrowLeft className="h-3 w-3" /> Ander plan
                    </button>

                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Gekozen plan:{' '}
                      <strong className="text-navy-900 dark:text-white">
                        {plan === 'yearly' ? `Jaarlijks (${eur(YEARLY_TOTAL)}/jaar)` : `Maandelijks (${eur(MONTHLY)}/maand)`}
                      </strong>
                    </p>

                    {!user && (
                      <p className="rounded-lg border border-amber-200/90 bg-amber-50/90 px-3 py-2 text-sm text-amber-950 dark:border-amber-500/35 dark:bg-amber-950/35 dark:text-amber-100/95">
                        Om af te rekenen moet je{' '}
                        <Link to={`/login?redirect=${encodeURIComponent('/billing')}`} className="font-semibold underline underline-offset-2">
                          inloggen of een account aanmaken
                        </Link>.
                      </p>
                    )}

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
                        <><Loader2 className="h-5 w-5 animate-spin" /> Bezig…</>
                      ) : (
                        <><CreditCard className="h-5 w-5" /> Afrekenen via iDEAL</>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                      Veilige betaling via Stripe
                    </p>
                  </motion.div>
                )}

                {step === 3 && embedClientSecret && (
                  <motion.div
                    key="embed"
                    initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduceMotion ? false : { opacity: 0, y: 10 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="space-y-4"
                  >
                    <button
                      type="button"
                      onClick={() => { setEmbedClientSecret(null); setCheckoutError(null); setStep(2) }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:underline dark:text-primary-400"
                    >
                      <ArrowLeft className="h-3 w-3" /> Terug
                    </button>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Plan: <strong className="text-navy-900 dark:text-white">
                        {plan === 'yearly' ? `Jaarlijks (${eur(YEARLY_TOTAL)}/jaar)` : `Maandelijks (${eur(MONTHLY)}/maand)`}
                      </strong>
                    </p>
                    <StripeEmbeddedFrame clientSecret={embedClientSecret} />
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
