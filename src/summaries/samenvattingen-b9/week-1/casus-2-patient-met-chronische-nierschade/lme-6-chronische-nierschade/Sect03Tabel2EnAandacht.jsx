export default function Sect03Tabel2EnAandacht() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Indeling van nierfunctie en albuminurie</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">G-klasse</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40"><td className="px-4 py-3 font-medium">G1</td><td className="px-4 py-3">Normaal</td></tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30"><td className="px-4 py-3 font-medium">G2</td><td className="px-4 py-3">Mild afgenomen</td></tr>
            <tr className="bg-white dark:bg-slate-900/40"><td className="px-4 py-3 font-medium">G3a</td><td className="px-4 py-3">Mild tot matig afgenomen</td></tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30"><td className="px-4 py-3 font-medium">G3b</td><td className="px-4 py-3">Matig tot ernstig afgenomen</td></tr>
            <tr className="bg-white dark:bg-slate-900/40"><td className="px-4 py-3 font-medium">G4</td><td className="px-4 py-3">Ernstig afgenomen</td></tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30"><td className="px-4 py-3 font-medium">G5</td><td className="px-4 py-3">Nierfalen</td></tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">A-klasse</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40"><td className="px-4 py-3 font-medium">A1</td><td className="px-4 py-3">Normale albuminurie</td></tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30"><td className="px-4 py-3 font-medium">A2</td><td className="px-4 py-3">Matig verhoogde albuminurie</td></tr>
            <tr className="bg-white dark:bg-slate-900/40"><td className="px-4 py-3 font-medium">A3</td><td className="px-4 py-3">Sterk verhoogde albuminurie</td></tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Waarom is een combinatie van eGFR en albuminurie handig?  Mini-antwoord: Omdat je daarmee niet alleen de nierfunctie, maar ook de mate van nierschade en het risico beter kunt beschrijven.
        </p>
      </div>
    </div>
  )
}
