export default function Sect11BehandelingGpaTabel4() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Behandeling van GPA</h3>
      <p>
        ANCA-geassocieerde vasculitis veroorzaakt zonder behandeling ernstige schade. Daarom is de behandeling agressief
        en gericht op remissie-inductie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Middelen bij remissie-inductie van GPA
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Middel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Rol
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Hoge dosis corticosteroïden, meestal prednisolon
              </td>
              <td className="px-4 py-3 align-top">Worden vrijwel altijd direct gestart omdat ze snel werken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Rituximab</td>
              <td className="px-4 py-3 align-top">
                Anti-CD20; vermindert B-cellen en daarmee de productie van pathogene antistoffen
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cyclofosfamide</td>
              <td className="px-4 py-3 align-top">Klassiek middel dat vroeger veel werd gebruikt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Avacopan</td>
              <td className="px-4 py-3 align-top">
                Blokkeert de C5a-route; kan als alternatief voor prednisolon worden gebruikt
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Prednisolon wordt bijna altijd meteen gegeven omdat het snel effect heeft. Rituximab is tegenwoordig vaak een
        logische keuze, omdat ANCAs ook pathogeen zijn en B-cellen daarbij een rol spelen. Cyclofosfamide werd vroeger
        vaker gebruikt. Avacopan blokkeert C5a en remt zo de neutrofielen die de vaatwand beschadigen; het kan dus een
        alternatief voor prednisolon zijn, maar wordt minder vaak ingezet omdat het relatief duur is.
      </p>
    </div>
  )
}
