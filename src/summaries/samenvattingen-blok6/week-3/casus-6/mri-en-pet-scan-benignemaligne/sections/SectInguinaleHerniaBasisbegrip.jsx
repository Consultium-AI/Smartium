import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inguinale hernia: basisbegrip`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een inguinale hernia is een uitstulping van buikinhoud door een zwakke plek in de buikwand ter hoogte van het lieskanaal. Er zijn twee belangrijke vormen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**mediale of directe liesbreuk**;`}</Inline></li>
        <li><Inline>{`**laterale of indirecte liesbreuk**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Liesbreuken komen vooral voor bij mannen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Directe en indirecte liesbreuk`}</Inline></SubHeading>
      <DataTable rows={[["Type hernia", "Kenmerk"], ["Directe liesbreuk", "Ontstaat door verzwakking van de buikwand, mediaal van de a. epigastrica inferior"], ["Indirecte liesbreuk", "Loopt via het lieskanaal, lateraal van de a. epigastrica inferior"]]} />
      <p className="leading-relaxed"><Inline>{`De a. en v. epigastrica inferior zijn belangrijke anatomische landmarks, ook bij laparoscopische reparatie.`}</Inline></p>
    </div>
  )
}
