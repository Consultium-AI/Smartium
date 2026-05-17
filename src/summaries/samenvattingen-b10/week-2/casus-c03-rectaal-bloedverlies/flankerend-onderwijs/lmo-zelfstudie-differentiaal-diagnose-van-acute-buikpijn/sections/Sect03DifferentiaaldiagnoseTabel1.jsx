export default function Sect03DifferentiaaldiagnoseTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Differentiaaldiagnose naar orgaansystemen</h2>
      <p>
        Een handige manier om buikpijn te benaderen is door de mogelijke oorzaken in te delen per orgaansysteem. Zo
        houd je overzicht en denk je vollediger.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Indeling van de differentiaaldiagnose bij buikpijn naar orgaansystemen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Orgaansysteem</th>
              <th className="px-4 py-3 font-semibold">Betekenis in de differentiaaldiagnose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Gastro-intestinaal (GI)</td>
              <td className="px-4 py-3 align-top">Oorzaken vanuit het maag-darmstelsel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Urogenitaal</td>
              <td className="px-4 py-3 align-top">Oorzaken vanuit urinewegen en geslachtsorganen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Vasculair</td>
              <td className="px-4 py-3 align-top">Oorzaken door problemen in de bloedvaten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Metabool</td>
              <td className="px-4 py-3 align-top">Oorzaken door verstoringen in de stofwisseling</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
