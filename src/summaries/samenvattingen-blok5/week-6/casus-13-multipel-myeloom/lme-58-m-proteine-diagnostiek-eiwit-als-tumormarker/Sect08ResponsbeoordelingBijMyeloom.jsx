export default function Sect08ResponsbeoordelingBijMyeloom() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Responsbeoordeling bij myeloom</h2>
      <p>
        De respons op behandeling wordt beoordeeld met categorieën zoals sCR, CR, VGPR en PR.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Responscategorieën in het kort</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Respons
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">sCR</td>
              <td className="px-4 py-3 align-top">
                CR + normale FLC-ratio + geen klonale cellen in beenmergbiopt via IHC
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CR</td>
              <td className="px-4 py-3 align-top">
                Geen M-proteïne meer in serum en urine, verdwijning van eventuele soft tissue plasmacytomen, en{' '}
                {`< 5% plasmacellen in het beenmergaspiraat`}
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">VGPR</td>
              <td className="px-4 py-3 align-top">
                M-proteïne wel nog aantoonbaar in serum/urine, maar niet op elektroforese, of ≥ 90% daling van serum
                M-proteïne
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PR</td>
              <td className="px-4 py-3 align-top">
                ≥ 50% daling van serum M-proteïne, en verdere dalingen volgens de criteria
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij CR hoort dus een negatieve immunofixatie in serum en urine.{'  '}
        Bij VGPR is het M-proteïne nog wel aanwezig, maar sterk afgenomen of alleen nog detecteerbaar met gevoeliger
        technieken.{'  '}
        Bij PR is er wel duidelijk respons, maar nog geen diepe respons zoals bij VGPR, CR of sCR.
      </p>
      <p>
        Belangrijk is dat je met alleen bloedonderzoek niet altijd definitief kunt zeggen of iemand VGPR of CR/sCR heeft.
        Daarvoor is aanvullend beenmergonderzoek nodig.
      </p>
    </div>
  )
}
