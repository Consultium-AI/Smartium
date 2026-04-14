export default function Sect12Tabel3KernDiagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 3. Kern van de diagnostische benadering</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Onderdeel
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Belang
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Klinische criteria</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Laten zien welke organen of systemen betrokken zijn
              </td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Immunologische criteria</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Tonen auto-immuunactiviteit aan</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">ANA</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Belangrijk ingangspunt in de classificatie</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nierbiopt</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Kan doorslaggevend zijn bij lupus nefritis</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Combinatie van criteria</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nodig om SLE aannemelijk te maken</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
