import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waar let je op bij dosisplanning?**
**Kort antwoord:** op een goede dosis in het doelgebied en een zo laag mogelijke dosis in omliggende kritieke organen.`} />
    </div>
  )
}
