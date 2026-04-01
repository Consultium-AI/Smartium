export default function Sect04OnderzoekInBeenmergEnBloed() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Onderzoek in beenmerg en bloed</h2>
      <p>Bij de diagnostiek wordt gekeken naar twee sporen: beenmergonderzoek en M-proteïneonderzoek in bloed.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Onderzoek bij diagnose en follow-up
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderzoek
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat meet je?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waarvoor gebruik je het?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Beenmergaspiraat</td>
              <td className="px-4 py-3 align-top">Losse cellen, cytologie/morfologie</td>
              <td className="px-4 py-3 align-top">Aantal plasmacellen beoordelen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Beenmergbiopt</td>
              <td className="px-4 py-3 align-top">Weefsel als geheel, histologie</td>
              <td className="px-4 py-3 align-top">Verdere beoordeling van infiltratie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Flowcytometrie</td>
              <td className="px-4 py-3 align-top">Monoklonaliteit van cellen</td>
              <td className="px-4 py-3 align-top">Vaststellen van een klonale populatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cytogenetica</td>
              <td className="px-4 py-3 align-top">Chromosomale afwijkingen</td>
              <td className="px-4 py-3 align-top">Aanvullende karakterisering</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Serum-eiwitelektroforese (SPE)
              </td>
              <td className="px-4 py-3 align-top">Hoeveelheid M-proteïne</td>
              <td className="px-4 py-3 align-top">Opsporen en volgen van het M-spike</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Immunofixatie (IFE)</td>
              <td className="px-4 py-3 align-top">Type M-proteïne</td>
              <td className="px-4 py-3 align-top">Classificeren van de zware en lichte keten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Vrije lichte ketens (FLC)
              </td>
              <td className="px-4 py-3 align-top">Kappa- en lambda-waarden</td>
              <td className="px-4 py-3 align-top">Vooral nuttig bij lichte-ketenziekte en snelle responsbeoordeling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                MRD-technieken (studies)
              </td>
              <td className="px-4 py-3 align-top">Minimaal residuele ziekte</td>
              <td className="px-4 py-3 align-top">NGS of NGF</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Massaspectrometrie (studies)
              </td>
              <td className="px-4 py-3 align-top">Zeer gevoelige detectie van M-proteïne</td>
              <td className="px-4 py-3 align-top">Toekomstige diagnostiek en follow-up</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
