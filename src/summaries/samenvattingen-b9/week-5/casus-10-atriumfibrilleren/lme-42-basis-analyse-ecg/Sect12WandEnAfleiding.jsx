export default function Sect12WandEnAfleiding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke wand hoort bij welke afleiding?</h2>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Wand en afleiding</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wand / gebied</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Afleidingen</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top"><span className="font-semibold">Onderwand</span></td>
              <td className="px-4 py-3 align-top">II, III, aVF</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top"><span className="font-semibold">Septum / rechterventrikel</span></td>
              <td className="px-4 py-3 align-top">V1, V2</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top"><span className="font-semibold">Voorwand</span></td>
              <td className="px-4 py-3 align-top">V3, V4</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top"><span className="font-semibold">Zijwand</span></td>
              <td className="px-4 py-3 align-top">I, aVL, V5, V6</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Bij de coronairanatomie hoort:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>RCA: onderwand → II, III, aVF</li>
        <li>LAD: voorwand → V1–V4</li>
        <li>RCX: zijwand → I, aVL, V5, V6</li>
      </ul>
    </div>
  )
}
