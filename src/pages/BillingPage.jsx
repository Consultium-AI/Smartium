import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, CreditCard, Loader2, Sparkles } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { createCheckoutSession, createEmbeddedCheckoutSession, grantAccessAfterPayment } from '../lib/billingApi'
import { grantAccess } from '../hooks/useAccess'
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

const INCLUDED = [
  'Alle samenvattingen',
  'Oefententamens met nakijking',
  'Oefenvragen per onderwerp',
  'Smartium AI Chat',
]

const FREE_INCLUDED = [
  'Beperkte toegang tot samenvattingen',
  'Beperkte toegang tot oefenvragen',
  'Blok 5: tentamen 1–2 gratis; tentamen 3–5 premium',
  'Beperkt aantal tokens voor Smartium AI Chat',
]

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
  /** E-mail uit Stripe-checkout (na betaling), voor bevestigingstekst */
  const [receiptEmail, setReceiptEmail] = useState(null)

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
      const selectedPlan = urlPlan === 'yearly' ? 'yearly' : 'monthly'
      setPlan(selectedPlan)
      setStep(2)
    }
  }, [urlPlan, user])

  useEffect(() => {
    if (!(status === 'success' || sessionId) || !user?.uid) return
    const sid = sessionId || new URLSearchParams(window.location.search).get('session_id')
    if (!sid) return

    grantAccessAfterPayment(sid, user.uid, user.email || undefined)
      .then((res) => {
        if (res.customerEmail) setReceiptEmail(res.customerEmail)
        if (res.paidUntil) {
          return grantAccess(user.uid, res.paidUntil, res.plan)
        }
      })
      .catch(() => {})
  }, [status, sessionId, user?.uid])

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
      const billingEmail = user?.email?.trim() || undefined
      const prefillCustomerEmail = Boolean(billingEmail)
      const checkoutOpts = {
        email: billingEmail,
        uid: user?.uid,
        prefillCustomerEmail,
      }
      if (embedAvailable) {
        const result = await createEmbeddedCheckoutSession(plan, checkoutOpts)
        if (result.error) { setCheckoutError(result.error); return }
        setEmbedClientSecret(result.clientSecret)
        setStep(3)
        return
      }
      const result = await createCheckoutSession(plan, checkoutOpts)
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
            className="relative w-full max-w-md rounded-2xl border border-emerald-200/90 bg-white/95 p-8 text-center shadow-soft-lg backdrop-blur-sm dark:border-emerald-500/40 dark:bg-[#111827]"
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
            {receiptEmail ? (
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Bevestiging en Stripe-betaalbewijs worden naar{' '}
                <span className="font-medium text-navy-800 dark:text-slate-200">{receiptEmail}</span> gestuurd
                (controleer ook je spammap).
              </p>
            ) : null}
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
      <main className="relative z-10 min-h-[calc(100vh-8rem)] px-4 pb-20 pt-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className={`relative w-full ${step === 1 ? 'max-w-5xl' : step === 3 ? 'max-w-2xl' : 'max-w-lg'} mx-auto`}
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

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="plans"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? false : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
              >
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
                  <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-navy-400 dark:text-slate-400 mb-5">
                    Prijzen
                  </p>
                  <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-navy-900 dark:text-slate-50 tracking-tight leading-tight mb-4">
                    Eén platform, alles inbegrepen
                  </h1>
                  <p className="text-base text-navy-500 dark:text-slate-300/90 leading-relaxed">
                    Kies het plan dat bij je past. Maandelijks opzegbaar.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.03, ease }}
                  >
                    <Link
                      to="/login"
                      className="group block h-full rounded-2xl border border-slate-200/90 bg-white/90 p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-600/60 dark:bg-[#141a24] dark:ring-1 dark:ring-white/[0.08] dark:hover:border-slate-500 dark:hover:ring-white/[0.12]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Gratis
                      </p>
                      <p className="font-display text-3xl font-bold text-navy-900 dark:text-white mb-1">
                        {eur(0)}
                        <span className="text-base font-semibold text-slate-500 dark:text-slate-400">/maand</span>
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Start direct, zonder betaling</p>

                      <ul className="space-y-2.5 mb-6">
                        {FREE_INCLUDED.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-navy-700 dark:text-slate-300">
                            <Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                        Gratis starten
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.09, ease }}
                  >
                    <button
                      type="button"
                      onClick={() => { setPlan('monthly'); setStep(2) }}
                      className="group block h-full w-full rounded-2xl border border-slate-200/90 bg-white/90 p-7 text-left shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-600/60 dark:bg-[#141a24] dark:ring-1 dark:ring-white/[0.08] dark:hover:border-slate-500 dark:hover:ring-white/[0.12]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Maandelijks
                      </p>
                      <p className="font-display text-3xl font-bold text-navy-900 dark:text-white mb-1">
                        {eur(MONTHLY)}
                        <span className="text-base font-semibold text-slate-500 dark:text-slate-400">/maand</span>
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Maandelijks opzegbaar</p>

                      <ul className="space-y-2.5 mb-6">
                        {INCLUDED.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-navy-700 dark:text-slate-300">
                            <Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                        Aan de slag
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </button>
                  </motion.div>

                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15, ease }}
                  >
                    <button
                      type="button"
                      onClick={() => { setPlan('yearly'); setStep(2) }}
                      className="group relative block h-full w-full rounded-2xl border-2 border-primary-400/70 bg-gradient-to-br from-primary-50/80 to-white p-7 text-left shadow-md transition-all hover:shadow-lg dark:border-primary-500/50 dark:from-[#111827] dark:to-[#141a24]"
                    >
                      <span className="absolute right-4 top-4 rounded-full bg-primary-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        {DISCOUNT}% korting
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300 mb-2">
                        Jaarlijks
                      </p>
                      <p className="font-display text-3xl font-bold text-navy-900 dark:text-white mb-1">
                        {eur(YEARLY_PER_MONTH)}
                        <span className="text-base font-semibold text-slate-500 dark:text-slate-400">/maand</span>
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">{eur(YEARLY_TOTAL)} per jaar</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 line-through mb-6">
                        Was {eur(MONTHLY * 12)}/jaar
                      </p>

                      <ul className="space-y-2.5 mb-6">
                        {INCLUDED.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-navy-700 dark:text-slate-300">
                            <Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                        Aan de slag
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </button>
                  </motion.div>
                </div>

                <p className="text-center text-sm text-slate-400 dark:text-slate-500">
                  Betalen via iDEAL · Veilig via Stripe
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="confirm"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? false : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-soft-lg backdrop-blur-md dark:border-slate-600/60 dark:bg-[#111827] dark:shadow-black/40"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md">
                    <Sparkles className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h1 className="font-display text-xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-2xl">
                      Bevestig je plan
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Volledige toegang tot Smartium
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => { setStep(1); setCheckoutError(null); setEmbedClientSecret(null) }}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:underline dark:text-primary-400"
                >
                  <ArrowLeft className="h-3 w-3" /> Ander plan
                </button>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  Gekozen plan:{' '}
                  <strong className="text-navy-900 dark:text-white">
                    {plan === 'yearly' ? `Jaarlijks (${eur(YEARLY_TOTAL)}/jaar)` : `Maandelijks (${eur(MONTHLY)}/maand)`}
                  </strong>
                </p>

                {!user && (
                  <p className="mt-4 rounded-lg border border-amber-200/90 bg-amber-50/90 px-3 py-2 text-sm text-amber-950 dark:border-amber-500/35 dark:bg-amber-950/35 dark:text-amber-100/95">
                    Om af te rekenen moet je{' '}
                    <Link to={`/login?redirect=${encodeURIComponent('/billing')}`} className="font-semibold underline underline-offset-2">
                      inloggen of een account aanmaken
                    </Link>.
                  </p>
                )}

                {checkoutError && (
                  <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800 dark:border-rose-500/40 dark:bg-rose-950/40 dark:text-rose-200">
                    {checkoutError}
                  </p>
                )}

                <motion.button
                  type="button"
                  disabled={checkoutLoading}
                  onClick={() => void startCheckout()}
                  whileHover={reduceMotion || checkoutLoading ? {} : { scale: 1.02 }}
                  whileTap={reduceMotion || checkoutLoading ? {} : { scale: 0.98 }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition hover:from-primary-600 hover:to-primary-700 disabled:opacity-60"
                >
                  {checkoutLoading ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Bezig…</>
                  ) : (
                    <><CreditCard className="h-5 w-5" /> Afrekenen via iDEAL</>
                  )}
                </motion.button>

                <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                  Veilige betaling via Stripe
                </p>
              </motion.div>
            )}

            {step === 3 && embedClientSecret && (
              <motion.div
                key="embed"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? false : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-soft-lg backdrop-blur-md dark:border-slate-600/60 dark:bg-[#111827] dark:shadow-black/40"
              >
                <button
                  type="button"
                  onClick={() => { setEmbedClientSecret(null); setCheckoutError(null); setStep(2) }}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:underline dark:text-primary-400"
                >
                  <ArrowLeft className="h-3 w-3" /> Terug
                </button>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  Plan:{' '}
                  <strong className="text-navy-900 dark:text-white">
                    {plan === 'yearly' ? `Jaarlijks (${eur(YEARLY_TOTAL)}/jaar)` : `Maandelijks (${eur(MONTHLY)}/maand)`}
                  </strong>
                </p>
                <div className="mt-4">
                  <StripeEmbeddedFrame clientSecret={embedClientSecret} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
