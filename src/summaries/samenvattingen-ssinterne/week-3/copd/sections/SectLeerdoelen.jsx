import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de pathofysiologie en epidemiologie van COPD kunnen uitleggen;`}</Inline></li>
        <li><Inline>{`COPD kunnen diagnosticeren;`}</Inline></li>
        <li><Inline>{`een passend behandelplan voor een patiënt met COPD kunnen opstellen.`}</Inline></li>
      </ul>
    </div>
  )
}
