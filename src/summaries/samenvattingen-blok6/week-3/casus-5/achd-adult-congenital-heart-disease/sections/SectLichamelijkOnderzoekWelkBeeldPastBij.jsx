import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek: welk beeld past bij welke afwijking?`}</Inline></SubHeading>
      <DataTable rows={[["Bevinding bij lichamelijk onderzoek", "Meest passende diagnose"], ["Luid precordiaal souffle", "VSD"], ["Zwakke liespulsaties", "coarctatie"], ["Cyanose", "tetralogie van Fallot"], ["Geen afwijkingen bij lichamelijk onderzoek", "ASD"]]} />
    </div>
  )
}
