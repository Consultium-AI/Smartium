import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zwangerschap en placentacirculatie`}</Inline></SubHeading>
      <PBody text={`Tijdens de zwangerschap moet het lichaam van de moeder zich sterk aanpassen. Het bloedvolume neemt met ongeveer **50%** toe en er ontstaat **hemodilutie**. Ook de **cardiac output** stijgt met ongeveer **50%**. Daarnaast wordt de zwangere **prothrombogeen**: de bloedstolling is meer gericht op het beperken van bloedverlies bij de bevalling.`} />
      <PBody text={`De placentaire circulatie is in de tweede helft van de zwangerschap van groot belang. De moeder brengt dan ongeveer **750–1000 ml bloed per minuut** naar de uterus, wat ongeveer **15% van de cardiac output** is. Via de maternale zijde van de placenta vindt uitwisseling plaats van zuurstof en voedingsstoffen tegen koolstofdioxide en afvalstoffen. De foetus stuurt bloed via de **navelstrengarteriën** naar de placenta en krijgt zuurstofrijk bloed terug via de **navelstrengvene**.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is de moeder zo belangrijk voor de foetus?**
Omdat de foetus, zolang hij nog niet volledig geboren is, volledig afhankelijk is van maternale perfusie en een goed werkende navelstreng- en placentacirculatie.`} />
    </div>
  )
}
