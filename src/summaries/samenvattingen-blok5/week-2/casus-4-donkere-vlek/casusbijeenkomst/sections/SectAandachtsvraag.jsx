import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <PBody text={`**Waarom is een pijnloze knobbel verdacht?**
**Kort antwoord:** omdat borstkanker vaak niet pijnlijk is. Pijn sluit een maligniteit dus niet uit.`} />
    </div>
  )
}
