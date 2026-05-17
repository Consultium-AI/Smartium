export default function Sect06CoeliakieDiagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Coeliakie: diagnostiek stap voor stap</h2>
      <p>
        Bij verdenking op coeliakie is serologie de eerste stap: IgA-anti-tTG en altijd ook totaal IgA. Dat is belangrijk, omdat een IgA-deficiëntie de standaardtest vals-negatief kan maken.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Diagnostiek van coeliakie</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Situatie
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Volgende stap
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  IgA-anti-tTG positief en totaal IgA normaal, en waarde ≥ 10x bovengrens
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Tweede, onafhankelijke bloedafname voor anti-EMA; bij dubbele positiviteit kan de diagnose zonder biopsie worden gesteld
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  IgA-anti-tTG verhoogd maar &lt; 10x bovengrens of twijfel
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Gastroscopie met duodenumbiopten</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Totaal IgA laag
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Bepaling van IgG-anti-TG2 of IgG-anti-DGP</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Negatieve IgA-anti-tTG maar laag totaal IgA
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Coeliakie is niet uitgesloten; kijk naar IgG-varianten</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De gastroscopie met biopten blijft de gouden standaard wanneer de serologie niet duidelijk genoeg is. Dan wordt gekeken naar villusatrofie en crypt-hyperplasie.
      </p>

      <div className="p-5 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-600/40 space-y-2">
        <p>
          <strong className="text-violet-900 dark:text-violet-200">Aandachtsvraag:</strong> Wat is de eerste serologische test bij verdenking op coeliakie?{'  '}
          <strong className="text-violet-900 dark:text-violet-200">Mini-antwoord:</strong> IgA-anti-tTG, samen met totaal IgA.
        </p>
      </div>
    </div>
  )
}
