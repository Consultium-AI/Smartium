import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mitralisstenose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De mitralisklep is vernauwd. Daardoor komt minder bloed in de linkerventrikel en daalt de preload.`}</Inline></p>
    </div>
  )
}
