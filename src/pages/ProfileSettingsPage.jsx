import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CalendarClock, CreditCard, Loader2, Lock, Save, User, X } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'
import { useAuth } from '../context/AuthContext'
import { useAccess } from '../hooks/useAccess'
import { DEFAULT_PFP_OPTIONS, DEFAULT_PFP_URL, normalizePfpUrl } from '../constants/defaultPfps'

const WEEK_MS = 7 * 24 * 60 * 60 * 1000
const DAY_MS = 24 * 60 * 60 * 1000

function profileSettingsErrorMessage(err) {
  const code = err && typeof err === 'object' && 'code' in err ? String(err.code) : ''
  const map = {
    'auth/invalid-profile-attribute': 'Profiel kon niet worden opgeslagen. Probeer opnieuw.',
  }
  return map[code] || err?.message || 'Opslaan mislukt. Probeer opnieuw.'
}

export default function ProfileSettingsPage() {
  const { user, loading, updateUserProfile } = useAuth()
  const { hasAccess, plan, paidUntil, subscriptionStopped, stopSubscription } = useAccess()
  const [displayName, setDisplayName] = useState('')
  const [photoURL, setPhotoURL] = useState(DEFAULT_PFP_URL)
  const [saving, setSaving] = useState(false)
  const [stoppingSubscription, setStoppingSubscription] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)
  const canUsePremiumPfps = hasAccess || plan === 'admin' || plan === 'vip'

  useEffect(() => {
    setDisplayName(user?.displayName || '')
  }, [user?.displayName])

  useEffect(() => {
    setPhotoURL(normalizePfpUrl(user?.photoURL || DEFAULT_PFP_URL))
  }, [user?.photoURL])

  useEffect(() => {
    if (!canUsePremiumPfps && photoURL !== DEFAULT_PFP_URL) {
      setPhotoURL(DEFAULT_PFP_URL)
    }
  }, [canUsePremiumPfps, photoURL])

  const onSave = async (e) => {
    e.preventDefault()
    setError('')
    setSaved(false)
    try {
      const currentDisplayName = user?.displayName?.trim() || ''
      const nextDisplayName = displayName?.trim() || ''
      const currentPhotoURL = normalizePfpUrl(user?.photoURL || DEFAULT_PFP_URL)
      const selectedPhotoURL = normalizePfpUrl(photoURL || DEFAULT_PFP_URL)
      const nextPhotoURL = canUsePremiumPfps ? selectedPhotoURL : DEFAULT_PFP_URL

      // Niets gewijzigd: sla direct "opgeslagen" terug zonder loading-state.
      if (nextDisplayName === currentDisplayName && nextPhotoURL === currentPhotoURL) {
        setSaved(true)
        return
      }

      setSaving(true)
      await updateUserProfile({
        displayName: nextDisplayName,
        photoURL: nextPhotoURL,
      })
      setSaved(true)
    } catch (err) {
      setError(profileSettingsErrorMessage(err))
    } finally {
      setSaving(false)
    }
  }

  const isComplimentaryUnlimited = plan === 'admin' || plan === 'vip'
  const isPaidPlan = plan === 'monthly' || plan === 'yearly'
  const paidUntilMs = Number(paidUntil) || 0
  const now = Date.now()
  const remainingMs = paidUntilMs - now
  const daysLeft = Math.ceil(remainingMs / DAY_MS)
  const endDateText = paidUntilMs
    ? new Intl.DateTimeFormat('nl-NL', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(new Date(paidUntilMs))
    : '—'
  const shouldShowPaymentRequest = isPaidPlan && paidUntilMs > now && remainingMs <= WEEK_MS
  const isExpired = isPaidPlan && paidUntilMs > 0 && paidUntilMs <= now
  const planLabel =
    plan === 'monthly'
      ? 'Maandelijks'
      : plan === 'yearly'
        ? 'Jaarlijks'
        : plan === 'admin'
          ? 'Admin'
          : plan === 'vip'
            ? 'VIP'
            : 'Gratis'
  const onStopSubscription = async () => {
    if (!user?.uid || stoppingSubscription || subscriptionStopped) return
    const confirmStop = window.confirm(
      `Weet je het zeker?\n\nAls je je abonnement stopt, verlies je toegang ${isExpired ? 'direct' : `na ${endDateText}`}.`
    )
    if (!confirmStop) return

    setError('')
    setSaved(false)
    setStoppingSubscription(true)
    try {
      await stopSubscription()
      setSaved(true)
    } catch (err) {
      setError(profileSettingsErrorMessage(err))
    } finally {
      setStoppingSubscription(false)
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

  if (!user) {
    return <Navigate to={`/login?redirect=${encodeURIComponent('/settings/profile')}`} replace />
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 px-4 pb-16 pt-24">
        <section className="mx-auto w-full max-w-2xl">
          <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-soft dark:border-slate-700/60 dark:bg-[#121826]/90">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-300">
                <User className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-navy-900 dark:text-white">Profile Settings</h1>
                <p className="text-sm text-navy-500 dark:text-slate-400">Beheer je naam en profielfoto.</p>
              </div>
            </div>

            <form onSubmit={onSave} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">
                  E-mail
                </label>
                <input
                  id="email"
                  value={user.email || ''}
                  disabled
                  className="w-full rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2.5 text-sm text-navy-500 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="displayName" className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">
                  Naam
                </label>
                <input
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Jouw naam"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-navy-800 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <p className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">Profielfoto</p>
                <div className="flex items-center gap-4">
                  <img
                    src={photoURL || DEFAULT_PFP_URL}
                    alt="Profielfoto preview"
                    className="h-24 w-24 rounded-full border border-slate-200 object-cover dark:border-slate-600"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = DEFAULT_PFP_URL
                    }}
                  />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-6">
                  {DEFAULT_PFP_OPTIONS.map((option) => {
                    const isActive = option === (photoURL || DEFAULT_PFP_URL)
                    const isPremiumPfp = option !== DEFAULT_PFP_URL
                    const isLocked = isPremiumPfp && !canUsePremiumPfps
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setPhotoURL(option)}
                        disabled={isLocked}
                        className={`h-20 w-20 appearance-none overflow-hidden rounded-full border-2 p-0.5 transition ${
                          isActive
                            ? 'border-primary-500'
                            : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                        } ${isLocked ? 'cursor-not-allowed opacity-55' : ''}`}
                        aria-label="Kies profielfoto"
                      >
                        <span className="relative block h-full w-full rounded-full">
                          <img
                            src={option}
                            alt=""
                            className="h-full w-full rounded-full object-cover"
                          />
                          {isLocked && (
                            <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/45 text-white">
                              <Lock className="h-4 w-4" strokeWidth={2.4} />
                            </span>
                          )}
                        </span>
                      </button>
                    )
                  })}
                </div>
                {!canUsePremiumPfps && (
                  <p className="mt-2 text-xs text-navy-500 dark:text-slate-400">
                    Alleen de default profielfoto is gratis. Alle andere profielfoto&apos;s zijn premium.
                  </p>
                )}
              </div>

              {error && <p className="text-sm font-medium text-rose-600 dark:text-rose-400">{error}</p>}
              {saved && <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Profiel opgeslagen.</p>}

              <button
                type="submit"
                disabled={saving}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-primary-600 dark:hover:bg-primary-500"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} /> : <Save className="h-4 w-4" strokeWidth={2} />}
                Opslaan
              </button>
            </form>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/65 p-5 dark:border-slate-700/60 dark:bg-slate-900/60">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-300">
                  <CreditCard className="h-4.5 w-4.5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-navy-900 dark:text-white">Billing & subscriptie</h2>
                  <p className="text-xs text-navy-500 dark:text-slate-400">Beheer je plan, einddatum en betalingsverzoeken.</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-700 dark:bg-slate-900/70">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Plan</p>
                  <p className="mt-1 text-sm font-semibold text-navy-900 dark:text-slate-100">{planLabel}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-700 dark:bg-slate-900/70">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Einddatum toegang</p>
                  <p className="mt-1 text-sm font-semibold text-navy-900 dark:text-slate-100">
                    {isComplimentaryUnlimited ? 'Onbeperkt' : endDateText}
                  </p>
                </div>
              </div>

              {plan === 'admin' && (
                <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-500/35 dark:bg-emerald-950/30 dark:text-emerald-300">
                  Admin-account: altijd toegang.
                </p>
              )}

              {plan === 'vip' && (
                <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-500/35 dark:bg-emerald-950/30 dark:text-emerald-300">
                  VIP-account: onbeperkte gratis toegang.
                </p>
              )}

              {!isComplimentaryUnlimited && isExpired && (
                <p className="mt-3 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 dark:border-rose-500/35 dark:bg-rose-950/30 dark:text-rose-300">
                  Je toegang is verlopen. Verleng je plan om direct weer toegang te krijgen.
                </p>
              )}

              {!isComplimentaryUnlimited && !subscriptionStopped && shouldShowPaymentRequest && (
                <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 dark:border-amber-500/35 dark:bg-amber-950/25">
                  <p className="flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
                    <CalendarClock className="h-4 w-4" strokeWidth={2} />
                    Betalingsverzoek: betaal voor {endDateText}
                  </p>
                  <p className="mt-1 text-xs text-amber-700 dark:text-amber-200/90">
                    Je toegang verloopt over {Math.max(0, daysLeft)} dag(en). Betaal op tijd om direct door te kunnen.
                  </p>
                </div>
              )}

              {!isComplimentaryUnlimited && subscriptionStopped && (
                <p className="mt-3 rounded-xl border border-slate-300 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200">
                  Abonnement gestopt. Je toegang loopt af op {isExpired ? 'direct' : endDateText}.
                </p>
              )}

              {!isComplimentaryUnlimited && (
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <Link
                    to={`/billing${isPaidPlan ? `?plan=${plan}` : ''}`}
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-800 dark:bg-primary-600 dark:hover:bg-primary-500"
                  >
                    <CreditCard className="h-4 w-4" strokeWidth={2} />
                    Subscriptie beheren
                  </Link>
                  {isPaidPlan && (
                    <button
                      type="button"
                      onClick={() => void onStopSubscription()}
                      disabled={stoppingSubscription || subscriptionStopped}
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-rose-600 px-4 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-65 dark:bg-rose-600 dark:hover:bg-rose-500"
                      title={subscriptionStopped ? 'Abonnement is al gestopt' : 'Stop je abonnement na de huidige betaalperiode'}
                    >
                      {stoppingSubscription ? (
                        <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                      ) : (
                        <X className="h-4 w-4" strokeWidth={2.5} />
                      )}
                      {subscriptionStopped ? 'Abonnement is gestopt' : 'Abonnement stoppen'}
                    </button>
                  )}
                </div>
              )}

              {!isComplimentaryUnlimited && !hasAccess && (
                <p className="mt-2 text-xs text-navy-500 dark:text-slate-400">
                  Na betaling wordt je nieuwe einddatum direct bijgewerkt in je account.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
