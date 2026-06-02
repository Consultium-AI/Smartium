import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling hangt af van:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`de **stadiëring**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`het **histologische type**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`de uitgebreidheid van de ziekte`}</Inline></p>
    </div>
  )
}
