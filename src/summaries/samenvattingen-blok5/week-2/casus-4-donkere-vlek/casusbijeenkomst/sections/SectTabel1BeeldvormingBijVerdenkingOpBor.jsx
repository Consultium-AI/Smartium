import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 1. Beeldvorming bij verdenking op borstkanker`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Rol", "Belangrijke beperking/kenmerk"], ["---", "---", "---"], ["Mammografie", "Primaire diagnostiek", "Minder betrouwbaar bij dicht borstweefsel"], ["Echografie", "Aanvullend, ook voor oksel", "Handig bij jonge vrouwen en dense borsten"], ["MRI", "Aanvullend bij moeilijke beoordeling", "Kan extra informatie geven als mammografie beperkt is"]]} />
    </div>
  )
}
