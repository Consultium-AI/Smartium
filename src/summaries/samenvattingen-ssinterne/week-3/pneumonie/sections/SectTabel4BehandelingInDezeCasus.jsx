import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 4. Behandeling in deze casus`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Behandeling"], ["Ernstige CAP na influenza, verdenking op S. aureus", "Cefuroxim"], ["Ernstig ziek met verdenking influenza", "Oseltamivir"], ["Bevestigde S. aureus-infectie met bacteriëmie", "Flucloxacilline i.v."]]} />
    </div>
  )
}
