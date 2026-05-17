export default function Sect07MonitoringVanDiabetes () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Monitoring van diabetes mellitus type 1
      </h2>
      <p>
        Monitoring betekent dat je de diabetes volgt in de tijd. Daarbij kijk je naar zowel korte als lange termijn.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Glucose meten</h3>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">bloedglucoseconcentratie</strong> geeft informatie over de korte termijn. Die wordt vooral gebruikt door mensen die afhankelijk zijn van insuline, bijvoorbeeld om te bepalen hoeveel insuline zij voor een maaltijd nodig hebben.
      </p>
      <p>
        Dat kan met een <strong className="text-slate-900 dark:text-slate-100">vingerprik</strong> of met een{' '}
        <strong className="text-slate-900 dark:text-slate-100">glucosesensor</strong>. Een sensor wordt vaak eens per 14 dagen
        aangebracht en kan de glucosewaarde doorgeven via scannen met een lezer of smartphone, of continu zonder scannen.
      </p>
      <p>
        Een sensor heeft extra waarde bij patiënten die veel moeten meten of waarbij frequente beoordeling nuttig is, bijvoorbeeld:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bij mensen die meerdere keren per dag insuline spuiten;</li>
        <li>bij patiënten met frequente hypoglykemieën;</li>
        <li>bij een verhoogd HbA1c;</li>
        <li>bij mensen die hypo’s minder goed voelen;</li>
        <li>bij kinderen en zwangere vrouwen.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">HbA1c in de follow-up</h3>
      <p>
        Bij DM-1 wordt meestal <strong className="text-slate-900 dark:text-slate-100">3 tot 4 keer per jaar</strong> bloed
        afgenomen om naast de glucose ook HbA1c te bepalen. Zo krijg je een beeld van de langere termijnregulatie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Streefwaarden voor HbA1c</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Patiëntengroep</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Streef-HbA1c</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">&lt; 70 jaar</td>
              <td className="p-3 align-top">&lt; 53 mmol/mol</td>
            </tr>
            <tr>
              <td className="p-3 align-top">≥ 70 jaar, ziekteduur &lt; 10 jaar</td>
              <td className="p-3 align-top">54-58 mmol/mol</td>
            </tr>
            <tr>
              <td className="p-3 align-top">≥ 70 jaar, ziekteduur ≥ 10 jaar</td>
              <td className="p-3 align-top">54-64 mmol/mol</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Kwetsbare ouderen met korte levensverwachting (&lt; 5 jaar)</td>
              <td className="p-3 align-top">&lt; 69 mmol/mol</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij oudere patiënten zijn hogere HbA1c-streefwaarden acceptabel. De belangrijkste redenen daarvoor zijn dat strikte glucosecontrole in deze groep vaker tot hypoglykemieën leidt en dat de gezondheidswinst van heel strakke regulatie minder groot is. Ook spelen mortaliteit en kwetsbaarheid een rol.
      </p>
    </div>
  )
}
