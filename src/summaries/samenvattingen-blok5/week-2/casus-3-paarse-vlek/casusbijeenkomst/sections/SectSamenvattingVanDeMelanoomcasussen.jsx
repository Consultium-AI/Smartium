import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Samenvatting van de melanoomcasussen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tweede primaire tumor of recidief?`}</Inline></p>
    </div>
  )
}
