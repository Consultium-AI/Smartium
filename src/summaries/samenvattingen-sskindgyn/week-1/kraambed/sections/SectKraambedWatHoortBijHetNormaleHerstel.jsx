import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kraambed: wat hoort bij het normale herstel?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het kraambed is de periode na de bevalling waarin het lichaam van de vrouw terugkeert naar de niet-zwangere toestand. In deze fase zijn er veel normale veranderingen. Tegelijk moet je alert zijn op complicaties, vooral infecties, problemen met borstvoeding en trombose. De module behandelt daarom vier hoofdonderdelen: fysiologie, infecties, lactatie en trombose.`}</Inline></p>
      <SubHeading><Inline>{`Organisatie van de kraamzorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de bevalling moet de patiënte zelf de kraamzorg regelen. Hoe die zorg eruitziet, hangt af van de verzekering. De uren die in het ziekenhuis worden doorgebracht, worden afgetrokken van het totaal aantal verzekerde uren. Als het kind na de bevalling opgenomen wordt, kan uitgestelde kraamzorg soms mogelijk zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verloskundige komt gemiddeld om de dag in de eerste 10 dagen na de bevalling, en het eerste bezoek is binnen 24 uur. Op de vijfde dag postpartum wordt de hielprik gedaan. Daarbij wordt gescreend op onder andere fenylketonurie, congenitale hypothyreoïdie, adrenogenitaal syndroom, sikkelcelziekte en nog meerdere andere aandoeningen.`}</Inline></p>
    </div>
  )
}
