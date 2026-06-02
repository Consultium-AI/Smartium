import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, MessageSquare, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { submitFeedback } from '../lib/feedbackApi'

const CATEGORIES = [
  { id: 'bug', label: 'Bug / fout' },
  { id: 'idea', label: 'Idee / verbetering' },
  { id: 'other', label: 'Overig' },
]

export default function FeedbackButton() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [category, setCategory] = useState('other')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const openModal = () => {
    setError('')
    setStatus('idle')
    setOpen(true)
  }

  const closeModal = () => {
    if (status === 'sending') return
    setOpen(false)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const trimmed = message.trim()
    if (trimmed.length < 10) {
      setError('Schrijf minimaal 10 tekens.')
      return
    }
    setError('')
    setStatus('sending')
    try {
      await submitFeedback({
        message: trimmed,
        category,
        page: `${location.pathname}${location.search}`,
        userEmail: email.trim() || undefined,
      })
      setStatus('sent')
      setMessage('')
      setTimeout(() => {
        setOpen(false)
        setStatus('idle')
      }, 1400)
    } catch (err) {
      setStatus('idle')
      setError(err instanceof Error ? err.message : 'Versturen mislukt.')
    }
  }

  if (typeof document === 'undefined') return null

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="fixed bottom-5 left-5 z-[9990] flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-sm transition hover:border-navy-300 hover:text-navy-900 dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
        aria-label="Feedback geven"
      >
        <MessageSquare className="h-4 w-4 shrink-0 text-navy-600 dark:text-sky-400" aria-hidden />
        Feedback
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[10000] flex items-end justify-center p-4 sm:items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"
                aria-label="Sluiten"
                onClick={closeModal}
              />
              <motion.div
                role="dialog"
                aria-labelledby="feedback-title"
                aria-modal="true"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h2 id="feedback-title" className="text-lg font-bold text-slate-900 dark:text-white">
                      Feedback
                    </h2>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                      Bug, idee of vraag? We lezen alles.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                    aria-label="Sluit feedback"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {status === 'sent' ? (
                  <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
                    Bedankt! Je feedback is verstuurd.
                  </p>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCategory(c.id)}
                          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                            category === c.id
                              ? 'bg-navy-700 text-white dark:bg-sky-600'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>

                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      maxLength={2000}
                      required
                      placeholder="Beschrijf je feedback..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none ring-navy-500/30 focus:border-navy-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-mail (optioneel, voor terugkoppeling)"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-500/30 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                    />

                    {error && (
                      <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:opacity-60 dark:bg-sky-600 dark:hover:bg-sky-500"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Versturen…
                        </>
                      ) : (
                        'Versturen'
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
