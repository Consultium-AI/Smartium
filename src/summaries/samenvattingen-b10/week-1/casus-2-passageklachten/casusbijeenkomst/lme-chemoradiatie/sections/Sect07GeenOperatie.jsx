export default function Sect07GeenOperatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Wanneer wordt er geen operatie gedaan?
      </h2>
      <p>
        Niet bij elke patiënt met een oesofaguscarcinoom wordt een operatie uitgevoerd. Dat kan verschillende redenen
        hebben. Die redenen kunnen komen vanuit de tumor zelf of vanuit de patiënt.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 6. Redenen om geen operatie te doen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Reden
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Betekenis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Irresectabel</td>
                <td className="px-4 py-3 align-top">De chirurg kan de tumor niet radicaal verwijderen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Inoperabel</td>
                <td className="px-4 py-3 align-top">
                  De patiënt kan op basis van conditie geen grote operatie ondergaan
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Bewuste keuze van patiënt</td>
                <td className="px-4 py-3 align-top">De patiënt wil geen grote operatie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Bij een <strong className="text-slate-900 dark:text-slate-100">irresectabele tumor</strong> kan de chirurg de
        tumor niet volledig wegnemen. De tumorkenmerken bepalen dan dat chirurgie geen optimale behandeling is. Bij een{' '}
        <strong className="text-slate-900 dark:text-slate-100">inoperabele patiënt</strong> gaat het vooral om de conditie
        van de patiënt; vaak zijn dit oudere patiënten of kwetsbare patiënten die een grote operatie niet goed aankunnen.
        Daarnaast kan een patiënt ook bewust afzien van een operatie.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> Wat betekent irresectabel?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> Dat de tumor niet radicaal
          chirurgisch verwijderd kan worden.
        </p>
      </div>
    </div>
  )
}
