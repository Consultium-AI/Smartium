export default function Sect06AlgemeneSymptomenTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Algemene symptomen van vasculitis</h2>
      <p>
        De klachten van vasculitis kunnen sterk variëren, afhankelijk van welke organen zijn aangedaan. Mogelijke
        symptomen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>algemene klachten zoals koorts, vermoeidheid en gewichtsverlies;</li>
        <li>dyspnoe en hoesten;</li>
        <li>buikpijn en maag-darmklachten;</li>
        <li>nierproblemen, zoals hematurie;</li>
        <li>neurologische klachten;</li>
        <li>huidafwijkingen.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Klachten die kunnen passen bij vasculitis
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Systeem
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mogelijke klachten
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Algemeen</td>
              <td className="px-4 py-3 align-top">koorts, vermoeidheid, gewichtsverlies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Longen</td>
              <td className="px-4 py-3 align-top">dyspnoe, hoesten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Maag-darmstelsel</td>
              <td className="px-4 py-3 align-top">buikpijn, maag-darmklachten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Nieren</td>
              <td className="px-4 py-3 align-top">hematurie, nierproblemen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Zenuwstelsel</td>
              <td className="px-4 py-3 align-top">neurologische klachten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Huid</td>
              <td className="px-4 py-3 align-top">purpura, petechiën, noduli, ulcera, necrose</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
