export default function Sect05BegrippenTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Begrippen kort uitgelegd</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Begrippen rond screening</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <th className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100 w-1/3 border-b border-slate-200 dark:border-slate-600">
                Vroege opsporing
              </th>
              <td className="px-4 py-3 align-top border-b border-slate-200 dark:border-slate-600">
                Kanker wordt eerder ontdekt, waardoor behandeling eerder kan beginnen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <th className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Fout-positieve uitslag
              </th>
              <td className="px-4 py-3 align-top border-b border-slate-200 dark:border-slate-600">
                De screeningstest is positief, maar er blijkt geen kanker te zijn
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <th className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Overdiagnose
              </th>
              <td className="px-4 py-3 align-top border-b border-slate-200 dark:border-slate-600">
                Er is wel kanker, maar die zou zonder screening nooit klachten of klinische relevantie hebben gegeven
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <th className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">DCIS</th>
              <td className="px-4 py-3 align-top">
                Niet-invasieve borstkanker in situ; kan door screening worden opgespoord
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandacht-vraag: Als een vrouw na screening borstkanker blijkt te hebben en later overlijdt aan een andere
        oorzaak, is dat dan automatisch overdiagnose?{'  '}
        Mini-antwoord: Nee. Het gaat erom of de kanker zonder screening ooit aan het licht en tot klachten zou zijn
        gekomen. Alleen dan is er sprake van overdiagnose.
      </p>
    </div>
  )
}
