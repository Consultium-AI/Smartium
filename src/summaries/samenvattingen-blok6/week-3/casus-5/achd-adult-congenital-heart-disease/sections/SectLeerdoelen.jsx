import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de meest voorkomende aangeboren hartafwijkingen benoemen en herkennen;`}</Inline></li>
        <li><Inline>{`de hemodynamische effecten van deze afwijkingen beschrijven;`}</Inline></li>
        <li><Inline>{`de gebruikelijke behandeling van deze aandoeningen beschrijven;`}</Inline></li>
        <li><Inline>{`de meest voorkomende lange termijn complicaties bij deze afwijkingen benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}
