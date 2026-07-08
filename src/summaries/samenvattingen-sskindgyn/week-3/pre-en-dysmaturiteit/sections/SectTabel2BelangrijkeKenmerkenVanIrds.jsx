import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Belangrijke kenmerken van IRDS`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Uitleg"], ["Oorzaak", "surfactanttekort"], ["Gevolg", "hoge oppervlaktespanning en alveolaire collaps"], ["Kliniek", "tachypnoe, intrekkingen, neusvleugelen, zuurstofbehoefte"], ["Behandeling", "CPAP en zo nodig surfactant"]]} />
    </div>
  )
}
