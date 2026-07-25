import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het resectabel oesophaguscarcinoom is een slokdarmtumor waarvoor nog curatieve behandeling mogelijk is, maar de prognose blijft beperkt. De incidentie neemt toe, vooral door Barrett-oesofagus en daarmee vooral door adenocarcinoom. De eerste klachten zijn meestal passageklachten met gewichtsverlies. Diagnostiek bestaat uit gastroscopie met biopten, endoscopische echografie en vervolgens CT en PET-CT voor stadiëring. Belangrijk is het verschil tussen resectabiliteit van de tumor en operabiliteit van de patiënt. De behandeling wordt altijd multidisciplinair bepaald. Neoadjuvante chemoradiotherapie is standaardzorg en chirurgie blijft de hoeksteen van de behandeling. Definitieve chemoradiotherapie is een curatieve optie bij geselecteerde patiënten. In de toekomst kan betere selectie mogelijk maken dat sommige patiënten een grote operatie kunnen vermijden.`}</Inline></p>
    </div>
  )
}
