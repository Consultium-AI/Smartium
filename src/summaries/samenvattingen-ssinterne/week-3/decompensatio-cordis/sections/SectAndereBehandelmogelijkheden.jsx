import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Andere behandelmogelijkheden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast medicatie en leefstijlaanpassingen zijn er ook andere behandelingen mogelijk, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`pacemakers;`}</Inline></li>
        <li><Inline>{`ICD’s;`}</Inline></li>
        <li><Inline>{`steunharten;`}</Inline></li>
        <li><Inline>{`harttransplantatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als andere behandelingen niet meer voldoende zijn, kan harttransplantatie de ultieme oplossing zijn. Daarvoor is echter een groot tekort aan donororganen, waardoor deze behandeling maar voor een beperkte groep patiënten mogelijk is.`}</Inline></p>
    </div>
  )
}
