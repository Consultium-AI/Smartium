import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarClock, CreditCard, Loader2, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useAccess } from '../hooks/useAccess'
import { getSubscriptionRenewalState } from '../lib/subscriptionRenewal'
import { redirectToRenewalCheckout } from '../lib/billingApi'

const SESSION_DISMISS_PREFIX = 'smartium_renewal_modal_dismissed:'

function sessionDismissKey(uid) {
  return `${SESSION_DISMISS_PREFIX}${uid || ''}`
}

export default function SubscriptionRenewalModal() {
  const { user, loading: authLoading } = useAuth()
  const { plan, paidUntil, subscriptionStopped, loading: accessLoading } = useAccess()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [payLoading, setPayLoading] = useState(false)
  const [payError, setPayError] = useState('')

  const { showRenewalReminder, daysLeft, endDateText, renewalPlan } = getSubscriptionRenewalState(
    plan,
    paidUntil,
    subscriptionStopped
  )

  useEffect(() => {
    if (authLoading || accessLoading || !user?.uid) {
      setOpen(false)
      return
    }
    if (location.pathname === '/billing') {
      setOpen(false)
      return
    }
    if (!showRenewalReminder || !renewalPlan) {
      setOpen(false)
      return
    }
    try {
      if (sessionStorage.getItem(sessionDismissKey(user.uid))) {
        setOpen(false)
        return
      }
    } catch {
      /* ignore */
    }
    setOpen(true)
  }, [authLoading, accessLoading, user?.uid, showRenewalReminder, renewalPlan, location.pathname])

  const onDismiss = () => {
    if (user?.uid) {
      try {
        sessionStorage.setItem(sessionDismissKey(user.uid), '1')
      } catch {
        /* ignore */
      }
    }
    setOpen(false)
  }

  const onPay = async () => {
    if (!renewalPlan || !user || payLoading) return
    setPayError('')
    setPayLoading(true)
    try {
      const result = await redirectToRenewalCheckout(renewalPlan, user)
      if (result.error) setPayError(result.error)
    } finally {
      setPayLoading(false)
    }
  }

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="renewal-overlay"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/55 p-4 backdrop-blur-[2px] dark:bg-black/65"
          onPointerDown={(e) => {
            if (e.target === e.currentTarget) onDismiss()
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="renewal-modal-title"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-md rounded-2xl border border-amber-200/90 bg-white p-6 shadow-xl dark:border-amber-500/35 dark:bg-[#121826]"
          >
            <button
              type="button"
              onClick={onDismiss}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Sluiten"
            >
              <X className="h-4 w-4" strokeWidth={2.25} />
            </button>
            <div className="flex items-start gap-3 pr-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300">
                <CalendarClock className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <h2 id="renewal-modal-title" className="text-base font-semibold text-navy-900 dark:text-white">
                  Je abonnement loopt bijna af
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Je toegang is geldig t/m <span className="font-semibold text-navy-900 dark:text-slate-100">{endDateText}</span>
                  {daysLeft <= 7 && (
                    <span className="block mt-0.5 text-xs text-amber-800 dark:text-amber-200/90">
                      Nog {daysLeft} dag{daysLeft === 1 ? '' : 'en'} — betaal nu om zonder onderbreking door te gaan.
                    </span>
                  )}
                </p>
              </div>
            </div>
            {payError && (
              <p className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:border-rose-500/40 dark:bg-rose-950/40 dark:text-rose-300">
                {payError}
              </p>
            )}
            <div className="mt-5 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onDismiss}
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700/80"
              >
                Later
              </button>
              <button
                type="button"
                disabled={payLoading}
                onClick={() => void onPay()}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-primary-600 dark:hover:bg-primary-500"
              >
                {payLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                ) : (
                  <CreditCard className="h-4 w-4" strokeWidth={2} />
                )}
                Nu betalen & verlengen
              </button>
            </div>
            <p className="mt-3 text-center text-[11px] text-slate-500 dark:text-slate-400">Veilige betaling via Stripe · iDEAL</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
