import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Bij verdenking op neuroblastoom wordt gericht aanvullend onderzoek gedaan.`}</Inline>
      </p>

      <SubHeading level={2}>Eerste onderzoeken</SubHeading>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**Nierfunctie**: om te beoordelen of er sprake is van nierbetrokkenheid of invloed op de nierfunctie.`}</Inline>
        </li>
        <li>
          <Inline>{`**Echo van de buik**: eerste beeldvormende stap om de massa in beeld te brengen.`}</Inline>
        </li>
        <li>
          <Inline>{`**Urinecatecholamines**: belangrijk extra onderzoek bij neuroblastoom.`}</Inline>
        </li>
      </ul>

      <SubHeading level={2}>Nucleaire diagnostiek</SubHeading>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**MIBG-scan**: hiermee kunnen neuroblastoom en uitzaaiingen zichtbaar worden.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Daarnaast werd genoemd:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**DMSA-scan**: voor nierfunctie in beeld`}</Inline></li>
        <li><Inline>{`**Dotatatscan**: voor neuro-endocriene tumoren`}</Inline></li>
        <li><Inline>{`**PET-scan**: om tumor en eventuele uitzaaiingen zichtbaar te maken`}</Inline></li>
      </ul>

      <SubHeading level={2}>Aanvullende onderzoeken</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Verder is het zinvol om ook te doen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**bloedbeeld**: omdat er beenmerginfiltratie kan zijn`}</Inline></li>
        <li><Inline>{`**X-thorax**: om uitzaaiingen op te sporen`}</Inline></li>
        <li><Inline>{`**echocardiogram**: voordat bepaalde medicamenten worden gegeven`}</Inline></li>
      </ul>

      <SubHeading level={2}>Uitslagen bij Tom</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij Tom worden de volgende afwijkingen gevonden:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`anemie`}</Inline></li>
        <li><Inline>{`trombopenie`}</Inline></li>
        <li><Inline>{`massa uitgaand van de linker bijnier op echo`}</Inline></li>
        <li><Inline>{`bevestiging op MRI`}</Inline></li>
        <li><Inline>{`sterk positieve urinecatecholamines`}</Inline></li>
        <li><Inline>{`MIBG-uitzaaiingen in beenmerg en bot`}</Inline></li>
        <li><Inline>{`tumorcellen in het beenmerg`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Dit past bij een **hoog-risico neuroblastoom**.`}</Inline>
      </p>
    </div>
  )
}
