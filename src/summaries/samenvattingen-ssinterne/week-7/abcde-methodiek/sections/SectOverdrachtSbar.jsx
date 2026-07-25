import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overdracht: SBAR`}</Inline></SubHeading>
      <PBody text={`Voor overdracht gebruik je vaak **SBAR**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Situation`}</Inline></li>
        <li><Inline>{`Background`}</Inline></li>
        <li><Inline>{`Assessment`}</Inline></li>
        <li><Inline>{`Recommendation`}</Inline></li>
      </ul>
    </div>
  )
}
