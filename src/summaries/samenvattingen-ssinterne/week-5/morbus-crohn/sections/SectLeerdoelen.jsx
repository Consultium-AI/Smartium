import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de diagnostiek van de ziekte van Crohn beschrijven;`}</Inline></li>
        <li><Inline>{`de verschillende vormen van medicatie en de daarbij horende bijwerkingen beschrijven;`}</Inline></li>
        <li><Inline>{`de extra-intestinale verschijnselen en complicaties van de ziekte van Crohn beschrijven;`}</Inline></li>
        <li><Inline>{`de behandelstrategie van de ziekte van Crohn uitleggen.`}</Inline></li>
      </ul>
    </div>
  )
}
