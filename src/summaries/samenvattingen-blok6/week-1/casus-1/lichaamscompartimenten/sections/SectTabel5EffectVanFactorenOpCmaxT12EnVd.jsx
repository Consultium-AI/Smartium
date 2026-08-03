import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 5. Effect van factoren op Cmax, T1/2 en Vd`}</Inline></SubHeading>
      <DataTable rows={[["Factor", "Cmax", "T1/2", "Vd"], ["Hoge leeftijd", "omhoog", "omhoog", "geen verandering"], ["Obesitas", "omlaag", "omhoog", "omhoog"], ["Geneesmiddeleninteractie", "zowel omhoog als omlaag", "zowel omhoog als omlaag", "geen verandering"]]} />
    </div>
  )
}
