export default function Sect03IndelingTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Indeling van vasculitiden op basis van vaatgrootte</h2>
      <p>
        Vasculitiden worden ingedeeld op basis van de grootte van de bloedvaten die vooral zijn aangedaan. Die indeling
        is handig, omdat de betrokken vaatgrootte veel zegt over het klinische beeld.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Indeling van vasculitiden op basis van vaatgrootte
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type vaat
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden van vaten
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden van vasculitis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Grote bloedvaten</td>
              <td className="px-4 py-3 align-top">Aorta en grote vertakkingen</td>
              <td className="px-4 py-3 align-top">Giant cell arteritis, ziekte van Takayasu</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Middelgrote bloedvaten</td>
              <td className="px-4 py-3 align-top">
                Arteriën die organen van bloed voorzien, zoals nier- en coronairarteriën
              </td>
              <td className="px-4 py-3 align-top">Middelvatvasculitiden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kleine bloedvaten</td>
              <td className="px-4 py-3 align-top">Arteriolen, capillairen en venulen</td>
              <td className="px-4 py-3 align-top">ANCA-geassocieerde vasculitis, immuuncomplexvasculitis</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandacht: welk vat hoort bij welke categorie?{'  '}
        Mini-antwoord: de aorta is een groot bloedvat, een nierarterie of coronairarterie is middelgroot, en een
        glomerulus hoort bij de kleine bloedvaten.
      </p>
    </div>
  )
}
