export default function Sect14TypenVonWillebrand() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Verschillende typen Von Willebrandziekte</h2>
      <p>Er zijn meerdere typen Von Willebrandziekte.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Typen Von Willebrandziekte</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Overerving / ernst
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type 1</td>
              <td className="px-4 py-3 align-top">Relatief VWF-tekort door verminderde aanmaak of verhoogde klaring</td>
              <td className="px-4 py-3 align-top">70–80% VWF, lichte toename bloedingsrisico, autosomaal dominant</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type 2</td>
              <td className="px-4 py-3 align-top">Kwalitatieve afwijking van VWF</td>
              <td className="px-4 py-3 align-top">
                Ongeveer 20% VWF, afwijkende functie, ernstiger bloedingen dan type 1, meestal autosomaal dominant
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type 3</td>
              <td className="px-4 py-3 align-top">Absoluut VWF-tekort</td>
              <td className="px-4 py-3 align-top">&lt;1% VWF, afwezig, sterk verhoogd bloedingsrisico, autosomaal recessief</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Binnen type 2 zijn nog subtypen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>2A: kortere multimeren door afname van hoogmoleculairgewicht multimeren;</li>
        <li>
          2B: gain-of-function-mutatie, meer gevoeligheid voor GPIb-binding aan trombocyten, met trombocytopenie;
        </li>
        <li>2M: verminderde binding aan plaatjes of collageen;</li>
        <li>2N: verminderde binding aan FVIII.</li>
      </ul>
      <p>Bij Von Willebrandziekte verschillen de bloedingssymptomen per type. Vooral passen klachten als:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>neusbloeding;</li>
        <li>huidbloeding;</li>
        <li>bloedingen uit wondjes;</li>
        <li>bloeding in de mondholte;</li>
        <li>maag-darmbloedingen;</li>
        <li>bloeding na tandextractie;</li>
        <li>bloeding na operatie;</li>
        <li>overvloedige menstruatie;</li>
        <li>bloeding na bevalling;</li>
        <li>spierbloeding;</li>
        <li>gewrichtsbloeding;</li>
        <li>soms centrale zenuwstelselbloeding.</li>
      </ul>
      <p>
        Bij hemofilie zie je juist vaker gewrichts- en spierbloedingen, terwijl Von Willebrandziekte meer
        slijmvliesbloedingen geeft.
      </p>
    </div>
  )
}
