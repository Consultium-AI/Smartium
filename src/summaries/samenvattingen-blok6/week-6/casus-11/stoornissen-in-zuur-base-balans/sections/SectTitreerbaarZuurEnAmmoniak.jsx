import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Titreerbaar zuur en ammoniak`}</Inline></SubHeading>
      <PBody text={`Het uitgescheiden H⁺ moet in de urine gebufferd worden. Dat gebeurt deels door fosfaat, vooral HPO₄²⁻. Dit heet **titreerbaar zuur**.`} />
      <p className="leading-relaxed"><Inline>{`Maar de hoeveelheid titreerbaar zuur is niet genoeg om alle dagelijkse zuurbelasting kwijt te raken. Dat komt doordat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`er na filtratie en reabsorptie weinig fosfaat overblijft;`}</Inline></li>
        <li><Inline>{`bij neutrale pH al maar ongeveer de helft van het fosfaat in de juiste vorm zit;`}</Inline></li>
        <li><Inline>{`bij pH 4,5 fosfaat nauwelijks nog extra H⁺ kan opnemen.`}</Inline></li>
      </ul>
      <PBody text={`Daarom is er nog een tweede belangrijk mechanisme: uitscheiding via **ammoniak**.`} />
      <PBody text={`Ammoniak wordt in de proximale tubulus gevormd uit glutamine, samen met bicarbonaat. Tijdens de passage door het nefron komt ammoniak weer in het nierinterstitium terecht. Als er in de verzamelbuis H⁺ wordt uitgescheiden, diffundeert NH₃ naar de voorurine en bindt daar H⁺ tot NH₄⁺. Dit heet de **diffusieval van ammoniak**.`} />
      <p className="leading-relaxed"><Inline>{`Omdat NH₃ wél kan diffunderen en NH₄⁺ niet goed terug kan, kan NH₄⁺ zich ophopen in de verzamelbuis.`}</Inline></p>
    </div>
  )
}
