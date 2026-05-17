export default function Sect06ConceptChemoradiotherapie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het concept chemoradiotherapie</h2>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Chemoradiotherapie</strong>, of chemoradiatie, betekent dat
        chemotherapie en bestraling in dezelfde periode worden gegeven. De twee behandelingen versterken elkaar. Dat
        maakt de behandeling sterker cytotoxisch, dus schadelijker voor de tumorcellen.
      </p>
      <p>De werking verloopt in grote lijnen zo:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hoogenergetische straling beschadigt direct het DNA;</li>
        <li>
          door botsing van die straling met water ontstaan vrije radicalen, zoals OH⁻, O₂⁻ en H₂O₂;
        </li>
        <li>die vrije radicalen binden aan DNA en veroorzaken extra schade;</li>
        <li>chemotherapie bindt ook aan DNA en geeft eveneens DNA-schade;</li>
        <li>door die DNA-schade treedt celdood op.</li>
      </ul>
      <p>
        Kort gezegd:{' '}
        <strong className="text-slate-900 dark:text-slate-100">
          radiotherapie en chemotherapie samen zorgen voor meer DNA-schade en dus voor een sterker effect op
          tumorcellen.
        </strong>
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 4. Waarom chemoradiatie sterker werkt dan één van beide behandelingen alleen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Onderdeel
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Effect
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Radiotherapie</td>
                <td className="px-4 py-3 align-top">Directe DNA-schade</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Radiotherapie via water</td>
                <td className="px-4 py-3 align-top">Vorming van vrije radicalen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Vrije radicalen</td>
                <td className="px-4 py-3 align-top">Extra DNA-schade</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Chemotherapie</td>
                <td className="px-4 py-3 align-top">Ook DNA-schade</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Gecombineerd effect</td>
                <td className="px-4 py-3 align-top">Sterker cytotoxisch effect en meer celdood</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Praktische uitvoering bij slokdarmkanker
        </h3>
        <p>
          Bij chemoradiatie voor slokdarmkanker wordt vaak een combinatie van{' '}
          <strong className="text-slate-900 dark:text-slate-100">paclitaxel</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">carboplatine</strong> gebruikt. Deze chemotherapie wordt{' '}
          <strong className="text-slate-900 dark:text-slate-100">wekelijks intraveneus</strong> gegeven.
        </p>
        <p>
          De radiotherapie wordt gegeven in fracties van{' '}
          <strong className="text-slate-900 dark:text-slate-100">1,8 Gy</strong>, gedurende{' '}
          <strong className="text-slate-900 dark:text-slate-100">5 dagen per week</strong>.
        </p>
        <p>Er zijn twee belangrijke schema’s:</p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">nCRT</strong>: neoadjuvante chemoradiotherapie
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                duur: <strong className="text-slate-900 dark:text-slate-100">5 weken</strong>
              </li>
              <li>
                totale dosis: <strong className="text-slate-900 dark:text-slate-100">50,4 Gy</strong>
              </li>
              <li>
                samen met <strong className="text-slate-900 dark:text-slate-100">5 keer chemotherapie</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">dCRT</strong>: definitieve chemoradiotherapie
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                duur: <strong className="text-slate-900 dark:text-slate-100">6 weken</strong>
              </li>
              <li>
                totale dosis: <strong className="text-slate-900 dark:text-slate-100">59,4 Gy</strong>
              </li>
              <li>
                samen met <strong className="text-slate-900 dark:text-slate-100">6 keer chemotherapie</strong>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 5. Verschil tussen nCRT en dCRT
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Kenmerk
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  nCRT
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  dCRT
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Voluit</td>
                <td className="px-4 py-3 align-top">Neoadjuvante chemoradiotherapie</td>
                <td className="px-4 py-3 align-top">Definitieve chemoradiotherapie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Doel</td>
                <td className="px-4 py-3 align-top">Voorbereiding op operatie</td>
                <td className="px-4 py-3 align-top">Curatieve behandeling zonder operatie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Duur</td>
                <td className="px-4 py-3 align-top">5 weken</td>
                <td className="px-4 py-3 align-top">6 weken</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Bestraling</td>
                <td className="px-4 py-3 align-top">50,4 Gy</td>
                <td className="px-4 py-3 align-top">59,4 Gy</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Chemotherapie</td>
                <td className="px-4 py-3 align-top">5 wekelijkse giften</td>
                <td className="px-4 py-3 align-top">6 wekelijkse giften</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
