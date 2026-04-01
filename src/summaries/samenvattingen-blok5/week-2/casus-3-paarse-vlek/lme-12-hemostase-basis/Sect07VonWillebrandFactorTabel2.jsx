export default function Sect07VonWillebrandFactorTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Von Willebrand factor in het kort</h3>
      <p>
        Von Willebrand factor is een stof in het bloed die normaal in een ronde, inactieve vorm rondzweeft en geen contact
        heeft met bloedplaatjes. Als er schade ontstaat en het onderliggende collageen bloot komt te liggen, dan:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hecht vWF zich aan het collageen;</li>
        <li>strekt vWF zich uit tot een kleverige draad;</li>
        <li>kunnen bloedplaatjes eraan blijven hangen.</li>
      </ul>
      <p>
        Daardoor blijven bloedplaatjes niet alleen op de plek van schade, maar ook aan elkaar plakken. De bloedplaatjes
        rollen nog mee met de bloedstroom, maar worden steeds sterker vastgezet. Samen met de interactie tussen vWF en
        bloedplaatjes worden ze actief en veranderen ze van vorm.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Functies van Von Willebrand factor</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Functie van vWF
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat betekent dit?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Opslag in endotheel en vrijkomen bij beschadiging
              </td>
              <td className="px-4 py-3 align-top">vWF komt beschikbaar op de plek van letsel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lijmstof voor bloedplaatjes</td>
              <td className="px-4 py-3 align-top">Helpt bloedplaatjes aan subendotheel en aan elkaar hechten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Draagt factor VIII</td>
              <td className="px-4 py-3 align-top">Verlengt de halfwaardetijd van factor VIII</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Klinische betekenis</td>
              <td className="px-4 py-3 align-top">Tekort leidt tot bloedingsneiging, zoals bij ziekte van Von Willebrand</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een tekort aan Von Willebrand factor leidt tot bloedingsneiging. Dat is de ziekte van Von Willebrand.
      </p>
    </div>
  )
}
