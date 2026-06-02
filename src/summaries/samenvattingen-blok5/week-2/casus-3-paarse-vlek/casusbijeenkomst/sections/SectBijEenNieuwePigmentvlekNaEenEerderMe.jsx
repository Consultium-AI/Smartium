import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij een nieuwe pigmentvlek na een eerder melanoom moet je onderscheid maken tussen:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een tweede primaire tumor;`}</Inline></li>
        <li><Inline>{`een recidief van het eerdere melanoom;`}</Inline></li>
        <li><Inline>{`of een metastase.`}</Inline></li>
      </ul>
    </div>
  )
}
