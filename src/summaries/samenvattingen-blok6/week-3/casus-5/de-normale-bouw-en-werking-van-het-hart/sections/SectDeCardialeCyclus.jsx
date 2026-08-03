import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De cardiale cyclus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De cardiale cyclus is de opeenvolging van elektrische en mechanische gebeurtenissen tijdens één hartslag. De cyclus bestaat uit systole en diastole.`}</Inline></p>
    </div>
  )
}
