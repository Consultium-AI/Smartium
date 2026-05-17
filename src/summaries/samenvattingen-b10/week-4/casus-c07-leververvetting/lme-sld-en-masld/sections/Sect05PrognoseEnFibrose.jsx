export default function Sect05PrognoseEnFibrose() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Prognose en belang van fibrose</h2>
      <p>
        Hoewel steatose vaak voorkomt, bepaalt vooral de <strong className="text-slate-900 dark:text-slate-100">mate van fibrose</strong> de prognose bij SLD. Daarom is
        fibrose zo belangrijk in de klinische beoordeling.
      </p>
      <p>De ernst van leverfibrose correleert sterk met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">kans op cirrose</strong>;
        </li>
        <li>
          het ontstaan van <strong className="text-slate-900 dark:text-slate-100">levergerelateerde complicaties</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">levergerelateerde mortaliteit</strong> en <strong className="text-slate-900 dark:text-slate-100">totale mortaliteit</strong>.
        </li>
      </ul>
      <p>
        Patiënten met <strong className="text-slate-900 dark:text-slate-100">milde fibrose (F0–F1)</strong> hebben doorgaans een gunstige prognose. Patiënten met{' '}
        <strong className="text-slate-900 dark:text-slate-100">gevorderde fibrose (≥F2)</strong> lopen een duidelijk verhoogd risico. Daarom is{' '}
        <strong className="text-slate-900 dark:text-slate-100">F2</strong> een belangrijk punt in de screening: vanaf dit stadium spreekt men van{' '}
        <strong className="text-slate-900 dark:text-slate-100">klinisch relevante fibrose</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Fibrosestadia en betekenis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Stadium</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">F0</strong>
              </td>
              <td className="p-3 align-top">Geen fibrose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">F2</strong>
              </td>
              <td className="p-3 align-top">Klinisch relevante fibrose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">F4</strong>
              </td>
              <td className="p-3 align-top">Cirrhose</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hoe hoger het fibrosestadium, hoe groter het risico op levergerelateerde complicaties. Dit is klinisch belangrijk, omdat vroege stadia deels reversibel kunnen zijn
        en leefstijlinterventies daar beter effect hebben. Ook kunnen complicaties dan nog worden voorkomen.
      </p>
    </div>
  )
}
