export default function Sect05Timing() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Timing: wanneer voer je een lymfeklierdissectie uit?</h2>
      <p>
        De timing zegt iets over het moment in het behandeltraject waarop de ingreep plaatsvindt. Er zijn drie belangrijke
        vormen:
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Prophylactische lymfeklierdissectie</h3>
      <p>
        Deze wordt uitgevoerd zonder dat bekend is of er lymfekliermetastasen zijn. Het idee is dat een bepaalde
        maligniteit vaak naar de lymfeklieren uitzaait, en dat vroeg ingrijpen mogelijk beter is voor de overleving.
        Vroeger was dit vaker een uitgebreide of radicale dissectie. Tegenwoordig is hiervoor in veel situaties de
        schildwachtklierprocedure in de plaats gekomen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Completerende lymfeklierdissectie</h3>
      <p>
        Deze wordt vaak gedaan na een positieve schildwachtklierprocedure of na diagnostische lymfeklierextirpatie. Het
        doel is om, bij bewezen lymfekliermetastasen, eventuele microscopische metastasen in regionale lymfeklieren te
        verwijderen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sentinel node procedure</h3>
      <p>
        Bij deze procedure worden eerst de drainende lymfeklieren uit een bepaalde anatomische regio opgespoord en
        verwijderd. Het is vooral een diagnostische procedure. Als er al duidelijke lymfekliermetastasen zijn, heeft
        deze procedure geen nut als diagnostisch middel, omdat de metastasering dan al bekend is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Timing en betekenis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type ingreep
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Moment/reden
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Doel
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Prophylactische lymfeklierdissectie</td>
              <td className="px-3 py-3 align-top">Zonder bewezen metastasen</td>
              <td className="px-3 py-3 align-top">Voorzorg, op basis van kans op uitzaaiing</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Completerende lymfeklierdissectie</td>
              <td className="px-3 py-3 align-top">Na positieve sentinel node of diagnostische extirpatie</td>
              <td className="px-3 py-3 align-top">Verdachte of microscopische metastasen verwijderen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Sentinel node procedure</td>
              <td className="px-3 py-3 align-top">Bij geen klinische/radiologische aanwijzingen voor metastasen</td>
              <td className="px-3 py-3 align-top">N-status bepalen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Pathologische lymfeklierextirpatie</td>
              <td className="px-3 py-3 align-top">Bij verdenking op lymfoom</td>
              <td className="px-3 py-3 align-top">Volledige histologische beoordeling mogelijk maken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Even checken: wat is het verschil tussen een sentinel node procedure en een completerende dissectie?{`  `}De
        sentinel node procedure is vooral diagnostisch; een completerende dissectie is bedoeld om na bewezen uitzaaiing
        extra aangedane klieren te verwijderen.
      </p>
    </div>
  )
}
