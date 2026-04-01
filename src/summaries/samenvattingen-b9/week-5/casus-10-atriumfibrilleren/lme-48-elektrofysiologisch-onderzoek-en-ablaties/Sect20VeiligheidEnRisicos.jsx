export default function Sect20VeiligheidEnRisicos() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Veiligheid en risico’s</h2>
      <p>
        Ablatie is vaak veilig en effectief, maar het blijft een invasieve ingreep. De complicaties zijn te verdelen in problemen bij de toegang en problemen in het hart zelf.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijkste risico’s van ablatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Categorie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Complicatie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kern van het probleem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Toegang via de lies</td>
              <td className="px-4 py-3 align-top">Liesbloeding of hematoom</td>
              <td className="px-4 py-3 align-top">Door aanprikken van vaten ontstaat nabloeding</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Toegang via de lies</td>
              <td className="px-4 py-3 align-top">Pseudo-aneurysma</td>
              <td className="px-4 py-3 align-top">Lek uit de slagader vormt een holte in het omliggende weefsel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">In het hart</td>
              <td className="px-4 py-3 align-top">Harttamponnade</td>
              <td className="px-4 py-3 align-top">
                Perforatie van de hartwand geeft bloeding in het hartzakje; dit drukt het hart dicht
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Specifiek bij AVNRT</td>
              <td className="px-4 py-3 align-top">AV-blok</td>
              <td className="px-4 py-3 align-top">Beschadiging van de AV-knoop door nabijgelegen ablatie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Linkszijdige ablatie</td>
              <td className="px-4 py-3 align-top">Herseninfarct / stroke</td>
              <td className="px-4 py-3 align-top">Trombus op katheter of wond kan losschieten naar de hersenen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">PVI</td>
              <td className="px-4 py-3 align-top">Longvenenstenose</td>
              <td className="px-4 py-3 align-top">Te diep branden in de longvene kan vernauwing geven</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">PVI</td>
              <td className="px-4 py-3 align-top">Atrio-oesofageale fistel</td>
              <td className="px-4 py-3 align-top">
                Zeldzame, zeer gevaarlijke verbinding tussen hart en slokdarm door hitte
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij linkszijdige procedures kan een bloedstolsel ontstaan op de katheter of op de ablatiewond. Als dat losschiet, gaat het vaak via de aorta richting de hersenen. Daarom krijgen patiënten tijdens de procedure veel bloedverdunners, zoals heparine.
      </p>
      <p>
        Een harttamponnade is een spoedprobleem: als de katheter door de hartwand prikt, komt er bloed in het pericard. Omdat het hartzakje stug is, drukt dat het hart dicht. Dan is drainage nodig via een pericardiocentese.
      </p>
      <p>
        <span className="font-semibold">Aandachtspunt:</span>
        {'  '}
        Waarom is een atrio-oesofageale fistel zo ernstig?{`  `}
        Kort antwoord: omdat de slokdarm direct achter het linker atrium ligt en hitte daar een gevaarlijke verbinding kan veroorzaken.
      </p>
    </div>
  )
}
