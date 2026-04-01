export default function Sect10Tabel3Genen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Belangrijke genen bij erfelijke of familiaire borstkanker
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type risico
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Lifetime risico op borstkanker
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Lifetime risico op eierstokkanker
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">BRCA1</td>
              <td className="px-4 py-3 align-top">Hoog risico</td>
              <td className="px-4 py-3 align-top">60-80%</td>
              <td className="px-4 py-3 align-top">35-45%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">BRCA2</td>
              <td className="px-4 py-3 align-top">Hoog risico</td>
              <td className="px-4 py-3 align-top">60-80%</td>
              <td className="px-4 py-3 align-top">10-20%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PALB2</td>
              <td className="px-4 py-3 align-top">Hoog risico</td>
              <td className="px-4 py-3 align-top">45-65%</td>
              <td className="px-4 py-3 align-top">3-5%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CHEK2</td>
              <td className="px-4 py-3 align-top">Matig verhoogd risico</td>
              <td className="px-4 py-3 align-top">35-55%</td>
              <td className="px-4 py-3 align-top">Niet verhoogd</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">ATM</td>
              <td className="px-4 py-3 align-top">Matig verhoogd risico</td>
              <td className="px-4 py-3 align-top">20-45%</td>
              <td className="px-4 py-3 align-top">&lt;3%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">RAD51C</td>
              <td className="px-4 py-3 align-top">Matig verhoogd risico</td>
              <td className="px-4 py-3 align-top">15-30%</td>
              <td className="px-4 py-3 align-top">5-13%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">RAD51D</td>
              <td className="px-4 py-3 align-top">Matig verhoogd risico</td>
              <td className="px-4 py-3 align-top">15-30%</td>
              <td className="px-4 py-3 align-top">5-13%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">BARD1</td>
              <td className="px-4 py-3 align-top">Matig verhoogd risico</td>
              <td className="px-4 py-3 align-top">15-30%</td>
              <td className="px-4 py-3 align-top">Niet verhoogd</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">BRIP1</td>
              <td className="px-4 py-3 align-top">Matig verhoogd risico</td>
              <td className="px-4 py-3 align-top">Niet verhoogd</td>
              <td className="px-4 py-3 align-top">6%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij een BRCA2-mutatie is dus sprake van een hoge kans op borstkanker en ook een verhoogd risico op
        eierstokkanker.
      </p>
    </div>
  )
}
