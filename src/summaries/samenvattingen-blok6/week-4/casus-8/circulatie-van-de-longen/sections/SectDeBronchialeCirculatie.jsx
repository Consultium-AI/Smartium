import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De bronchiale circulatie`}</Inline></SubHeading>
      <PBody text={`De bronchiale circulatie is een onderdeel van de **systemische circulatie**. Dat betekent dat deze circulatie hoort bij het algemene bloedvatensysteem van het lichaam. De bronchiale circulatie voorziet de longen zelf van bloed, dus niet de lucht in de longen, maar het **weefsel van de longen**.`} />
      <PBody text={`De belangrijkste vaten zijn de **bronchiale arteriën**. Deze ontspringen meestal uit de **aorta thoracica**. Gewoonlijk zijn er **twee bronchiale arteriën voor de linkerlong** en **één voor de rechterlong**, al kunnen er variaties voorkomen. Vanuit deze arteriën vertakken de vaten verder naar de bronchi, bronchiolen, het bindweefsel en de pleura.`} />
      <PBody text={`De bronchiale arteriën worden steeds kleiner en gaan over in arteriolen en capillairen. Zo komt zuurstofrijk bloed overal in het longweefsel terecht. Daarna wordt het bloed weer afgevoerd via de **bronchiale venen**. Die monden uit in de **pulmonale venen** of in de **azygosvene**, en uiteindelijk komt het bloed weer terug naar het hart.`} />
      <SubHeading><Inline>{`Wat doet de bronchiale circulatie precies?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De bronchiale circulatie heeft drie belangrijke functies:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Zuurstof- en voedingsstofaanvoer**: het longweefsel krijgt de stoffen die het nodig heeft om te blijven functioneren.`}</Inline></li>
        <li><Inline>{`**Afvoer van afvalstoffen**: stofwisselingsproducten worden uit het longweefsel weggevoerd.`}</Inline></li>
        <li><Inline>{`**Warmteregulatie**: de circulatie helpt ook bij het regelen van de temperatuur van het longweefsel.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraag:** Waarom heeft de long zelf bloed nodig als er al lucht in de longen zit?
**Mini-antwoord:** Omdat het longweefsel zelf levend weefsel is en dus zuurstof en voeding nodig heeft om te functioneren.`} />
    </div>
  )
}
