export default function Sect05AllosterischeEnzymkinetiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Allosterische enzymkinetiek</h3>
      <p>
        Bij <strong className="text-slate-900 dark:text-slate-100">allosterische enzymen</strong> is een conformatieverandering nodig om het enzym actief te maken. Zo’n verandering kan ontstaan door een hogere substraatconcentratie of door binding van een <strong className="text-slate-900 dark:text-slate-100">activatormolecuul</strong>. Die binding is niet-covalent: het molecuul bindt dus zonder dat er een covalente binding wordt gevormd.
      </p>
      <p>
        Allosterische enzymen laten vaak een <strong className="text-slate-900 dark:text-slate-100">sigmoidale curve</strong> zien in plaats van een gewone hyperbolische curve. Dat betekent dat het enzym bij lage substraatconcentraties weinig of niet actief is, en pas boven een bepaalde drempel sterk geactiveerd wordt. Ook een <strong className="text-slate-900 dark:text-slate-100">remmermolecuul</strong> kan het enzym inactief houden.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Vergelijking tussen Michaelis-Menten en allosterische kinetiek</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Kenmerk</th>
              <th className="px-4 py-3 font-semibold">Michaelis-Menten</th>
              <th className="px-4 py-3 font-semibold">Allosterisch</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Vorm van de curve</td>
              <td className="px-4 py-3 align-top">hyperbolisch</td>
              <td className="px-4 py-3 align-top">sigmoïdaal</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Activatie</td>
              <td className="px-4 py-3 align-top">vooral door substraatbinding</td>
              <td className="px-4 py-3 align-top">door substraat of activator</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Remming</td>
              <td className="px-4 py-3 align-top">niet centraal in de basisvorm</td>
              <td className="px-4 py-3 align-top">remmer kan enzym inactief houden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Gedrag</td>
              <td className="px-4 py-3 align-top">geleidelijke toename</td>
              <td className="px-4 py-3 align-top">drempelachtig gedrag</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijk voorbeeld is <strong className="text-slate-900 dark:text-slate-100">glycogeen fosforylase</strong>, het enzym dat glycogeen afbreekt tot glucose-1-fosfaat. Dit enzym wordt sterk gereguleerd. <strong className="text-slate-900 dark:text-slate-100">AMP</strong> activeert het enzym. AMP is een signaal dat de energiestatus in de cel laag is. Als AMP stijgt, is dat dus een teken dat de cel energie nodig heeft, en dan is het logisch dat glycogeenafbraak wordt gestimuleerd.
      </p>
      <p>
        ATP en glucose-6-fosfaat remmen glycogeen fosforylase juist. Als glucose-6-fosfaat hoog is, betekent dat dat er al voldoende brandstof in de cel aanwezig is. Dan moet verdere afbraak van glycogeen worden afgeremd.
      </p>
    </div>
  )
}
