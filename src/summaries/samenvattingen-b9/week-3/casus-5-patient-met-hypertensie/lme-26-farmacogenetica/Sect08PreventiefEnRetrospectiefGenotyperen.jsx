export default function Sect08PreventiefEnRetrospectiefGenotyperen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Preventieve en retrospectieve genotypering</h2>
      <p>
        Bij preventief genotyperen wordt vooraf getest om de startdosering van geneesmiddelen af te stemmen op het genetisch profiel van een patiënt. Het doel is om het risico op toxiciteit te verkleinen. Deze aanpak wordt vooral gebruikt wanneer het risico op toxiciteit groot is en de veiligheid van de behandeling daardoor beïnvloed kan worden.
      </p>
      <p>Bij retrospectief genotyperen wordt na de start van de behandeling getest, bijvoorbeeld bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>onverwachte bijwerkingen,</li>
        <li>uitblijven van effect,</li>
        <li>onverklaarbaar hoge of lage geneesmiddelspiegels.</li>
      </ul>
      <p>
        Daarbij is het belangrijk om eerst andere oorzaken uit te sluiten, zoals therapieontrouw, voeding of co-medicatie die de werking van het geneesmiddel beïnvloedt.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 4. Preventief versus retrospectief genotyperen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Vorm</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wanneer?</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Doel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Preventief</td>
                <td className="px-4 py-3 align-top">Vóór start van behandeling</td>
                <td className="px-4 py-3 align-top">Startdosering en geneesmiddelkeuze afstemmen op genotype</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Retrospectief</td>
                <td className="px-4 py-3 align-top">Na start van behandeling</td>
                <td className="px-4 py-3 align-top">Verklaring zoeken voor afwijkende respons of bijwerkingen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
