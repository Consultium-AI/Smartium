import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De aangevraagde onderzoeken zijn:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`bloedbeeld`}</Inline></p>
    </div>
  )
}
