import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 6. Belangrijkste DOAC’s`}</Inline></SubHeading>
      <DataTable rows={[["Middel", "Aangrijpingspunt", "Gebruik"], ["Dabigatran", "trombine", "2x per dag"], ["Rivaroxaban", "factor Xa", "1x per dag"], ["Apixaban", "factor Xa", "2x per dag"], ["Edoxaban", "factor Xa", "1x per dag"]]} />
      <p className="leading-relaxed"><Inline>{`De middelen verschillen in halfwaardetijd, renale klaring en interacties, maar in de praktijk is het belangrijkste dat ze voorspelbaar werken.`}</Inline></p>
    </div>
  )
}
