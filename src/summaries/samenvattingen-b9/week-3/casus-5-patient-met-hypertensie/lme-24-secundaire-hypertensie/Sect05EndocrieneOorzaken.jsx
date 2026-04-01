export default function Sect05EndocrieneOorzaken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Oorzaken van secundaire hypertensie</h2>
      <p>
        De belangrijkste oorzaken kun je grofweg verdelen in endocrien, renaal, vasculair, middelengebonden en zeldzaam genetisch.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Endocriene oorzaken</h3>
      <p>Hormonen kunnen een rol spelen bij bloeddrukstijging. Belangrijke voorbeelden zijn:</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Hormonen die de bloeddruk kunnen verhogen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Hormoon</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Rol bij bloeddrukstijging</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Aldosteron</td>
                <td className="px-4 py-3">Zout- en waterretentie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Noradrenaline</td>
                <td className="px-4 py-3">Vasoconstrictie en sympathische activatie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Schildklierhormoon</td>
                <td className="px-4 py-3">Kan bijdragen aan hypertensie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Angiotensine</td>
                <td className="px-4 py-3">Vasoconstrictie en stimulatie van aldosteron</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Renine</td>
                <td className="px-4 py-3">Activeert het RAAS</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Cortisol</td>
                <td className="px-4 py-3">Kan mineralocorticoïde effecten geven</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Adrenaline</td>
                <td className="px-4 py-3">Verhoogt bloeddruk via sympathische effecten</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Binnen de endocriene oorzaken is primair hyperaldosteronisme een belangrijke en goed te herkennen oorzaak.</p>
    </div>
  )
}
