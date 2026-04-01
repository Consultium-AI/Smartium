export default function Sect11DiagnostiekRadiologisch() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek van een pneumonie</h2>
      <p>
        De diagnose pneumonie wordt meestal vermoed op basis van klachten en lichamelijk onderzoek, en vervolgens bevestigd met aanvullend onderzoek. Radiologische beeldvorming van de longen is daarbij vaak het belangrijkste eerste onderzoek.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Radiologische patronen</h3>
      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Radiologische patronen van pneumonie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Patroon</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerken</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Vaak geassocieerde verwekkers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Lobaire pneumonie</td>
                <td className="px-4 py-3 align-top">Gelokaliseerde, homogene consolidatie in één longkwab</td>
                <td className="px-4 py-3 align-top">
                  <em>Streptococcus pneumoniae</em>, <em>Klebsiella pneumoniae</em>, soms <em>Legionella pneumophila</em>
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Bronchopneumonie</td>
                <td className="px-4 py-3 align-top">Verspreide kleinere verdichtingen, soms nodulaire afwijkingen, vaak meerdere longkwabben</td>
                <td className="px-4 py-3 align-top">
                  <em>Haemophilus influenzae</em>, <em>Moraxella catarrhalis</em>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Interstitiële pneumonie</td>
                <td className="px-4 py-3 align-top">Diffuus verspreide vage, strepige afwijkingen van het interstitium</td>
                <td className="px-4 py-3 align-top">Vaak viraal of “atypisch”</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Een X-thorax is de laagdrempeligste en goedkoopste manier om naar pneumonie te kijken. Soms geeft het patroon al een aanwijzing voor de verwekker. Een CT-thorax kan ook gebruikt worden wanneer meer detail nodig is.
      </p>
    </div>
  )
}
