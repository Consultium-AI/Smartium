export default function Sect03AcuteTubulair() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Acute tubulaire stoornissen</h2>
      <p>
        Bij acute nierschade zijn er twee belangrijke tubulaire oorzaken: acute tubulus necrose (ATN) en tubulo-interstitiële nefritis (TIN). Het verschil zit vooral in het mechanisme.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Acute tubulaire stoornissen: ATN versus TIN</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Acute tubulus necrose (ATN)</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Tubulo-interstitiële nefritis (TIN)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Kernmechanisme</td>
              <td className="px-4 py-3">Ischemische of toxische tubulusschade; geen primaire immuunreactie</td>
              <td className="px-4 py-3">Immunologische aanval op tubulus en interstitium</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Mogelijke oorzaken</td>
              <td className="px-4 py-3">Een te lang bestaande prerenale oorzaak, pigmenten, kristallen, metabole ziekten</td>
              <td className="px-4 py-3">Systemische ziekte, infectie of geneesmiddelen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Voorbeelden</td>
              <td className="px-4 py-3">Verminderde doorbloeding van de nier, toxische schade</td>
              <td className="px-4 py-3">Sarcoïdose, Sjögren, hantavirus, penicillines, NSAID’s, protonpompremmers, immuun-checkpointremmers</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Behandeling</td>
              <td className="px-4 py-3">Geen immunosuppressie; dat kan herstel juist hinderen</td>
              <td className="px-4 py-3">Oorzaak wegnemen; bij uitblijvend herstel prednison, bij ernstige schade soms hoge dosis</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij ATN staat ischemie vaak centraal, bijvoorbeeld doordat een prerenale oorzaak te lang aanhoudt, dus doordat de nier te lang te weinig doorbloeding krijgt. Ook directe toxische effecten, zoals pigmenten, kristallen of metabole ziekten, kunnen ATN geven. Als ATN eenmaal is ontstaan, volgt vaak een ontstekingsreactie, maar die is dan een gevolg van de schade en niet de oorzaak. Daarom is immunosuppressieve behandeling hier juist ongunstig, omdat herstel daarmee geremd wordt.
      </p>
      <p>
        Bij TIN staat juist de immuunreactie centraal. TIN kan onderdeel zijn van een systemische ziekte, veroorzaakt worden door een infectie of uitgelokt worden door geneesmiddelen. Een medicijn kan als hapteen werken: een klein molecuul dat zich aan een eiwit bindt en dan als antigeen gaat optreden, net zoals nikkel dat bij contactdermatitis kan doen. Bekende voorbeelden van geneesmiddelen zijn penicillines, NSAID’s en protonpompremmers. De meeste TIN verdwijnen wanneer de oorzaak wordt weggenomen. Als er na 2 tot 4 weken geen herstel is of als de nierschade ernstig is, wordt prednison gegeven. Bij immuun-checkpointremmer-nefritis kan juist een veel agressievere behandeling nodig zijn, met hoge doses prednison of methylprednisolon om nierweefsel te redden.
      </p>
    </div>
  )
}
