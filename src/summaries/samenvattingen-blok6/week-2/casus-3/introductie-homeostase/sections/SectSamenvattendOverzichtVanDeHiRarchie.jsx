import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend overzicht van de hiërarchie`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 5. Voorbeeld van hiërarchie"], ["Hogere prioriteit", "bloed pH"], ["Lagere prioriteit", "PaCO2"]]} />
    </div>
  )
}
