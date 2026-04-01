export default function Sect08LeefstijlEnTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Leefstijl: altijd het startpunt</h2>
      <p>
        Leefstijladviezen vormen de basis van de behandeling van CVRM. Dat geldt voor vrijwel iedereen, met of zonder medicatie. De belangrijkste leefstijlmaatregelen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>voldoende bewegen;</li>
        <li>niet te veel calorieën;</li>
        <li>niet te veel verzadigde vetten;</li>
        <li>niet roken;</li>
        <li>matig met alcohol;</li>
        <li>niet te veel stress;</li>
        <li>voldoende voedingsvezels;</li>
        <li>koffie is een punt waarover de meningen nog verdeeld zijn.</li>
      </ul>
      <p>
        Gewichtsverlies bij overgewicht, bijvoorbeeld 5–10% van het lichaamsgewicht, kan de bloeddruk duidelijk verlagen. Minder zout eten, meer groente en fruit en een voedingspatroon zoals het DASH-dieet helpen ook. Regelmatige beweging is essentieel: minimaal 150 minuten per week matig intensief, zoals stevig wandelen of fietsen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Wie kan helpen bij leefstijlverandering?</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Zorgverlener</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden van begeleiding</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Huisarts</td>
              <td className="px-4 py-3 align-top">Stressreductie, stoppen met roken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Leefstijlcoach</td>
              <td className="px-4 py-3 align-top">Algemene voedingsadviezen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Diëtist</td>
              <td className="px-4 py-3 align-top">Zoutinname, verdeling van calorieën, verdeling van vetinname</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Fysiotherapeut</td>
              <td className="px-4 py-3 align-top">Specifieke adviezen rondom beweging</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Leefstijlmaatregelen hebben doorgaans een beperkt effect op het LDL-cholesterol, ongeveer 5–15% reductie, maar ze zijn wel belangrijk voor het totale cardiovasculaire risico.
      </p>
    </div>
  )
}
