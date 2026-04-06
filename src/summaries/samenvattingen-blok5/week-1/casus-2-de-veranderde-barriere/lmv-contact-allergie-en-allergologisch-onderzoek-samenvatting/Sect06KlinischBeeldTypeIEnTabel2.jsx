export default function Sect06KlinischBeeldTypeIEnTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinisch beeld van type I-reacties</h2>
      <p>De ernst van type I-reacties kan worden gegradeerd volgens Müller.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Gradering van type I-reacties volgens Müller
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Graad
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Klinisch beeld
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">1</td>
              <td className="px-4 py-3 align-top">Urticaria, jeuk</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2</td>
              <td className="px-4 py-3 align-top">Urticaria en angio-oedeem, gastro-intestinale verschijnselen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">3</td>
              <td className="px-4 py-3 align-top">Zoals graad 2, maar met dyspneu</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">4</td>
              <td className="px-4 py-3 align-top">Tensiedaling met anafylactische shock</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Urticaria zijn vluchtige, verheven, jeukende zwellingen van de huid. Angio-oedeem is een diepere zwelling, vaak
        rond de ogen, lippen of in het gelaat. Als daar ook dyspneu bijkomt, wordt de reactie ernstiger. Bij tensiedaling
        is sprake van een levensbedreigend beeld: anafylactische shock.
      </p>
    </div>
  )
}
