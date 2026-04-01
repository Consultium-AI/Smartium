export default function Sect06RotiEnCrab() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">ROTI en CRAB</h2>
      <p>
        Bij multipel myeloom worden orgaanschade en klinische kenmerken vaak samengevat met ROTI en CRAB.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. ROTI en CRAB</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Afkorting
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">ROTI</td>
              <td className="px-4 py-3 align-top">Related Organ and Tissue Impairment</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">C</td>
              <td className="px-4 py-3 align-top">HyperCalciëmie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">R</td>
              <td className="px-4 py-3 align-top">Renaal falen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">A</td>
              <td className="px-4 py-3 align-top">Anemie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">B</td>
              <td className="px-4 py-3 align-top">Botlesies / botafwijkingen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        CRAB beschrijft dus de klassieke orgaanschade bij multipel myeloom. Deze schade is klinisch belangrijk, omdat zij
        laat zien dat de ziekte niet alleen aanwezig is, maar ook echt schade veroorzaakt.
      </p>
    </div>
  )
}
