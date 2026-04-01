export default function Sect09HersentumorenIntroEnTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hersentumoren</h2>
      <p>Hersentumoren kunnen sterk verschillen in presentatie. De klachten hangen af van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de leeftijd;</li>
        <li>het ontwikkelingsniveau;</li>
        <li>de groeisnelheid;</li>
        <li>de mate van destructie van hersenweefsel;</li>
        <li>de locatie van de tumor.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Alarmsymptomen bij hersentumoren per leeftijd</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Leeftijd
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden van alarmsymptomen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">&lt; 4 jaar</td>
              <td className="px-3 py-3 align-top">
                Aanhoudend en herhaald braken, abnormale balans/looppatroon/coördinatie, abnormale oogbewegingen,
                gedragsverandering of lethargie, stuipen, abnormale positie van het hoofd, toenemende schedelomtrek
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">5–11 jaar</td>
              <td className="px-3 py-3 align-top">
                Aanhoudend en herhaald braken, aanhoudende of terugkerende hoofdpijn, abnormale balans/looppatroon/coördinatie,
                abnormale oogbewegingen, wazig of dubbelzien, gedragsverandering, stuipen, abnormale positie van het hoofd
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">12 jaar en ouder</td>
              <td className="px-3 py-3 align-top">
                Aanhoudend en herhaald braken, aanhoudende of terugkerende hoofdpijn, abnormale balans/looppatroon/coördinatie,
                abnormale oogbewegingen, wazig of dubbelzien, gedragsverandering, stuipen, vertraagde of versnelde puberteit
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
