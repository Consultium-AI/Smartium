import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof ken je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het normale beloop van een zwangerschap`}</Inline></li>
        <li><Inline>{`de normale foetale groei en ontwikkeling`}</Inline></li>
        <li><Inline>{`de controles die tijdens de zwangerschap verricht worden en hoe die helpen om pathologie op te sporen`}</Inline></li>
      </ul>
    </div>
  )
}
