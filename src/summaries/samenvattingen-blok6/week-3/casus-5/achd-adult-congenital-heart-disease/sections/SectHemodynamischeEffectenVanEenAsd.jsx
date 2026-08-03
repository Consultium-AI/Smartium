import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemodynamische effecten van een ASD`}</Inline></SubHeading>
      <PBody text={`Bij een belangrijke shunt is de druk links hoger dan rechts, waardoor bloed van het **linker atrium naar het rechter atrium** stroomt. De rechter ventrikel moet dit extra bloed verwerken en in de longcirculatie pompen. Daardoor ontstaat **volumeoverbelasting** van de rechter harthelft en gaat de rechter ventrikel dilateren. Ook de pulmonale vaten en het linker atrium kunnen dilateren. Bij langdurige grote volumeoverbelasting kan uiteindelijk **rechterventrikelfalen** en/of **pulmonale hypertensie** ontstaan.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom kan een ASD op latere leeftijd meer klachten geven?**
Antwoord: omdat de shunt door stijgende boezemdruk met de leeftijd groter kan worden.`} />
    </div>
  )
}
