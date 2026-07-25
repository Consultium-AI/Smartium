import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aandachtspunten bij bisfosfonaten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij bisfosfonaatgebruik moet je patiënten goed instrueren. De tablet moet nuchter met een groot glas water worden ingenomen en de patiënt mag daarna het eerste halfuur niet gaan liggen, vanwege irritatie van de slokdarm.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Patiënten moeten ook weten dat zij contact moeten opnemen bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`heuppijn of liespijn, omdat dit kan passen bij een atypische femurfractuur;`}</Inline></li>
        <li><Inline>{`kaakpijn, omdat dit kan wijzen op osteonecrose van de kaak, vooral na tandheelkundige ingrepen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandachtspunt`}</Inline></SubHeading>
      <PBody text={`**Waarom is plotselinge heup- of bovenbeenpijn bij iemand die bisfosfonaten gebruikt belangrijk?**
Omdat dit kan passen bij een atypische femurfractuur, een zeldzame maar belangrijke bijwerking.`} />
    </div>
  )
}
