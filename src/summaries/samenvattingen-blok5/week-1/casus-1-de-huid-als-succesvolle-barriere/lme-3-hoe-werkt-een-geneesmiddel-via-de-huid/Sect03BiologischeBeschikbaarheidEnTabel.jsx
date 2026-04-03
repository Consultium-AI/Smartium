export default function Sect03BiologischeBeschikbaarheidEnTabel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Biologische beschikbaarheid</h2>
      <p>
        Een belangrijk begrip bij toediening via de huid is biologische beschikbaarheid. Daarmee bedoelen we welk
        percentage van een toegediend geneesmiddel uiteindelijk in de systemische circulatie terechtkomt. Met andere
        woorden: hoeveel van het geneesmiddel bereikt echt het bloed en kan dus in het lichaam verspreid worden.
      </p>
      <p>
        Bij toediening via de huid speelt absorptie hierin een centrale rol. De hoeveelheid die wordt opgenomen, hangt af
        van meerdere factoren, zoals de eigenschappen van het geneesmiddel, de toedieningsvorm en de huid zelf.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Toedieningsweg
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk van de biologische beschikbaarheid
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Intraveneus</td>
              <td className="px-4 py-3 align-top">100%, omdat het geneesmiddel direct in de bloedbaan komt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Oraal</td>
              <td className="px-4 py-3 align-top">
                Verlaagd, door opname in het maag-darmkanaal en first-pass effect in de lever
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Topicaal/transdermaal</td>
              <td className="px-4 py-3 align-top">Vaak beperkt, doordat de huid een sterke barrière vormt</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span> Waarom is intraveneuze toediening 100% biologisch
        beschikbaar?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat het geneesmiddel direct in de bloedbaan wordt gebracht.
      </p>
    </div>
  )
}
