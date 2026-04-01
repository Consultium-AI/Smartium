export default function Sect02WatIsHetTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Chronische nierschade: wat is het?</h2>
      <p>
        Chronische nierschade, vaak afgekort als CNS en internationaal CKD genoemd, betekent dat de nieren langdurige schade hebben. Voor de definitie geldt dat deze nierschade minimaal 3 maanden aanwezig moet zijn. In de praktijk is dat soms lastig exact vast te stellen, omdat je meestal niet weet hoe het “gezonde beginpunt” eruitzag. Toch wordt die tijdsgrens als uitgangspunt gebruikt.
      </p>
      <p>
        Chronische nierschade wordt vooral herkend aan een verminderde nierfunctie, meestal gemeten met de eGFR via de CKD-EPI-formule. Een eGFR onder 60 ml/min is een belangrijke grens. Daarnaast zijn er ook andere criteria die op chronische nierschade wijzen.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. Criteria die passen bij chronische nierschade</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeeld</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Verminderde nierfunctie</td>
              <td className="px-4 py-3">eGFR &lt; 60 ml/min</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Albuminurie</td>
              <td className="px-4 py-3">&gt; 30 mg/dag of &gt; 3 mg/mmol creatinine</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Structurele/histologische afwijkingen</td>
              <td className="px-4 py-3">Afwijkingen aan de nierstructuur of op biopt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Afwijkingen in urinesediment</td>
              <td className="px-4 py-3">Bijvoorbeeld afwijkingen in het sediment</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Tubulusstoornissen met elektrolytstoornissen</td>
              <td className="px-4 py-3">Stoornissen in de tubuli met verstoring van zouten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Niertransplantatie</td>
              <td className="px-4 py-3">Een getransplanteerde nier telt ook mee</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Vaak voldoet iemand aan het eGFR-criterium en/of het albuminuriecriterium. De ernst van chronische nierschade wordt vervolgens beschreven met de G-klassen voor eGFR en de A-klassen voor albuminurie. Zo krijg je een combinatie zoals G4A3.
      </p>
    </div>
  )
}
