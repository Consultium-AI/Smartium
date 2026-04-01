export default function Sect03PrimaireVersusSecundaire() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Primaire versus secundaire hypertensie</h2>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Belangrijkste verschillen tussen primaire en secundaire hypertensie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Primaire hypertensie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Secundaire hypertensie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">90–95% van alle hypertensie</td>
                <td className="px-4 py-3 align-top">5–10% van alle hypertensie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Multifactorieel</td>
                <td className="px-4 py-3 align-top">Duidelijke onderliggende oorzaak, eventueel behandelbaar</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Vaak positieve familie-anamnese, {'\u201cpolygenetisch\u201d'}</td>
                <td className="px-4 py-3 align-top">Soms een specifieke oorzaak of specifieke aanwijzing in de anamnese/het onderzoek</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Vroeger werd ook wel de term essentiële hypertensie gebruikt. Die term wordt hier niet meer gebruikt; men spreekt liever van primaire hypertensie.</p>
    </div>
  )
}
