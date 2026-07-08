import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek`}</Inline></SubHeading>
      <PBody text={`De diagnostiek richt zich op tekenen van **dehydratie** en op **ketonurie**. In bloedonderzoek let je op hemoconcentratie; in urine zoek je naar ketonen. Daarnaast wordt echografie gedaan om een **mola-zwangerschap** of **meerlingzwangerschap** uit te sluiten.`} />
      <SubHeading><Inline>{`Tabel 2. Onderzoek bij verdenking op hyperemesis gravidarum`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Waar let je op?"], ["Bloedonderzoek", "Hemoconcentratie en dehydratie"], ["Urineonderzoek", "Ketonurie"], ["Echografie", "Mola-zwangerschap of meerlingzwangerschap uitsluiten"]]} />
    </div>
  )
}
