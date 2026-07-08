import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe vaak komt kindermishandeling voor?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kindermishandeling komt vaker voor dan je misschien denkt. Jaarlijks worden in Nederland naar schatting 107.200 tot 160.000 kinderen mishandeld, ongeveer 3 op de 100 kinderen. Slechts een deel daarvan wordt aangemeld bij instanties. Ernstige mishandeling komt ook voor bij jonge kinderen, en seksueel misbruik is eveneens een belangrijk probleem. De mortaliteit wordt geschat op ongeveer 50 kinderen per jaar.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze cijfers laten zien waarom alertheid zo belangrijk is: kindermishandeling is geen zeldzaam probleem.`}</Inline></p>
    </div>
  )
}
