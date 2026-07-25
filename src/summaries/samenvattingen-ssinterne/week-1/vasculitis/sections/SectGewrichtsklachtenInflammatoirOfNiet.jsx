import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gewrichtsklachten: inflammatoir of niet?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij gewrichtsklachten is het belangrijk om te bepalen of ze inflammatoir zijn. Inflammatoire gewrichtsklachten herken je aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gezwollen gewrichten;`}</Inline></li>
        <li><Inline>{`ochtendstijfheid langer dan ongeveer 30 tot 45 minuten;`}</Inline></li>
        <li><Inline>{`nachtelijke pijn;`}</Inline></li>
        <li><Inline>{`warme gewrichten;`}</Inline></li>
        <li><Inline>{`verminderde functie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als een patiënt pijnlijke, warme gewrichten heeft en ’s ochtends ongeveer een uur stijf is, classificeer je dit als inflammatoire gewrichtsklachten.`}</Inline></p>
    </div>
  )
}
