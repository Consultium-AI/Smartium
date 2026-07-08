import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verschillen tussen landen, steden en regio’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nederland scoort in Europa relatief ongunstig. In studies naar perinatale sterfte in Europa bleek Nederland bijna de hoogste perinatale sterfte te hebben. Dat roept de vraag op waarom dat zo is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Mogelijke verklaringen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`terughoudend beleid bij extreem vroeg geboren kinderen;`}</Inline></li>
        <li><Inline>{`meer oudere moeders;`}</Inline></li>
        <li><Inline>{`meer meerlingzwangerschappen;`}</Inline></li>
        <li><Inline>{`meer vrouwen uit etnische minderheden;`}</Inline></li>
        <li><Inline>{`meer roken;`}</Inline></li>
        <li><Inline>{`verschillen in registratie en beleid rond zwangerschapsafbreking.`}</Inline></li>
      </ul>
      <PBody text={`Binnen Nederland bestaan ook duidelijke verschillen tussen steden en regio’s. In grote steden is de perinatale sterfte hoger dan het landelijk gemiddelde. Dat hangt samen met een combinatie van etniciteit en vooral ook **achterstandsproblematiek**.`} />
      <SubHeading><Inline>{`Tabel 4. Verklaringen voor hogere sterfte in steden`}</Inline></SubHeading>
      <DataTable rows={[["Verklaring", "Uitleg"], ["Niet-westerse achtergrond", "kan samenhangen met taal- en sociaal-culturele verschillen"], ["Achterstandswijken", "vaker ongezonde leefstijl en minder goed zorggebruik"]]} />
      <p className="leading-relaxed"><Inline>{`In Rotterdam werd bijvoorbeeld beschreven dat er jaarlijks ongeveer 9000 zwangere vrouwen zijn, met een aanzienlijke groep allochtonen. Daaruit bleek dat perinatale gezondheid niet alleen een etniciteitsprobleem is, maar vooral ook een achterstandsprobleem. In sommige wijken ligt de perinatale sterfte zelfs boven de 20%.`}</Inline></p>
    </div>
  )
}
