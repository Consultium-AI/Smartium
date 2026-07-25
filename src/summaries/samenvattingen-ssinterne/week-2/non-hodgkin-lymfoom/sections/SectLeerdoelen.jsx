import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleg geven over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de klinische verschijnselen van een non-Hodgkin lymfoom;`}</Inline></li>
        <li><Inline>{`de diagnostiek bij een non-Hodgkin lymfoom;`}</Inline></li>
        <li><Inline>{`de stadiëring en classificatie van een non-Hodgkin lymfoom;`}</Inline></li>
        <li><Inline>{`de behandeling van een non-Hodgkin lymfoom.`}</Inline></li>
      </ul>
    </div>
  )
}
