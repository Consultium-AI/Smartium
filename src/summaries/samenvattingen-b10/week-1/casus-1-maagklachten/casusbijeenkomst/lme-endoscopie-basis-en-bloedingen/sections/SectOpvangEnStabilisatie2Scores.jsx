export default function SectOpvangEnStabilisatie2Scores() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="text-center space-y-1 mb-8">
        <p className="text-sm uppercase tracking-wide text-primary-900 dark:text-primary-300 font-medium">Verdiepende informatie</p>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">OPVANG EN STABILISATIE (2)</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Glasgow-Blatchford Score (GBS)</h3>
          <p>
            De Glasgow-Blatchford Score (GBS) is een klinische risicoscore die wordt gebruikt bij patiënten met een verdenking op een acute hoge gastro-intestinale bloeding.
          </p>
          <p>Het doel van deze score is om te voorspellen of een patiënt een medische interventie nodig zal hebben, zoals:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>bloedtransfusie;</li>
            <li>endoscopische behandeling;</li>
            <li>chirurgische interventie.</li>
          </ul>
          <p>
            Een belangrijk kenmerk van de Blatchford-score is dat deze kan worden berekend vóórdat een endoscopie is verricht, omdat alleen klinische en laboratoriumgegevens worden gebruikt.
          </p>
          <p>De score is gebaseerd op:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Laboratoriumparameters</strong> ureum, hemoglobine
            </li>
            <li>
              <strong>Vitale parameters</strong> systolische bloeddruk, hartfrequentie
            </li>
            <li>
              <strong>Klinische kenmerken</strong> melena, syncope, leverziekte, hartfalen
            </li>
          </ul>
          <p>Hoe hoger de score, hoe groter de kans dat een patiënt een interventie nodig heeft.</p>
          <p>
            Volgens de richtlijn kunnen patiënten met een{' '}
            <strong>Blatchford-score van 0–1 vaak veilig poliklinisch worden vervolgd</strong>, zonder directe endoscopie.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Rockall-score</h3>
          <p>
            De Rockall-score wordt gebruikt om het risico op mortaliteit en recidiefbloeding bij patiënten met een hoge gastro-intestinale bloeding te voorspellen.
          </p>
          <p>Deze score bestaat uit twee onderdelen:</p>
          <ul className="list-disc pl-6 space-y-6">
            <li>
              <p className="font-semibold">Klinische Rockall-score (pre-endoscopisch)</p>
              <p>Dit deel kan al worden berekend vóór endoscopie en bevat:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>leeftijd;</li>
                <li>hemodynamische toestand (shock);</li>
                <li>comorbiditeit.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Complete Rockall-score (post-endoscopisch)</p>
              <p className="mt-2">
                Na endoscopie worden extra factoren toegevoegd: endoscopische diagnose, tekenen van recente bloeding.
              </p>
            </li>
          </ul>
          <p>
            Hierdoor kan de Rockall-score een betere prognostische inschatting geven dan de Blatchford-score.
          </p>
          <p>Een hogere score betekent: grotere kans op recidiefbloeding, hogere mortaliteit.</p>
          <p>
            De Rockall-score wordt daarom vaak gebruikt om te bepalen hoe ernstig ziek een patiënt is en welk niveau van monitoring nodig is.
          </p>
        </section>
      </div>
    </div>
  )
}
