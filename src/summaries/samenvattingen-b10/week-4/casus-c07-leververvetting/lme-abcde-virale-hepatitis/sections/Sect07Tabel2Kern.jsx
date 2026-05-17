export default function Sect07Tabel2Kern() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 2. Kern om te onthouden per ziektebeeld</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Ziekte</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kernzin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">PBC</td>
              <td className="p-3 align-top">
                Auto-immuun aantasting van kleine intrahepatische galwegen met <strong className="text-slate-900 dark:text-slate-100">AMA-positieve cholestase</strong>
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">PSC</td>
              <td className="p-3 align-top">
                Progressieve sclerose en ontsteking van intra- en extrahepatische galwegen, vaak met <strong className="text-slate-900 dark:text-slate-100">IBD</strong> en <strong className="text-slate-900 dark:text-slate-100">typische MRCP-afwijkingen</strong>
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">AIH</td>
              <td className="p-3 align-top">
                Auto-immuun ontsteking van de lever met <strong className="text-slate-900 dark:text-slate-100">hoge transaminasen</strong>, <strong className="text-slate-900 dark:text-slate-100">hoog IgG</strong> en behandeling met <strong className="text-slate-900 dark:text-slate-100">prednison/immunosuppressie</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
