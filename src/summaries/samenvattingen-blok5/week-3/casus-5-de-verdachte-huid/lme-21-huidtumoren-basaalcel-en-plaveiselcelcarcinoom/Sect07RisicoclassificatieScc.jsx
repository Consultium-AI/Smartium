export default function Sect07RisicoclassificatieScc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicoclassificatie</h2>
      <p>
        Om een betere inschatting te maken van hoog-risicopatiënten wordt naast de TNM-classificatie ook gekeken naar
        aanvullende histologische factoren:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>lymfovasculaire invasie;</li>
        <li>slecht gedifferentieerd of ongedifferentieerd;</li>
        <li>dermale perineurale invasie van elke zenuwdiameter aanwezig buiten de contour van de tumor.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Risicoclassificatie bij cutaan plaveiselcelcarcinoom
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Risicogroep
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Laag risico</td>
              <td className="px-4 py-3 align-top">T1, tumor ≤ 2 cm</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Intermediair risico</td>
              <td className="px-4 py-3 align-top">T2, tumor &gt; 2 cm en ≤ 4 cm, of T1 met extra ongunstige kenmerken</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hoog risico</td>
              <td className="px-4 py-3 align-top">T3-T4, of recidieftumor, of T2 met extra ongunstige kenmerken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Deze risicoclassificatie helpt bij het kiezen van diagnostiek, behandeling en follow-up.</p>
    </div>
  )
}
