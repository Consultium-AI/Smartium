import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Surveillancecoloscopie`}</Inline></SubHeading>
      <PBody text={`Sommige poliepen geven een verhoogd risico op het opnieuw ontwikkelen van poliepen. Daarom is na verwijdering soms een **surveillancecoloscopie** nodig. Het moment waarop die volgende coloscopie plaatsvindt, hangt af van:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **grootte** van de poliep;`}</Inline></li>
        <li><Inline>{`de **locatie** in het colon;`}</Inline></li>
        <li><Inline>{`de **PA-uitslag**.`}</Inline></li>
      </ul>
      <PBody text={`Een voorbeeld uit de module laat zien dat een **gesteeld adenoom van 11 mm** dat radicaal is verwijderd, leidt tot een volgende surveillancecoloscopie na **5 jaar**.`} />
    </div>
  )
}
