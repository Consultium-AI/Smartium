import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`interstitiële longziekten classificeren`}</Inline></li>
        <li><Inline>{`de verschillende oorzaken van ILD benoemen`}</Inline></li>
        <li><Inline>{`de pathofysiologie van inflammatie en fibrose in de longen uitleggen`}</Inline></li>
        <li><Inline>{`diagnostische mogelijkheden bij ILD benoemen`}</Inline></li>
        <li><Inline>{`het belang van een multidisciplinaire aanpak bij diagnostiek en behandeling van ILD uitleggen`}</Inline></li>
      </ul>
    </div>
  )
}
