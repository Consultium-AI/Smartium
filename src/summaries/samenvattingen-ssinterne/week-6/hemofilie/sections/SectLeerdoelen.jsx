import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je in staat zijn om:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een patiënt met een bloedingsneiging te herkennen;`}</Inline></li>
        <li><Inline>{`de diagnose hemofilie te stellen;`}</Inline></li>
        <li><Inline>{`het principe van de behandeling van patiënten met hemofilie uit te leggen;`}</Inline></li>
        <li><Inline>{`stollingsfactoren te doseren voor een operatie.`}</Inline></li>
      </ul>
    </div>
  )
}
