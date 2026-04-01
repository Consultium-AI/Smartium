export default function Sect04VolgordeEnSoortBehandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Volgorde en soort behandeling</h2>
      <p>
        Bij mammacarcinoom worden verschillende begrippen gebruikt om de volgorde of combinatie van behandelingen aan
        te geven. Die volgorde is belangrijk om goed te begrijpen wat wanneer gebeurt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke behandelbegrippen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Begrip
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Primaire behandeling</td>
              <td className="px-4 py-3 align-top">
                De behandeling die bedoeld is om de patiënt te genezen; ook wel curatieve therapie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Adjuvante behandeling</td>
              <td className="px-4 py-3 align-top">Aanvullende behandeling ná de primaire behandeling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Neo-adjuvante behandeling</td>
              <td className="px-4 py-3 align-top">Aanvullende behandeling vóór de primaire behandeling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Chemo-radiotherapie</td>
              <td className="px-4 py-3 align-top">Combinatie van chemotherapie en radiotherapie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Sequentieel</td>
              <td className="px-4 py-3 align-top">De behandelingen volgen elkaar op</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Concurrerend</td>
              <td className="px-4 py-3 align-top">De behandelingen worden tegelijkertijd gegeven</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Postoperatieve bestraling</td>
              <td className="px-4 py-3 align-top">Bestraling na een operatie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij chemo-radiotherapie wordt dus zowel chemotherapie als radiotherapie gegeven. Dat kan sequentieel zijn, dus
        na elkaar, of concurrerend, dus tegelijk. Postoperatieve bestraling betekent bestraling nadat de operatie al
        heeft plaatsgevonden.
      </p>
      <p>
        Bij primaire mammacarcinoombehandeling is het doel curatief. Bij gemetastaseerd mammacarcinoom is dat anders: de
        behandeling is dan palliatief van opzet en levensverlengend. De behandeling wordt dan meestal geleid door de
        oncoloog, soms door de radiotherapeut en zelden door de chirurg.
      </p>
    </div>
  )
}
