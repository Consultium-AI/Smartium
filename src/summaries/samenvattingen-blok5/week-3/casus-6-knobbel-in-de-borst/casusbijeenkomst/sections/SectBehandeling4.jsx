import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`bij een gewoon hematoom: **rust** en **pijnstilling**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`soms **compressietherapie**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`het hematoom resorbeert meestal vanzelf`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`bij DVT, stollingsstoornis of compartimentsyndroom: overleg met de juiste specialist`}</Inline></p>
    </div>
  )
}
