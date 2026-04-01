export default function Sect03HuidinfectiesWaarZitDeInfectie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Huidinfecties: waar zit de infectie?</h2>
      <p>
        Een rood been kan passen bij een huidinfectie. Daarbij is het belangrijk om te weten welke huidlaag is aangedaan, want verschillende huidlagen kunnen betrokken zijn. Oppervlakkige huidinfecties kunnen vaak met topicale therapie behandeld worden. Bij diepere huidinfecties zijn vaker systemische antibiotica nodig of zelfs een chirurgische interventie, zoals drainage van een abces of debridement.
      </p>
      <p>
        Aandachtsvraag: waarom is de diepte van de infectie zo belangrijk?
        {'  '}
        Mini-antwoord: omdat een oppervlakkige infectie vaak anders behandeld wordt dan een diepere infectie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Huidlaag en bijpassend ziektebeeld</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Ziektebeeld</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Diepste aangedane huidlaag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3">Folliculitis</td>
              <td className="p-3">Huidadnex, haarfollikel oppervlakkig</td>
            </tr>
            <tr>
              <td className="p-3">Furunkel</td>
              <td className="p-3">Huidadnex, haarfollikel diep</td>
            </tr>
            <tr>
              <td className="p-3">Erysipelas</td>
              <td className="p-3">Dermis, soms ook oppervlakkige subcutis</td>
            </tr>
            <tr>
              <td className="p-3">Ecthyma</td>
              <td className="p-3">Dermis</td>
            </tr>
            <tr>
              <td className="p-3">Cellulitis</td>
              <td className="p-3">Subcutis</td>
            </tr>
            <tr>
              <td className="p-3">Fascitis necroticans</td>
              <td className="p-3">Subcutaan vetweefsel, spierfascie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Erysipelas en cellulitis zijn in de klinische praktijk soms moeilijk van elkaar te onderscheiden. Erysipelas kan ook als een specifieke vorm van cellulitis worden gezien. Omdat de behandeling hetzelfde is, worden erysipelas en cellulitis vaak samen besproken.
      </p>
    </div>
  )
}
