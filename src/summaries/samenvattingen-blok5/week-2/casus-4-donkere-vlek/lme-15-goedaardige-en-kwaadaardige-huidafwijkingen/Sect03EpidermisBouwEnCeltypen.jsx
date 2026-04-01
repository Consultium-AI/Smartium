export default function Sect03EpidermisBouwEnCeltypen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Epidermis: bouw en celtypen</h2>
      <p>
        De epidermis bestaat voor het grootste deel uit één dominant celtype: de keratinocyt. Deze cellen worden gevormd
        in de basale laag en schuiven geleidelijk naar boven. Tijdens die weg door de epidermis veranderen ze stap voor
        stap. Uiteindelijk komen ze aan de oppervlakte terecht als dode cellen in de hoornlaag. Die hoornlaag vormt een
        belangrijke barrière tegen de omgeving.
      </p>
      <p>
        De verbinding tussen de cellen onderling is belangrijk voor de bescherming van de huid. In de epidermis is de
        buitenste laag normaal slechts enkele tienden van een millimeter dik. Op plaatsen waar de huid veel eelt krijgt,
        zoals handpalmen en voetzolen, is de hoornlaag extra dik.
      </p>
      <p>
        Door voortdurende celdeling in de basale laag vernieuwt de opperhuid zich ongeveer één keer per maand. Na een wond
        helpt deze aanmaak van nieuwe cellen mee aan het herstel van de huid. Bij jonge mensen verloopt de celdeling
        sneller dan bij ouderen. Een keratinocyt heeft ongeveer 20–30 dagen nodig om van de basale laag naar het
        huidoppervlak te gaan.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke celtypen van de epidermis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Celtype
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belang
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Keratinocyten</td>
              <td className="px-4 py-3 align-top">Meest voorkomende cellen; ontstaan in de basale laag en migreren naar boven</td>
              <td className="px-4 py-3 align-top">Vorming van de beschermende opperhuid en hoornlaag</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Melanocyten</td>
              <td className="px-4 py-3 align-top">Pigmentcellen</td>
              <td className="px-4 py-3 align-top">Belangrijk bij pigmentvorming en bij diagnostische kleuringen zoals SOX10, Melan A en S100</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Langerhanscellen</td>
              <td className="px-4 py-3 align-top">Dendritische immuuncellen tussen de keratinocyten</td>
              <td className="px-4 py-3 align-top">Met CD1a-kleuring goed zichtbaar te maken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Melanocyten zijn de pigmentcellen van de epidermis. Bij immunohistochemische kleuringen kunnen ze zichtbaar worden
        met antistoffen die binden aan bijvoorbeeld SOX10; ook Melan A en S100 worden gebruikt. Langerhanscellen zijn
        immuuncellen met dendritische uitlopers. Die uitlopers liggen tussen de keratinocyten en zijn goed zichtbaar met
        CD1a-kleuring.
      </p>
    </div>
  )
}
