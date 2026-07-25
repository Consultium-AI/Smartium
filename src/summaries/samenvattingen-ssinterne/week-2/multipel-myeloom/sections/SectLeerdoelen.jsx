import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleg geven over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de diagnostiek bij multipel myeloom;`}</Inline></li>
        <li><Inline>{`de klinische verschijnselen van multipel myeloom;`}</Inline></li>
        <li><Inline>{`de diagnostische criteria en classificatie van multipel myeloom;`}</Inline></li>
        <li><Inline>{`de behandeling van multipel myeloom en de mogelijke bijwerkingen daarvan.`}</Inline></li>
      </ul>
    </div>
  )
}
