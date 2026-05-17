export default function Sect07ScoresVoorRisicostratificatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Scores voor risicostratificatie</h2>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Glasgow-Blatchford Score</h3>
      <p>
        De Glasgow-Blatchford Score (GBS) is een klinische risicoscore voor patiënten met een vermoeden van een acute
        hoge GI-bloeding. Het doel is te voorspellen of een patiënt een medische interventie nodig heeft, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bloedtransfusie;</li>
        <li>endoscopische behandeling;</li>
        <li>chirurgische interventie.</li>
      </ul>
      <p>
        Een belangrijk kenmerk is dat de score vóór endoscopie berekend kan worden, omdat alleen klinische en
        laboratoriumgegevens nodig zijn. De score is gebaseerd op:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>laboratoriumparameters, zoals ureum en hemoglobine;</li>
        <li>vitale parameters, zoals systolische bloeddruk en hartfrequentie;</li>
        <li>klinische kenmerken, zoals melena, syncope, leverziekte en hartfalen.</li>
      </ul>
      <p>
        Hoe hoger de score, hoe groter de kans dat interventie nodig is. Patiënten met een Blatchford-score van 0–1
        kunnen vaak veilig poliklinisch worden vervolgd, zonder directe endoscopie.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Rockall-score</h3>
      <p>
        De Rockall-score wordt gebruikt om het risico op mortaliteit en recidiefbloeding bij patiënten met een hoge
        GI-bloeding te voorspellen. Deze score bestaat uit twee delen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          klinische Rockall-score: vóór endoscopie, op basis van leeftijd, hemodynamische toestand en comorbiditeit;
        </li>
        <li>
          complete Rockall-score: na endoscopie, waarbij ook endoscopische diagnose en tekenen van recente bloeding
          worden toegevoegd.
        </li>
      </ul>
      <p>
        De Rockall-score geeft daardoor een goede prognostische inschatting. Hoe hoger de score, hoe groter de kans op
        recidiefbloeding en mortaliteit.
      </p>

      <p>
        Aandacht-vraagje: Waarom is de Blatchford-score handig vóór endoscopie?&nbsp;&nbsp;Mini-antwoord: Omdat je hem kunt
        berekenen met klinische en laboratoriumgegevens, nog vóórdat een scopie is verricht.
      </p>
    </div>
  )
}
