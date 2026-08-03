import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de pathofysiologie van COPD uitleggen;`}</Inline></li>
        <li><Inline>{`de diagnose COPD stellen;`}</Inline></li>
        <li><Inline>{`een behandelplan opstellen voor een patiënt met COPD;`}</Inline></li>
        <li><Inline>{`een exacerbatie van COPD herkennen en behandelen.`}</Inline></li>
      </ul>
    </div>
  )
}
