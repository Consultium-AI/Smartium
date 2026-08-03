import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Re-integratie en samenwerking`}</Inline></SubHeading>
      <PBody text={`Na zes weken is al een probleemanalyse gemaakt en zijn afspraken opgesteld voor geleidelijke werkhervatting. Als het herstel onvoldoende is, kan de bedrijfsarts informatie opvragen bij de behandelend specialist. In dit geval is dat het beste de **revalidatiearts**.`} />
      <p className="leading-relaxed"><Inline>{`Na een half jaar is er nog onvoldoende herstel en heeft de werkgever geen passend werk. Dan is het belangrijk om informatie gericht op te vragen voor de re-integratie. De bedrijfsarts moet daarvoor toestemming van de patiënt hebben en gerichte vragen stellen over werk en belastbaarheid.`}</Inline></p>
      <PBody text={`Na een jaar ziekte zijn de beperkingen nog aanwezig. Dan is een **arbeidsdeskundig onderzoek** aangewezen om te kijken naar de mogelijkheden voor re-integratie bij de eigen werkgever of elders. De bedrijfsarts werkt in langdurige dossiers vaak samen met de verzekeringsarts van het UWV. De werknemer kan daarnaast ook zelf een onafhankelijk oordeel bij het UWV opvragen.`} />
      <p className="leading-relaxed"><Inline>{`Uiteindelijk wordt bij Karel een tweede spoor ingezet naast het eerste spoor. Dat betekent dat er niet alleen gekeken wordt naar terugkeer bij de eigen werkgever, maar ook naar werk bij een andere werkgever. Na een langdurig traject van revalidatie en stapsgewijze opbouw kan Karel uiteindelijk weer volledig aan het werk.`}</Inline></p>
    </div>
  )
}
