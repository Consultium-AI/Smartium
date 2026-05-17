export default function Sect03Diagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek</h2>
      <p>
        Voor het stellen van de diagnose is{' '}
        <strong className="text-slate-900 dark:text-slate-100">endoscopie</strong> essentieel. Via een endoscopie
        kunnen <strong className="text-slate-900 dark:text-slate-100">biopten</strong> worden genomen. Dat betekent dat
        er stukjes weefsel uit het afwijkende slijmvlies worden weggenomen om te onderzoeken. Zie je bij scopie
        afwijkingen, dan wordt er altijd een biopt genomen. Dat biopt wordt daarna door de patholoog beoordeeld.
      </p>
      <p>
        Belangrijk is ook dat er in de slokdarm{' '}
        <strong className="text-slate-900 dark:text-slate-100">twee soorten kanker</strong> kunnen voorkomen:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">
            Plaveiselcelcarcinoom (squamous cell carcinoma, PCC)
          </strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Adenocarcinoom</strong>
        </li>
      </ol>
      <p>Deze twee typen hebben verschillende kenmerken en verschillende risicofactoren.</p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. De twee belangrijkste histologische typen van slokdarmkanker
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Type
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Typische locatie
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Belangrijke risicofactoren
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Plaveiselcelcarcinoom</td>
                <td className="px-4 py-3 align-top">Vaak in de bovenste en middelste delen van de slokdarm</td>
                <td className="px-4 py-3 align-top">Roken en alcoholgebruik</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Adenocarcinoom</td>
                <td className="px-4 py-3 align-top">Vaak in het onderste deel van de slokdarm</td>
                <td className="px-4 py-3 align-top">
                  Barrett-slokdarm, jarenlange onbehandelde reflux, ook roken
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is endoscopie zo
          belangrijk?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> Omdat je daarmee de afwijking
          kunt zien én meteen een biopt kunt nemen voor pathologisch onderzoek.
        </p>
      </div>
    </div>
  )
}
