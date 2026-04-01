export default function Sect09Tabel6BenigneVersusMaligne() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Benigne versus maligne bij gepigmenteerde laesies</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Benigne laesie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Maligne laesie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Groei</td>
              <td className="px-4 py-3 align-top">Meestal langdurig aanwezig en niet meer groeiend</td>
              <td className="px-4 py-3 align-top">Kan recent gegroeid zijn</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kleur</td>
              <td className="px-4 py-3 align-top">Vaak egaal of passend bij de laesie</td>
              <td className="px-4 py-3 align-top">Kan afwijkend en wisselend zijn</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vorm</td>
              <td className="px-4 py-3 align-top">Vaak regelmatiger</td>
              <td className="px-4 py-3 align-top">Vaak grilliger en onregelmatiger</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Extra beoordeling</td>
              <td className="px-4 py-3 align-top">Soms observatie voldoende</td>
              <td className="px-4 py-3 align-top">Vaak extra diagnostiek nodig</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
