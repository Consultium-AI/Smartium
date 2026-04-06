export default function Sect14BeoordelingPlakproefEnTabel4() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Beoordeling van de plakproef</h2>
      <p>Na het verwijderen van de plakkers wordt de huidreactie beoordeeld volgens een vaste schaal.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Aflezen van plakproeven</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitslag
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">-</td>
              <td className="px-4 py-3 align-top">Negatief</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">+/-</td>
              <td className="px-4 py-3 align-top">Dubieus positief, wat roodheid</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">1+</td>
              <td className="px-4 py-3 align-top">Palpabele roodheid</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2+</td>
              <td className="px-4 py-3 align-top">Palpabele roodheid met vesikels</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">3+</td>
              <td className="px-4 py-3 align-top">Sterke vesikel- of blaarvorming</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">irr</td>
              <td className="px-4 py-3 align-top">Irritatie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij de interpretatie is het belangrijk onderscheid te maken tussen een echte allergische reactie en een
        irritatieve reactie. Niet elke rode plek is dus automatisch een positieve contactallergie.
      </p>
    </div>
  )
}
