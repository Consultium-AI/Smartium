export default function Sect08HoeVerschillendRisicoPerGen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe verschillend is het risico per gen?</h2>
      <p>
        De kans op verschillende vormen van kanker hangt sterk af van het betrokken MMR-gen. MLH1 en MSH2 geven over het
        algemeen hogere risico’s dan PMS2. MSH6 zit daar tussenin.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. Gene-specifieke kankerrisico’s bij Lynchsyndroom
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">MMR-gen</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">CRC</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Endometriumcarcinoom
                </th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Ovariumcarcinoom
                </th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Urotheelcelcarcinoom
                </th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Maagcarcinoom</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold min-w-[12rem]">
                  Dunne darm / pancreas / galwegen / hersenen
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">MLH1</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">30–60%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">30–50%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">5–10%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">~5%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">~5%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">≤5%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">MSH2</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">30–60%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">30–50%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">10–20%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">10–15%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">5–10%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">&lt;5%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">MSH6</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">20–40%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">20–50%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">5–10%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">&lt;5%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">&lt;3%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">&lt;5%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">PMS2</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">5–15%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">10–15%</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">niet verhoogd</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">niet verhoogd</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">niet verhoogd</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">niet verhoogd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De belangrijkste boodschap hier is dat Lynchsyndroom geen éénvormig syndroom is. De ernst en het tumorprofiel
        verschillen per gen. Vooral MLH1 en MSH2 geven doorgaans een ernstiger beeld. PMS2 geeft een beperktere
        risicotoename, vooral voor CRC en endometriumcarcinoom.
      </p>
    </div>
  )
}
