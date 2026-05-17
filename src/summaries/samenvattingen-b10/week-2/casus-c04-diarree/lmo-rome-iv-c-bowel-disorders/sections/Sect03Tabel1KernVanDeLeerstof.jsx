export default function Sect03Tabel1KernVanDeLeerstof() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Kern van de leerstof
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Onderdeel</th>
              <th className="px-4 py-3 font-semibold">Wat je moet kennen</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Functionele darmziekten</td>
              <td className="px-4 py-3 align-top">Klachten zonder duidelijke organische oorzaak</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Organische darmziekten</td>
              <td className="px-4 py-3 align-top">Klachten met een aantoonbare lichamelijke oorzaak</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">PDS</td>
              <td className="px-4 py-3 align-top">Kernsymptomen en diagnostische criteria volgens Rome IV</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Rome IV</td>
              <td className="px-4 py-3 align-top">De criteria waarmee PDS wordt vastgesteld</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
