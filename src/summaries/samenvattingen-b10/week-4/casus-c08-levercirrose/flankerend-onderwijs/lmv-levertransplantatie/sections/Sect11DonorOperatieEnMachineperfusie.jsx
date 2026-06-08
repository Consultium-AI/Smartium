export default function Sect11DonorOperatieEnMachineperfusie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Donor, operatie en machineperfusie</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Donorkwaliteit en donorwet</h3>
      <p>
        De kwaliteit van de donor is belangrijk voor het resultaat. Er wordt ook gekeken naar de realiteit van donorselectie: de ideale donor bestaat vaak niet. Door de nieuwe donorwet is het aantal donoren sinds 2022 toegenomen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Machineperfusie</h3>
      <p>Machineperfusie wordt gebruikt om organen beter te bewaren of te beoordelen.</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Vorm</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Doel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">DHOPE</td>
              <td className="px-4 py-3 align-top">ex-situ, koud</td>
              <td className="px-4 py-3 align-top">galwegen optimaliseren, geen functietest</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">COR NMP</td>
              <td className="px-4 py-3 align-top">ex-situ, warm</td>
              <td className="px-4 py-3 align-top">functie testen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">NRP</td>
              <td className="px-4 py-3 align-top">in situ</td>
              <td className="px-4 py-3 align-top">functie testen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">De operatie</h3>
      <p>Bij de transplantatie worden verschillende verbindingen gemaakt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">vena cava</strong> van de donor met de levervenen van de ontvanger;
        </li>
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">arteria hepatica</strong>;
        </li>
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">vena porta</strong>;
        </li>
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">galweg</strong>.
        </li>
      </ul>
      <p>Voor de galweg zijn er twee belangrijke technieken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">duct-to-duct anastomose</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">hepaticojejunostomie volgens Roux-Y</strong>.
        </li>
      </ul>
    </div>
  )
}
