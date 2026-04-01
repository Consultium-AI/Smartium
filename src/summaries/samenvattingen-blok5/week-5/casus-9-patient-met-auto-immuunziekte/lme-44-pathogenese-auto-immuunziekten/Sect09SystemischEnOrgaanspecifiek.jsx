export default function Sect09SystemischEnOrgaanspecifiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Systemische en orgaanspecifieke auto-immuunziekten
      </h2>
      <p>
        Auto-immuunziekten kunnen grofweg worden ingedeeld in systemische en orgaanspecifieke ziekten.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 5. Systemische versus orgaanspecifieke auto-immuunziekten
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Systemisch</td>
              <td className="px-4 py-3 align-top">Meerdere orgaansystemen betrokken</td>
              <td className="px-4 py-3 align-top">
                Ziekte van Sjögren, systemische lupus erythematodes, reumatoïde artritis
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Orgaanspecifiek</td>
              <td className="px-4 py-3 align-top">Vooral één orgaan of één orgaansysteem betrokken</td>
              <td className="px-4 py-3 align-top">Pemphigus vulgaris, diabetes mellitus type 1, myasthenia gravis</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij SLE, Sjögren en reumatoïde artritis zijn meerdere orgaansystemen betrokken. Bij diabetes mellitus
        type 1, myasthenia gravis en pemphigus vulgaris is in principe vooral één orgaan of orgaansysteem
        aangedaan.
      </p>
    </div>
  )
}
