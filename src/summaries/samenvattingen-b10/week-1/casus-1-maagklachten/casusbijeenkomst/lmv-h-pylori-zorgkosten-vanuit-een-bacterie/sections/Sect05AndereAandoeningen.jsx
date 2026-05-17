export default function Sect05AndereAandoeningen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        <em>H. pylori</em> en andere aandoeningen
      </h2>
      <p>
        <em>H. pylori</em> speelt niet alleen een rol bij maagkanker, maar ook bij andere aandoeningen. De relatieve risico’s zijn daarbij verschillend. Voor peptisch ulcusziekte is het risico het hoogst, voor gastrisch lymfoom ook verhoogd, en voor dyspepsie minder sterk.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. <em>H. pylori</em> en andere aandoeningen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Aandoening
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 text-right">
                  Relatief risico (RR)
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Opmerking
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Peptisch ulcusziekte</td>
                <td className="px-4 py-3 align-top text-right tabular-nums">4.1</td>
                <td className="px-4 py-3 align-top">Sterk verband</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Gastrisch lymfoom</td>
                <td className="px-4 py-3 align-top text-right tabular-nums">2.1</td>
                <td className="px-4 py-3 align-top">Verhoogd verband</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Dyspepsie</td>
                <td className="px-4 py-3 align-top text-right tabular-nums">1.2</td>
                <td className="px-4 py-3 align-top">Licht verhoogd verband</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Colorectale kanker</td>
                <td className="px-4 py-3 align-top text-right tabular-nums">1.5</td>
                <td className="px-4 py-3 align-top">Causaliteit is niet aangetoond en blijft onzeker</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Bij colorectal kanker is dus een mogelijk verband genoemd, maar de causaliteit is onzeker. Dat betekent dat je dit niet op dezelfde manier moet behandelen als de duidelijkere associaties met maagkanker of ulcusziekte.
      </p>
    </div>
  )
}
