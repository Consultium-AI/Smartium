import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen wat de work-up van een pneumonie is;`}</Inline></li>
        <li><Inline>{`de bevindingen van een X-thorax bij pneumonie beschrijven;`}</Inline></li>
        <li><Inline>{`uitleggen dat een simpele griep een gecompliceerd beloop kan hebben;`}</Inline></li>
        <li><Inline>{`de behandelmogelijkheden van pneumonie uitleggen op basis van een CAP severity score, met name de CURB-65 (AMBU-65) score.`}</Inline></li>
      </ul>
    </div>
  )
}
