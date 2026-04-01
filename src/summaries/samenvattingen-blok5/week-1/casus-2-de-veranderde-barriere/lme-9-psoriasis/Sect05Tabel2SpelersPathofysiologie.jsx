export default function Sect05Tabel2SpelersPathofysiologie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijke spelers in de pathofysiologie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Rol
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Keratinocyt</td>
              <td className="px-4 py-3 align-top">Raakt beschadigd en produceert ontstekingssignalen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">LL-37</td>
              <td className="px-4 py-3 align-top">Vormt complexen met RNA/DNA</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Plasmacytoïde dendritische cel
              </td>
              <td className="px-4 py-3 align-top">Produceert interferon-alfa</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Dermale dendritische cel
              </td>
              <td className="px-4 py-3 align-top">Produceert IL-12 en IL-23</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Th1/Th17-cellen</td>
              <td className="px-4 py-3 align-top">Maken o.a. TNF-alpha, IL-17 en IL-22</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Neutrofielen</td>
              <td className="px-4 py-3 align-top">Worden naar de huid gelokt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Gevolg in de huid</td>
              <td className="px-4 py-3 align-top">Acanthose, versnelde epidermale groei en plaquevorming</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandachtsvraagje: welke cytokine staat hier het meest centraal?{'  '}
        Mini-antwoord: TNF-alpha, met daarnaast een belangrijke rol voor Th1/Th17 en IL-17/IL-22.
      </p>
    </div>
  )
}
