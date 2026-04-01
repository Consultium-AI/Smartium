export default function Sect15Tabel5AcuteVersusLate() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 5. Acute versus late toxiciteit</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Acute toxiciteit
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Late toxiciteit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tijdstip</td>
              <td className="px-3 py-3 align-top">Tijdens of direct na de bestraling</td>
              <td className="px-3 py-3 align-top">Meer dan 3 maanden na de bestraling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Celtype</td>
              <td className="px-3 py-3 align-top">Snel delende stamcellen</td>
              <td className="px-3 py-3 align-top">Traag delende of niet-delende stamcellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Verloop</td>
              <td className="px-3 py-3 align-top">Vaak voorbijgaand</td>
              <td className="px-3 py-3 align-top">Vaak irreversibel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</td>
              <td className="px-3 py-3 align-top">Mucositis, huidirritatie, misselijkheid, diarree</td>
              <td className="px-3 py-3 align-top">Atrofie, hyperpigmentatie, fibrose, lymfoedeem</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
