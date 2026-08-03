import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  ArrowLeft,
  RotateCcw,
  Layers,
  BookOpen,
  Eye,
  Trophy,
  Coins,
  Infinity as InfinityIcon,
  ChevronRight,
  ChevronDown,
  Search,
  GraduationCap,
  X,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'
import { useReward } from '../context/RewardContext'
import { getProgressUserId, loadFlashcardSession, loadFlashcardSessionMap, saveFlashcardSession, clearFlashcardSession } from '../utils/accountProgressStorage'
import {
  getFlashcardBlocksForBlok,
  getDeckById,
  getDecksForBlok,
  getBlokFlashcardStats,
  allFlashcardDecks,
  allDeckSessionId,
  FLASHCARD_BLOK_INDEX,
  FLASHCARD_BLOK_KEYS,
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

function isValidQueue(queue, itemCount) {
  return (
    Array.isArray(queue) &&
    queue.length > 0 &&
    queue.every((i) => Number.isInteger(i) && i >= 0 && i < itemCount)
  )
}

function restoreInProgressSession(saved, itemCount, buildInitialQueue) {
  if (!saved || saved.v !== 1 || saved.inProgress !== true || saved.itemCount !== itemCount) {
    return null
  }
  if (!isValidQueue(saved.queue, itemCount)) return null
  const doneIds = Array.isArray(saved.doneIds)
    ? saved.doneIds.filter((i) => Number.isInteger(i) && i >= 0 && i < itemCount)
    : []
  return {
    queue: saved.queue,
    doneIds: new Set(doneIds),
    stats:
      saved.stats && typeof saved.stats === 'object'
        ? { reviewed: saved.stats.reviewed || 0, coins: saved.stats.coins || 0 }
        : { reviewed: 0, coins: 0 },
  }
}

function sessionProgressFromSaved(saved, total) {
  if (!saved || typeof saved !== 'object') return null
  if (saved.inProgress) {
    const doneCount = Array.isArray(saved.doneIds) ? saved.doneIds.length : 0
    if (doneCount === 0 && !isValidQueue(saved.queue, total)) return null
    return { started: true, completed: false, doneCount, total: saved.itemCount ?? total }
  }
  if (saved.completed) {
    return {
      started: true,
      completed: true,
      doneCount: saved.doneCount ?? saved.itemCount ?? total,
      total: saved.itemCount ?? total,
    }
  }
  return null
}

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
function StudyView({ session, sessionId, userId, onExit }) {
  const { awardCoins } = useReward()
  const items = session.items // [{ deckId, lmeName, card(normalized), raw }]
  const canPersist = Boolean(userId)

  // SRS-status (lokale kopie die we naar storage schrijven).
  const srsRef = useRef(loadSrs(userId))
  const [sessionHydrated, setSessionHydrated] = useState(false)

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

  const [queue, setQueue] = useState([])
  const [revealed, setRevealed] = useState(false)
  const [doneIds, setDoneIds] = useState(() => new Set())
  const [stats, setStats] = useState({ reviewed: 0, coins: 0 })

  useEffect(() => {
    setSessionHydrated(false)
    srsRef.current = loadSrs(userId)
    const saved = canPersist ? loadFlashcardSession(userId, sessionId) : null
    const restored = restoreInProgressSession(saved, items.length, buildInitialQueue)
    if (restored) {
      setQueue(restored.queue)
      setDoneIds(restored.doneIds)
      setStats(restored.stats)
    } else {
      setQueue(buildInitialQueue())
      setDoneIds(new Set())
      setStats({ reviewed: 0, coins: 0 })
    }
    setRevealed(false)
    setSessionHydrated(true)
  }, [userId, sessionId, items, canPersist, buildInitialQueue])

  const persistSession = useCallback(
    (nextQueue, nextDoneIds, nextStats, { inProgress, completed = false } = { inProgress: true }) => {
      if (!canPersist) return
      saveFlashcardSession(userId, sessionId, {
        v: 1,
        inProgress,
        completed,
        itemCount: items.length,
        queue: nextQueue,
        doneIds: [...nextDoneIds],
        doneCount: nextDoneIds.size,
        stats: nextStats,
        updatedAt: Date.now(),
      })
    },
    [canPersist, userId, sessionId, items.length]
  )

  useEffect(() => {
    if (!sessionHydrated || !canPersist || queue.length === 0) return
    const timer = setTimeout(() => {
      persistSession(queue, doneIds, stats, { inProgress: true })
    }, 400)
    return () => clearTimeout(timer)
  }, [sessionHydrated, canPersist, queue, doneIds, stats, persistSession])

  const restart = useCallback(() => {
    if (canPersist) clearFlashcardSession(userId, sessionId)
    setRevealed(false)
    setDoneIds(new Set())
    setStats({ reviewed: 0, coins: 0 })
    setQueue(buildInitialQueue())
  }, [buildInitialQueue, canPersist, userId, sessionId])

  const currentIndex = queue[0]
  const item = currentIndex != null ? items[currentIndex] : null

  useEffect(() => {
    if (item || !sessionHydrated || !canPersist) return
    persistSession([], doneIds, stats, { inProgress: false, completed: true })
  }, [item, sessionHydrated, canPersist, doneIds, stats, persistSession])

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
    if (!sessionHydrated) return undefined
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
  }, [sessionHydrated, revealed, rate])

  if (!sessionHydrated) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">Voortgang laden…</p>
      </div>
    )
  }

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

