export default function Sect07KlinischeRelevantiePositieveSentinelNode() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische relevantie van een positieve sentinel node</h2>
      <p>
        Een positieve sentinel node betekent dat er uitzaaiing naar de eerste lymfeklier is aangetoond. Dat heeft gevolgen
        voor de verdere begeleiding.
      </p>
      <p>Belangrijk is dat een positieve sentinel node:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de kans op uitgebreidere ziekte groter maakt;</li>
        <li>aanleiding kan geven tot verder stadiëringsonderzoek;</li>
        <li>een rol speelt bij het overwegen van aanvullende behandeling.</li>
      </ul>
      <p>
        Bij een positieve sentinel node kan aanvullend onderzoek, zoals een PET-scan, worden ingezet. Toch is de kans op
        afstandsmetastasen bij een zeer beperkte positiviteit van de sentinel node heel laag. Daarom wordt een PET-scan
        volgens de Nederlandse richtlijn pas verricht vanaf melanoomstadium IIIB.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Betekenis van een positieve sentinel node</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gevolg
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Meer kans op verdere metastasen of lokale recidieven
              </td>
              <td className="px-4 py-3 align-top">De ziekte is biologisch ongunstiger</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Overweging van aanvullend stadiëringsonderzoek
              </td>
              <td className="px-4 py-3 align-top">Bijvoorbeeld een PET-scan</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Mogelijkheid van adjuvante immunotherapie
              </td>
              <td className="px-4 py-3 align-top">Kan de recidiefvrije overleving verlengen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Geen reden voor volledige lymfklierdissectie als standaard
              </td>
              <td className="px-4 py-3 align-top">Dit geeft geen bewezen overlevingswinst en meer morbiditeit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
