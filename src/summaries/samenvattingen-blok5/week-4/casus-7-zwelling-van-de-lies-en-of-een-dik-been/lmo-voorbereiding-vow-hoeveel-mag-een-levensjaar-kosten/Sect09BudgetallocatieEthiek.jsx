export default function Sect09BudgetallocatieEthiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Van kosteneffectiviteit naar budgetallocatie</h2>
      <p>
        Met alleen een technische berekening ben je er nog niet. In de praktijk moet de samenleving beslissen hoe het
        beschikbare zorgbudget wordt verdeeld. Daar spelen naast efficiëntie ook ethische uitgangspunten een rol.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Utilitarisme: zoveel mogelijk gezondheidswinst</h3>
      <p>
        Het utilitaristische uitgangspunt is: haal met het beschikbare budget zo veel mogelijk gezondheidswinst. Je kiest dan
        eerst de behandelingen met de beste verhouding tussen kosten en effect.
      </p>
      <p>
        Dat klinkt logisch, maar het kan ertoe leiden dat dure behandelingen voor kleine of ernstig zieke groepen minder snel
        gekozen worden, ook als die patiënten enorm veel baat hebben.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Proportional shortfall: rekening houden met ziektelast</h3>
      <p>
        In Nederland wordt niet alleen gekeken naar efficiëntie, maar ook naar de ernst van de aandoening. Daarvoor gebruikt
        men het begrip proportional shortfall.
      </p>
      <p>Dit laat zien welk deel van iemands verwachte gezonde levensjaren verloren gaat door ziekte.</p>
      <p>De formule is:</p>
      <p className="font-medium text-slate-900 dark:text-slate-100">
        Proportional shortfall = (gezondheid zonder ziekte − gezondheid met ziekte) / gezondheid zonder ziekte
      </p>
      <p>Als iemand zonder ziekte nog 16 QALY zou hebben, maar met ziekte nog slechts 0,4 QALY, dan is:</p>
      <p>(16 − 0,4) / 16 = 0,98 = 98%</p>
      <p>Dat betekent dat bijna alle verwachte gezonde levensjaren verloren gaan. Dat is dus een zeer hoge ziektelast.</p>
      <p>De module koppelt daar Nederlandse drempelwaarden aan:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>lage ziektelast: tot €20.000 per QALY</li>
        <li>middelhoge ziektelast: tot €50.000 per QALY</li>
        <li>hoge ziektelast: tot €80.000 per QALY</li>
      </ul>
      <p>Hoe ernstiger de aandoening, hoe hoger de aanvaardbare prijs per QALY kan zijn.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Fair innings: het idee van een eerlijk aantal levensjaren</h3>
      <p>
        Een derde ethisch principe is fair innings. Dit betekent dat iedereen recht zou hebben op een eerlijk aantal gezonde
        levensjaren. Vanuit die gedachte zouden jongere patiënten soms voorrang kunnen krijgen op ouderen, omdat ouderen al
        meer levensjaren hebben gehad.
      </p>
      <p>
        De module benoemt dit principe wel, maar geeft ook aan dat het in Nederland niet systematisch wordt toegepast.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Ethische principes bij budgetallocatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600/80">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/70">
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Principe</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Centrale gedachte</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Mogelijk gevolg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600/80">
            <tr>
              <td className="px-3 py-2 align-top">Utilitarisme</td>
              <td className="px-3 py-2 align-top">maximale gezondheidswinst</td>
              <td className="px-3 py-2 align-top">kies de meest efficiënte zorg</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Proportional shortfall</td>
              <td className="px-3 py-2 align-top">ernst van ziekte telt mee</td>
              <td className="px-3 py-2 align-top">hogere drempel bij grotere ziektelast</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Fair innings</td>
              <td className="px-3 py-2 align-top">iedereen recht op eerlijk aantal gezonde jaren</td>
              <td className="px-3 py-2 align-top">jongere patiënten soms voorrang</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
