import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  Layers,
  BookOpen,
  Eye,
  Trophy,
  Coins,
  Infinity as InfinityIcon,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'
import { useReward } from '../context/RewardContext'
import { getProgressUserId } from '../utils/accountProgressStorage'
import {
  getFlashcardBlocks,
  getDeckById,
  allFlashcardDecks,
  normalizeCard,
} from '../data/flashcardRegistry'
import {
  RATINGS,
  COINS_PER_RATING,
  cardKey,
  loadSrs,
  saveSrs,
  isDue,
  applyRating,
} from '../utils/flashcardSrs'

const ALL_DECK_ID = '__all__'

/* Tailwind-klassen per beoordelingskleur (statisch zodat Tailwind ze meebuildt). */
const RATING_BTN = {
  red: 'bg-red-500 hover:bg-red-600 text-white',
  orange: 'bg-orange-500 hover:bg-orange-600 text-white',
  amber: 'bg-amber-500 hover:bg-amber-600 text-white',
  lime: 'bg-lime-500 hover:bg-lime-600 text-white',
  emerald: 'bg-emerald-500 hover:bg-emerald-600 text-white',
}

/* ─── Cloze-weergave ─────────────────────────────────────────────── */
function ClozeContent({ segments, revealed }) {
  return (
    <span className="leading-relaxed">
      {segments.map((seg, i) => {
        if (seg.type === 'text') return <span key={i}>{seg.value}</span>
        if (revealed) {
          return (
            <span
              key={i}
              className="font-bold text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-500/15 rounded px-1"
            >
              {seg.answer}
            </span>
          )
        }
        return (
          <span
            key={i}
            className="font-semibold text-accent-600 dark:text-accent-300 bg-accent-50 dark:bg-accent-500/15 rounded px-2 align-middle"
          >
            {seg.hint ? `[${seg.hint}]` : '[ ... ]'}
          </span>
        )
      })}
    </span>
  )
}

