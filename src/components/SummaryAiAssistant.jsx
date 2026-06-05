import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Lock, Sparkles, Send, Loader2, X, Highlighter } from 'lucide-react'
import { fetchSummaryChatCompletion, parseReferences, normalizeAiDisplayText } from '../utils/practiceExamAi'
import { useAuth } from '../context/AuthContext'
import { getProgressUserId } from '../utils/accountProgressStorage'
import { useSummaryHighlights } from '../hooks/useSummaryHighlights'
import { HIGHLIGHT_COLORS, resolveHighlightRange, supportsCssCustomHighlight } from '../utils/summaryHighlightDom'

function cleanDisplayText(displayText, hasRefs) {
  if (!displayText) return displayText
  let s = displayText.trim()
  if (!hasRefs) return s
  s = s.replace(/\s*,?\s*Zie\s*$/i, '')
  s = s.replace(/\s+\.\s*$/, '.')
  return s.trim()
}

function AiText({ text }) {
  const normalized = normalizeAiDisplayText(text)
  let { displayText, refs } = parseReferences(normalized)
  displayText = cleanDisplayText(displayText, refs.length > 0)

  return (
    <div className="text-sm leading-relaxed">
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

export default function SummaryAiAssistant({ lmeId, lmeName, hasPaidAccess, children }) {
  const { user, loading: authLoading } = useAuth()
  const progressUserId = getProgressUserId(user, authLoading)
  const containerRef = useRef(null)
  const chatRef = useRef(null)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)
  const popupRef = useRef(null)
  const threadRef = useRef([])
  const inFlightRef = useRef(false)
  const selectionRangeRef = useRef(null)
  const selectionTimerRef = useRef(null)

  const { highlights, addHighlight, removeHighlight } = useSummaryHighlights({
    containerRef,
    lmeId,
    userId: progressUserId,
  })
  const highlightsRef = useRef(highlights)
  useEffect(() => {
    highlightsRef.current = highlights
  }, [highlights])

  const [popup, setPopup] = useState(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [thread, setThread] = useState([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => { threadRef.current = thread }, [thread])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [thread, sending])

  // Text selection popup (markering + optioneel AI)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const showSelectPopup = (range, text) => {
      const rect = range.getBoundingClientRect()
      if (!rect.width && !rect.height) return

      selectionRangeRef.current = range.cloneRange()
      setPopup({
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
        text,
        mode: 'select',
      })
    }

    const onSelectionChange = () => {
      if (selectionTimerRef.current) clearTimeout(selectionTimerRef.current)
      selectionTimerRef.current = setTimeout(() => {
        selectionTimerRef.current = null
        const sel = window.getSelection()
        if (!sel || sel.isCollapsed || sel.rangeCount === 0) return

        const range = sel.getRangeAt(0)
        if (!container.contains(range.commonAncestorContainer)) return
        if (chatRef.current?.contains(range.commonAncestorContainer)) return

        const anchor = range.commonAncestorContainer
        const insideMark =
          !supportsCssCustomHighlight() &&
          (anchor.nodeType === Node.ELEMENT_NODE
            ? anchor.closest('mark[data-highlight-id]')
            : anchor.parentElement?.closest('mark[data-highlight-id]')) != null
        if (insideMark) return

        const text = sel.toString().trim()
        if (text.length < 2 || text.length > 2000) return
        showSelectPopup(range, text)
      }, 120)
    }

    const onPointerDown = (e) => {
      if (popupRef.current?.contains(e.target)) return
      if (selectionTimerRef.current) {
        clearTimeout(selectionTimerRef.current)
        selectionTimerRef.current = null
      }
      setPopup(null)
      selectionRangeRef.current = null
    }

    const findHighlightAtPoint = (x, y) => {
      for (const highlight of highlightsRef.current) {
        const range = resolveHighlightRange(container, highlight)
        if (!range) continue
        for (const rect of range.getClientRects()) {
          if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            return highlight
          }
        }
      }
      return null
    }

    const onContentClick = (e) => {
      if (chatRef.current?.contains(e.target)) return

      if (!supportsCssCustomHighlight()) {
        const mark = e.target.closest?.('mark[data-highlight-id]')
        if (!mark || !container.contains(mark)) return
        e.preventDefault()
        e.stopPropagation()
        const rect = mark.getBoundingClientRect()
        setPopup({
          x: rect.left + rect.width / 2,
          y: rect.top - 10,
          mode: 'remove',
          highlightId: mark.dataset.highlightId,
          text: mark.textContent?.trim() || '',
        })
        selectionRangeRef.current = null
        window.getSelection()?.removeAllRanges()
        return
      }

      const hit = findHighlightAtPoint(e.clientX, e.clientY)
      if (!hit) return
      e.preventDefault()
      setPopup({
        x: e.clientX,
        y: e.clientY - 10,
        mode: 'remove',
        highlightId: hit.id,
        text: hit.text || '',
      })
      selectionRangeRef.current = null
      window.getSelection()?.removeAllRanges()
    }

    document.addEventListener('selectionchange', onSelectionChange)
    document.addEventListener('mousedown', onPointerDown)
    container.addEventListener('click', onContentClick)

    return () => {
      if (selectionTimerRef.current) clearTimeout(selectionTimerRef.current)
      document.removeEventListener('selectionchange', onSelectionChange)
      document.removeEventListener('mousedown', onPointerDown)
      container.removeEventListener('click', onContentClick)
    }
  }, [])

  const openChatWithQuestion = useCallback((question) => {
    setChatOpen(true)
    const userMsg = { role: 'user', content: question }
    const nextThread = [...threadRef.current, userMsg]
    threadRef.current = nextThread
    setThread(nextThread)
    setInput('')
    setPopup(null)
    window.getSelection()?.removeAllRanges()

    setTimeout(() => chatRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)

    if (inFlightRef.current) return
    inFlightRef.current = true
    setSending(true)
    fetchSummaryChatCompletion(lmeId, lmeName, nextThread)
      .then((reply) => {
        setThread((prev) => {
          const merged = [...prev, { role: 'assistant', content: reply }]
          threadRef.current = merged
          return merged
        })
      })
      .catch((e) => {
        setThread((prev) => {
          const merged = [...prev, { role: 'assistant', content: `Fout: ${e?.message || 'Geen verbinding.'}` }]
          threadRef.current = merged
          return merged
        })
      })
      .finally(() => {
        setSending(false)
        inFlightRef.current = false
        setTimeout(() => inputRef.current?.focus(), 100)
      })
  }, [lmeId, lmeName])

  const handleSend = useCallback(() => {
    const text = input.trim()
    if (!text || sending || inFlightRef.current) return
    openChatWithQuestion(text)
  }, [input, sending, openChatWithQuestion])

  const handleSelectionAsk = useCallback(() => {
    if (!popup?.text) return
    openChatWithQuestion(`Ik lees de samenvatting en begrijp het volgende stuk niet goed:\n\n"${popup.text}"\n\nKun je dit uitleggen?`)
  }, [popup, openChatWithQuestion])

  const handleHighlight = useCallback(
    (colorId) => {
      const range = selectionRangeRef.current
      if (!range) return
      addHighlight(range, colorId)
      setPopup(null)
      selectionRangeRef.current = null
      window.getSelection()?.removeAllRanges()
    },
    [addHighlight]
  )

  const handleRemoveHighlight = useCallback(() => {
    if (!popup?.highlightId) return
    removeHighlight(popup.highlightId)
    setPopup(null)
  }, [popup, removeHighlight])

  return (
    <div ref={containerRef} className="relative">
      {children}

      {/* Text selection / highlight popup */}
      {popup && (
        <div
          ref={popupRef}
          className="fixed z-[100] pointer-events-auto"
          style={{
            left: `${popup.x}px`,
            top: `${popup.y}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-xl ring-1 ring-black/10 dark:ring-white/10 overflow-hidden">
            {popup.mode === 'remove' ? (
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleRemoveHighlight}
                className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium hover:bg-slate-800 dark:hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                <X className="w-3.5 h-3.5" />
                Markering verwijderen
              </button>
            ) : (
              <div className="flex items-stretch divide-x divide-slate-700/60 dark:divide-slate-300/40">
                <div className="flex items-center gap-1.5 px-2.5 py-2">
                  <Highlighter className="w-3.5 h-3.5 shrink-0 opacity-80" aria-hidden />
                  {HIGHLIGHT_COLORS.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleHighlight(color.id)}
                      className="h-7 w-7 rounded-lg border-2 border-white/30 dark:border-slate-900/20 transition-transform hover:scale-105 active:scale-95"
                      style={{
                        backgroundColor:
                          color.id === 'yellow'
                            ? '#fde68a'
                            : color.id === 'green'
                              ? '#a7f3d0'
                              : color.id === 'pink'
                                ? '#fbcfe8'
                                : '#bae6fd',
                      }}
                      title={`Markeer ${color.label.toLowerCase()}`}
                      aria-label={`Markeer ${color.label.toLowerCase()}`}
                    />
                  ))}
                </div>
                {hasPaidAccess ? (
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handleSelectionAsk}
                    className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium hover:bg-slate-800 dark:hover:bg-white/90 transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Vraag AI
                  </button>
                ) : null}
              </div>
            )}
          </div>
          <div className="w-3 h-3 bg-slate-900 dark:bg-slate-100 rotate-45 mx-auto -mt-1.5" />
        </div>
      )}

      {/* Bottom CTA / Inline chat */}
      <div ref={chatRef} className="mt-10 max-w-3xl mx-auto">
        {!hasPaidAccess ? (
          <Link
            to="/billing"
            className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 text-slate-400 dark:text-slate-500 transition-all"
          >
            <Lock className="w-5 h-5" />
            <span className="font-medium">Stel een vraag over deze samenvatting (Premium)</span>
          </Link>
        ) : !chatOpen ? (
          <button
            onClick={() => {
              setChatOpen(true)
              setTimeout(() => {
                inputRef.current?.focus()
                chatRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }, 150)
            }}
            className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-2xl border-2 border-dashed border-primary-300 dark:border-primary-600/50 bg-primary-50/50 dark:bg-primary-500/5 text-primary-700 dark:text-primary-400 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-100/60 dark:hover:bg-primary-500/10 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Begrijp je iets niet? Stel een vraag over deze samenvatting</span>
          </button>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 px-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                AI Assistent
              </span>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Sluiten"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="rounded-2xl bg-slate-50/80 dark:bg-slate-800/35 overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/60"
              >
                <div className="max-h-96 overflow-y-auto px-4 py-4 space-y-3">
                  {thread.length === 0 && !sending && (
                    <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                      Stel een vraag over de samenvatting <span className="font-medium text-slate-600 dark:text-slate-400">{lmeName}</span>.
                    </p>
                  )}
                  {thread.map((m, idx) =>
                    m.role === 'user' ? (
                      <div key={idx} className="flex justify-end">
                        <div className="max-w-[88%] rounded-2xl rounded-br-md bg-white dark:bg-slate-700/90 text-slate-800 dark:text-slate-100 px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm ring-1 ring-slate-200/80 dark:ring-slate-600/50 whitespace-pre-wrap">
                          {m.content}
                        </div>
                      </div>
                    ) : (
                      <div
                        key={idx}
                        className="rounded-xl bg-white/90 dark:bg-slate-900/50 px-3.5 py-3 text-[13px] ring-1 ring-slate-200/50 dark:ring-slate-600/40"
                      >
                        <AiText text={m.content} />
                      </div>
                    )
                  )}
                  {sending && (
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs py-1">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Bezig...
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                <div className="flex gap-2 px-3 py-3 bg-white/70 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-700/50">
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
                    placeholder="Stel een vraag..."
                    rows={1}
                    disabled={sending}
                    className="flex-1 min-h-[38px] max-h-28 resize-y rounded-xl border-0 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-[13px] px-3.5 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-500/30 dark:focus:ring-primary-400/25"
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    disabled={sending || !input.trim()}
                    className="shrink-0 self-end h-9 w-9 flex items-center justify-center rounded-xl bg-primary-600 dark:bg-primary-600 text-white hover:bg-primary-700 dark:hover:bg-primary-500 disabled:opacity-40 disabled:hover:bg-primary-600 transition-colors"
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
    </div>
  )
}
