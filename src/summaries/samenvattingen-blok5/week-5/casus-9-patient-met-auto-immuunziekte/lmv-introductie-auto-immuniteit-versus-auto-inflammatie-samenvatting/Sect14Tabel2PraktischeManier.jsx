export default function Sect14Tabel2PraktischeManier() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 2. Praktische manier van denken</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Vraag
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Meer passend bij auto-inflammatie
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Meer passend bij auto-immuniteit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Welk systeem staat op de voorgrond?</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Aangeboren afweer</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Verworven afweer</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Is de ontsteking sterk gekoppeld aan specifieke antigenen?
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Minder</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Meer</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Welke cellen denk je het eerst aan?</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Macrofaag, neutrofiel, NK-cel, mestcel</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T-cel, B-cel, plasmacel</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Is de scheiding absoluut?</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nee</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nee</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
