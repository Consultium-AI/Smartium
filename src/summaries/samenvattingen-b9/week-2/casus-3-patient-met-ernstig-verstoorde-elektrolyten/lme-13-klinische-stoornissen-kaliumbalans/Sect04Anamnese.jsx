export default function Sect04Anamnese() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anamnese: waar moet je altijd naar vragen?</h2>
      <p>
        Bij stoornissen in de kaliumbalans is een gerichte anamnese essentieel. Je wilt vooral weten waardoor het kalium te laag of te hoog is geworden, of er sprake is van een nieuw probleem, en of er aanwijzingen zijn voor nierfunctiestoornis of medicatiegebruik.
      </p>
      <p>Belangrijke vragen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Is er sprake van een afnameprobleem? Vraag bijvoorbeeld of het monster hemolytisch was.</li>
        <li>Waarom is het bloedonderzoek gedaan? Was het routine of was er een specifieke reden?</li>
        <li>Zijn er recent nieuwe medicijnen gestart, vooral in de afgelopen 2–3 weken?</li>
        <li>Is de afwijking nieuw of al bekend?</li>
        <li>Heeft de patiënt een bekende of ernstige verminderde nierfunctie?</li>
        <li>Wanneer was de laatste nierfunctiebepaling?</li>
      </ul>
      <p>Daarnaast moet je altijd vragen naar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een moeilijke bloedafname;</li>
        <li>ziekteverschijnselen zoals koorts, diarree of braken;</li>
        <li>klachten zoals spierpijn, spierzwakte en hartkloppingen;</li>
        <li>gebruik van alcohol, drugs, dropparaten of laxantia; dit is vooral relevant bij hypokaliëmie.</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Praktische anamnesepunten</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Vraag</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom belangrijk?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Moeilijke bloedafname of hemolyse?</td>
                <td className="px-4 py-3">Kan pseudohyperkaliëmie verklaren</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Nieuwe medicatie in de afgelopen weken?</td>
                <td className="px-4 py-3">Medicatie is een veelvoorkomende oorzaak</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Koorts, diarree, braken?</td>
                <td className="px-4 py-3">Verlies of ziekte als oorzaak van kaliumstoornis</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Spierzwakte, spierpijn, palpitaties?</td>
                <td className="px-4 py-3">Klinische gevolgen van hypo-/hyperkaliëmie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Alcohol, drugs, laxantia?</td>
                <td className="px-4 py-3">Vooral relevant bij hypokaliëmie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Bekende nierfunctiestoornis?</td>
                <td className="px-4 py-3">Belangrijk bij hyperkaliëmie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
