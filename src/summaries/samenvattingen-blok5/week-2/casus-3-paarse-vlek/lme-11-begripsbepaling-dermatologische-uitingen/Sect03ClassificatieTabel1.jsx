export default function Sect03ClassificatieTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Classificatie van vasculitis</h2>
      <p>
        Vasculitis wordt ingedeeld op basis van de grootte van de aangetaste bloedvaten: grote, middelgrote en kleine
        bloedvaten. Die indeling is belangrijk, omdat de kliniek sterk kan verschillen per vatgrootte.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Indeling van vasculitis op basis van vatgrootte
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vatgrootte
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden van bloedvaten
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk van het beeld
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kleine bloedvaten</td>
              <td className="px-4 py-3 align-top">kleine arteriolen, capillairen, venulen</td>
              <td className="px-4 py-3 align-top">vaak huidafwijkingen, soms systeemziekte</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Middelgrote bloedvaten
              </td>
              <td className="px-4 py-3 align-top">a. renalis, hepatica, coronaria, mesenterica</td>
              <td className="px-4 py-3 align-top">huidafwijkingen kunnen dieper liggen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Grote bloedvaten</td>
              <td className="px-4 py-3 align-top">aorta, a. temporalis</td>
              <td className="px-4 py-3 align-top">vooral systemische klachten, zelden directe huidafwijkingen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Bij kleine vaten zijn er twee belangrijke pathofysiologische mechanismen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ANCA-geassocieerde vasculitis</li>
        <li>Immuuncomplex-vasculitis</li>
      </ul>
    </div>
  )
}
