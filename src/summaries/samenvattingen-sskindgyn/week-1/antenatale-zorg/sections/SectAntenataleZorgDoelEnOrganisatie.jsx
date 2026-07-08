import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Antenatale zorg: doel en organisatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Antenatale zorg betekent de zorg tijdens de zwangerschap. Het doel is een zo goed mogelijke uitkomst van de zwangerschap, zowel op korte als op lange termijn. Daarbij is er ook aandacht voor eigen keuzes van de zwangere en voor een zo zorgeloos mogelijk beloop.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In Nederland worden jaarlijks veel zwangeren begeleid. De zorg wordt vooral geleverd door verloskundigen en gynaecologen. Toch kan vrijwel iedere arts met een zwangere patiënt te maken krijgen. Daarom is het belangrijk dat je het normale beloop van een zwangerschap kent en afwijkingen herkent.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De zorg is in Nederland verdeeld in drie lijnen:`}</Inline></p>
      <DataTable rows={[["Lijn", "Wie verleent de zorg?", "Voor wie?"], ["Eerste lijn", "Verloskundige, soms verloskundig actieve huisarts", "Gezonde zwangere zonder pathologie"], ["Tweede lijn", "Gynaecoloog", "Zwangere met medische indicatie of gecompliceerde zwangerschap"], ["Derde lijn", "Perinatologisch centrum", "Zwangere met ernstige pathologie of grote kans op extreme vroeggeboorte"]]} />
      <p className="leading-relaxed"><Inline>{`De verloskundige heeft zelfstandige bevoegdheid voor fysiologische verloskunde en zorg voor de gezonde pasgeborene. Zodra er een vermoeden op pathologie is, moet de zorg worden overgedragen aan of gedeeld worden met de gynaecoloog. In sommige regio’s nemen verloskundig actieve huisartsen deze zorg op zich. Ook bestaan er eerstelijns verloskundige centra in of bij ziekenhuizen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De zwangere kan in overleg kiezen voor een thuisbevalling of een poliklinische bevalling in het ziekenhuis of verloskundig centrum. Het concept van de thuisbevalling staat ter discussie.`}</Inline></p>
    </div>
  )
}
