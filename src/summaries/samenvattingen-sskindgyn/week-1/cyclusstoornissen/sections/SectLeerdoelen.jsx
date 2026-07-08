import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doorlopen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleg geven over de onderdelen van de cyclusanamnese;`}</Inline></li>
        <li><Inline>{`uitleg geven over verschillende hormonale niveaus en anatomische oorzaken van cyclusstoornissen;`}</Inline></li>
        <li><Inline>{`diagnostiek inzetten bij cyclusstoornissen;`}</Inline></li>
        <li><Inline>{`verschillende vormen van cyclusstoornissen behandelen.`}</Inline></li>
      </ul>
    </div>
  )
}
