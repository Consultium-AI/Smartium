export default function Sect09Tabel2DiagnostischeOnderzoeken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Diagnostische onderzoeken en hun plaats</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderzoek</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Rol bij verdenking DVT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Klinische kansschatting</td>
              <td className="p-3">Bepaalt vooraf hoe groot de kans op DVT is</td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">D-dimeer</td>
              <td className="p-3">
                Verhoogd bij trombose, maar ook bij andere situaties; normaal bij lage klinische kans kan DVT uitsluiten
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Compressie-ultrasonografie (CUS)</td>
              <td className="p-3">Beeldvormend onderzoek om DVT aan te tonen of uit te sluiten</td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Venografie</td>
              <td className="p-3">Juist, maar wordt zelden nog gebruikt</td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Conventionele röntgenfoto been</td>
              <td className="p-3">Niet geschikt om DVT vast te stellen</td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">CT-angiografie</td>
              <td className="p-3">Niet één van de standaardonderzoeken voor deze diagnose in deze benadering</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
