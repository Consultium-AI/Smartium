import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Enterohepatische kringloop bij de pasgeborene`}</Inline></SubHeading>
      <PBody text={`Bij pasgeborenen is de **enterohepatische kringloop** vaak verhoogd. Dat betekent dat bilirubine dat eigenlijk via de darm uitgescheiden zou worden, opnieuw wordt opgenomen en terugkeert naar de lever.`} />
      <p className="leading-relaxed"><Inline>{`Dit gebeurt vooral doordat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de darmmotiliteit in de eerste levensdagen nog beperkt is, zeker bij prematuriteit;`}</Inline></li>
        <li><Inline>{`de darmflora nog onvoldoende ontwikkeld is;`}</Inline></li>
        <li><Inline>{`geconjugeerd bilirubine in de darm door **beta-glucuronidase** weer gedeconjugeerd kan worden tot ongeconjugeerd bilirubine;`}</Inline></li>
        <li><Inline>{`dat ongeconjugeerde bilirubine vervolgens opnieuw wordt geresorbeerd.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In de darm wordt geconjugeerd bilirubine normaal onder invloed van bacteriën afgebroken tot urobilinogeen. Als de darmpassage traag is, blijft bilirubine langer aanwezig en wordt meer teruggeresorbeerd.`}</Inline></p>
      <PBody text={`Aandoeningen zoals **Hirschsprung**, **meconiumileus** en **duodenumatresie** geven een vertraagde darmpassage en dus een sterk toegenomen enterohepatische kringloop. Daardoor is de kans op hyperbilirubinemie groter.`} />
    </div>
  )
}
