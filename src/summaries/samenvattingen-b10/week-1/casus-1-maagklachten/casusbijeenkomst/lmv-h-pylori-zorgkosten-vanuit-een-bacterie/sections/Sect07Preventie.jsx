export default function Sect07Preventie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Preventie van de ziektelast van <em>H. pylori</em>
      </h2>
      <p>Er zijn twee grote preventiestrategieën:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Primaire preventie</strong>
          <br />
          Hierbij gaat het om <em>H. pylori</em> screen-and-treat.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Secundaire preventie</strong>
          <br />
          Hierbij gaat het om endoscopische screening.
        </li>
      </ol>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 4. Preventiestrategieën
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Strategie
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Vorm
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Voorbeelden
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Primaire preventie</td>
                <td className="px-4 py-3 align-top">
                  <em>H. pylori</em> screen-and-treat
                </td>
                <td className="px-4 py-3 align-top">
                  Nationaal programma in Taiwan sinds 2026; richtlijn in EU-landen met hoog risico
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Secundaire preventie</td>
                <td className="px-4 py-3 align-top">Endoscopische screening</td>
                <td className="px-4 py-3 align-top">Nationale programma's in Zuid-Korea en Japan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        De preventie van deze ziekten kan dus zowel via testen en behandelen van <em>H. pylori</em> als via endoscopische
        opsporing van vroege afwijkingen.
      </p>
    </div>
  )
}
