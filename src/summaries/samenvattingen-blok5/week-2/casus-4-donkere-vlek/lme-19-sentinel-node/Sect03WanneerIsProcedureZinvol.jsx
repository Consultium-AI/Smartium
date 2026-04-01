export default function Sect03WanneerIsProcedureZinvol() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wanneer is een sentinel node procedure zinvol?</h2>
      <p>
        De indicatie voor een sentinel node procedure hangt vooral samen met de Breslowdikte van het melanoom. De
        Breslowdikte geeft aan hoe dik het melanoom is; hoe dikker het melanoom, hoe groter de kans op uitzaaiing naar de
        schildwachtklier.
      </p>
      <p>
        In de Nederlandse praktijk wordt een sentinel node procedure vooral zinvol geacht vanaf melanoomstadium T2b. De
        kans op een positieve sentinel node ligt bij patiënten met een indicatie voor de procedure gemiddeld tussen 15 en
        30%.
      </p>
      <p>Ook andere factoren vergroten de kans op een positieve schildwachtklier:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een grotere Breslowdikte;</li>
        <li>hogere leeftijd;</li>
        <li>ulceratie in het primaire melanoom;</li>
        <li>onderdrukte immuunstatus.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Wanneer wel en wanneer geen meerwaarde?</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Situatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis voor sentinel node procedure
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Melanoom met indicatie, zonder palpabele lymfeklieren</td>
              <td className="px-4 py-3 align-top">Procedure is van belang om N-status te bepalen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Palpabele lymfeklieren</td>
              <td className="px-4 py-3 align-top">Sentinel node heeft geen meerwaarde</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Aanwijzingen voor locoregionale of afstandsmetastasen</td>
              <td className="px-4 py-3 align-top">Sentinel node heeft geen meerwaarde</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Melanoom vanaf T2b zonder palpabele lymfeklieren</td>
              <td className="px-4 py-3 align-top">Vaak wel geïndiceerd</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij palpabele lymfeklieren is er al duidelijke verdenking op klieruitzaaiingen en is gerichte diagnostiek mogelijk.
        Ook bij bewezen afstandsmetastasen is een sentinel node procedure niet zinvol, omdat de prognose en behandeling
        dan al door de uitgebreidere ziekte worden bepaald.
      </p>
    </div>
  )
}
