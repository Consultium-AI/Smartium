import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Atriumseptumdefect (ASD)`}</Inline></SubHeading>
      <PBody text={`Een **ASD** is een defect in het tussenschot tussen de boezems. Ook hier hangt de kliniek af van de grootte van het defect. Kleine ASD’s geven vaak weinig klachten. Grotere ASD’s kunnen leiden tot **inspanningsintolerantie** of **aritmieën**. Grote ASD’s geven volumebelasting van de **rechter ventrikel** en kunnen, net als bij een VSD, al op kinderleeftijd leiden tot hartfalen, failure to thrive en frequente luchtweginfecties. Als het defect niet tijdig wordt gesloten, kunnen op den duur **rechterventrikeldisfunctie** en **pulmonale hypertensie** ontstaan.`} />
      <PBody text={`Soms wordt een ASD pas op latere leeftijd ontdekt. Een klein ASD geeft aanvankelijk weinig volumebelasting, maar met het ouder worden neemt de compliantie van de boezems af. Daardoor kan de boezemdruk stijgen en kan de shunt groter worden. Ook kan een **cryptogene stroke** optreden: een veneuze trombus kan via het ASD van de rechter naar de linker boezem oversteken en zo in de systemische circulatie terechtkomen.`} />
    </div>
  )
}
