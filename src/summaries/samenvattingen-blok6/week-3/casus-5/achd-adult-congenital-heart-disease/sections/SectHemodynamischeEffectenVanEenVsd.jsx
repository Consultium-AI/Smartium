import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemodynamische effecten van een VSD`}</Inline></SubHeading>
      <PBody text={`Na de geboorte daalt de weerstand in de longvaten doordat het kind gaat ademen. Daardoor wordt de druk in de rechter ventrikel lager dan in de linker ventrikel. Als er dan een VSD aanwezig is, stroomt bloed van **links naar rechts**.`} />
      <PBody text={`Bij een groot defect, of meerdere kleinere defecten, is de shunt groot. De linker ventrikel moet dan extra hard werken om genoeg bloed in de systemische circulatie te krijgen. Daardoor gaat de linker ventrikel **dilateren**. Ook het linker atrium en de pulmonale vaten krijgen meer bloed te verwerken en kunnen dilateren. Als de belasting te groot wordt, kan de linker ventrikel in pompfunctie achteruitgaan en ontstaat hartfalen. Door de verhoogde bloedflow door de longen kan ook **pulmonale hypertensie** ontstaan.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Welke kant gaat de shunt bij een VSD op?**
Antwoord: van de **linker ventrikel naar de rechter ventrikel**, omdat de druk links hoger is dan rechts.`} />
    </div>
  )
}
