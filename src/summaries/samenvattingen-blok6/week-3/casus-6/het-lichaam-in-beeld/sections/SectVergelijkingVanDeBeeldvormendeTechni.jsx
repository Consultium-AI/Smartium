import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vergelijking van de beeldvormende technieken`}</Inline></SubHeading>
      <SubHeading><Inline>{`Tabel 6. Overzicht van de belangrijkste modaliteiten`}</Inline></SubHeading>
      <DataTable rows={[["Techniek", "Werkingsprincipe", "Voordelen", "Nadelen", "Typische toepassingen"], ["Röntgen", "Röntgenstraling", "Snel, goedkoop, breed beschikbaar", "Straling, overlap van structuren", "Botbreuken, longonderzoek"], ["CT", "Röntgenstraling uit veel hoeken", "Snel, veel detail, 3D mogelijk", "Hogere stralingsdosis, contrastbijwerkingen", "Trauma, oncologie, longen, vaten"], ["MRI", "Magneetvelden en radiogolven", "Uitstekend weke delen contrast, geen straling", "Lang, duur, implantaatproblemen", "Hersenen, rug, gewrichten, hart"], ["Echografie", "Geluidsgolven", "Real-time, geen straling, draagbaar", "Operatorafhankelijk, lucht en diepe structuren lastig", "Buik, zwangerschap, hart, pezen"]]} />
    </div>
  )
}
