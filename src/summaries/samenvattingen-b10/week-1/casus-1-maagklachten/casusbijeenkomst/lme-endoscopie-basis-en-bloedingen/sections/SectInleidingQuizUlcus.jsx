export default function SectInleidingQuizUlcus() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">INLEIDING (2)</h2>
      <p className="font-medium">Wat is de meest voorkomende oorzaak van een hoge tractus bloeding?</p>
      <ul className="space-y-2">
        <li className="rounded-lg border border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-2 font-medium">Ulcus pepticum</li>
        <li className="rounded-lg border border-red-500/35 bg-red-50 dark:bg-red-950/30 px-4 py-2">Reflux-oesofagitis</li>
        <li className="rounded-lg border border-red-500/35 bg-red-50 dark:bg-red-950/30 px-4 py-2">Slokdarmvarices</li>
        <li className="rounded-lg border border-red-500/35 bg-red-50 dark:bg-red-950/30 px-4 py-2">Mallory-Weiss laesie</li>
      </ul>
      <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/45 p-4">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Feedback</h3>
        <p>Het antwoord is helemaal goed!</p>
      </div>
    </div>
  )
}
