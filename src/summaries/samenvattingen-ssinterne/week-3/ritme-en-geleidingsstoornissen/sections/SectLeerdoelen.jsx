import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de meest voorkomende ritmestoornissen herkennen;`}</Inline></li>
        <li><Inline>{`geleidingsstoornissen herkennen en naar ernst classificeren;`}</Inline></li>
        <li><Inline>{`de juiste behandeling in gang zetten.`}</Inline></li>
      </ul>
    </div>
  )
}
