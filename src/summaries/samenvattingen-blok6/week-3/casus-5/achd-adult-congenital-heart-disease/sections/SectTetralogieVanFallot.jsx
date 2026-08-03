import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tetralogie van Fallot`}</Inline></SubHeading>
      <PBody text={`De **tetralogie van Fallot** is de meest voorkomende **cyanotische** aangeboren hartafwijking. De naam zegt het al: er zijn vier anatomische afwijkingen.`} />
      <DataTable rows={[["De vier kenmerken van tetralogie van Fallot", "Uitleg"], ["Pulmonalisstenose", "meestal gecombineerd valvulair en subvalvulair, dus infundibulair"], ["Overrijdende aorta", "de aorta staat deels boven de linker en deels boven de rechter ventrikel"], ["VSD", "ontstaat door malalignment van het outetseptum"], ["Rechterventrikelhypertrofie", "ontstaat als gevolg van de pulmonalisstenose"]]} />
      <PBody text={`De vier afwijkingen zijn eigenlijk het gevolg van één ontwikkelingsstoornis: het **outlet septum** komt tijdens de ontwikkeling meer craniaal en naar voren te liggen. Daardoor ontstaat een VSD, “overrijdt” de aorta het ventrikelseptum en ontstaat vernauwing van de RV-uitstroombaan en de pulmonaalklep. Door de verhoogde druk in de rechter ventrikel ontstaat **rechterventrikelhypertrofie**.`} />
    </div>
  )
}
