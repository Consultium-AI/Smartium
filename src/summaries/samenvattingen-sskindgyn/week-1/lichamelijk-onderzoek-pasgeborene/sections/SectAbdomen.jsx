import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Abdomen`}</Inline></SubHeading>
      <PBody text={`Bij de buik palpeer je de organen. De **lever** is bij een pasgeborene vaak **1 tot 2 cm onder de ribbenboog** te voelen. De **milt** is zelden palpabel.`} />
      <PBody text={`De navelstomp is ook belangrijk. Bij een “verse” navelstomp zie je normaal **3 vaten**: **1 vene en 2 arteriën**. Als er **2 vaten** zijn, is er een verhoogde kans op **cardiovasculaire en nierpathologie**.`} />
      <PBody text={`Verder palpeer je de **arteria femoralis**. Dat hoort bij de beoordeling van de circulatie.`} />
    </div>
  )
}
