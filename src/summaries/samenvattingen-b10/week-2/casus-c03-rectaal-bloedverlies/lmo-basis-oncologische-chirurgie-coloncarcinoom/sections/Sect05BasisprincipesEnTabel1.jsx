export default function Sect05BasisprincipesEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Basisprincipes van chirurgische behandeling</h2>
      <p>
        De chirurgische behandeling van het colorectaal carcinoom volgt een aantal basisprincipes. De belangrijkste
        gedachte is dat de tumor in zijn geheel verwijderd moet worden. Daarbij hoort een resectie die voldoende
        uitgebreid is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Kernpunten van de chirurgische behandeling</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Onderdeel</th>
              <th className="px-4 py-3 font-semibold">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Tumorverwijdering</td>
              <td className="px-4 py-3 align-top">De kwaadaardige afwijking wordt operatief verwijderd.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Oncologische resectie</td>
              <td className="px-4 py-3 align-top">
                De operatie is gericht op volledige en veilige verwijdering van tumorweefsel.
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Uitgebreidheid van resectie</td>
              <td className="px-4 py-3 align-top">
                Het verwijderde deel moet ruim genoeg zijn om aan oncologische eisen te voldoen.
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Uitleg van het beleid</td>
              <td className="px-4 py-3 align-top">Je moet kunnen toelichten waarom de resectie zo wordt uitgevoerd.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De nadruk ligt dus niet alleen op de techniek van opereren, maar vooral op het oncologische principe daarachter.
        De operatie moet passen bij de aard van de tumor en bij het risico op verspreiding.
      </p>
      <p>
        <strong>Aandachtsvraag:</strong> Wat is het verschil tussen zomaar wegsnijden en oncologisch opereren?
      </p>
      <p>
        <strong>Kort antwoord:</strong> Bij oncologisch opereren wordt de tumor verwijderd volgens vaste principes die
        gericht zijn op volledige en veilige tumorverwijdering.
      </p>
    </div>
  )
}
