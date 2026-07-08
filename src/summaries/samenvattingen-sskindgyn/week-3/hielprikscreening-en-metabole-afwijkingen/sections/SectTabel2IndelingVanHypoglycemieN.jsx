import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Indeling van hypoglycemieën`}</Inline></SubHeading>
      <DataTable rows={[["Type hypoglycemie", "Voorbeelden"], ["Ketotisch", "gluconeogenese-defecten, glycogeenstapelingsziekte, peuterhypoglycemie"], ["Non-ketotisch", "ketogenese-defecten, vetzuuroxidatiestoornissen, hyperinsulinisme"]]} />
    </div>
  )
}
