import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de oorzaken van hypoxemie benoemen;`}</Inline></li>
        <li><Inline>{`uitleggen hoe hypoxemie kan worden vastgesteld;`}</Inline></li>
        <li><Inline>{`de verschillende manieren van zuurstoftherapie benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
