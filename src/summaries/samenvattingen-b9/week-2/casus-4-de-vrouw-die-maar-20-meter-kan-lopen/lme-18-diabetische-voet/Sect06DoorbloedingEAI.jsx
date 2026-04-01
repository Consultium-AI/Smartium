export default function Sect06DoorbloedingEAI() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Doorbloeding en perifere vaatziekten</h2>
      <p>
        Niet alleen neuropathie, maar ook perifeer arterieel vaatlijden speelt een grote rol. Bij perifere arteriële vernauwing is de doorbloeding van de voet verminderd. Dat maakt de wondgenezing slechter en vergroot het risico op ischemie.
      </p>
      <p>
        De module laat zien dat de perifere doorbloeding kan worden beoordeeld met de enkel/arm-index (EAI), ook wel ABI genoemd.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 4. Interpretatie van de enkel/arm-index (EAI)</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">EAI-waarde</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">1,00 – 1,30</td>
                <td className="px-4 py-3">Normale arteriële doorbloeding</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">0,90 – 0,99</td>
                <td className="px-4 py-3">Grensgebied</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">0,70 – 0,89</td>
                <td className="px-4 py-3">Licht PAV</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">0,40 – 0,69</td>
                <td className="px-4 py-3">Matig PAV</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">&lt; 0,40</td>
                <td className="px-4 py-3">Ernstig PAV, kritieke ischemie mogelijk</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">&gt; 1,30</td>
                <td className="px-4 py-3">Niet-compressibele vaten, vaak bij diabetes/nierschade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De EAI is een snelle, betrouwbare en goedkope test die zowel lokale vaatpathologie als algemeen cardiovasculair risico weerspiegelt. Het is ook geschikt voor follow-up. Een belangrijke beperking is dat de test onbetrouwbaar kan zijn bij verkalkte vaten. Bij een EAI boven 1,30 is aanvullend onderzoek nodig, bijvoorbeeld een teen-arm-index.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinische relevantie van de EAI</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>diagnostiek van PAV;</li>
        <li>marker voor gegeneraliseerde atherosclerose;</li>
        <li>lage EAI betekent hoger cardiovasculair risico;</li>
        <li>bruikbaar voor follow-up.</li>
      </ul>
    </div>
  )
}
