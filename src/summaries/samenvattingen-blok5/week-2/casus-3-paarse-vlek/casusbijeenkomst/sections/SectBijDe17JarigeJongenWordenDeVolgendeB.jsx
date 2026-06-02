import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij de 17-jarige jongen worden de volgende bepalingen bekeken:`}</Inline></SubHeading>
    </div>
  )
}
