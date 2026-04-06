export default function Sect07NegatievePositieveIKER() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Negatieve IKER</h2>
      <p>Een negatieve IKER komt voor in twee situaties:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>noordwest: duurder en minder effectief</li>
        <li>zuidoost: goedkoper en effectiever</li>
      </ul>
      <p>
        Die twee situaties zijn elkaars tegenovergestelde. Daarom is een negatieve IKER niet automatisch goed of slecht. Je
        moet dus altijd eerst naar de positie in het vlak kijken.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Positieve IKER</h3>
      <p>Een positieve IKER komt voor in:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>noordoost: duurder en effectiever</li>
        <li>zuidwest: goedkoper en minder effectief</li>
      </ul>
      <p>Dan is een drempelwaarde nodig.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">WTP en WTA: hoeveel is een QALY waard?</h3>
      <p>
        In het noordoostkwadrant gebruik je de willingness to pay (WTP). Dat is het bedrag dat men bereid is te betalen voor
        één extra QALY.
      </p>
      <p>
        In het zuidwestkwadrant gebruik je de willingness to accept (WTA). Dat is het bedrag dat nodig is om verlies van
        gezondheid te accepteren in ruil voor kostenbesparing.
      </p>
      <p>
        De module legt uit dat in de praktijk vaak dezelfde drempelwaarde wordt gebruikt, maar dat dit theoretisch niet
        helemaal vanzelfsprekend is. Mensen vinden verlies meestal psychologisch zwaarder wegen dan winst. Daardoor ligt de
        WTA vaak hoger dan de WTP.
      </p>

      <div className="rounded-xl border border-slate-200 dark:border-slate-600/80 bg-slate-50 dark:bg-slate-800/50 p-4 space-y-2">
        <p className="font-medium text-slate-900 dark:text-slate-100">Aandacht-vraag</p>
        <p>Waarom kun je een negatieve IKER niet meteen “goed” noemen?</p>
        <p>
          Mini-antwoord: omdat een negatieve IKER zowel kan horen bij goedkoper en effectiever als bij duurder en minder
          effectief. Het kwadrant bepaalt de betekenis.
        </p>
      </div>
    </div>
  )
}
