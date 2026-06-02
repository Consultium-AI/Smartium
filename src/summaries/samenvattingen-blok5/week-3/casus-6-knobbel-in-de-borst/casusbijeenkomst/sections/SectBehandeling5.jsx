import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling:`}</Inline></SubHeading>
      <PBody text={`**leefstijlinterventie** en gewichtsreductie`} />
      <PBody text={`**ambulante compressietherapie**`} />
      <p className="leading-relaxed"><Inline>{`wondbehandeling`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`oefeningen met een **fysiotherapeut** om de voet- en kuitspierpomp beter te gebruiken`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`zo nodig verdere verwijzing voor de onderliggende heupklachten`}</Inline></p>
    </div>
  )
}
