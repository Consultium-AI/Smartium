export default function Sect10BevolkingsonderzoekNederland() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het bevolkingsonderzoek darmkanker in Nederland</h2>
      <p>
        In Nederland startte het landelijke bevolkingsonderzoek darmkanker in 2014. Dit was het eerste bevolkingsonderzoek
        waarbij ook mannen meedoen. Het programma is opgezet op basis van wetenschappelijk onderzoek.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wie wordt uitgenodigd?</h3>
        <p className="mt-4">Mensen van 55–75 jaar worden uitgenodigd.</p>
        <p className="mt-4">Vanaf 2019 worden alle mensen in deze leeftijdsgroep uitgenodigd.</p>
        <p className="mt-4">
          De reden voor deze leeftijdsgrens is dat de incidentie van darmkanker het hoogst is in de groep van 55–75 jaar.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Hoe verloopt het bevolkingsonderzoek?</h3>
        <p className="mt-4">Het proces is simpel:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>je krijgt een FIT thuisgestuurd;</li>
          <li>als de FIT negatief is, krijg je na 2 jaar opnieuw een FIT;</li>
          <li>als de FIT positief is, volgt een coloscopie.</li>
        </ul>
        <p className="mt-4">
          Dus de FIT is de eerste stap, en de coloscopie is de vervolgstap bij een positieve uitslag.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 4. Praktische route in het bevolkingsonderzoek
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Situatie</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Volgende stap</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">FIT negatief</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Na 2 jaar opnieuw een FIT</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">FIT positief</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Coloscopie</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Bij coloscopie poliep verwijderd
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">PA-uitslag bepaalt follow-up</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Advanced adenoom / advanced serrated poliep
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Surveillance-coloscopie na een aantal jaren, vaak 3 jaar in de voorbeelden
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