/* ─── Studie-viewer met spaced repetition ─────────────────────────── */
function StudyView({ session, userId, onExit }) {
  const { awardCoins } = useReward()
  const items = session.items // [{ deckId, lmeName, card(normalized), raw }]

  // SRS-status (lokale kopie die we naar storage schrijven).
  const srsRef = useRef(loadSrs(userId))

  // Beginvolgorde: kaarten die "due" zijn eerst, daarna de rest.
  const buildInitialQueue = useCallback(() => {
    const now = Date.now()
    const due = []
    const later = []
    items.forEach((it, i) => {
      if (isDue(srsRef.current, cardKey(it.deckId, it.card.id), now)) due.push(i)
      else later.push(i)
    })
    return [...due, ...later]
  }, [items])

  const [queue, setQueue] = useState(buildInitialQueue)
  const [revealed, setRevealed] = useState(false)
  const [doneIds, setDoneIds] = useState(() => new Set())
  const [stats, setStats] = useState({ reviewed: 0, coins: 0 })

  const restart = useCallback(() => {
    setRevealed(false)
    setDoneIds(new Set())
    setStats({ reviewed: 0, coins: 0 })
    setQueue(buildInitialQueue())
  }, [buildInitialQueue])

  const currentIndex = queue[0]
  const item = currentIndex != null ? items[currentIndex] : null

  const rate = useCallback(
    (rating) => {
      if (currentIndex == null) return
      const it = items[currentIndex]
      const key = cardKey(it.deckId, it.card.id)
      const { srs, sessionGap } = applyRating(srsRef.current, key, rating)
      srsRef.current = srs
      saveSrs(userId, srs)

      awardCoins(COINS_PER_RATING, 'Flashcard beoordeeld')

      setStats((s) => ({ reviewed: s.reviewed + 1, coins: s.coins + COINS_PER_RATING }))
      setRevealed(false)

      setQueue((q) => {
        const rest = q.slice(1)
        if (sessionGap == null) {
          setDoneIds((prev) => {
            const next = new Set(prev)
            next.add(currentIndex)
            return next
          })
          return rest
        }
        const pos = Math.min(sessionGap, rest.length)
        const copy = [...rest]
        copy.splice(pos, 0, currentIndex)
        return copy
      })
    },
    [currentIndex, items, userId, awardCoins]
  )

  // Sneltoetsen: spatie/enter = onthullen, 1-5 = beoordelen.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setRevealed((r) => !r)
      } else if (revealed && e.key >= '1' && e.key <= '5') {
        rate(parseInt(e.key, 10))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [revealed, rate])

  const total = items.length
  const done = doneIds.size
  const progress = total ? (done / total) * 100 : 0

  /* Sessie afgerond */
  if (!item) {
    return (
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/70 shadow-soft-lg p-10"
        >
          <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Sessie afgerond!</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Je hebt {stats.reviewed} beoordeling{stats.reviewed === 1 ? '' : 'en'} gedaan en{' '}
            <span className="inline-flex items-center gap-1 font-semibold text-amber-500">
              <Coins className="w-4 h-4" /> {stats.coins}
            </span>{' '}
            coins verdiend.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-sm"
            >
              <RotateCcw className="w-5 h-5" /> Opnieuw
            </button>
            <button
              type="button"
              onClick={onExit}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" /> Alle decks
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  const card = item.card
  const meta = card.meta || {}
  const tags = (meta.tags || []).filter((t) => !['cloze', 'front_back'].includes(t)).slice(0, 4)

  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Kopbalk */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Alle decks
        </button>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500">
          <Coins className="w-4 h-4" /> +{stats.coins}
        </span>
      </div>

      {/* Titel + voortgang */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{session.title}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">{session.subtitle}</p>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <div className="h-2 flex-1 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0">
          {done} / {total} geleerd
        </span>
      </div>

      {/* Kaart */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentIndex}-${queue.length}-${revealed}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.18 }}
          onClick={() => setRevealed((r) => !r)}
          className="cursor-pointer select-none rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/70 shadow-soft-lg p-8 min-h-[300px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300 text-xs font-semibold uppercase tracking-wide">
              {card.kind === 'cloze' ? 'Cloze' : 'Vraag / Antwoord'}
            </span>
            {session.showSource ? (
              <span className="text-xs text-slate-400 dark:text-slate-500 truncate max-w-[55%] text-right">
                {item.lmeName}
              </span>
            ) : meta.card_subtype ? (
              <span className="text-xs text-slate-400 dark:text-slate-500">{meta.card_subtype}</span>
            ) : null}
          </div>

          <div className="flex-1 flex items-center">
            <div className="text-xl text-slate-800 dark:text-slate-100 w-full">
              {card.kind === 'cloze' ? (
                <ClozeContent segments={card.segments} revealed={revealed} />
              ) : !revealed ? (
                <p className="font-semibold leading-relaxed">{card.front}</p>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm font-medium text-slate-400 dark:text-slate-500">{card.front}</p>
                  <p className="font-semibold text-primary-700 dark:text-primary-300 leading-relaxed">{card.back}</p>
                </div>
              )}
            </div>
          </div>

          {revealed && card.extra ? (
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/70 text-sm text-slate-500 dark:text-slate-400">
              {card.extra}
            </div>
          ) : null}

          <div className="mt-5 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 text-[11px]"
                >
                  {t}
                </span>
              ))}
            </div>
            {!revealed ? (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                <Eye className="w-3.5 h-3.5" /> Tik om te onthullen
              </span>
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Beoordeling 1-5 of onthul-knop */}
      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-sm"
        >
          <Eye className="w-5 h-5" /> Toon antwoord
        </button>
      ) : (
        <div className="mt-6">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-2.5">
            Hoe goed wist je het? (elke keuze = +{COINS_PER_RATING} coins)
          </p>
          <div className="grid grid-cols-5 gap-2">
            {RATINGS.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => rate(r.value)}
                title={`${r.value} — ${r.hint}`}
                className={`flex flex-col items-center justify-center gap-0.5 rounded-xl py-3 px-1 font-bold transition-colors shadow-sm ${RATING_BTN[r.color]}`}
              >
                <span className="text-lg leading-none">{r.value}</span>
                <span className="text-[11px] font-medium leading-tight">{r.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
        Sneltoetsen: spatie = onthullen · 1-5 = beoordelen
      </p>
    </div>
  )
}

