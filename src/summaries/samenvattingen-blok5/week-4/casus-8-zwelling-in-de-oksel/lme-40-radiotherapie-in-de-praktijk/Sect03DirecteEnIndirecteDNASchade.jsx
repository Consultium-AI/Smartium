export default function Sect03DirecteEnIndirecteDNASchade() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Directe en indirecte DNA-schade</h2>
      <p>DNA-schade door straling kan op twee manieren ontstaan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Directe schade: de straling veroorzaakt de DNA-schade zelf. Dit is ongeveer 30% van de schade.</li>
        <li>
          Indirecte schade: door ioniserende straling ontstaan vrije zuurstofradicalen. Deze veroorzaken vervolgens
          DNA-schade. Dit is ongeveer 70% van de schade.
        </li>
      </ul>
      <p>Als de DNA-schade niet kan worden hersteld, leidt dit uiteindelijk tot celdood.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Kernbegrippen bij het werkingsmechanisme van radiotherapie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Begrip
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ioniserende straling</td>
              <td className="px-3 py-3 align-top">Straling die DNA-schade kan veroorzaken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Gray (Gy)</td>
              <td className="px-3 py-3 align-top">Eenheid van de geabsorbeerde dosis</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Directe schade</td>
              <td className="px-3 py-3 align-top">DNA-schade direct veroorzaakt door straling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Indirecte schade</td>
              <td className="px-3 py-3 align-top">DNA-schade via vrije zuurstofradicalen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Celdood</td>
              <td className="px-3 py-3 align-top">Gevolg van onherstelbare DNA-schade</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
