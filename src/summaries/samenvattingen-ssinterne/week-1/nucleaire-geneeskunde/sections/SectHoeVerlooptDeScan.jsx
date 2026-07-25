import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe verloopt de scan?`}</Inline></SubHeading>
      <PBody text={`FDG wordt gedoseerd op basis van **gewichtsklasse**. Na toediening wacht de patiënt ongeveer **60 minuten** in een warme wachtkamer en beweegt zo min mogelijk. Daarna volgt de scan.`} />
      <PBody text={`Eerst wordt een **lage-dosis blanco CT** gemaakt voor attenuatiecorrectie en anatomische correlatie. Daarna volgt de **PET-scan**.`} />
      <PBody text={`Het standaard scangebied loopt meestal van de **schedelbasis tot de liezen**. Op indicatie kan het hele lichaam worden afgebeeld, bijvoorbeeld bij een melanoom op de voet. De scan duurt ongeveer **20 tot 45 minuten**, afhankelijk van hoeveel er wordt gescand.`} />
      <PBody text={`Omdat een scanner maar een beperkte lengte heeft, worden meerdere **bedposities** gebruikt. Die overlappen elkaar om overgangsartefacten te voorkomen. Bij de eerste en laatste positie zie je vaak meer stippen; dat is **ruis**.`} />
      <PBody text={`Soms volgt na de PET nog een **diagnostische CT**, met of zonder contrast.`} />
    </div>
  )
}
