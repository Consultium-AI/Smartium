import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, XCircle, Loader2, Send } from 'lucide-react'
import { InlineAiText } from '../PracticeAiInlinePanel'
import { ExamRichText } from './ExamScenarioContent'
import {
  buildOpenExamGradingPrompt,
  fetchExamOpenGrading,
  parseExamOpenScore,
  fetchExamFollowUp,
} from '../../utils/examBlokAi'

/** @param {() => number} rng */
export function shuffleMeerkeuzeQuestion(q, rng) {
  const { options, correctAnswer } = q
  const correctOption = options.find((o) => o.letter === correctAnswer)
  if (!correctOption) return { ...q, _displayOptions: options }

  const shuffled = [...options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'].slice(0, shuffled.length)
  const reordered = shuffled.map((opt, i) => ({ ...opt, letter: letters[i] }))
  const newCorrectLetter = reordered.find((o) => o.text === correctOption.text)?.letter ?? letters[0]

  return { ...q, _displayOptions: reordered, _shuffledCorrect: newCorrectLetter }
}

function badgePoints(p) {
  return (
    <span className="shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-bold text-primary-800 dark:bg-primary-500/20 dark:text-primary-200">
      {Number.isInteger(p) ? `${p}p` : `${p}p`}
    </span>
  )
}

function ScoreBadge({ earned, max }) {
  const full = earned >= max
  const zero = earned <= 0
  const cls = full
    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300'
    : zero
      ? 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-300'
      : 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300'
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${cls}`}>
      {full ? <CheckCircle className="w-3 h-3" /> : null}
      {Number.isInteger(earned) ? earned : earned.toFixed(1)} / {max}p
    </span>
  )
}

function RubricPanel({ question }) {
  if (!question.rubric && !question.modelAnswer) return null
  return (
    <div className="mt-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/60 p-3 space-y-2">
      {question.rubric && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Rubric</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">{question.rubric}</p>
        </div>
      )}
      {question.modelAnswer && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Modelantwoord</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">{question.modelAnswer}</p>
        </div>
      )}
    </div>
  )
}

function ExamFollowUpChat({ question, aiFeedback, canUseFollowUp = true }) {
  const [open, setOpen] = useState(false)
  const [thread, setThread] = useState([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [thread, open, sending])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || sending) return
    const userMsg = { role: 'user', content: text }
    setInput('')
    const next = [...thread, userMsg]
    setThread(next)
    setSending(true)
    try {
      const reply = await fetchExamFollowUp(question, aiFeedback, next)
      setThread((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch (e) {
      setThread((prev) => [...prev, { role: 'assistant', content: `Fout: ${e?.message || 'Geen verbinding.'}` }])
    } finally {
      setSending(false)
    }
  }

  if (!canUseFollowUp) {
    return (
      <div className="mt-3 rounded-lg border border-amber-200/80 bg-amber-50/80 px-3 py-2 text-xs text-amber-800 dark:border-amber-500/40 dark:bg-amber-950/20 dark:text-amber-200">
        AI doorvragen is premium.
        <Link to="/billing" className="ml-1 underline underline-offset-2">
          Upgrade voor toegang
        </Link>
      </div>
    )
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 100) }}
        className="mt-3 text-[13px] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-lg px-3 py-2 bg-slate-100/80 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        Stel een vervolgvraag
      </button>
    )
  }

  return (
    <div className="mt-3 space-y-2">
      <div className="flex items-center justify-between gap-2 px-0.5">
        <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">Vervolgvraag</span>
        <button type="button" onClick={() => setOpen(false)} className="text-[11px] text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Inklappen</button>
      </div>
      <div className="rounded-xl bg-slate-100/60 dark:bg-slate-800/35 overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-700/60">
        <div className="max-h-72 overflow-y-auto px-3.5 py-3 space-y-2.5">
          {thread.length === 0 && !sending && (
            <p className="text-slate-500 text-xs leading-relaxed">Stel een vervolgvraag over deze vraag.</p>
          )}
          {thread.map((m, idx) =>
            m.role === 'user' ? (
              <div key={idx} className="flex justify-end">
                <div className="max-w-[88%] rounded-2xl rounded-br-md bg-white dark:bg-slate-700/90 text-slate-800 dark:text-slate-100 px-3 py-2 text-[13px] leading-relaxed shadow-sm ring-1 ring-slate-200/80 dark:ring-slate-600/50 whitespace-pre-wrap">{m.content}</div>
              </div>
            ) : (
              <div key={idx} className="rounded-lg bg-white/90 dark:bg-slate-900/50 px-3 py-2.5 text-[13px] ring-1 ring-slate-200/50 dark:ring-slate-600/40">
                <InlineAiText text={m.content} className="text-slate-700 dark:text-slate-300" />
              </div>
            )
          )}
          {sending && (
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs py-1">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> Bezig…
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        <div className="flex gap-2 px-2.5 py-2.5 bg-white/70 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-700/50">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
            placeholder="Vervolgvraag…"
            rows={1}
            disabled={sending}
            className="flex-1 min-h-[38px] max-h-28 resize-y rounded-lg border-0 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-[13px] px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-500/30"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={sending || !input.trim()}
            className="shrink-0 self-end h-9 w-9 flex items-center justify-center rounded-lg bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-40"
            aria-label="Verstuur"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function MeerkeuzeBlock({ question, displayQ, answer, onReveal, canUseAiFollowUp = true }) {
  const revealed = answer?.revealed
  const selected = answer?.answer
  const correctLetter = displayQ._shuffledCorrect ?? displayQ.correctAnswer
  const opts = displayQ._displayOptions ?? displayQ.options

  const getStyle = (letter) => {
    if (!revealed) {
      if (selected === letter)
        return 'border-primary-400 dark:border-primary-500/50 bg-primary-50 dark:bg-primary-500/15'
      return 'border-navy-200 dark:border-slate-600 bg-white dark:bg-slate-800/50 hover:border-primary-300'
    }
    if (letter === correctLetter) return 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30'
    if (selected === letter && letter !== correctLetter) return 'border-red-400 bg-red-50 dark:bg-red-900/25'
    return 'border-navy-200 dark:border-slate-700 opacity-60'
  }

  return (
    <div className="rounded-2xl border border-navy-100 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 md:p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Meerkeuze
        </span>
        {badgePoints(question.points)}
      </div>
      <ExamRichText text={question.question} className="mb-4 font-medium text-navy-900 dark:text-slate-100" />
      <div className="space-y-2">
        {opts.map((option) => (
          <motion.button
            key={option.letter + option.text}
            type="button"
            disabled={revealed}
            whileTap={revealed ? {} : { scale: 0.99 }}
            onClick={() =>
              onReveal({
                answer: option.letter,
                earnedPoints: option.letter === correctLetter ? question.points : 0,
                revealed: true,
              })
            }
            className={`flex w-full items-start gap-3 rounded-xl border-2 p-3 text-left transition-all ${getStyle(option.letter)}`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-sm font-bold dark:bg-slate-700">
              {option.letter}
            </span>
            <span className="flex-1 text-sm font-medium">{option.text}</span>
            {revealed && option.letter === correctLetter && <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />}
            {revealed && selected === option.letter && option.letter !== correctLetter && (
              <XCircle className="h-5 w-5 shrink-0 text-red-500" />
            )}
          </motion.button>
        ))}
      </div>
      {revealed && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <ScoreBadge earned={answer.earnedPoints ?? 0} max={question.points} />
        </div>
      )}
      {revealed && question.explanation && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{question.explanation}</p>
      )}
      {revealed && (answer.earnedPoints ?? 0) < question.points && (
        <ExamFollowUpChat question={question} aiFeedback={question.explanation || ''} canUseFollowUp={canUseAiFollowUp} />
      )}
    </div>
  )
}

export function MeerdereAntwoordenBlock({ question, answer, onReveal, canUseAiFollowUp = true }) {
  const [selected, setSelected] = useState(() => new Set(answer?.answer ?? []))
  const revealed = answer?.revealed

  useEffect(() => {
    if (answer?.revealed && answer?.answer && Array.isArray(answer.answer)) {
      setSelected(new Set(answer.answer))
    }
  }, [answer?.revealed, question.id])

  const letters = question.options.map((o) => o.letter)
  const correctSet = new Set(question.correctAnswers)

  const maxSel = question.maxSelections ?? letters.length
  const mustPickExactCount = maxSel < letters.length

  const toggle = (L) => {
    if (revealed) return
    setSelected((prev) => {
      const n = new Set(prev)
      if (n.has(L)) n.delete(L)
      else {
        if (n.size >= maxSel) return n
        n.add(L)
      }
      return n
    })
  }

  const submit = () => {
    let earnedPoints
    if (question.partialCreditOnlyCorrect === true) {
      const ppc = question.pointsPerCorrect ?? 1
      let e = 0
      for (const L of selected) {
        if (correctSet.has(L)) e += ppc
      }
      earnedPoints = Math.min(question.points, e)
    } else if (question.partialCreditNoWrong === true) {
      const wrongPicked = [...selected].some((L) => !correctSet.has(L))
      if (wrongPicked) earnedPoints = 0
      else {
        const ppc = question.pointsPerCorrect ?? 1
        const nCorrectPicked = [...selected].filter((L) => correctSet.has(L)).length
        earnedPoints = Math.min(question.points, nCorrectPicked * ppc)
      }
    } else if (question.requireExactSet === true) {
      const a = [...selected].sort().join('')
      const b = [...correctSet].sort().join('')
      earnedPoints = a === b ? question.points : 0
    } else {
      let ok = 0
      for (const L of letters) {
        if (correctSet.has(L) === selected.has(L)) ok++
      }
      earnedPoints = (ok / letters.length) * question.points
    }
    onReveal({ answer: [...selected], earnedPoints, revealed: true })
  }

  return (
    <div className="rounded-2xl border border-navy-100 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 md:p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Meerdere antwoorden</span>
        {badgePoints(question.points)}
      </div>
      <p className="mb-2 text-sm text-amber-700 dark:text-amber-300/90">
        {question.partialCreditOnlyCorrect
          ? 'Meerdere juiste antwoorden mogelijk; punten per juist gekruiste optie (foute keuzes tellen niet mee, géén negatieve punten).'
          : question.partialCreditNoWrong
          ? 'Foute optie aankruisen levert 0 punten voor deze vraag.'
          : mustPickExactCount
            ? `Kies precies ${maxSel} optie${maxSel === 1 ? '' : 'n'}.`
            : '0, 1 of meerdere opties kunnen juist zijn.'}
      </p>
      <ExamRichText text={question.question} className="mb-4 font-medium text-navy-900 dark:text-slate-100" />
      <div className="space-y-2">
        {question.options.map((option) => {
          const isSel = selected.has(option.letter)
          const should = correctSet.has(option.letter)
          let rowClass = 'border-navy-200 dark:border-slate-600'
          if (revealed) {
            if (should && isSel) rowClass = 'border-emerald-400 bg-emerald-50/80 dark:bg-emerald-900/20'
            else if (should && !isSel) rowClass = 'border-amber-300 bg-amber-50/50 dark:bg-amber-900/15'
            else if (!should && isSel) rowClass = 'border-red-400 bg-red-50/50 dark:bg-red-900/15'
            else rowClass = 'border-slate-200 dark:border-slate-700 opacity-50'
          }
          return (
            <button
              key={option.letter}
              type="button"
              disabled={revealed}
              onClick={() => toggle(option.letter)}
              className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left ${rowClass}`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 text-xs font-bold ${
                  isSel ? 'border-primary-500 bg-primary-500 text-white' : 'border-slate-300 dark:border-slate-600'
                }`}
              >
                {isSel ? '✓' : ''}
              </span>
              <span className="font-medium">
                {option.letter}) {option.text}
              </span>
            </button>
          )
        })}
      </div>
      {!revealed && (
        <button
          type="button"
          onClick={submit}
          disabled={
            mustPickExactCount &&
            selected.size !== maxSel &&
            question.partialCreditNoWrong !== true &&
            question.partialCreditOnlyCorrect !== true
          }
          className="mt-4 rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Controleer
        </button>
      )}
      {revealed && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <ScoreBadge earned={answer.earnedPoints ?? 0} max={question.points} />
        </div>
      )}
      {revealed && question.explanation && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{question.explanation}</p>
      )}
      {revealed && (answer.earnedPoints ?? 0) < question.points && (
        <ExamFollowUpChat question={question} aiFeedback={question.explanation || ''} canUseFollowUp={canUseAiFollowUp} />
      )}
    </div>
  )
}

export function KoppelvraagBlock({ question, answer, onReveal, canUseAiFollowUp = true }) {
  const items = question.items
  const [mapping, setMapping] = useState(() => {
    const a = answer?.answer
    if (a && typeof a === 'object' && !Array.isArray(a)) return { ...a }
    return Object.fromEntries(items.map((_, i) => [String(i), '']))
  })
  const revealed = answer?.revealed

  useEffect(() => {
    const a = answer?.answer
    if (answer?.revealed && a && typeof a === 'object' && !Array.isArray(a)) setMapping({ ...a })
  }, [answer?.revealed, question.id])

  const setLetter = (idx, letter) => {
    if (revealed) return
    setMapping((m) => ({ ...m, [String(idx)]: letter }))
  }

  const allFilled = items.every((_, i) => mapping[String(i)])

  const submit = () => {
    let ok = 0
    const correct = question.correctMapping
    for (let i = 0; i < items.length; i++) {
      const want = correct[i] ?? correct[String(i)]
      if ((mapping[String(i)] || '').toLowerCase() === String(want).toLowerCase()) ok++
    }
    const earnedPoints = (ok / items.length) * question.points
    onReveal({ answer: { ...mapping }, earnedPoints, revealed: true })
  }

  return (
    <div className="rounded-2xl border border-navy-100 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 md:p-5 overflow-x-auto">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Koppelvraag</span>
        {badgePoints(question.points)}
      </div>
      <ExamRichText text={question.question} className="mb-4 font-medium text-navy-900 dark:text-slate-100" />
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            <th className="py-2 pr-3 text-left font-semibold text-navy-800 dark:text-slate-200">Item</th>
            <th className="py-2 text-left font-semibold text-navy-800 dark:text-slate-200">Koppeling</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => {
            const want = question.correctMapping[idx] ?? question.correctMapping[String(idx)]
            const got = mapping[String(idx)]
            const rowOk = revealed && got?.toLowerCase() === String(want).toLowerCase()
            const rowBad = revealed && !rowOk
            return (
              <tr
                key={idx}
                className={`border-b border-slate-100 dark:border-slate-800 ${
                  rowOk ? 'bg-emerald-50/50 dark:bg-emerald-900/10' : rowBad ? 'bg-red-50/50 dark:bg-red-900/10' : ''
                }`}
              >
                <td className="py-2 pr-3 align-middle font-medium text-navy-800 dark:text-slate-200">{item}</td>
                <td className="py-2 align-middle">
                  <select
                    disabled={revealed}
                    value={got}
                    onChange={(e) => setLetter(idx, e.target.value)}
                    className="w-full max-w-xs rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-800"
                  >
                    <option value="">— kies —</option>
                    {question.matchOptions.map((mo) => (
                      <option key={mo.letter} value={mo.letter}>
                        {mo.letter}) {mo.text}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {!revealed && (
        <button
          type="button"
          disabled={!allFilled}
          onClick={submit}
          className="mt-4 rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white hover:bg-primary-600 disabled:opacity-40"
        >
          Controleer koppelingen
        </button>
      )}
      {revealed && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <ScoreBadge earned={answer.earnedPoints ?? 0} max={question.points} />
        </div>
      )}
      {revealed && question.explanation && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{question.explanation}</p>
      )}
      {revealed && (answer.earnedPoints ?? 0) < question.points && (
        <ExamFollowUpChat question={question} aiFeedback={question.explanation || ''} canUseFollowUp={canUseAiFollowUp} />
      )}
    </div>
  )
}

export function JuistOnjuistBlock({ question, answer, onReveal, canUseAiFollowUp = true }) {
  const [choices, setChoices] = useState(() =>
    question.statements.map((_, i) => (answer?.answer?.[i] !== undefined ? answer.answer[i] : null))
  )
  const revealed = answer?.revealed

  useEffect(() => {
    if (answer?.revealed && answer?.answer && Array.isArray(answer.answer)) {
      setChoices(question.statements.map((_, i) => answer.answer[i] ?? null))
    }
  }, [answer?.revealed, question.id])

  const setChoice = (idx, val) => {
    if (revealed) return
    setChoices((c) => {
      const n = [...c]
      n[idx] = val
      return n
    })
  }

  const allAnswered = choices.every((c) => c !== null && c !== undefined)

  const submit = () => {
    const pps = question.pointsPerStatement ?? question.points / question.statements.length
    let earned = 0
    question.statements.forEach((s, i) => {
      if (choices[i] === s.correct) earned += pps
    })
    onReveal({ answer: [...choices], earnedPoints: earned, revealed: true })
  }

  return (
    <div className="rounded-2xl border border-navy-100 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 md:p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Juist / onjuist</span>
        {badgePoints(question.points)}
      </div>
      <ExamRichText text={question.question} className="mb-4 font-medium text-navy-900 dark:text-slate-100" />
      <ul className="space-y-4">
        {question.statements.map((s, idx) => {
          const ok = revealed && choices[idx] === s.correct
          const bad = revealed && choices[idx] !== s.correct
          return (
            <li
              key={idx}
              className={`rounded-xl border p-3 ${
                ok ? 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/15' : bad ? 'border-red-300 bg-red-50/40 dark:bg-red-900/15' : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              <p className="mb-2 text-sm font-medium text-navy-900 dark:text-slate-100">{s.text}</p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => setChoice(idx, true)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
                    choices[idx] === true ? 'bg-primary-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                  }`}
                >
                  Juist
                </button>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => setChoice(idx, false)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
                    choices[idx] === false ? 'bg-primary-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                  }`}
                >
                  Onjuist
                </button>
              </div>
            </li>
          )
        })}
      </ul>
      {!revealed && (
        <button
          type="button"
          disabled={!allAnswered}
          onClick={submit}
          className="mt-4 rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white disabled:opacity-40"
        >
          Controleer
        </button>
      )}
      {revealed && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <ScoreBadge earned={answer.earnedPoints ?? 0} max={question.points} />
        </div>
      )}
      {revealed && question.explanation && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{question.explanation}</p>
      )}
      {revealed && (answer.earnedPoints ?? 0) < question.points && (
        <ExamFollowUpChat question={question} aiFeedback={question.explanation || ''} canUseFollowUp={canUseAiFollowUp} />
      )}
    </div>
  )
}

