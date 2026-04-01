export default function Sect08AanvullendOnderzoek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Aanvullend onderzoek</h2>
      <p>
        Aanvullend onderzoek heeft meestal een beperkte waarde bij de diagnose. Dat komt omdat tijd kostbaar is en de
        patiënt vaak ernstig ziek is. De behandeling moet dan niet worden uitgesteld.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Aanvullend onderzoek bij verdenking op necrotiserende wekedeleninfectie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderzoek
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waarde
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Opmerking
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Labonderzoek (bloed)</td>
              <td className="px-3 py-3 align-top">Geeft informatie over ernst en conditie van de patiënt</td>
              <td className="px-3 py-3 align-top">
                Bijvoorbeeld infectieparameters, bloedgas, nierfunctie, elektrolyten en lactaat
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Conventionele röntgenopnamen
              </td>
              <td className="px-3 py-3 align-top">Snel en goedkoop</td>
              <td className="px-3 py-3 align-top">
                Kan zwelling of gas in de weke delen tonen, maar gas is geen bewijs voor deze infectie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CT-scan</td>
              <td className="px-3 py-3 align-top">
                Toont diepe structuren en kan gas- en vochtcollecties goed laten zien
              </td>
              <td className="px-3 py-3 align-top">
                Nuttig bij twijfel over onderliggende oorzaak of moeilijk te beoordelen locatie; contrast kan nadelig zijn
                voor de nierfunctie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">MRI-scan</td>
              <td className="px-3 py-3 align-top">Zeer gedetailleerde weke-delenafbeelding zonder schadelijke straling</td>
              <td className="px-3 py-3 align-top">Vaak niet direct beschikbaar en duurt lang</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FDG-PET-scan</td>
              <td className="px-3 py-3 align-top">
                Kan verhoogde opname laten zien bij ontsteking of een ruimte-innemend proces
              </td>
              <td className="px-3 py-3 align-top">Duur, tijdrovend en geeft straling; daarom meestal niet nodig</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De kern is dat laboratoriumonderzoek en röntgendiagnostiek niet de hoofdrol spelen bij het stellen van de
        diagnose. Een fasciebiopt met Gram-preparaat en kweek wordt als belangrijk beschouwd voor de microbiologische
        bevestiging.
      </p>
      <p>
        Er is in de meeste gevallen geen indicatie voor uitgebreid aanvullend beeldvormend onderzoek, omdat dit tijd
        kost. Bij een klinische verdenking moet de behandeling juist direct starten.{`  `}Een uitzondering is wanneer er
        een onderliggende oorzaak wordt vermoed of wanneer het aangedane lichaamsgebied lastig te beoordelen is; dan kan
        een CT-scan wel waardevolle informatie geven.
      </p>
      <p>
        Aandacht-vraagje: Waarom is beeldvorming vaak niet de eerste stap?{`  `}Mini-antwoord: Omdat het tijd kost en de
        behandeling bij sterke verdenking meteen moet beginnen.
      </p>
    </div>
  )
}
