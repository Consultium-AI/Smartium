import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Verschil tussen erysipelas en cellulitis:`}</Inline></SubHeading>
      <PBody text={`**erysipelas**: roodheid is **scherp begrensd**`} />
      <PBody text={`**cellulitis**: roodheid is **onscherp begrensd**`} />
    </div>
  )
}
