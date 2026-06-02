import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Belangrijke punten:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de beslissing is individueel;`}</Inline></li>
        <li><Inline>{`leeftijd en kwetsbaarheid spelen mee;`}</Inline></li>
        <li><Inline>{`de eigen keuze van de patiënt is belangrijk;`}</Inline></li>
        <li><Inline>{`immunotherapie kan ernstige bijwerkingen geven;`}</Inline></li>
        <li><Inline>{`bij een bestaande auto-immuunziekte is extra voorzichtigheid nodig;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`het is niet gegarandeerd dat patiënten langer leven door adjuvante immunotherapie, ook al daalt het recidiefrisico wel.`}</Inline></p>
    </div>
  )
}
