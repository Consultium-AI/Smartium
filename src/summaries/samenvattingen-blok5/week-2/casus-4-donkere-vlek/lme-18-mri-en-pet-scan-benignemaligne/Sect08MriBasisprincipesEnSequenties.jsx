export default function Sect08MriBasisprincipesEnSequenties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">MRI: basisprincipes en sequenties</h2>
      <p>
        Bij MRI worden sterke magneetvelden en radiogolven gebruikt om gedetailleerde beelden van het lichaam te maken.
        Hierbij worden waterstofatomen in het lichaam als het ware “aangeslagen” en het uitgezonden signaal wordt
        opgevangen. Het grote voordeel is dat er geen ioniserende straling wordt gebruikt.
      </p>
      <p>
        MRI is bijzonder geschikt voor weke delen zoals organen, spieren, pezen en hersenweefsel. De techniek is echter
        gevoelig voor beweging en voor metalen voorwerpen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Belangrijkste MRI-sequenties</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Sequentie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waarvoor vooral geschikt?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T1</td>
              <td className="px-4 py-3 align-top">Anatomische details</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T2</td>
              <td className="px-4 py-3 align-top">Vocht en ontsteking</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FLAIR</td>
              <td className="px-4 py-3 align-top">Hersenen; goed voor het zichtbaar maken van oedeem</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">DWI</td>
              <td className="px-4 py-3 align-top">Acuut herseninfarct</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                T1 met intraveneus contrast (gadolinium)
              </td>
              <td className="px-4 py-3 align-top">Detectie van tumoren en ontstekingen/infecties</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
