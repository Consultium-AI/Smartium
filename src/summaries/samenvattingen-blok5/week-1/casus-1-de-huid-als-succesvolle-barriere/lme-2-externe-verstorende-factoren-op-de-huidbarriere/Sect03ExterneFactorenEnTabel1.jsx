export default function Sect03ExterneFactorenEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Externe factoren die de huidbarrière verstoren</h2>
      <p>
        De huidbarrière kan door verschillende externe factoren worden verstoord. Die factoren werken vaak via
        uitdroging, directe beschadiging van huidcellen, ontsteking of verstoring van de beschermende vetlaag.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Overzicht van belangrijke externe factoren en hun effect
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Factor
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Effect op de huidbarrière
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Omgevingsomstandigheden</td>
              <td className="px-4 py-3 align-top">Uitdroging, verbranding, bevriezing, irritatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">UV-straling</td>
              <td className="px-4 py-3 align-top">Veroudering, collageenafbraak, huidkanker, pigmentverandering</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mechanische belasting</td>
              <td className="px-4 py-3 align-top">Wonden, druknecrose, eelt, likdoorns</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ortho-ergische factoren</td>
              <td className="px-4 py-3 align-top">Irritatie en eczeem door schoonmaakmiddelen, zeep en chemicaliën</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Contactallergische factoren</td>
              <td className="px-4 py-3 align-top">Allergisch contacteczeem door een allergische immuunreactie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Leefstijl</td>
              <td className="px-4 py-3 align-top">Invloed van voeding, roken, stress en lichaamsbeweging</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Micro-organismen</td>
              <td className="px-4 py-3 align-top">Verstoring van microbioom en verergering van ontsteking</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
