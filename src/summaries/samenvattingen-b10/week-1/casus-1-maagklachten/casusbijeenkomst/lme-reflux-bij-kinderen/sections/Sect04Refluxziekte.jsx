export default function Sect04Refluxziekte() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wanneer denk je aan refluxziekte?</h2>
      <p>
        Niet elke baby die spuugt heeft refluxziekte. Het gaat vooral om de vraag of de klachten{' '}
        <strong className="text-slate-900 dark:text-slate-100">hinderlijk</strong> zijn of{' '}
        <strong className="text-slate-900 dark:text-slate-100">complicaties</strong> geven. Dan spreken we van GORZ.
      </p>
      <p>Typische klachten en signalen die kunnen passen bij GORZ zijn onder andere:</p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Symptomen en signalen van GORZ bij kinderen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Categorie
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Klachten/signalen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Algemeen</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  anemie, dystonische nek (Sandifer-syndroom), gewichtsverlies of achterblijvende groei, ontroostbaar huilen,
                  overstrekken, prikkelbaarheid/pijn, tanderosie, voedselweigering
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Luchtwegen</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  apneus, apparent life-threatening events, astma, hoesten, heesheid, piepende ademhaling, recidiverende
                  luchtweginfecties, recidiverende otitiden, stridor
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Gastro-intestinaal</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  {`Barrett's oesofagus`}, dysfagie, hematemesis, oesofagitis, pijn in epigastrio, regurgiteren/spugen,
                  strictuur, zuurbranden/pijn op de borst
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De diagnose wordt gemaakt op basis van de <strong className="text-slate-900 dark:text-slate-100">anamnese</strong> en
        het <strong className="text-slate-900 dark:text-slate-100">uitsluiten van alarmsymptomen</strong>. Het onderscheid
        tussen GOR en GORZ kan soms lastig zijn.
      </p>
    </div>
  )
}
