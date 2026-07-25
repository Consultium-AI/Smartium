import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze module moet je kunnen uitleggen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`wat hartfalen inhoudt;`}</Inline></li>
        <li><Inline>{`hoe hartfalen ontstaat;`}</Inline></li>
        <li><Inline>{`wat het verschil is tussen systolisch en diastolisch hartfalen;`}</Inline></li>
        <li><Inline>{`wat de behandelmogelijkheden van hartfalen zijn.`}</Inline></li>
      </ul>
    </div>
  )
}