/* ─── Deck-overzicht ─────────────────────────────────────────────── */
function DeckBrowser({ blocks, totalCards, onSelect }) {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3">Flashcards</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Actieve recall met spaced repetition: beoordeel elke kaart 1-5 en moeilijke kaarten komen
          sneller terug. Elke beoordeling levert {COINS_PER_RATING} coins op.
        </p>
      </div>

      {/* Alles oefenen */}
      {totalCards > 0 ? (
        <button
          type="button"
          onClick={() => onSelect(ALL_DECK_ID)}
          className="group w-full mb-10 text-left rounded-2xl border border-primary-200 dark:border-primary-500/40 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-500/10 dark:to-accent-500/10 p-6 hover:shadow-soft transition-all"
        >
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-2xl bg-primary-500 text-white shrink-0">
              <InfinityIcon className="w-6 h-6" />
            </span>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                Alles oefenen
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Alle {totalCards} kaarten uit elke LME door elkaar, met spaced repetition.
              </p>
            </div>
          </div>
        </button>
      ) : null}

      {blocks.length === 0 ? (
        <div className="text-center text-slate-500 dark:text-slate-400 py-20">
          Er zijn nog geen flashcard-decks beschikbaar.
        </div>
      ) : (
        blocks.map((block) => (
          <div key={block.name} className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-6 h-6 text-primary-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{block.name}</h2>
            </div>
            {block.weeks.map((week) => (
              <div key={week.name} className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-3">
                  {week.name}
                </h3>
                {week.cases.map((c) => (
                  <div key={c.name} className="mb-5">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2.5">
                      <BookOpen className="w-4 h-4" /> {c.name}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {c.decks.map((deck) => (
                        <button
                          key={deck.lmeId}
                          type="button"
                          onClick={() => onSelect(deck.lmeId)}
                          className="group text-left rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-5 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-soft transition-all"
                        >
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <span className="p-2 rounded-xl bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-300">
                              <Layers className="w-5 h-5" />
                            </span>
                            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                              {(deck.cards || []).length} kaarten
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                            {deck.lmeName}
                          </h4>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  )
}

/* ─── Pagina ─────────────────────────────────────────────────────── */
export default function FlashcardsPage() {
  const { user, loading } = useAuth()
  const userId = getProgressUserId(user, loading)
  const blocks = useMemo(() => getFlashcardBlocks(), [])
  const totalCards = useMemo(
    () => allFlashcardDecks.reduce((n, d) => n + (d.cards?.length || 0), 0),
    []
  )
  const [selectedId, setSelectedId] = useState(null)

  const session = useMemo(() => {
    if (!selectedId) return null
    if (selectedId === ALL_DECK_ID) {
      const items = allFlashcardDecks.flatMap((d) =>
        (d.cards || []).map((raw) => ({
          deckId: d.lmeId,
          lmeName: d.lmeName,
          card: normalizeCard(raw),
        }))
      )
      return { title: 'Alles oefenen', subtitle: `${items.length} kaarten uit alle LME's`, items, showSource: true }
    }
    const deck = getDeckById(selectedId)
    if (!deck) return null
    const items = (deck.cards || []).map((raw) => ({
      deckId: deck.lmeId,
      lmeName: deck.lmeName,
      card: normalizeCard(raw),
    }))
    return { title: deck.lmeName, subtitle: `${deck.week} · ${deck.case}`, items, showSource: false }
  }, [selectedId])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [selectedId])

  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20">
        {session ? (
          <StudyView
            key={selectedId}
            session={session}
            userId={userId}
            onExit={() => setSelectedId(null)}
          />
        ) : (
          <DeckBrowser blocks={blocks} totalCards={totalCards} onSelect={setSelectedId} />
        )}
      </main>
    </>
  )
}
