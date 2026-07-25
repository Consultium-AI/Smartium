import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische betekenis van de prognose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De IPI-score geeft een inschatting van de kans op ziektecontrole en overleving. In de casus hoort de patiënte bij de hoog-intermediaire groep, met een 3-jaars progressievrije overleving van ongeveer 60%. Dat laat zien dat stadiëring, LDH, performance status en extranodale betrokkenheid direct invloed hebben op de prognose en dus op de klinische besluitvorming.`}</Inline></p>
    </div>
  )
}
