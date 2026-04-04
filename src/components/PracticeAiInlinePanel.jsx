import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Lock, Send } from 'lucide-react'
import { parseReferences, fetchPracticeChatCompletion, normalizeAiDisplayText } from '../utils/practiceExamAi'

function cleanDisplayTextAfterRefs(displayText, hasRefs) {
  if (!displayText) return displayText
  let s = displayText.trim()
  if (!hasRefs) return s
  s = s.replace(/\s*,?\s*Zie\s*$/i, '')
  s = s.replace(/\s*Zie\s*$/i, '')
  s = s.replace(/\s+\.\s*$/, '.')
  return s.trim()
}

/**
 * Lopende tekst zonder [[refs]]; samenvatting(en) als blauwe link(s) onder de alinea.
 */
export function InlineAiText({ text, className = '' }) {
  const normalized = normalizeAiDisplayText(text)
  let { displayText, refs } = parseReferences(normalized)
  displayText = cleanDisplayTextAfterRefs(displayText, refs.length > 0)

  return (
    <div className={`text-sm leading-relaxed ${className}`}>
      {displayText ? (
        <div className="[&_p]:my-1.5 last:[&_p]:mb-0 [&_strong]:font-semibold [&_ul]:my-2 [&_ol]:my-2 [&_li]:my-0.5 [&_li]:list-disc [&_li]:ml-4 text-slate-700 dark:text-slate-300">
          <ReactMarkdown>{displayText}</ReactMarkdown>
        </div>
      ) : null}
      {refs.length > 0 && (
        <div className={displayText ? 'mt-3' : ''}>
          <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5">
            Samenvatting
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {refs.map((r, i) => (
              <Link
                key={`${r.id}-${i}`}
                to={`/summary?lme=${encodeURIComponent(r.id)}`}
                className="text-[11px] leading-snug text-primary-600 dark:text-primary-400/95 hover:text-primary-700 dark:hover:text-primary-300 border-b border-primary-500/25 hover:border-primary-500/50 pb-px transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Inline doorvragen op de oefenvragenpagina (geen redirect naar /chat).
 */
export default function PracticeAiInlinePanel({
  questionId,
  practiceContext,
  initialExplanation,
  explanationLoading,
  explanationError,
  canUseFollowUp = true,
}) {
  const [open, setOpen] = useState(false)
  const [thread, setThread] = useState([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const threadRef = useRef([])
  const inFlightRef = useRef(false)

  useEffect(() => {
    threadRef.current = thread
  }, [thread])

  useEffect(() => {
    setOpen(false)
    setThread([])
    setInput('')
    threadRef.current = []
  }, [questionId])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [thread, open, sending])

  const canChat = initialExplanation && !explanationLoading && !explanationError
  const canUseAiFollowUp = canUseFollowUp === true
  const canOpenFollowUp = canChat && canUseAiFollowUp

  const handleSend = async () => {
    const text = input.trim()
    if (!text || sending || !canOpenFollowUp || inFlightRef.current) return
    inFlightRef.current = true
    const userMessage = { role: 'user', content: text }
    setInput('')

    const nextForApi = [...threadRef.current, userMessage]
    threadRef.current = nextForApi
    setThread(nextForApi)

    setSending(true)
    try {
      const reply = await fetchPracticeChatCompletion(practiceContext, nextForApi, initialExplanation)
      setThread((prev) => {
        const merged = [...prev, { role: 'assistant', content: reply }]
        threadRef.current = merged
        return merged
      })
    } catch (e) {
      setThread((prev) => {
        const merged = [...prev, { role: 'assistant', content: `Fout: ${e?.message || 'Geen verbinding.'}` }]
        threadRef.current = merged
        return merged
      })
    } finally {
      setSending(false)
      inFlightRef.current = false
    }
  }

  return (
    <div className="mt-5">
      {!open ? (
        canUseAiFollowUp ? (
          <button
            type="button"
            onClick={() => {
              setOpen(true)
              setTimeout(() => inputRef.current?.focus(), 100)
            }}
            disabled={!canChat}
            className="text-[13px] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 disabled:opacity-40 rounded-lg px-3 py-2 bg-slate-100/80 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Stel een vervolgvraag
          </button>
        ) : (
          <div className="rounded-lg border border-amber-200/80 bg-amber-50/80 px-3 py-2 text-xs text-amber-800 dark:border-amber-500/40 dark:bg-amber-950/20 dark:text-amber-200">
            <div className="flex items-center gap-1.5 font-medium">
              <Lock className="h-3.5 w-3.5" />
              AI doorvragen is premium.
            </div>
            <Link to="/billing" className="mt-1 inline-block underline underline-offset-2">
              Upgrade voor toegang
            </Link>
          </div>
        )
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 px-0.5">
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Vervolg
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[11px] text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              Inklappen
            </button>
          </div>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-xl bg-slate-100/60 dark:bg-slate-800/35 overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/60"
            >
              <div className="max-h-72 overflow-y-auto px-3.5 py-3 space-y-2.5">
                {thread.length === 0 && !sending && (
                  <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed">
                    Stel een vervolgvraag over deze vraag.
                  </p>
                )}
                {thread.map((m, idx) =>
                  m.role === 'user' ? (
                    <div key={idx} className="flex justify-end">
                      <div className="max-w-[88%] rounded-2xl rounded-br-md bg-white dark:bg-slate-700/90 text-slate-800 dark:text-slate-100 px-3 py-2 text-[13px] leading-relaxed shadow-sm ring-1 ring-slate-200/80 dark:ring-slate-600/50 whitespace-pre-wrap">
                        {m.content}
                      </div>
                    </div>
                  ) : (
                    <div
                      key={idx}
                      className="rounded-lg bg-white/90 dark:bg-slate-900/50 px-3 py-2.5 text-[13px] ring-1 ring-slate-200/50 dark:ring-slate-600/40"
                    >
                      <InlineAiText text={m.content} className="text-slate-700 dark:text-slate-300" />
                    </div>
                  )
                )}
                {sending && (
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs py-1">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Bezig…
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              <div className="flex gap-2 px-2.5 py-2.5 bg-white/70 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-700/50">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder="Vervolgvraag…"
                  rows={1}
                  disabled={sending || !canOpenFollowUp}
                  className="flex-1 min-h-[38px] max-h-28 resize-y rounded-lg border-0 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-[13px] px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-500/30 dark:focus:ring-primary-400/25"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={sending || !input.trim() || !canOpenFollowUp}
                  className="shrink-0 self-end h-9 w-9 flex items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-600 text-white hover:bg-primary-700 dark:hover:bg-primary-500 disabled:opacity-40 disabled:hover:bg-primary-600"
                  aria-label="Verstuur"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
