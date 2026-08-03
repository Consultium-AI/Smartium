import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenwerking met andere artsen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij langdurig verzuim werkt de bedrijfsarts vaak samen met andere artsen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`met de **huisarts** voor de algemene medische context;`}</Inline></li>
        <li><Inline>{`met de **behandelend specialist** voor diagnose, behandeling en belastbaarheid;`}</Inline></li>
        <li><Inline>{`met de **verzekeringsarts van het UWV** bij de beoordeling richting WIA.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De bedrijfsarts mag informatie opvragen bij de behandelende sector, maar alleen met toestemming van de patiënt en met gerichte vragen die relevant zijn voor werk en functioneren. De specialist mag geen oordeel geven over werkhervatting, maar wel over belastbaarheid.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Aan de werkgever mag de bedrijfsarts wel informatie geven over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`beperkingen en mogelijkheden voor eigen of passend werk;`}</Inline></li>
        <li><Inline>{`de prognose voor werkhervatting.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De bedrijfsarts mag géén diagnosegegevens of details over het behandeltraject delen.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom is die scheiding zo belangrijk?**
Omdat de bedrijfsarts wel moet kunnen adviseren over werk en re-integratie, maar tegelijk de medische privacy van de werknemer moet bewaken.`} />
    </div>
  )
}
