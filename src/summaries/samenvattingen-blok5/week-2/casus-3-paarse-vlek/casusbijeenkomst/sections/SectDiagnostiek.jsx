import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Casus 1: welke onderzoeken zijn logisch?`}</Inline></p>
    </div>
  )
}
