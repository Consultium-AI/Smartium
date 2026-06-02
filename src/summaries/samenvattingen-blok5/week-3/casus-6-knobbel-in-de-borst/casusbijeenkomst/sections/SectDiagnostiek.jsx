import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Diagnostiek:`}</Inline></SubHeading>
      <PBody text={`**Eerste Lijns beslisregel DVT** met risicoscore`} />
      <p className="leading-relaxed"><Inline>{`eventueel **D-dimeer**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`bij verdenking: **echo van het been**`}</Inline></p>
    </div>
  )
}
