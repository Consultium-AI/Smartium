export default function Sect10Tabel2KeuzeLeefstijlbehandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 2. Waar let je op bij de keuze van een leefstijlbehandeling?</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Factor</th>
              <th className="px-4 py-3 font-semibold">Betekenis voor de keuze</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Ernst van obesitas</td>
              <td className="px-4 py-3 align-top">Bepaalt mede hoe intensief de behandeling moet zijn</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Andere aandoeningen</td>
              <td className="px-4 py-3 align-top">Kunnen extra begeleiding of aanpassing van de behandeling vragen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Eerdere pogingen</td>
              <td className="px-4 py-3 align-top">Laten zien wat eerder wel of niet werkte</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Motivatie</td>
              <td className="px-4 py-3 align-top">Is belangrijk voor het volhouden van verandering</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Praktische situatie</td>
              <td className="px-4 py-3 align-top">Bepaalt of de patiënt de behandeling kan volgen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
