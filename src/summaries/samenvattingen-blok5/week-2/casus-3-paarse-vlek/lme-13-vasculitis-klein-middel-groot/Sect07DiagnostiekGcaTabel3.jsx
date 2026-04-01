export default function Sect07DiagnostiekGcaTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek bij verdenking op GCA</h2>
      <p>
        Bij GCA worden vaak classificatiecriteria gebruikt. Die zijn in de dagelijkse praktijk nuttig, maar ze zijn
        vooral bedoeld om patiënten te classificeren en niet om alleen op basis daarvan de diagnose te stellen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Belangrijkste classificatiecriteria voor GCA
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Criterium
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Punten
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Leeftijd ≥50 jaar</td>
              <td className="px-4 py-3 align-top">verplicht</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Ochtendstijfheid in schouders/nek
              </td>
              <td className="px-4 py-3 align-top">+2</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Plots visusverlies</td>
              <td className="px-4 py-3 align-top">+3</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Kaak- of tongclaudicatio
              </td>
              <td className="px-4 py-3 align-top">+2</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Nieuwe temporale hoofdpijn
              </td>
              <td className="px-4 py-3 align-top">+2</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Scalp tenderness</td>
              <td className="px-4 py-3 align-top">+2</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Afwijkend onderzoek van de arteria temporalis
              </td>
              <td className="px-4 py-3 align-top">+2</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">ESR/CRP verhoogd</td>
              <td className="px-4 py-3 align-top">+3</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Positieve temporale-arteriebiopsie of halo sign op echo
              </td>
              <td className="px-4 py-3 align-top">+5</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Bilaterale axillaire betrokkenheid
              </td>
              <td className="px-4 py-3 align-top">+2</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                FDG-PET-activiteit in de aorta
              </td>
              <td className="px-4 py-3 align-top">+2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Een totaalscore van ≥6 past bij GCA.</p>
      <p>
        Bij een patiënt met een sterke klinische verdenking, zeker als er visusverlies is, wacht je niet af tot alle
        aanvullende onderzoeken klaar zijn. Je probeert wel zo snel mogelijk beeldvorming of een biopt te regelen om de
        diagnose te bevestigen.
      </p>
    </div>
  )
}
