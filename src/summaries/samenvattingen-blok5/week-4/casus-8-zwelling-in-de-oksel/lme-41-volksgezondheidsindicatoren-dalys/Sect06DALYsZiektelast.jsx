export default function Sect06DALYsZiektelast() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">DALY’s: ziektelast in één maat</h2>
      <p>
        Een heel belangrijke samengestelde maat is de DALY: disability-adjusted life year. Een DALY is één verloren
        gezond levensjaar. De DALY combineert dus twee onderdelen van ziektelast:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>YLL = years of life lost, dus verloren levensjaren door voortijdige sterfte;</li>
        <li>YLD = years lived with disability, dus jaren geleefd met ziekte of beperking.</li>
      </ul>
      <p>Samen geldt:</p>
      <p className="pl-4 border-l-2 border-cyan-500/60 dark:border-cyan-400/50 font-medium text-slate-900 dark:text-slate-100">
        DALY = YLL + YLD
      </p>
      <p>
        Het grote voordeel van de DALY is dat sterfte en niet-fataal verlies van gezondheid in één maat kunnen worden
        samengebracht. Daardoor kun je ziektelast van heel verschillende aandoeningen met elkaar vergelijken.
      </p>
      <p>
        Aandachtspunt:  Wat zegt 1 DALY?  Dat staat voor één jaar gezond leven dat verloren is gegaan.
      </p>
      <p>
        Een voorbeeld laat dit goed zien. Stel een vrouw krijgt op 20-jarige leeftijd door een auto-ongeluk een ernstige
        beperking, en later overlijdt zij op 80-jarige leeftijd. In het uitgewerkte voorbeeld verliest zij in totaal 58
        DALY’s. Dat bestaat uit:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>jaren met beperking na het ongeluk;</li>
        <li>en de jaren die zij door vroegtijdige sterfte niet meer heeft kunnen leven.</li>
      </ul>
      <p>
        Bij een populatie van drie personen kan de DALY-verliessom ook per persoon worden berekend. Dan zie je hoe YLL
        en YLD samen optellen tot het totaal.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Voorbeeld van DALY-verlies in een populatie van drie personen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Persoon
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Situatie
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Verlies in DALY’s
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mevrouw 1</td>
              <td className="px-3 py-3 align-top">Niet-fataal auto-ongeluk op 20-jarige leeftijd</td>
              <td className="px-3 py-3 align-top">36</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Persoon 2</td>
              <td className="px-3 py-3 align-top">Fataal auto-ongeluk op 45-jarige leeftijd</td>
              <td className="px-3 py-3 align-top">35</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Persoon 3</td>
              <td className="px-3 py-3 align-top">
                Auto-ongeluk op 50-jarige leeftijd, kwaliteit van leven daalt blijvend van 1,0 naar 0,6, overlijden op
                80-jarige leeftijd
              </td>
              <td className="px-3 py-3 align-top">12</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Totaal</td>
              <td className="px-3 py-3 align-top">Som van de drie personen</td>
              <td className="px-3 py-3 align-top">83</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Daarmee wordt duidelijk dat ook iemand die niet vroeg sterft, toch veel DALY’s kan verliezen door langdurige
        beperking.
      </p>
    </div>
  )
}
