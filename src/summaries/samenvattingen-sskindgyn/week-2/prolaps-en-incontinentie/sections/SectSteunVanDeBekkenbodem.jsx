import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Steun van de bekkenbodem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De bekkenbodem ondersteunt de organen in het kleine bekken, vooral:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de blaas`}</Inline></li>
        <li><Inline>{`de baarmoeder`}</Inline></li>
        <li><Inline>{`het rectum`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Die steun komt van meerdere structuren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **bekkenbodemspieren**`}</Inline></li>
        <li><Inline>{`de **levator ani**`}</Inline></li>
        <li><Inline>{`bindweefselstructuren en ligamenten, zoals de **arcus tendineus** en uteriene banden`}</Inline></li>
      </ul>
      <PBody text={`De **levator ani** bestaat uit:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`puborectalis`}</Inline></li>
        <li><Inline>{`pubococcygeus`}</Inline></li>
        <li><Inline>{`iliococcygeus`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als deze steunstructuren verzwakken, kan een prolaps ontstaan.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke steunstructuren van het kleine bekken`}</Inline></SubHeading>
      <DataTable rows={[["Structuur", "Functie"], ["Bekkenbodemspieren", "Ondersteunen de organen in het kleine bekken"], ["Levator ani", "Belangrijke spiergroep van de bekkenbodem"], ["Ligamenten en bindweefsel", "Geven extra steun aan uterus en vagina"], ["Arcus tendineus", "Onderdeel van de steunstructuren"], ["Uteriene banden", "Helpen de positie van de baarmoeder te behouden"]]} />
    </div>
  )
}
