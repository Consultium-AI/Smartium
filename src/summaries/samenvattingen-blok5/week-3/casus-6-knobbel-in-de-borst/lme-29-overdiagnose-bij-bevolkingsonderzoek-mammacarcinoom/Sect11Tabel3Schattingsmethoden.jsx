export default function Sect11Tabel3Schattingsmethoden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 3. Overzicht van schattingsmethoden voor overdiagnose
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Methode
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waarop vergelijkt men?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste beperking
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">RCT zonder screening van de controlegroep aan het einde</td>
              <td className="px-4 py-3 align-top">Screeninggroep versus echte niet-screening</td>
              <td className="px-4 py-3 align-top">Meest betrouwbaar, maar oude trials en beperkte aantallen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">RCT met screening van de controlegroep aan het einde</td>
              <td className="px-4 py-3 align-top">Screeninggroep versus deels gescreende controlegroep</td>
              <td className="px-4 py-3 align-top">Kan over- of onderschatten door extra screening in de controlegroep</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Observationele studies</td>
              <td className="px-4 py-3 align-top">Gescreende versus ongescreende regio’s of tijdsperioden</td>
              <td className="px-4 py-3 align-top">Sterk gevoelig voor bias, aannames en veranderende incidentie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Modellering / extrapolatie</td>
              <td className="px-4 py-3 align-top">Trenddata en statistische aannames</td>
              <td className="px-4 py-3 align-top">Resultaat hangt sterk af van gekozen aannames</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandacht-vraag: Waarom zijn observationele studies hier minder betrouwbaar?{'  '}
        Mini-antwoord: Omdat gescreende en ongescreende groepen vaak niet goed vergelijkbaar zijn en omdat veranderingen
        in incidentie ook door andere factoren dan screening kunnen komen.
      </p>
    </div>
  )
}
