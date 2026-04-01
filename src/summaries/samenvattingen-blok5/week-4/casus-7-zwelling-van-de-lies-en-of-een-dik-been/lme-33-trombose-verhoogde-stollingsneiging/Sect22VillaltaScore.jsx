export default function Sect22VillaltaScore() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Villalta-score</h3>
      <p>
        De klachten en klinische tekenen van PTS worden gescoord met de Villalta-score. Daarbij worden symptomen en klinische tekenen beoordeeld en opgeteld.
      </p>
      <p>De interpretatie is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>0–4 punten: geen PTS;</li>
        <li>5–14 punten: milde / matige PTS;</li>
        <li>&gt; 15 punten of aanwezigheid van ulcus: ernstige PTS.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Villalta-score in het kort</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Score</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3">0–4</td>
              <td className="p-3">Geen PTS</td>
            </tr>
            <tr>
              <td className="p-3">5–14</td>
              <td className="p-3">Milde/matige PTS</td>
            </tr>
            <tr>
              <td className="p-3">&gt; 15 of ulcus aanwezig</td>
              <td className="p-3">Ernstige PTS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