const VALID_BLOK_KEYS = FLASHCARD_BLOK_KEYS

function DeckProgressBadge({ progress }) {
  if (!progress?.started) return null
  if (progress.completed) {
    return (
      <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
        Af · {progress.doneCount}/{progress.total}
      </span>
    )
  }
  return (
    <span className="text-[11px] font-medium text-sky-700 dark:text-sky-300">
      Hervat · {progress.doneCount}/{progress.total}
    </span>
  )
}

function DeckRow({ deck, progress, onSelect }) {
  const cardCount = (deck.cards || []).length
  return (
    <button
      type="button"
      onClick={() => onSelect(deck.lmeId)}
      className="group w-full flex items-center gap-3 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 px-4 py-3 text-left hover:border-primary-300 dark:hover:border-primary-500/40 hover:bg-primary-50/40 dark:hover:bg-primary-500/5 transition-colors"
    >
      <span className="p-2 rounded-lg bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-300 shrink-0">
        <Layers className="w-4 h-4" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-slate-900 dark:text-slate-100 truncate group-hover:text-primary-700 dark:group-hover:text-primary-300">
          {deck.lmeName}
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
          <span className="text-xs text-slate-500 dark:text-slate-400">{cardCount} kaarten</span>
          <DeckProgressBadge progress={progress} />
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 shrink-0" />
    </button>
  )
}

