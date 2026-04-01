export default function Sect04AutoImmuunDiabetesType1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Auto-immuun diabetes type 1</h2>
      <p>
        Bij type 1 diabetes mellitus (T1DM) worden de bètacellen van de eilandjes van Langerhans in de
        pancreas aangevallen. Deze cellen maken insuline. Zonder voldoende insuline kunnen lichaamscellen
        glucose niet goed opnemen, waardoor de bloedsuiker stijgt.
      </p>
      <p>
        De ontwikkeling van T1DM begint met een genetische gevoeligheid. MHC- en niet-MHC-gerelateerde
        moleculen bepalen in belangrijke mate of iemand vatbaar is voor T1DM. Vervolgens kan een trigger het
        immuunsysteem activeren, bijvoorbeeld een virusinfectie. Dan komen autoreactieve T-cellen in actie en
        kunnen auto-antistoffen aantoonbaar worden.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Stadia van type 1 diabetes</h3>
      <p>
        T1DM verloopt vaak al jaren voordat er duidelijke klachten ontstaan. De module verdeelt dit in
        stadia op basis van de glucosestatus en de mate van bètacelschade.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Stadia van auto-immuun diabetes type 1
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Stadium
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Stadium 0
              </td>
              <td className="px-4 py-3 align-top">Gezond, normale bloedglucose, wel al genetische aanleg</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Stadium 1
              </td>
              <td className="px-4 py-3 align-top">
                Auto-immuunaanval start; T-cellen worden geactiveerd en auto-antistoffen kunnen aantoonbaar
                zijn
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Stadium 2
              </td>
              <td className="px-4 py-3 align-top">
                Abnormale bloedglucosewaarden zijn aantoonbaar, maar nog geen formele diabetesdiagnose
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Stadium 3
              </td>
              <td className="px-4 py-3 align-top">
                Diabetes wordt klinisch vastgesteld op basis van klachten en gemeten bloedglucose; behandeling
                met insuline is nodig
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Stadium 4
              </td>
              <td className="px-4 py-3 align-top">Insulineafhankelijke fase met complicaties bij langdurige ziekte</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Belangrijk is dat pas 70–80% van de bètacellen vernietigd moet zijn voordat diabetes klinisch manifest
        wordt. Het auto-immuunproces kan dus al jarenlang bezig zijn voordat iemand echt ziek wordt.
      </p>
      <p>
        In T1DM zijn vooral CD8+ en CD4+ autoreactieve T-cellen betrokken bij de schade aan de bètacellen.
        Het ziektebeeld is dus vooral T-cel-gemedieerd. Een virusinfectie of een andere prikkel kan deze
        reactie op gang brengen. De klachten bij diagnose kunnen lijken op die van andere vormen van
        diabetes, maar T1DM ontstaat meestal sneller en wordt vaak op jongere leeftijd vastgesteld. De term
        “jeugddiabetes” wordt daarom wel eens gebruikt, maar de leeftijdsgrenzen zijn niet absoluut.
      </p>
    </div>
  )
}
