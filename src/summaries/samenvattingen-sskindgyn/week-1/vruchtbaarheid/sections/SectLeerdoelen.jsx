import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze e-module kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de oorzaken van vruchtbaarheidsstoornissen herkennen;`}</Inline></li>
        <li><Inline>{`diagnostiek bij vruchtbaarheidsstoornissen toepassen;`}</Inline></li>
        <li><Inline>{`op basis van anamnese en onderzoek de prognose op zwangerschap inschatten;`}</Inline></li>
        <li><Inline>{`de verschillende behandelopties voor een subfertiel paar benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
