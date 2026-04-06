export default function Sect06Kosteneffectiviteitsvlak() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het kosteneffectiviteitsvlak</h2>
      <p>De IKER moet je niet los zien van het kosteneffectiviteitsvlak. In dat vlak staan:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>op de verticale as: het verschil in kosten</li>
        <li>op de horizontale as: het verschil in effecten</li>
      </ul>
      <p>Daardoor ontstaan vier kwadranten.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. De vier kwadranten van het kosteneffectiviteitsvlak</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600/80">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/70">
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Kwadrant</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Nieuwe behandeling is…</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600/80">
            <tr>
              <td className="px-3 py-2 align-top">Noordoost</td>
              <td className="px-3 py-2 align-top">duurder en effectiever</td>
              <td className="px-3 py-2 align-top">mogelijk gunstig, hangt af van drempelwaarde</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Noordwest</td>
              <td className="px-3 py-2 align-top">duurder en minder effectief</td>
              <td className="px-3 py-2 align-top">ongunstig</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Zuidoost</td>
              <td className="px-3 py-2 align-top">goedkoper en effectiever</td>
              <td className="px-3 py-2 align-top">gunstig, dominant</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Zuidwest</td>
              <td className="px-3 py-2 align-top">goedkoper en minder effectief</td>
              <td className="px-3 py-2 align-top">mogelijk aanvaardbaar, hangt af van drempelwaarde</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijk punt uit de module is dat een IKER op zichzelf niet genoeg zegt. Je moet ook weten in welk kwadrant
        het resultaat ligt.
      </p>
    </div>
  )
}