function BlockIndexView({ progressById }) {
  const ba1 = FLASHCARD_BLOK_INDEX.filter((b) => b.ba === 'Ba1')
  const ba2 = FLASHCARD_BLOK_INDEX.filter((b) => b.ba === 'Ba2')
  const master = FLASHCARD_BLOK_INDEX.filter((b) => b.ba === 'Master')

  const renderGroup = (title, subtitle, items) => (
    <section className="mb-10">
      <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
        <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">{title}</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((blok) => {
          const stats = getBlokFlashcardStats(blok.key)
          const allId = allDeckSessionId(blok.key)
          const progress = progressById[allId]
          return (
            <Link
              key={blok.key}
              to={blok.route}
              className="group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm hover:border-primary-400/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-500/20 shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">{blok.label}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{blok.subtitle}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {stats.deckCount} modules · {stats.cardCount} kaarten
                  </p>
                  {progress?.started ? (
                    <p className="mt-1">
                      <DeckProgressBadge progress={progress} />
                    </p>
                  ) : null}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 shrink-0" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3">Flashcards</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Kies een blok om te oefenen. Spaced repetition: beoordeel kaarten 1–5 (+{COINS_PER_RATING} coins per
          beoordeling).
        </p>
      </div>
      {renderGroup('Bachelorjaar 1', 'Blokken 4 en 5', ba1)}
      {renderGroup('Bachelorjaar 2', 'Blokken 6, 9 en 10', ba2)}
      {renderGroup('Master', 'Kindergeneeskunde & Gynaecologie, Interne Geneeskunde', master)}
    </div>
  )
}

/* ─── Deck-overzicht (per blok) ─────────────────────────────────── */
function DeckBrowser({ blocks, blokMeta, totalCards, deckCount, allSessionId, progressById, onSelect }) {
  const [query, setQuery] = useState('')
  const [openWeeks, setOpenWeeks] = useState(() => new Set(blocks.flatMap((b) => b.weeks.map((w) => w.name))))

  const normalizedQuery = query.trim().toLowerCase()

  const flatDecks = useMemo(
    () => blocks.flatMap((b) => b.weeks.flatMap((w) => w.cases.flatMap((c) => c.decks))),
    [blocks]
  )

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return []
    return flatDecks.filter((d) => d.lmeName.toLowerCase().includes(normalizedQuery))
  }, [flatDecks, normalizedQuery])

  const toggleWeek = (weekName) => {
    setOpenWeeks((prev) => {
      const next = new Set(prev)
      if (next.has(weekName)) next.delete(weekName)
      else next.add(weekName)
      return next
    })
  }

  const expandAll = () => setOpenWeeks(new Set(blocks.flatMap((b) => b.weeks.map((w) => w.name))))
  const collapseAll = () => setOpenWeeks(new Set())

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="mb-6">
        <Link
          to="/flashcards"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 mb-4"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Alle blokken
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{blokMeta?.label ?? 'Flashcards'}</h1>
        {blokMeta?.subtitle ? (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{blokMeta.subtitle}</p>
        ) : null}
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          {deckCount} modules · {totalCards} kaarten
        </p>
      </div>

      {totalCards > 0 ? (
        <button
          type="button"
          onClick={() => onSelect(allSessionId)}
          className="group w-full mb-6 text-left rounded-2xl border border-primary-200 dark:border-primary-500/40 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-500/10 dark:to-accent-500/10 p-5 hover:shadow-soft transition-all"
        >
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-2xl bg-primary-500 text-white shrink-0">
              <InfinityIcon className="w-5 h-5" />
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-300">
                Heel {blokMeta?.label ?? 'blok'} oefenen
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Alle {totalCards} kaarten uit dit blok door elkaar
              </p>
              <DeckProgressBadge progress={progressById[allSessionId]} />
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary-500 shrink-0" />
          </div>
        </button>
      ) : null}

      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek module…"
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 py-2.5 pl-10 pr-10 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            aria-label="Zoekopdracht wissen"
          >
            <X className="w-4 h-4" />
          </button>
        ) : null}
      </div>

      {normalizedQuery ? (
        <div className="space-y-2 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2">
            {searchResults.length} resultaat{searchResults.length === 1 ? '' : 'en'}
          </p>
          {searchResults.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400 py-6 text-center">Geen modules gevonden.</p>
          ) : (
            searchResults.map((deck) => (
              <DeckRow
                key={deck.lmeId}
                deck={deck}
                progress={progressById[deck.lmeId]}
                onSelect={onSelect}
              />
            ))
          )}
        </div>
      ) : (
        <>
          <div className="flex justify-end gap-2 mb-4">
            <button
              type="button"
              onClick={expandAll}
              className="text-xs font-medium text-slate-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Alles open
            </button>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <button
              type="button"
              onClick={collapseAll}
              className="text-xs font-medium text-slate-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Alles dicht
            </button>
          </div>

          {blocks.length === 0 ? (
            <div className="text-center text-slate-500 dark:text-slate-400 py-16">
              Geen flashcard-decks in dit blok.
            </div>
          ) : (
            blocks.map((block) => (
              <div key={block.name} className="mb-8">
                {blocks.length > 1 ? (
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-primary-500" />
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{block.name}</h2>
                  </div>
                ) : null}
                <div className="space-y-3">
                  {block.weeks.map((week) => {
                    const weekDeckCount = week.cases.reduce((n, c) => n + c.decks.length, 0)
                    const isOpen = openWeeks.has(week.name)
                    return (
                      <div
                        key={week.name}
                        className="rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/40 overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => toggleWeek(week.name)}
                          className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                        >
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? '' : '-rotate-90'}`}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">{week.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {weekDeckCount} module{weekDeckCount === 1 ? '' : 's'}
                            </p>
                          </div>
                        </button>
                        {isOpen ? (
                          <div className="px-3 pb-3 space-y-4 border-t border-slate-100 dark:border-slate-800/80">
                            {week.cases.map((c) => (
                              <div key={c.name} className="pt-3">
                                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2 px-1">
                                  <BookOpen className="w-3.5 h-3.5" />
                                  {c.name}
                                </p>
                                <div className="space-y-2">
                                  {c.decks.map((deck) => (
                                    <DeckRow
                                      key={deck.lmeId}
                                      deck={deck}
                                      progress={progressById[deck.lmeId]}
                                      onSelect={onSelect}
                                    />
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  )
}

/* ─── Pagina ─────────────────────────────────────────────────────── */
export default function FlashcardsPage({ forcedBlok = null }) {
  const forcedBlokKey = VALID_BLOK_KEYS.includes(forcedBlok) ? forcedBlok : null
  const blokMeta = forcedBlokKey
    ? FLASHCARD_BLOK_INDEX.find((b) => b.key === forcedBlokKey) ?? null
    : null

  const { user, loading } = useAuth()
  const userId = getProgressUserId(user, loading)
  const blocks = useMemo(
    () => (forcedBlokKey ? getFlashcardBlocksForBlok(forcedBlokKey) : []),
    [forcedBlokKey]
  )
  const scopedDecks = useMemo(() => getDecksForBlok(forcedBlokKey), [forcedBlokKey])
  const totalCards = useMemo(
    () => scopedDecks.reduce((n, d) => n + (d.cards?.length || 0), 0),
    [scopedDecks]
  )
  const deckCount = scopedDecks.length
  const allSessionId = allDeckSessionId(forcedBlokKey)

  const [selectedId, setSelectedId] = useState(null)
  const [progressVersion, setProgressVersion] = useState(0)

  // Navigatie naar een ander blok (via de navbar) moet een actieve sessie
  // altijd sluiten — anders blijft de oude deck zichtbaar omdat de route
  // wisselt maar dit component-instance en zijn state hetzelfde blijven.
  useEffect(() => {
    setSelectedId(null)
  }, [forcedBlokKey])

  useEffect(() => {
    const onCloudSynced = (event) => {
      if (!userId || userId === 'guest') return
      const syncedUid = event?.detail?.uid
      if (!syncedUid || syncedUid === userId) {
        setProgressVersion((v) => v + 1)
      }
    }
    window.addEventListener('smartium-cloud-synced', onCloudSynced)
    return () => window.removeEventListener('smartium-cloud-synced', onCloudSynced)
  }, [userId])

  const progressById = useMemo(() => {
    if (!userId) return {}
    const sessions = loadFlashcardSessionMap(userId)
    const map = {}
    for (const deck of allFlashcardDecks) {
      const total = deck.cards?.length || 0
      const progress = sessionProgressFromSaved(sessions[deck.lmeId], total)
      if (progress) map[deck.lmeId] = progress
    }
    for (const blok of FLASHCARD_BLOK_INDEX) {
      const stats = getBlokFlashcardStats(blok.key)
      const allId = allDeckSessionId(blok.key)
      const progress = sessionProgressFromSaved(sessions[allId], stats.cardCount)
      if (progress) map[allId] = progress
    }
    const globalAll = sessionProgressFromSaved(
      sessions[ALL_DECK_ID],
      allFlashcardDecks.reduce((n, d) => n + (d.cards?.length || 0), 0)
    )
    if (globalAll) map[ALL_DECK_ID] = globalAll
    return map
  }, [userId, progressVersion])

  const session = useMemo(() => {
    if (!selectedId) return null

    let decks = scopedDecks
    let title = blokMeta ? `Heel ${blokMeta.label} oefenen` : 'Alles oefenen'
    let subtitle = `${totalCards} kaarten`

    if (selectedId === allSessionId || selectedId === ALL_DECK_ID) {
      decks = forcedBlokKey ? scopedDecks : allFlashcardDecks
      subtitle = `${decks.reduce((n, d) => n + (d.cards?.length || 0), 0)} kaarten${
        forcedBlokKey ? ` uit ${blokMeta?.label ?? forcedBlokKey}` : ' uit alle blokken'
      }`
    } else {
      const deck = getDeckById(selectedId)
      if (!deck) return null
      const items = (deck.cards || []).map((raw) => ({
        deckId: deck.lmeId,
        lmeName: deck.lmeName,
        card: normalizeCard(raw),
      }))
      return {
        title: deck.lmeName,
        subtitle: `${deck.week} · ${deck.case}`,
        items,
        showSource: false,
      }
    }

    const items = decks.flatMap((d) =>
      (d.cards || []).map((raw) => ({
        deckId: d.lmeId,
        lmeName: d.lmeName,
        card: normalizeCard(raw),
      }))
    )
    return { title, subtitle, items, showSource: true }
  }, [selectedId, forcedBlokKey, scopedDecks, allSessionId, blokMeta, totalCards])

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
            sessionId={selectedId}
            userId={userId}
            onExit={() => {
              setSelectedId(null)
              setProgressVersion((v) => v + 1)
            }}
          />
        ) : forcedBlokKey ? (
          <DeckBrowser
            blocks={blocks}
            blokMeta={blokMeta}
            totalCards={totalCards}
            deckCount={deckCount}
            allSessionId={allSessionId}
            progressById={userId ? progressById : {}}
            onSelect={setSelectedId}
          />
        ) : (
          <BlockIndexView progressById={userId ? progressById : {}} />
        )}
      </main>
    </>
  )
}
