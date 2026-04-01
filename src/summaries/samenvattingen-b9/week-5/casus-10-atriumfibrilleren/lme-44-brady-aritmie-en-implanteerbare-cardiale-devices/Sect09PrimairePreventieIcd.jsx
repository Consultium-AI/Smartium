export default function Sect09PrimairePreventieIcd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Primaire preventie met ICD</h2>
      <p>
        Primaire preventie is bedoeld voor patiënten die nog nooit een ritmestoornis hebben gehad, maar wel een hoog risico lopen. Er zijn twee hoofdgroepen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Patiënten met hartfalen</span>: de bekende <span className="font-semibold">“35%-regel”</span>. Bij een <span className="font-semibold">LVEF ≤ 35%</span> ondanks optimale medicatie komt een ICD in beeld.
        </li>
        <li>
          <span className="font-semibold">Erfelijke aandoeningen / genetisch risico</span>: bijvoorbeeld <span className="font-semibold">hypertrofische cardiomyopathie (HCM)</span>, <span className="font-semibold">ARVC</span>,{' '}
          <span className="font-semibold">Lange-QT-syndroom</span> en <span className="font-semibold">Brugada-syndroom</span>.
        </li>
      </ul>
      <p>
        Bij HCM is de hartspier verdikt. Het risico stijgt bij een wanddikte boven <span className="font-semibold">30 mm</span> of bij onverklaarde wegrakingen. HCM is berucht omdat plotselinge dood het eerste symptoom kan zijn, vaak tijdens inspanning.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Hoofdindicaties voor ICD</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Indicatietype</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kern</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Overleefde VT/VF of circulatiestilstand</td>
              <td className="px-4 py-3 align-top">Secundaire preventie</td>
              <td className="px-4 py-3 align-top">ICD na reanimatie, tenzij reversibele oorzaak</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hartfalen met LVEF ≤ 35%</td>
              <td className="px-4 py-3 align-top">Primaire preventie</td>
              <td className="px-4 py-3 align-top">ICD vóórdat een eerste ritmestoornis optreedt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">HCM / ARVC / kanaalopathie</td>
              <td className="px-4 py-3 align-top">Primaire preventie</td>
              <td className="px-4 py-3 align-top">ICD bij hoog-risico profiel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
