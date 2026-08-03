import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`indicaties voor longtransplantatie benoemen.`}</Inline></li>
        <li><Inline>{`het doel van een longtransplantatie benoemen.`}</Inline></li>
        <li><Inline>{`veelvoorkomende problemen en complicaties van longtransplantatie benoemen.`}</Inline></li>
        <li><Inline>{`uitleggen dat longtransplantatie een multidisciplinair en uitdagend specialisme is, met zowel acute als chronische zorg.`}</Inline></li>
      </ul>
    </div>
  )
}
