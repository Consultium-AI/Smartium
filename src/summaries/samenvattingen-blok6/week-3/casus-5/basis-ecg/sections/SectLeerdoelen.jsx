import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze e-module kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`begrijpen hoe het elektrocardiogram ontstaat en wat de verschillende golven en afleidingen betekenen;`}</Inline></li>
        <li><Inline>{`zelfstandig volgens een stappenplan een ECG beschrijven.`}</Inline></li>
      </ul>
    </div>
  )
}
