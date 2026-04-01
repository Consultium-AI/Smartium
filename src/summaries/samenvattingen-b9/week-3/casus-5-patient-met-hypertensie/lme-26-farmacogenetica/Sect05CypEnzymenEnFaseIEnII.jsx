export default function Sect05CypEnzymenEnFaseIEnII() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">CYP-enzymen en geneesmiddelmetabolisme</h2>
      <p>
        De cytochroom P450-familie (CYP) bestaat uit een grote groep enzymen die een cruciale rol spelen bij het metabolisme van veel stoffen in het lichaam. Ze zijn vooral aanwezig in de lever, maar ook in de darmwand en zelfs in de hersenen. CYP-enzymen zijn belangrijk voor de afbraak van geneesmiddelen, maar ook voor de afbraak van endogene stoffen zoals hormonen.
      </p>
      <p>
        Sommige geneesmiddelen worden als prodrug toegediend. Dat betekent dat de stof in de oorspronkelijke vorm nog niet werkzaam is en eerst door CYP-enzymen moet worden omgezet in de actieve vorm. Voorbeelden zijn tamoxifen en clopidogrel.
      </p>
      <p>CYP-enzymen kunnen worden beïnvloed door andere stoffen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>remming: het CYP-enzym werkt minder goed;</li>
        <li>inductie: het CYP-enzym werkt juist sterker.</li>
      </ul>
      <p>
        Daarom is het belangrijk om bij medicatiegebruik rekening te houden met interacties, omdat de effectiviteit en veiligheid van geneesmiddelen hierdoor sterk kunnen veranderen.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Fase I- en fase II-reacties in de lever</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Fase</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Functie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Reacties</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Toelichting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Fase I</td>
                <td className="px-4 py-3 align-top">Verandering van de molecuulstructuur van het geneesmiddel</td>
                <td className="px-4 py-3 align-top">Oxidatie, reductie, hydrolyse</td>
                <td className="px-4 py-3 align-top">Inbouw van zuurstof of hydroxygroep, of dealkylering; of vervanging van stikstof/zuurstof door waterstof</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Fase II</td>
                <td className="px-4 py-3 align-top">Koppeling van een endogeen hydrofiel molecuul</td>
                <td className="px-4 py-3 align-top">Conjugatie</td>
                <td className="px-4 py-3 align-top">Glucuronidering, sulfatering, acetylering of methylering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        CYP-enzymen zijn betrokken bij fase I-reacties. In fase I wordt de molecuulstructuur veranderd. In fase II worden stoffen juist hydrofieler gemaakt door koppeling aan een endogeen molecuul, zodat uitscheiding makkelijker wordt.
      </p>
    </div>
  )
}