function countWords(s) {
  return s
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

export function OpenVraagBlock({ question, answer, onReveal, canUseAiFollowUp = true }) {
  const [text, setText] = useState(() => (typeof answer?.answer === 'string' ? answer.answer : ''))
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const [manual, setManual] = useState(answer?.manualPoints ?? '')
  const revealed = answer?.revealed

  useEffect(() => {
    if (revealed && typeof answer?.answer === 'string') setText(answer.answer)
  }, [revealed, answer?.answer, question.id])
  const wc = countWords(text)
  const overLimit = question.wordLimit && wc > question.wordLimit

  const grade = async () => {
    setErr(null)
    setLoading(true)
    try {
      const prompt = buildOpenExamGradingPrompt({
        question: question.question,
        wordLimit: question.wordLimit,
        rubric: question.rubric,
        modelAnswer: question.modelAnswer,
        points: question.points,
        userAnswer: text,
      })
      const feedback = await fetchExamOpenGrading(prompt)
      const parsed = parseExamOpenScore(feedback, question.points)
      const earned = parsed ? parsed.earned : null
      onReveal({
        answer: text,
        aiFeedback: feedback,
        earnedPoints: earned ?? 0,
        manualOnly: earned == null,
        revealed: true,
      })
    } catch (e) {
      setErr(e?.message || 'Fout bij nakijken')
    } finally {
      setLoading(false)
    }
  }

  const applyManual = () => {
    const v = parseFloat(String(manual).replace(',', '.'))
    if (Number.isNaN(v)) return
    const earned = Math.min(Math.max(0, v), question.points)
    onReveal({
      answer: text,
      aiFeedback: answer?.aiFeedback ?? '',
      earnedPoints: earned,
      manualOnly: false,
      revealed: true,
    })
  }

  if (!revealed) {
    return (
      <div className="rounded-2xl border border-navy-100 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 md:p-5">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Open vraag</span>
          {badgePoints(question.points)}
        </div>
        <ExamRichText text={question.question} className="mb-4 font-medium text-navy-900 dark:text-slate-100" />
        {question.wordLimit ? (
          <p className={`mb-1 text-xs ${overLimit ? 'font-semibold text-red-600' : 'text-slate-500'}`}>
            Woorden: {wc} / max. {question.wordLimit}
          </p>
        ) : null}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder="Typ je antwoord…"
          className="w-full rounded-xl border border-slate-300 bg-white p-3 text-sm dark:border-slate-600 dark:bg-slate-800"
        />
        <button
          type="button"
          onClick={grade}
          disabled={loading || !text.trim()}
          className="mt-3 inline-flex items-center gap-2 rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white disabled:opacity-40"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Controleer antwoord
        </button>
        {err && <p className="mt-2 text-sm text-red-600">{err}</p>}
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-navy-100 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 md:p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Open vraag</span>
        {badgePoints(question.points)}
      </div>
      <ExamRichText text={question.question} className="mb-2 font-medium text-navy-900 dark:text-slate-100" />
      <p className="mb-3 whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-800/80">{answer.answer}</p>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <ScoreBadge earned={answer.earnedPoints ?? 0} max={question.points} />
      </div>
      {answer.aiFeedback && (
        <div className="mb-3 rounded-lg border border-slate-200 bg-slate-50/80 p-3 dark:border-slate-700 dark:bg-slate-900/40">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">Beoordeling</p>
          <InlineAiText text={answer.aiFeedback} />
        </div>
      )}
      <RubricPanel question={question} />
      {answer.manualOnly && (
        <div className="mt-3 flex flex-wrap items-end gap-2">
          <label className="text-xs text-slate-600 dark:text-slate-400">
            Punten handmatig invoeren (0–{question.points})
            <input
              type="number"
              step="0.25"
              value={manual}
              onChange={(e) => setManual(e.target.value)}
              className="ml-2 w-24 rounded border border-slate-300 px-2 py-1 dark:border-slate-600 dark:bg-slate-800"
            />
          </label>
          <button type="button" onClick={applyManual} className="rounded-lg bg-slate-700 px-3 py-1 text-sm text-white">
            Toepassen
          </button>
        </div>
      )}
      <ExamFollowUpChat
        question={question}
        aiFeedback={answer.aiFeedback || question.explanation || ''}
        canUseFollowUp={canUseAiFollowUp}
      />
    </div>
  )
}

export function BeeldvraagOrderBlock({ question, answer, onReveal, canUseAiFollowUp = true }) {
  const opts = question.orderOptions
  const correct = question.correctOrder
  const [order, setOrder] = useState(() => {
    if (answer?.answer && Array.isArray(answer.answer)) return [...answer.answer]
    return [...opts]
  })
  const revealed = answer?.revealed

  useEffect(() => {
    if (answer?.revealed && answer?.answer && Array.isArray(answer.answer) && answer.answer.length === opts.length) {
      setOrder([...answer.answer])
    }
  }, [answer?.revealed, opts.length, question.id])

  const setAt = (idx, val) => {
    if (revealed) return
    const next = [...order]
    const j = next.indexOf(val)
    if (j !== idx && j >= 0) next[j] = next[idx]
    next[idx] = val
    setOrder(next)
  }

  const submit = () => {
    const ok = order.every((layer, i) => layer === correct[i])
    onReveal({ answer: [...order], earnedPoints: ok ? question.points : 0, revealed: true })
  }

  return (
    <div className="rounded-2xl border border-navy-100 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 md:p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Volgorde</span>
        {badgePoints(question.points)}
      </div>
      <ExamRichText text={question.question} className="mb-4 text-sm font-medium text-navy-900 dark:text-slate-100" />
      <p className="mb-2 text-xs text-slate-500">
        {question.orderIntro ?? 'Van oppervlakkig (1) naar diep (4):'}
      </p>
      <ol className="space-y-2">
        {Array.from({ length: opts.length }, (_, pos) => (
          <li key={pos} className="flex flex-wrap items-center gap-2">
            <span className="w-8 font-bold text-primary-600">{pos + 1}.</span>
            <select
              disabled={revealed}
              value={order[pos]}
              onChange={(e) => setAt(pos, e.target.value)}
              className="flex-1 min-w-[12rem] rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-800"
            >
              {opts.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            {revealed && (
              <span className={order[pos] === correct[pos] ? 'text-emerald-600' : 'text-red-600'}>
                {order[pos] === correct[pos] ? '✓' : `→ ${correct[pos]}`}
              </span>
            )}
          </li>
        ))}
      </ol>
      {!revealed && (
        <button type="button" onClick={submit} className="mt-4 rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white">
          Controleer
        </button>
      )}
      {revealed && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <ScoreBadge earned={answer.earnedPoints ?? 0} max={question.points} />
        </div>
      )}
      {revealed && question.explanation && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{question.explanation}</p>
      )}
      {revealed && (answer.earnedPoints ?? 0) < question.points && (
        <ExamFollowUpChat question={question} aiFeedback={question.explanation || ''} canUseFollowUp={canUseAiFollowUp} />
      )}
    </div>
  )
}

export function BeeldvraagAiBlock({ question, answer, onReveal, canUseAiFollowUp = true }) {
  return (
    <OpenVraagBlock
      question={{ ...question, wordLimit: null }}
      answer={answer}
      onReveal={onReveal}
      canUseAiFollowUp={canUseAiFollowUp}
    />
  )
}

export function RekenvraagBlock({ question, answer, onReveal, canUseAiFollowUp = true }) {
  const [val, setVal] = useState(() => (answer?.answer != null ? String(answer.answer) : ''))
  const revealed = answer?.revealed

  useEffect(() => {
    if (answer?.revealed && answer?.answer != null) setVal(String(answer.answer))
  }, [answer?.revealed, question.id])

  const submit = () => {
    const n = parseFloat(String(val).replace(',', '.'))
    if (Number.isNaN(n)) return
    const diff = Math.abs(n - question.correctValue)
    const ok = diff <= (question.tolerance ?? 0.001)
    onReveal({ answer: n, earnedPoints: ok ? question.points : 0, revealed: true })
  }

  return (
    <div className="rounded-2xl border border-navy-100 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 p-4 md:p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Reken- / interpretatievraag</span>
        {badgePoints(question.points)}
      </div>
      <ExamRichText text={question.question} className="mb-4 font-medium text-navy-900 dark:text-slate-100" />
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="number"
          step="any"
          disabled={revealed}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-40 rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-600 dark:bg-slate-800"
        />
        {!revealed && (
          <button type="button" onClick={submit} className="rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white">
            Controleer
          </button>
        )}
      </div>
      {revealed && (
        <div className="mt-3 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <ScoreBadge earned={answer.earnedPoints ?? 0} max={question.points} />
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/60 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Uitwerking</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">{question.modelAnswer}</p>
          </div>
          {question.rubric && (
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/60 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Rubric</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{question.rubric}</p>
            </div>
          )}
        </div>
      )}
      {revealed && (answer.earnedPoints ?? 0) < question.points && (
        <ExamFollowUpChat question={question} aiFeedback={question.modelAnswer || ''} canUseFollowUp={canUseAiFollowUp} />
      )}
    </div>
  )
}

