export default function CasusV1Van8() {
  return (
    <article className="rounded-2xl border border-slate-200/95 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/45 p-5 shadow-md dark:shadow-black/35 space-y-4">
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Vraag 1 van 8</p>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Casus 1</h3>
      <p className="text-slate-800 dark:text-slate-100">
        Een 48-jarige patiënt met een blanco voorgeschiedenis gebruikt sinds 2 weken NSAID&apos;s vanwege rugpijn. Hij presenteert zich met melena. Hij is hemodynamisch stabiel en het Hb is met 2 mmol/L gedaald.
      </p>
      <p className="font-medium text-primary-950 dark:text-primary-100">Waar denk je primair aan?</p>
      <ul className="space-y-2">
        <li className="rounded-lg px-4 py-2 border border-rose-500/45 bg-rose-50 dark:bg-rose-950/35">Lage tractus digestivusbloeding</li>
        <li className="rounded-lg px-4 py-2 border border-emerald-600/55 bg-emerald-50 dark:bg-emerald-950/45">Hoge tractus digestivusbloeding</li>
        <li className="rounded-lg px-4 py-2 border border-rose-500/45 bg-rose-50 dark:bg-rose-950/35">Geen tractus digestivusbloeding</li>
        <li className="rounded-lg px-4 py-2 border border-rose-500/45 bg-rose-50 dark:bg-rose-950/35">Zowel hoog als laag even waarschijnlijk</li>
      </ul>
      <div className="border-t border-slate-100 dark:border-slate-700/80 pt-4 space-y-2">
        <p className="font-bold text-slate-900 dark:text-slate-50">Feedback</p>
        <p>
          Hoge tractus digestivusbloeding. Melena (zwarte, teerachtige ontlasting) wijst op verteerd bloed, wat typisch is voor een bloeding hoog in het GI-stelsel (maag/duodenum). NSAID-gebruik verhoogt het risico op een ulcusbloeding.
        </p>
        <p>Het antwoord is helemaal goed!</p>
      </div>
    </article>
  )
}
