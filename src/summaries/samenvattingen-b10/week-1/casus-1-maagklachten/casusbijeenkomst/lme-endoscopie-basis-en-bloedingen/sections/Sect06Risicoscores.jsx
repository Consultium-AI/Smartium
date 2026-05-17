export default function Sect06Risicoscores() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicoscores</h2>
      <p>
        Risicostratificatie helpt om de urgentie van endoscopie, opname en de kans op recidiefbloeding of mortaliteit in te
        schatten.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Glasgow-Blatchford Score</h3>
        <p className="mt-4">
          De <strong className="text-slate-900 dark:text-slate-100">Glasgow-Blatchford Score (GBS)</strong> wordt gebruikt bij
          patiënten met verdenking op een acute hoge gastro-intestinale bloeding. Het doel is te voorspellen of een patiënt
          een medische interventie nodig zal hebben, zoals:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>bloedtransfusie;</li>
          <li>endoscopische behandeling;</li>
          <li>chirurgische interventie.</li>
        </ul>
        <p className="mt-4">
          De score kan worden berekend <strong className="text-slate-900 dark:text-slate-100">vóór</strong> endoscopie en
          gebruikt alleen klinische en laboratoriumgegevens, waaronder:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>laboratoriumparameters zoals ureum en hemoglobine;</li>
          <li>vitale parameters zoals systolische bloeddruk en hartfrequentie;</li>
          <li>klinische kenmerken zoals melena, syncope, leverziekte en hartfalen.</li>
        </ul>
        <p className="mt-4">
          Hoe hoger de score, hoe groter de kans dat een patiënt een interventie nodig heeft. Patiënten met een{' '}
          <strong className="text-slate-900 dark:text-slate-100">GBS van 0–1</strong> kunnen vaak veilig poliklinisch worden
          vervolgd zonder directe endoscopie.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Rockall-score</h3>
        <p className="mt-4">
          De <strong className="text-slate-900 dark:text-slate-100">Rockall-score</strong> wordt gebruikt om risico op{' '}
          <strong className="text-slate-900 dark:text-slate-100">mortaliteit</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">recidiefbloeding</strong> te voorspellen bij patiënten met
          een hoge gastro-intestinale bloeding.
        </p>
        <p className="mt-4">Deze score heeft twee delen:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">klinische Rockall-score</strong>: vóór endoscopie, met
            leeftijd, hemodynamische toestand en comorbiditeit;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">complete Rockall-score</strong>: na endoscopie, met
            toevoeging van endoscopische diagnose en tekenen van recente bloeding.
          </li>
        </ul>
        <p className="mt-4">
          Een hogere score betekent een grotere kans op recidiefbloeding en hogere mortaliteit. De score helpt ook bij het
          bepalen hoeveel monitoring nodig is.
        </p>
      </div>
    </div>
  )
}
