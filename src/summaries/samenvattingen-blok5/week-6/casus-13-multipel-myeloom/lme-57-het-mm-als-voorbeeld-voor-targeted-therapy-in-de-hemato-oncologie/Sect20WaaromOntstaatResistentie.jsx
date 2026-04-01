export default function Sect20WaaromOntstaatResistentie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom ontstaat resistentie?</h2>
      <p>
        Niet elke behandeling blijft blijvend werken. Er zijn verschillende redenen waarom therapie na een tijd minder
        effect heeft.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 7. Oorzaken van therapieresistentie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Oorzaak
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Genetische mutaties</td>
              <td className="px-4 py-3 align-top">de myeloomcel verandert en wordt resistent tegen medicijnen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tumorheterogeniteit</td>
              <td className="px-4 py-3 align-top">verschillende subklonen reageren verschillend op behandeling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Micro-omgevingsfactoren</td>
              <td className="px-4 py-3 align-top">cytokinen en omgevingseffecten kunnen therapie afzwakken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Aanpassingsmechanismen van de cel
              </td>
              <td className="px-4 py-3 align-top">de cel verandert zijn biologische processen om te overleven</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijk voorbeeld is verlies van de bindingsplaats voor CD38, waardoor daratumumab niet meer werkt. Door
        combinatiebehandeling probeer je zulke resistentie zo veel mogelijk tegen te gaan.
      </p>
    </div>
  )
}
