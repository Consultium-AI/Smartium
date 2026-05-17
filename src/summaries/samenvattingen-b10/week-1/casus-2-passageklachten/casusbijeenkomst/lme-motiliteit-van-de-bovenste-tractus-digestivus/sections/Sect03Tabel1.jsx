export default function Sect03Tabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 1. Kern van de normale motiliteit
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Structuur</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Belangrijkste functie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Slokdarm</td>
              <td className="p-3 align-top">Transport van bolus door peristaltiek</td>
            </tr>
            <tr>
              <td className="p-3 align-top">UES</td>
              <td className="p-3 align-top">Bescherming bovenin de slokdarm</td>
            </tr>
            <tr>
              <td className="p-3 align-top">LES</td>
              <td className="p-3 align-top">Anti-refluxbarrière</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Fundus</td>
              <td className="p-3 align-top">Opslag van voedsel en lucht</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Corpus</td>
              <td className="p-3 align-top">Mechanische en chemische vertering</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Antrum</td>
              <td className="p-3 align-top">Mengen en verpulveren</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Pylorus</td>
              <td className="p-3 align-top">Doorgang naar duodenum regelen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
