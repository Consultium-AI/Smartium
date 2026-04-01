export default function Sect10Immunosuppressie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Immunosuppressie</h2>
      <p>
        Zonder immuunsuppressie lukt transplantatie niet. De behandeling bestaat meestal uit twee fasen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>inductie: de eerste dagen tot weken, vaak met krachtige T-celremming of -depletie</li>
        <li>onderhoud: daarna langdurig, meestal met orale medicatie</li>
      </ul>
      <p>
        De standaard onderhoudsbehandeling bestaat uit tacrolimus, mycofenolaat mofetil en prednison. Soms wordt vooraf
        inductietherapie gegeven, bijvoorbeeld met ATG, alemtuzumab, basiliximab of rituximab.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Inductie- en onderhoudsmedicatie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Inductie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderhoud
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Rituximab</td>
              <td className="px-4 py-3 align-top">Mycofenolaat mofetil</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">ATG (anti-thymocyten globuline)</td>
              <td className="px-4 py-3 align-top">Tacrolimus</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Alemtuzumab</td>
              <td className="px-4 py-3 align-top">Belatacept</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Basiliximab</td>
              <td className="px-4 py-3 align-top">Prednison</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top" />
              <td className="px-4 py-3 align-top">Cyclosporine</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top" />
              <td className="px-4 py-3 align-top">Everolimus</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
