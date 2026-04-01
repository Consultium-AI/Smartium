export default function Sect07ClassificatieVolgensHurley() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Classificatie volgens Hurley</h2>
      <p>HS wordt vaak ingedeeld met de Hurley-classificatie. Deze indeling maakt duidelijk hoe uitgebreid de ziekte is.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Hurley-classificatie</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Hurley stadium</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Klinische beschrijving</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top font-medium">Stadium I</td>
              <td className="p-3">
                Abcesvorming, enkelvoudig of meervoudig, zonder sinus tract en zonder littekenvorming
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-medium">Stadium II</td>
              <td className="p-3">
                Recidiverende abcessen, met tractvorming en littekenvorming; één of meerdere, duidelijk gescheiden laesies
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-medium">Stadium III</td>
              <td className="p-3">
                Diffuse of bijna diffuse betrokkenheid, met meerdere onderling verbonden tracts en abcessen in het hele aangedane gebied
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze classificatie is belangrijk, omdat de behandeling ervan afhangt. Niet alleen de ernst, maar ook het soort laesie en de aanwezigheid van ontsteking bepalen wat je doet.
      </p>
    </div>
  )
}
