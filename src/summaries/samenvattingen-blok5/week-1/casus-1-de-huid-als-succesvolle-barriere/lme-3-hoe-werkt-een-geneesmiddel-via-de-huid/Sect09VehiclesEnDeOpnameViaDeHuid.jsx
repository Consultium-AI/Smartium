export default function Sect09VehiclesEnDeOpnameViaDeHuid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vehicles en de opname via de huid</h2>
      <p>
        De vehicle is de drager van het geneesmiddel. De vehicle kan de opname via de huid duidelijk beïnvloeden. Uit de
        stof blijkt dat een uitgedroogde huid geneesmiddelen slechter opneemt. De meeste geneesmiddelen zijn namelijk
        relatief hydrofiel, terwijl de huid juist zo is opgebouwd dat zij water binnen én buiten houdt door haar vetrijke
        structuur.
      </p>
      <p>
        Een belangrijke hypothese hierbij is de Aqueous Pore Hypothesis. Die stelt dat lipiden in de huid samen poriën
        vormen, waardoor ook hydrofiele stoffen toch door de huid kunnen diffunderen.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type vehicle
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Effect
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Occlusive dressings</td>
              <td className="px-4 py-3 align-top">Films, pleisters, transdermale patches</td>
              <td className="px-4 py-3 align-top">Voorkomen waterverlies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lipofiele vehicle</td>
              <td className="px-4 py-3 align-top">Paraffines, oliën, vetten, wassen, alcoholen, esters, siliconen</td>
              <td className="px-4 py-3 align-top">Voorkomen waterverlies</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Absorption base</td>
              <td className="px-4 py-3 align-top">Anhydrous lipids ± emulsifiers</td>
              <td className="px-4 py-3 align-top">Voorkomen waterverlies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Emulsifying base</td>
              <td className="px-4 py-3 align-top">Anhydrous lipids ± emulsifiers</td>
              <td className="px-4 py-3 align-top">Voorkomen waterverlies</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Water-oil emulsion</td>
              <td className="px-4 py-3 align-top">Oily creams</td>
              <td className="px-4 py-3 align-top">Remt waterverlies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Oil-water emulsion</td>
              <td className="px-4 py-3 align-top">Aqueous creams</td>
              <td className="px-4 py-3 align-top">Kan water afgeven</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De keuze van de vehicle is belangrijk, omdat een geneesmiddel via de huid toegediend moet worden in een vorm die
        goed past bij de huidbarrière. Er is dus een balans nodig tussen hydrofiele en lipofiele eigenschappen voor
        optimale opname.
      </p>
    </div>
  )
}
