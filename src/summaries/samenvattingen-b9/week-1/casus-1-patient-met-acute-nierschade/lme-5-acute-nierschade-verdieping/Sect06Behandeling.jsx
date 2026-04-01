export default function Sect06Behandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van acute nierschade</h2>
      <p>
        De behandeling van acute nierschade is afhankelijk van de oorzaak. Er is niet één standaardbehandeling. In de meeste gevallen werkt het goed om de oorzaak weg te nemen: een verdacht medicijn stoppen, een infectie behandelen of een onderliggende nierziekte aanpakken. Daarom is een goede indeling en het vinden van de juiste oorzaak zo belangrijk.
      </p>
      <p>
        De vraag die daarbij steeds centraal staat is: is er nog functionerend nierweefsel? Hoe je handelt, wordt namelijk sterk gestuurd door de vraag of de nier nog kan reageren.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Behandeling afhankelijk van functionerend nierweefsel</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kern van het beleid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Nog functionerend nierweefsel</td>
              <td className="px-4 py-3">Minder ernstige nierschade, betere prognose; extra vocht of natrium kan de functie soms verbeteren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Geen functionerend nierweefsel / anurie &gt; 6 uur</td>
              <td className="px-4 py-3">Wees terughoudend met extra vocht of natrium; risico op overvulling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Hypotensie of hypoperfusie</td>
              <td className="px-4 py-3">Wel behandelen, maar liever met andere medicatie zoals (nor)adrenaline dan met blind extra vocht</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Anurie + niet-functionerend nierweefsel</td>
              <td className="px-4 py-3">Dialyse kan overblijven</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Als er nog functionerend nierweefsel is, is de prognose dus beter en kan extra vocht of natrium, vaak als 0,9% NaCl-infusie, de functie nog verbeteren. Maar als er geen functionerend nierweefsel is, moet je juist heel terughoudend zijn met extra vocht of natrium. De patiënt kan dat namelijk niet meer op een andere manier uitscheiden. Dat geeft overvulling, en dat kan schadelijk en soms zelfs dodelijk zijn.
      </p>
      <p>
        Bij hypotensie of hypoperfusie moet je natuurlijk wel ingrijpen, maar liever met andere medicatie, zoals (nor)adrenaline, dan met blind extra vocht. Een patiënt die anurie heeft, dus langer dan 6 uur echt geen urine produceert, heeft volgens deze benadering niet-functionerend nierweefsel. In die situatie kan uiteindelijk dialyse overblijven.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Waarom is anurie langer dan 6 uur zo belangrijk?  Antwoord: Dan ga je uit van niet-functionerend nierweefsel, en extra vocht of natrium kan juist schadelijk zijn.
        </p>
      </div>
    </div>
  )
}
